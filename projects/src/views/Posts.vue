<template>
  <div class="markdown-body" v-html="html" />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'
import katex from 'katex'
import 'katex/dist/katex.min.css'
import { getDownloadURL, ref as storageRef } from 'firebase/storage'
import { storage } from '../firebase'

const html = ref('')
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

onMounted(async () => {
  const id = route.params.id
  try {
    const fileRef = storageRef(storage, `posts/${id}.md`)
    const url = await getDownloadURL(fileRef)
    const res = await fetch(url)
    let text = await res.text()

    text = renderMathInMarkdown(text)
    html.value =await marked(text)
  } catch (e) {
    html.value = '<p>Load error</p>'
  }
})
</script>

<style scoped>
@import 'katex/dist/katex.min.css';

.markdown-body {
  max-width: 800px;
  margin: 2rem auto;
  padding: 1rem;
  font-family: "Georgia", "Times New Roman", serif;
  line-height: 1.8;
  color: #222;
}

.markdown-body h1 {
  font-size: 2rem;
  font-weight: bold;
  border-bottom: 2px solid #ccc;
  padding-bottom: 0.3em;
  margin-bottom: 1.2em;
}
.markdown-body h2 {
  font-size: 1.6rem;
  font-weight: bold;
  border-bottom: 1px solid #ddd;
  padding-bottom: 0.2em;
  margin-bottom: 1em;
}
.markdown-body h3 {
  font-size: 1.3rem;
  font-weight: bold;
  margin-top: 1.5em;
}
.markdown-body h4,
.markdown-body h5,
.markdown-body h6 {
  font-size: 1rem;
  font-weight: bold;
  margin-top: 1.2em;
}

.markdown-body p {
  font-size: 1rem;
  margin: 1rem 0;
  text-align: justify;
  word-break: break-word;
}

.markdown-body table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
  font-family: 'Courier New', monospace;
}
.markdown-body th,
.markdown-body td {
  border: 1px solid #ccc;
  padding: 0.5rem;
  text-align: left;
}
.markdown-body thead {
  background-color: #f9f9f9;
}

.markdown-body img {
  display: block;
  margin: 1rem auto;
  max-width: 80%;
  object-fit: contain;
  height: auto;
}

.markdown-body center {
  display: block;
  text-align: center;
  color: #777;
  font-size: 0.9rem;
  margin-top: -0.5rem;
  margin-bottom: 1.5rem;
}

.markdown-body blockquote {
  border-left: 4px solid #ccc;
  padding-left: 1rem;
  color: #555;
  font-style: italic;
  margin: 1rem 0;
}

.markdown-body pre {
  background: #f4f4f4;
  padding: 1rem;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
  line-height: 1.6;
  border-radius: 4px;
}

.markdown-body code {
  background: #f0f0f0;
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.95rem;
}

.math-error {
  color: red;
  font-family: monospace;
  white-space: pre-wrap;
}
</style>