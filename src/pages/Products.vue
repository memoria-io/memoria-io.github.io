<template>
  <div class="px-32 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1120px] flex-1">
      

      <div class="relative flex gap-24">
        <!-- Left Sidebar with TOC -->
        <aside class="w-70 absolute">
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
                <template v-for="item in tableOfContents" :key="item.id">
                  <TocTree :item="item" :activeSection="activeSection" />
                </template>
              </div>
            </nav>
          </div>
        </aside>

        <!-- Main Content -->
        <div class="flex-1 ml-80">
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
import { ref, onMounted, nextTick, watch, onUnmounted } from 'vue'
import { parseMarkdown, highlightCode } from '../services/markdown'
import { config as fetchAppConfig, type ProductMeta, AppConfig } from '../services/config'
import { loadDocument } from '../services/resources'
import TocTree from '../components/TocTree.vue'

interface TocItem {
  id: string;
  text: string;
  level: number;
  children: TocItem[];
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
const activeSection = ref<string>('')

// Intersection Observer
let observer: IntersectionObserver | null = null

const initializeObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  observer = new IntersectionObserver(
    (entries) => {
      if (contentDiv.value) {
        // Get all headers in document order
        const allHeaders = Array.from(contentDiv.value.querySelectorAll('h1, h2, h3, h4, h5, h6'))
        
        // Find visible headers near the top of the viewport
        const visibleHeaders = allHeaders
          .filter(header => {
            const rect = header.getBoundingClientRect()
            // Consider headers in the top portion of the viewport
            return rect.top >= -50 && rect.top <= 150
          })
          .map(header => ({
            id: header.id,
            level: parseInt(header.tagName[1]),
            top: header.getBoundingClientRect().top
          }))

        if (visibleHeaders.length > 0) {
          // Find the highest-level (lowest number) header among visible ones
          const minLevel = Math.min(...visibleHeaders.map(h => h.level))
          const highestLevelHeader = visibleHeaders.find(h => h.level === minLevel)
          
          if (highestLevelHeader) {
            activeSection.value = highestLevelHeader.id
          }
        }
      }
    },
    {
      rootMargin: '-80px 0px -90% 0px',
      threshold: [0, 1]
    }
  )

  // Observe all headers
  if (contentDiv.value) {
    const headers = contentDiv.value.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headers.forEach(header => {
      if (header.id) {
        observer?.observe(header)
      }
    })
  }
}

const generateTableOfContents = () => {
  const flatToc: TocItem[] = []
  if (contentDiv.value) {
    const headers = contentDiv.value.querySelectorAll('h1, h2, h3, h4, h5, h6')
    headers.forEach((header) => {
      if (!header.id) {
        header.id = header.textContent?.toLowerCase().replace(/\s+/g, '-') || ''
      }
      
      flatToc.push({
        id: header.id,
        text: header.textContent || '',
        level: parseInt(header.tagName[1]),
        children: []
      })
    })
  }

  // Convert flat structure to tree
  const treeStructure: TocItem[] = []
  const stack: TocItem[] = []

  flatToc.forEach((item) => {
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    if (stack.length === 0) {
      treeStructure.push(item)
    } else {
      stack[stack.length - 1].children.push(item)
    }

    stack.push(item)
  })

  tableOfContents.value = treeStructure
  
  nextTick(() => {
    initializeObserver()
  })
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

const updateHighlighting = () => {
  nextTick(() => {
    if (contentDiv.value) {
      highlightCode(contentDiv.value)
    }
  })
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

onUnmounted(() => {
  if (observer) {
    observer.disconnect()
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
  