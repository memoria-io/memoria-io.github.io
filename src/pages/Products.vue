<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      

      <div class="relative flex gap-8">
        <!-- Left Sidebar with TOC -->
        <aside class="w-64 absolute">
          <div class="fixed w-64">
            <nav class="overflow-y-auto" style="max-height: calc(100vh - 200px);">
              <!-- Product List -->
              <div class="mb-6">
                <h3 class="text-sm font-medium text-[#5c738a] uppercase tracking-wider mb-3">Products</h3>
                <ul class="space-y-2">
                  <li v-for="entry in products" :key="entry.filePath">
                    <a 
                      href="#" 
                      @click.prevent="loadProduct(entry)"
                      :class="[
                        'block text-sm py-1 hover:text-[#3f7fbf] transition-colors',
                        currentArticle?.filePath === entry.filePath 
                          ? 'text-[#3f7fbf] font-medium' 
                          : 'text-[#101418]'
                      ]"
                    >
                      {{ entry.title }}
                    </a>
                  </li>
                </ul>
              </div>

              <!-- Table of Contents -->
              <div v-if="tableOfContents.length > 0">
                <h3 class="text-sm font-medium text-[#5c738a] uppercase tracking-wider mb-3">Table of Contents</h3>
                <ul class="space-y-2">
                  <li v-for="item in tableOfContents" :key="item.id">
                    <a 
                      :href="'#' + item.id"
                      :class="[
                        'block text-sm py-1 hover:text-[#3f7fbf] transition-colors',
                        `pl-${(item.level - 1) * 4}`,
                        item.level === 1 ? 'font-medium' : '',
                        'text-[#000000ad]'
                      ]"
                    >
                      {{ item.text }}
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 ml-64">
          <div v-if="error" class="text-red-500">{{ error }}</div>
          <div v-else class="prose dark:prose-invert max-w-none">
            <div v-if="content" v-html="content" ref="contentDiv"/>
          </div>
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

interface TocItem {
  id: string;
  text: string;
  level: number;
}

// State
const appConfig = ref<AppConfig | null>(null)
const products = ref<ProductMeta[] | null>(null)
const currentArticle = ref<ProductMeta | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)
const tableOfContents = ref<TocItem[]>([])

// Methods
const updateHighlighting = () => {
  nextTick(() => {
    if (contentDiv.value) {
      highlightCode(contentDiv.value)
    }
  })
}

const generateTableOfContents = () => {
  const toc: TocItem[] = []
  if (contentDiv.value) {
    const headers = contentDiv.value.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headers.forEach((header) => {
      // Generate an ID if none exists
      if (!header.id) {
        header.id = header.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      }
      
      toc.push({
        id: header.id,
        text: header.textContent || '',
        level: parseInt(header.tagName[1])
      })
    })
  }
  tableOfContents.value = toc
}

const loadProduct = async (productMeta: ProductMeta) => {
  isLoading.value = true
  error.value = null
  
  try {
    const markdown = await loadDocument(productMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = productMeta || null
    
    // Generate TOC after content is loaded and rendered
    nextTick(() => {
      generateTableOfContents()
    })
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

/* Smooth scroll behavior for anchor links */
html {
  scroll-behavior: smooth;
}

/* Custom scrollbar for TOC */
nav::-webkit-scrollbar {
  width: 4px;
}

nav::-webkit-scrollbar-track {
  background: transparent;
}

nav::-webkit-scrollbar-thumb {
  background: #eaedf1;
  border-radius: 2px;
}

nav::-webkit-scrollbar-thumb:hover {
  background: #d1d5db;
}
</style>
  