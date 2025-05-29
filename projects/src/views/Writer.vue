<template>
  <div class="editor-container">
    <!-- 工具栏 -->
    <div class="toolbar">
      <button @click="toggleWysiwygMode" class="mode-button">
        {{ isWysiwygMode ? '📝 源码模式' : '✨ 所见即所得' }}
      </button>
    </div>

    <!-- WYSIWYG 编辑器 -->
    <div 
      v-if="isWysiwygMode"
      class="wysiwyg-editor"
      ref="wysiwygRef"
      contenteditable="true"
      @input="onWysiwygInput"
      @keydown="onWysiwygKeydown"
      @paste="onWysiwygPaste"
      v-html="renderedHtml"
    />

    <!-- 源码编辑器 -->
    <textarea
      v-else
      v-model="markdown"
      class="fullscreen-editor"
      ref="editorRef"
      placeholder="开始输入 Markdown..."
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { storage } from '../firebase'
import { ref as storageRef, uploadBytes, getBlob, getDownloadURL } from 'firebase/storage'

const route = useRoute()
const id = route.params.id as string
const markdown = ref('')
const editorRef = ref<HTMLTextAreaElement | null>(null)
const wysiwygRef = ref<HTMLElement | null>(null)
const fileRef = storageRef(storage, `posts/${id}.md`)

// 编辑器状态
const isWysiwygMode = ref(true) // 默认所见即所得模式
const lastSavedText = ref('')
const isUpdatingFromMarkdown = ref(false)

// Markdown 渲染器
const renderedHtml = computed(() => {
  if (!markdown.value) return '<p><br></p>'
  
  let html = markdown.value

  // 代码块
  html = html.replace(/```(\w+)?\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre class="code-block" data-lang="${lang || ''}" contenteditable="false"><code>${escapeHtml(code.trim())}</code></pre>`
  })

  // 行内代码
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code" contenteditable="false">$1</code>')

  // 标题
  html = html.replace(/^#### (.*$)/gim, '<h4 class="markdown-heading">$1</h4>')
  html = html.replace(/^### (.*$)/gim, '<h3 class="markdown-heading">$1</h3>')
  html = html.replace(/^## (.*$)/gim, '<h2 class="markdown-heading">$1</h2>')
  html = html.replace(/^# (.*$)/gim, '<h1 class="markdown-heading">$1</h1>')

  // 粗体和斜体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="markdown-bold">$1</strong>')
  html = html.replace(/\*(.*?)\*/g, '<em class="markdown-italic">$1</em>')

  // 链接
  html = html.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="$2" class="markdown-link" contenteditable="false">$1</a>')

  // 图片
  html = html.replace(/!\[([^\]]*)\]\(([^\)]+)\)/g, '<img src="$2" alt="$1" class="markdown-image" contenteditable="false" />')

  // 无序列表
  html = html.replace(/^[\*\-] (.*$)/gim, '<li class="markdown-list-item">$1</li>')
  
  // 有序列表
  html = html.replace(/^\d+\. (.*$)/gim, '<li class="markdown-ordered-item">$1</li>')

  // 引用
  html = html.replace(/^> (.*$)/gim, '<blockquote class="markdown-quote">$1</blockquote>')

  // 水平线
  html = html.replace(/^---$/gim, '<hr class="markdown-hr" contenteditable="false">')

  // 处理段落
  const lines = html.split('\n')
  const processedLines = []
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim()
    
    if (!line) {
      processedLines.push('<p class="markdown-paragraph"><br></p>')
    } else if (!line.match(/^<(h[1-6]|li|blockquote|hr|pre)/)) {
      processedLines.push(`<p class="markdown-paragraph">${line}</p>`)
    } else {
      processedLines.push(line)
    }
  }

  // 处理列表
  let result = processedLines.join('')
  result = result.replace(/(<li class="markdown-list-item">.*?<\/li>)/gs, '<ul class="markdown-list">$1</ul>')
  result = result.replace(/(<li class="markdown-ordered-item">.*?<\/li>)/gs, '<ol class="markdown-ordered-list">$1</ol>')

  return result || '<p class="markdown-paragraph"><br></p>'
})

// HTML 转义
const escapeHtml = (text: string): string => {
  const div = document.createElement('div')
  div.textContent = text
  return div.innerHTML
}

// 模式切换
const toggleWysiwygMode = () => {
  if (isWysiwygMode.value) {
    // 切换到源码模式前，从 WYSIWYG 更新 markdown
    updateMarkdownFromWysiwyg()
  }
  isWysiwygMode.value = !isWysiwygMode.value
  
  nextTick(() => {
    if (isWysiwygMode.value && wysiwygRef.value) {
      wysiwygRef.value.focus()
    } else if (!isWysiwygMode.value && editorRef.value) {
      editorRef.value.focus()
    }
  })
}

// 从 WYSIWYG 更新 Markdown
const updateMarkdownFromWysiwyg = () => {
  if (!wysiwygRef.value || isUpdatingFromMarkdown.value) return
  
  const element = wysiwygRef.value
  let markdownText = ''
  
  // 简单的 HTML 到 Markdown 转换
  const children = Array.from(element.children)
  
  for (const child of children) {
    const tagName = child.tagName.toLowerCase()
    const text = child.textContent || ''
    
    switch (tagName) {
      case 'h1':
        markdownText += `# ${text}\n\n`
        break
      case 'h2':
        markdownText += `## ${text}\n\n`
        break
      case 'h3':
        markdownText += `### ${text}\n\n`
        break
      case 'h4':
        markdownText += `#### ${text}\n\n`
        break
      case 'blockquote':
        markdownText += `> ${text}\n\n`
        break
      case 'ul':
        const listItems = Array.from(child.children)
        listItems.forEach(li => {
          markdownText += `- ${li.textContent}\n`
        })
        markdownText += '\n'
        break
      case 'ol':
        const orderedItems = Array.from(child.children)
        orderedItems.forEach((li, index) => {
          markdownText += `${index + 1}. ${li.textContent}\n`
        })
        markdownText += '\n'
        break
      case 'pre':
        const code = child.querySelector('code')
        const lang = child.getAttribute('data-lang') || ''
        markdownText += `\`\`\`${lang}\n${code?.textContent || ''}\n\`\`\`\n\n`
        break
      case 'hr':
        markdownText += '---\n\n'
        break
      case 'p':
        if (text.trim()) {
          // 处理段落中的格式
          let paragraphText = child.innerHTML
          paragraphText = paragraphText.replace(/<strong[^>]*>(.*?)<\/strong>/g, '**$1**')
          paragraphText = paragraphText.replace(/<em[^>]*>(.*?)<\/em>/g, '*$1*')
          paragraphText = paragraphText.replace(/<code[^>]*>(.*?)<\/code>/g, '`$1`')
          paragraphText = paragraphText.replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/g, '[$2]($1)')
          paragraphText = paragraphText.replace(/<img[^>]*src="([^"]*)"[^>]*alt="([^"]*)"[^>]*\/?>/g, '![$2]($1)')
          paragraphText = paragraphText.replace(/<[^>]*>/g, '') // 移除其他HTML标签
          markdownText += `${paragraphText}\n\n`
        } else {
          markdownText += '\n'
        }
        break
      default:
        if (text.trim()) {
          markdownText += `${text}\n\n`
        }
    }
  }
  
  markdown.value = markdownText.trim()
}

// WYSIWYG 输入处理
const onWysiwygInput = () => {
  updateMarkdownFromWysiwyg()
}

// WYSIWYG 键盘处理
const onWysiwygKeydown = (e: KeyboardEvent) => {
  // 处理特殊快捷键
  if (e.metaKey || e.ctrlKey) {
    switch (e.key) {
      case 'b':
        e.preventDefault()
        document.execCommand('bold')
        break
      case 'i':
        e.preventDefault()
        document.execCommand('italic')
        break
      case 's':
        e.preventDefault() // 阻止保存
        break
    }
  }
  
  // Enter 键处理
  if (e.key === 'Enter') {
    const selection = window.getSelection()
    if (selection && selection.focusNode) {
      const element = selection.focusNode.parentElement
      if (element && element.tagName.match(/^H[1-6]$/)) {
        e.preventDefault()
        const p = document.createElement('p')
        p.className = 'markdown-paragraph'
        p.innerHTML = '<br>'
        element.parentNode?.insertBefore(p, element.nextSibling)
        
        // 移动光标到新段落
        const range = document.createRange()
        range.setStart(p, 0)
        range.collapse(true)
        selection.removeAllRanges()
        selection.addRange(range)
      }
    }
  }
}

// WYSIWYG 粘贴处理
const onWysiwygPaste = async (e: ClipboardEvent) => {
  if (!e.clipboardData) return

  const items = e.clipboardData.items
  for (const item of items) {
    if (item.type.startsWith('image/')) {
      e.preventDefault()
      const file = item.getAsFile()
      if (!file) return

      const imageRef = storageRef(storage, `images/${Date.now()}-${file.name}`)
      await uploadBytes(imageRef, file)
      const url = await getDownloadURL(imageRef)

      // 在 WYSIWYG 中插入图片
      const img = document.createElement('img')
      img.src = url
      img.alt = 'image'
      img.className = 'markdown-image'
      img.contentEditable = 'false'

      const selection = window.getSelection()
      if (selection && selection.rangeCount > 0) {
        const range = selection.getRangeAt(0)
        range.insertNode(img)
        range.collapse(false)
      }

      updateMarkdownFromWysiwyg()
    }
  }
}

// 防抖函数
const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

// 文件加载
onMounted(async () => {
  try {
    const workerUrl = `https://firebase.heyingdu.com/posts/${id}.md`
    let res = await fetch(workerUrl)

    if (!res.ok) {
      const blob = await getBlob(fileRef)
      const text = await blob.text()
      markdown.value = text
      lastSavedText.value = text
      return
    }

    const text = await res.text()
    markdown.value = text
    lastSavedText.value = text
  } catch {
    markdown.value = ''
    lastSavedText.value = ''
  }
})

// 自动保存
const debouncedUpload = debounce(async (val: string) => {
  if (val !== lastSavedText.value) {
    const fileBlob = new Blob([val], { type: 'text/plain' })
    await uploadBytes(fileRef, fileBlob)
    lastSavedText.value = val
  }
}, 1000)

watch(markdown, (val) => {
  debouncedUpload(val)
})

// 当 markdown 变化时更新 WYSIWYG（仅在源码模式切换到WYSIWYG时）
watch(markdown, () => {
  if (isWysiwygMode.value && wysiwygRef.value) {
    isUpdatingFromMarkdown.value = true
    nextTick(() => {
      isUpdatingFromMarkdown.value = false
    })
  }
})

// 阻止默认保存
onMounted(() => {
  const blockSaveShortcut = (e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 's') {
      e.preventDefault()
      e.stopPropagation()
    }
  }
  window.addEventListener('keydown', blockSaveShortcut)
  onUnmounted(() => {
    window.removeEventListener('keydown', blockSaveShortcut)
  })
})
</script>

<style scoped>
.editor-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
}

.toolbar {
  display: flex;
  gap: 8px;
  padding: 8px 16px;
  background: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  position: sticky;
  top: 0;
  z-index: 10;
}

.mode-button {
  padding: 6px 12px;
  border: 1px solid #dee2e6;
  background: #fff;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.2s;
}

.mode-button:hover {
  background: #e9ecef;
}

.fullscreen-editor {
  width: 100%;
  height: calc(100vh - 60px);
  border: none;
  outline: none;
  resize: none;
  padding: 20px;
  box-sizing: border-box;
  font-family: "Times New Roman", serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: #fff;
  color: #111;
}

.wysiwyg-editor {
  flex: 1;
  padding: 20px;
  outline: none;
  overflow-y: auto;
  font-family: "Times New Roman", serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: #fff;
  color: #111;
  cursor: text;
}

/* Markdown 样式 */
.wysiwyg-editor .markdown-heading {
  font-weight: bold;
  margin: 1em 0 0.5em 0;
  cursor: text;
}

.wysiwyg-editor h1.markdown-heading {
  font-size: 2em;
  border-bottom: 2px solid #eee;
  padding-bottom: 0.3em;
}

.wysiwyg-editor h2.markdown-heading {
  font-size: 1.6em;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.2em;
}

.wysiwyg-editor h3.markdown-heading {
  font-size: 1.3em;
}

.wysiwyg-editor h4.markdown-heading {
  font-size: 1.1em;
}

.wysiwyg-editor .markdown-paragraph {
  margin: 1em 0;
  min-height: 1.6em;
}

.wysiwyg-editor .markdown-bold {
  font-weight: bold;
}

.wysiwyg-editor .markdown-italic {
  font-style: italic;
}

.wysiwyg-editor .inline-code {
  background: #f4f4f4;
  padding: 2px 4px;
  border-radius: 3px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9em;
}

.wysiwyg-editor .code-block {
  background: #f8f8f8;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  padding: 16px;
  margin: 1em 0;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9em;
  white-space: pre-wrap;
}

.wysiwyg-editor .markdown-list,
.wysiwyg-editor .markdown-ordered-list {
  margin: 1em 0;
  padding-left: 2em;
}

.wysiwyg-editor .markdown-list-item,
.wysiwyg-editor .markdown-ordered-item {
  margin: 0.3em 0;
}

.wysiwyg-editor .markdown-quote {
  margin: 1em 0;
  padding: 0 1em;
  border-left: 4px solid #ddd;
  color: #666;
  font-style: italic;
}

.wysiwyg-editor .markdown-link {
  color: #007bff;
  text-decoration: none;
}

.wysiwyg-editor .markdown-link:hover {
  text-decoration: underline;
}

.wysiwyg-editor .markdown-image {
  max-width: 100%;
  height: auto;
  border-radius: 4px;
  margin: 1em 0;
  display: block;
}

.wysiwyg-editor .markdown-hr {
  border: none;
  border-top: 1px solid #eee;
  margin: 2em 0;
}

/* 确保可编辑性 */
.wysiwyg-editor * {
  outline: none;
}

.wysiwyg-editor p:empty:before {
  content: '';
  display: inline-block;
}
</style>