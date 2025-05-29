<template>
  <div class="progress-container">
    <div class="progress-bar" :style="{ width: progress + '%' }"></div>
  </div>
  
  <div class="markdown-body" v-html="html" />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { getDownloadURL, ref as storageRef } from 'firebase/storage'
import { storage } from '../firebase'

const html = ref('')
const progress = ref(0)
const route = useRoute()

function renderMathInMarkdown(text: string): string {
  text = text.replace(/\$\$([\s\S]+?)\$\$/g, (_, math) => {
    try {
      return katex.renderToString(math, { displayMode: true })
    } catch {
      return `<pre class="math-error">$$${math}$$</pre>`
    }
  })

  text = text.replace(/\$([^\$]+?)\$/g, (_, math) => {
    try {
      return katex.renderToString(math, { displayMode: false })
    } catch {
      return `<code class="math-error">$${math}$</code>`
    }
  })

  return text
}

function updateProgress() {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop
  const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
  const scrollPercent = (scrollTop / scrollHeight) * 100
  progress.value = Math.min(Math.max(scrollPercent, 0), 100)
}

onMounted(async () => {
  const id = route.params.id
  try {
    const fileRef = storageRef(storage, `posts/${id}.md`)
    const url = await getDownloadURL(fileRef)
    const res = await fetch(url)
    let text = await res.text()

    text = renderMathInMarkdown(text)
    html.value = await marked(text)
  } catch (e) {
    html.value = '<p>Load error</p>'
  }
  
  // 添加滚动事件监听器
  window.addEventListener('scroll', updateProgress)
  window.addEventListener('resize', updateProgress)
})

onUnmounted(() => {
  // 清理事件监听器
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('resize', updateProgress)
})
</script>

<style>
@import 'katex/dist/katex.min.css';

.progress-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #3283BF;
  z-index: 1000;
}

.progress-bar {
  height: 100%;
  background-color: #FFD100;
  transition: width 0.1s ease-out;
  width: 0%;
}

.markdown-body {
  max-width: 900px;
  margin: 2rem auto;
  padding: 2rem 3rem;
  font-family: "Times New Roman", "Georgia", serif;
  line-height: 1.6;
  color: #1a1a1a;
  background: #ffffff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  margin-top: 2.5rem; /* 为进度条留出空间 */
}

.markdown-body h1 {
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  border-bottom: none;
  padding-bottom: 0.5em;
  margin: 2rem 0 1.5rem 0;
  color: #000;
  letter-spacing: 0.5px;
}

.markdown-body h2 {
  font-size: 1.4rem;
  font-weight: 600;
  margin: 2rem 0 1rem 0;
  color: #000;
  letter-spacing: 0.3px;
}

.markdown-body h3 {
  font-size: 1.2rem;
  font-weight: 600;
  margin: 1.8rem 0 0.8rem 0;
  color: #000;
}

.markdown-body h4, .markdown-body h5, .markdown-body h6 {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1.5rem 0 0.6rem 0;
  color: #000;
}

.markdown-body p {
  font-size: 12pt;
  margin: 1.2rem 0;
  text-align: justify;
  /* text-indent: 2em; */
  line-height: 1.8;
  word-break: break-word;
  hyphens: auto;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 2rem auto;
  font-family: "Times New Roman", serif;
  font-size: 11pt;
  page-break-inside: avoid;
}

.markdown-body th, .markdown-body td {
  border: 1px solid #000;
  padding: 0.6rem 0.8rem;
  text-align: left;
  vertical-align: top;
}

.markdown-body thead {
  background-color: #f8f8f8;
  font-weight: bold;
}

.markdown-body th {
  font-weight: bold;
  text-align: center;
}

.markdown-body img {
  display: block;
  margin: 2rem auto;
  max-width: 85%;
  max-height: 600px;
  width: auto;
  height: auto;
  object-fit: contain;
  border: 1px solid #ddd;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  page-break-inside: avoid;
}

center {
  display: block !important;
  text-align: center !important;
  color: #555 !important;
  font-size: 11pt !important;
  font-style: italic !important;
  margin: 0.5rem auto 2rem auto !important;
  max-width: 85% !important;
  line-height: 1.4 !important;
}

.markdown-body center {
  display: block;
  text-align: center;
  color: #555;
  font-size: 11pt;
  font-style: italic;
  margin: 0.5rem auto 2rem auto;
  max-width: 85%;
  line-height: 1.4;
}

/* 引用块样式 */
.markdown-body blockquote {
  border-left: 3px solid #666;
  padding: 1rem 1.5rem;
  margin: 1.5rem 2rem;
  background-color: #f9f9f9;
  color: #444;
  font-style: italic;
  font-size: 11pt;
  line-height: 1.6;
}

/* 代码块样式 */
.markdown-body pre {
  background: #f8f8f8;
  border: 1px solid #ddd;
  padding: 1.2rem;
  margin: 1.5rem 0;
  overflow-x: auto;
  font-family: 'Courier New', 'Monaco', monospace;
  font-size: 10pt;
  line-height: 1.5;
  border-radius: 2px;
  page-break-inside: avoid;
}

.markdown-body code {
  background: #f4f4f4;
  padding: 0.2em 0.4em;
  border-radius: 2px;
  font-family: 'Courier New', 'Monaco', monospace;
  font-size: 10pt;
  border: 1px solid #e0e0e0;
}

.markdown-body ul, .markdown-body ol {
  margin: 1.2rem 0;
  padding-left: 2rem;
}

.markdown-body li {
  margin: 0.5rem 0;
  line-height: 1.6;
}

.math-error {
  color: red;
  font-family: monospace;
  white-space: pre-wrap;
  background: #fff5f5;
  padding: 0.5rem;
  border: 1px solid #ffcccc;
  border-radius: 3px;
}

@media screen and (max-width: 1024px) {
  .markdown-body {
    max-width: 95%;
    padding: 1.5rem 2rem;
    margin: 1rem auto;
    margin-top: 1.5rem; /* 调整进度条空间 */
  }
  
  .markdown-body h1 {
    font-size: 2rem;
  }
  
  .markdown-body h2 {
    font-size: 1.3rem;
  }
  
  img {
    max-width: 90% !important;
  }
  
  center {
    max-width: 90% !important;
  }
  
  .markdown-body img {
    max-width: 90%;
  }
  
  .markdown-body center {
    max-width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .markdown-body {
    max-width: 100%;
    padding: 1rem 1.5rem;
    margin: 0.5rem auto;
    margin-top: 1rem; /* 调整进度条空间 */
    box-shadow: none;
  }
  
  .markdown-body h1 {
    font-size: 1.8rem;
    margin: 1.5rem 0 1rem 0;
  }
  
  .markdown-body h2 {
    font-size: 1.2rem;
    margin: 1.5rem 0 0.8rem 0;
  }
  
  .markdown-body h3 {
    font-size: 1.1rem;
  }
  
  .markdown-body p {
    font-size: 11pt;
    text-indent: 1.5em;
    line-height: 1.7;
  }
  
  img {
    max-width: 95% !important;
    max-height: 400px !important;
    margin: 1.5rem auto !important;
  }
  
  center {
    max-width: 95% !important;
    font-size: 10pt !important;
  }
  
  .markdown-body img {
    max-width: 95%;
    max-height: 400px;
    margin: 1.5rem auto;
  }
  
  .markdown-body center {
    max-width: 95%;
    font-size: 10pt;
  }
  
  .markdown-body table {
    font-size: 10pt;
    margin: 1.5rem 0;
  }
  
  .markdown-body th, .markdown-body td {
    padding: 0.4rem 0.6rem;
  }
  
  .markdown-body blockquote {
    margin: 1rem 0.5rem;
    padding: 0.8rem 1rem;
    font-size: 10pt;
  }
  
  .markdown-body pre {
    font-size: 9pt;
    padding: 1rem;
    overflow-x: scroll;
  }
  
  .markdown-body code {
    font-size: 9pt;
  }
}

@media screen and (max-width: 480px) {
  .markdown-body {
    padding: 0.8rem 1rem;
    margin-top: 0.8rem; /* 调整进度条空间 */
  }
  
  .markdown-body h1 {
    font-size: 1.6rem;
  }
  
  .markdown-body h2 {
    font-size: 1.1rem;
  }
  
  .markdown-body p {
    font-size: 10pt;
    text-indent: 1em;
  }
  
  center {
    max-width: 100% !important;
    font-size: 9pt !important;
  }
  
  .markdown-body img {
    max-width: 100%;
    max-height: 300px;
  }
  
  .markdown-body center {
    max-width: 100%;
    font-size: 9pt;
  }
  
  .markdown-body table {
    font-size: 9pt;
  }
  
  .markdown-body th, .markdown-body td {
    padding: 0.3rem 0.4rem;
  }
}

@media print {
  .progress-container {
    display: none; /* 打印时隐藏进度条 */
  }
  
  .markdown-body {
    max-width: none;
    padding: 0;
    margin: 0;
    box-shadow: none;
    font-size: 12pt;
  }
  
  .markdown-body h1 {
    page-break-before: always;
  }
  
  .markdown-body h1:first-child {
    page-break-before: avoid;
  }
  
  .markdown-body img {
    max-width: 100%;
    page-break-inside: avoid;
  }
  
  .markdown-body table {
    page-break-inside: avoid;
  }
}
</style>