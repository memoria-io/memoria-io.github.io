<template>
  <div>
    <h1>My Blog</h1>
    <div class="debug-style">test</div>

    <nav>
      <ul>
        <li v-for="file in files" :key="file">
          <a href="#" @click.prevent="load(file)">{{ file }}</a>
        </li>
      </ul>
    </nav>

    <main class="prose dark:prose-invert max-w-none">
      <h2>testing my h2</h2>
      <div v-html="content" ref="contentDiv"/>
    </main>
  </div>
</template>

<script setup lang="ts">
// Vue imports
import { ref, onMounted, nextTick, watch } from 'vue'

// Styles
import './assets/styles/tailwind.css'

// Markdown processing
import { marked } from 'marked'
import type { MarkedOptions } from 'marked'

// Syntax highlighting
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

// Constants
const BASE_URL = import.meta.env.BASE_URL as string
const ARTICLES_PATH = `${BASE_URL}articles`

// State
const files = ref(['hello.md', 'about.md'])
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

// Markdown configuration
marked.setOptions({
  breaks: true
})

// Methods
const highlightCode = () => {
  nextTick(() => {
    if (contentDiv.value) {
      Prism.highlightAllUnder(contentDiv.value)
    }
  })
}

const load = async (file: string) => {
  isLoading.value = true
  error.value = null
  try {
    const response = await fetch(`${ARTICLES_PATH}/${file}`)
    if (!response.ok) {
      throw new Error(`Failed to load article: ${response.statusText}`)
    }
    
    const text = await response.text()
    content.value = await marked.parse(text)
    highlightCode()
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load article'
    content.value = ''
  } finally {
    isLoading.value = false
  }
}

// Watchers
watch(content, highlightCode)

// Lifecycle
onMounted(() => {
  load(files.value[0])
})
</script>
