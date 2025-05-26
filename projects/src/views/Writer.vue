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
// import { auth, githubProvider } from '../firebase'
// import { signInWithPopup } from 'firebase/auth'

// const allowedEmail = 'study@heyingdu.com'

// onMounted(async () => {
//   if (!auth.currentUser) {
//     try {
//       const result = await signInWithPopup(auth, githubProvider)
//       const user = result.user

//       if (user.email !== allowedEmail) {
//         alert('Not Allowed')
//         window.location.href = '/'
//       }
//     } catch (err) {
//       alert('Failed Login')
//       window.location.href = '/'
//     }
//   } else {
//     const user = auth.currentUser
//     if (user?.email !== allowedEmail) {
//       alert('Not Allowed')
//       window.location.href = '/'
//     }
//   }
// })
const route = useRoute()
const id = route.params.id as string
const markdown = ref('')
const editorRef = ref<HTMLTextAreaElement | null>(null)

const fileRef = storageRef(storage, `posts/${id}.md`)

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

onMounted(async () => {
  try {
    const blob = await getBlob(fileRef)
    const text = await blob.text()
    markdown.value = text
  } catch {
    markdown.value = ''
  }
})

watch(markdown, async (val) => {
  const fileBlob = new Blob([val], { type: 'text/plain' })
  await uploadBytes(fileRef, fileBlob)
})

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