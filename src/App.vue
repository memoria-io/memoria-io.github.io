<template>
  <div>
    <h1>My Blog</h1>
    <div class="debug-style">test</div>

    <ul>
      <li v-for="file in files" :key="file">
        <a href="#" @click.prevent="load(file)">{{ file }}</a>
      </li>
    </ul>
    <div class="prose dark:prose-invert max-w-none">
      <h2>testing my h2</h2>
      <div v-html="content" ref="contentDiv"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted, nextTick, watch} from 'vue'
import {marked} from 'marked'
import './assets/styles/tailwind.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

const contentDiv = ref<HTMLElement | null>(null)

marked.setOptions({
  breaks: true,
  highlight: function(code, lang) {
    if (Prism.languages[lang]) {
      return Prism.highlight(code, Prism.languages[lang], lang)
    }
    return code
  }
})

const files = ref(['hello.md', 'about.md'])
const content = ref('')

const highlightCode = () => {
  nextTick(() => {
    if (contentDiv.value) {
      Prism.highlightAllUnder(contentDiv.value)
    }
  })
}

const load = async (file: string) => {
  const response = await fetch(`${import.meta.env.BASE_URL}articles/${file}`)
  const text = await response.text()
  content.value = await marked.parse(text)
  highlightCode()
}

watch(content, highlightCode)

onMounted(() => {
  load(files.value[0])
})
</script>

<style>
pre {
  @apply p-4 rounded-lg overflow-x-auto bg-gray-800;
}

:not(pre) > code {
  @apply bg-gray-800 rounded px-2 py-1 text-sm;
}

pre > code {
  @apply bg-transparent p-0;
}
</style>


