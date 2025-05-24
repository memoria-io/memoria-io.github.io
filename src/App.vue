<template>
  <div>
    <h1>My Blog</h1>
    <div class="debug-style">test</div>

    <nav>
      <ul>
        <li v-for="article in articles" :key="article.filename">
          <a href="#" @click.prevent="load(article.filename)">{{ article.title }}</a>
        </li>
      </ul>
    </nav>

    <main class="prose dark:prose-invert max-w-none">
      <h2>{{ currentArticle?.title || 'Welcome' }}</h2>
      <div v-html="content" ref="contentDiv"/>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import './assets/styles/tailwind.css'
import { parseMarkdown, highlightCode } from './services/markdown'
import { loadArticle, loadConfig, type ArticleConfig } from './services/articles'

// State
const articles = ref<ArticleConfig[]>([])
const currentArticle = ref<ArticleConfig | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

// Methods
const updateHighlighting = () => {
  nextTick(() => {
    if (contentDiv.value) {
      highlightCode(contentDiv.value)
    }
  })
}

const load = async (filename: string) => {
  isLoading.value = true
  error.value = null
  
  try {
    const article = await loadArticle(filename)
    content.value = await parseMarkdown(article.content)
    currentArticle.value = articles.value.find(a => a.filename === filename) || null
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load article'
    content.value = ''
  } finally {
    isLoading.value = false
  }
}

// Watchers
watch(content, updateHighlighting)

// Lifecycle
onMounted(async () => {
  try {
    articles.value = await loadConfig()
    if (articles.value.length > 0) {
      await load(articles.value[0].filename)
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load article list'
  }
})
</script>
