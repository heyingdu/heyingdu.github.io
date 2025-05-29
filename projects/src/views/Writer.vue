<template>
  <textarea
    v-model="markdown"
    class="fullscreen-editor"
    ref="editorRef"
  />
</template>

<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useRoute } from 'vue-router'
import { storage } from '../firebase'
import { ref as storageRef, uploadBytes, getBlob, getDownloadURL } from 'firebase/storage'

const route = useRoute()
const id = route.params.id as string
const markdown = ref('')
const editorRef = ref<HTMLTextAreaElement | null>(null)
const fileRef = storageRef(storage, `posts/${id}.md`)

const lastSavedText = ref('') // 用于判断内容是否有真实变化

const debounce = (fn: (...args: any[]) => void, delay: number) => {
  let timeout: ReturnType<typeof setTimeout> | null = null
  return (...args: any[]) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => fn(...args), delay)
  }
}

// 页面加载时：读取 Markdown 内容，不触发上传
onMounted(async () => {
  try {
    const blob = await getBlob(fileRef)
    const text = await blob.text()
    markdown.value = text
    lastSavedText.value = text // 设置初始已保存内容
  } catch {
    markdown.value = ''
    lastSavedText.value = ''
  }
})

// 只有用户修改了内容才上传（内容不同才触发）
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

// 阻止 Ctrl+S 保存行为
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

// 粘贴图片上传并插入 markdown 链接
onMounted(() => {
  const onPaste = async (e: ClipboardEvent) => {
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

        const textarea = editorRef.value
        if (!textarea) return

        const before = markdown.value.substring(0, textarea.selectionStart)
        const after = markdown.value.substring(textarea.selectionEnd)
        const imageMarkdown = `![image](${url})`

        markdown.value = `${before}${imageMarkdown}\n${after}`

        nextTick(() => {
          textarea.focus()
          textarea.selectionStart = textarea.selectionEnd = before.length + imageMarkdown.length + 1
        })
      }
    }
  }

  window.addEventListener('paste', onPaste)
  onUnmounted(() => {
    window.removeEventListener('paste', onPaste)
  })
})
</script>

<style scoped>
.fullscreen-editor {
  width: 90vw;
  height: 90vh;
  border: none;
  outline: none;
  resize: none;
  padding: 0rem;
  box-sizing: border-box;
  font-family: "Times New Roman", serif;
  font-size: 16px;
  line-height: 1.6;
  background-color: #fff;
  color: #111;
}
</style>