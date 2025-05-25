<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Our Products</p>
          <p class="text-[#5c738a] text-sm font-normal leading-normal">
            Explore our innovative solutions designed to transform your business operations.
          </p>
        </div>
      </div>

      <div class="prose dark:prose-invert max-w-none">
        <nav class="mb-8">
          <ul>
            <li v-for="entry in products" :key="entry.filePath">
              <a href="#" @click.prevent="loadProduct(entry)">{{ entry.title }}</a>
            </li>
          </ul>
        </nav>

        <div v-if="error" class="text-red-500">{{ error }}</div>
        <div v-else>
          <h2>{{ currentArticle?.title || 'Select a product' }}</h2>
          <div v-if="content" v-html="content" ref="contentDiv"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch } from 'vue'
import { parseMarkdown, highlightCode } from '../services/markdown'
import { config as fetchAppConfig, type ProductMeta, AppConfig } from '../services/config'
import { loadDocument } from '../services/resources'

// State
const appConfig = ref<AppConfig | null>(null)
const products = ref<ProductMeta[] | null>(null)
const currentArticle = ref<ProductMeta | null>(null)
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

const loadProduct = async (productMeta: ProductMeta) => {
  isLoading.value = true
  error.value = null
  
  try {
    const markdown = await loadDocument(productMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = productMeta || null
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product'
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
    appConfig.value = await fetchAppConfig()
    products.value = appConfig.value.products
    if (products.value.length > 0) {
      await loadProduct(appConfig.value.products[0])
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product list'
  }
})
</script>

<style>
.prose {
  max-width: none;
}
</style>
  