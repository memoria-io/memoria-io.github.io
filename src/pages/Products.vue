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
                <div class="space-y-1">
                  <template v-for="item in structuredToc" :key="item.id">
                    <div>
                      <!-- Main header with expansion -->
                      <div class="flex items-center group">
                        <button 
                          v-if="item.children?.length"
                          @click.stop="toggleSection(item.id)"
                          class="w-4 h-4 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600"
                        >
                          <span class="transform transition-transform" :class="expandedSections.has(item.id) ? 'rotate-90' : ''">
                            ›
                          </span>
                        </button>
                        <span v-else class="w-4 mr-2"></span>
                        <a 
                          :href="'#' + item.id"
                          @click.prevent="() => { scrollToSection(item.id); if (item.children?.length) toggleSection(item.id); }"
                          class="block py-1 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                          :class="{ 'toc-active': activeSection === item.id }"
                        >
                          {{ item.text }}
                        </a>
                      </div>
                      
                      <!-- Sub-headers -->
                      <div v-if="item.children?.length && expandedSections.has(item.id)" class="ml-4 mt-1">
                        <template v-for="child in item.children" :key="child.id">
                          <div class="flex items-center group">
                            <button 
                              v-if="child.children?.length"
                              @click.stop="toggleSection(child.id)"
                              class="w-4 h-4 mr-2 flex items-center justify-center text-gray-400 hover:text-gray-600"
                            >
                              <span class="transform transition-transform" :class="expandedSections.has(child.id) ? 'rotate-90' : ''">
                                ›
                              </span>
                            </button>
                            <span v-else class="w-4 mr-2"></span>
                            <a 
                              :href="'#' + child.id"
                              @click.prevent="() => { scrollToSection(child.id); if (child.children?.length) toggleSection(child.id); }"
                              class="py-1 pr-4 text-sm text-gray-600 hover:text-blue-500 transition-colors"
                              :class="{ 'toc-active': activeSection === child.id }"
                            >
                              {{ child.text }}
                            </a>
                          </div>
                          
                          <!-- Third level -->
                          <div v-if="child.children?.length && expandedSections.has(child.id)" class="ml-10 mt-1">
                            <template v-for="grandchild in child.children" :key="grandchild.id">
                              <a 
                                :href="'#' + grandchild.id"
                                @click.prevent="scrollToSection(grandchild.id)"
                                class="block py-1 text-sm text-gray-500 hover:text-blue-500 transition-colors"
                                :class="{ 'toc-active': activeSection === grandchild.id }"
                              >
                                {{ grandchild.text }}
                              </a>
                            </template>
                          </div>
                        </template>
                      </div>
                    </div>
                  </template>
                </div>
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
import { ref, onMounted, nextTick, watch, onUnmounted, computed } from 'vue'
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

// Track expanded sections
const expandedSections = ref<Set<string>>(new Set())

// Intersection Observer
let observer: IntersectionObserver | null = null

const toggleSection = (id: string) => {
  if (expandedSections.value.has(id)) {
    expandedSections.value.delete(id)
  } else {
    expandedSections.value.add(id)
  }
}

// Computed property to structure TOC items
const structuredToc = computed(() => {
  const result: TocItem[] = []
  const stack: TocItem[] = []
  
  tableOfContents.value.forEach((item) => {
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }
    
    if (stack.length === 0) {
      result.push(item)
    } else {
      if (!stack[stack.length - 1].children) {
        stack[stack.length - 1].children = []
      }
      stack[stack.length - 1].children.push(item)
    }
    
    stack.push(item)
  })
  
  return result
})

const initializeObserver = () => {
  if (observer) {
    observer.disconnect()
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '0px 0px -95% 0px',
      threshold: 0
    }
  )

  // Observe all headers
  if (contentDiv.value) {
    const headers = contentDiv.value.querySelectorAll('h2, h3, h4')
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
    const headers = contentDiv.value.querySelectorAll('h2, h3, h4, h5, h6')
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
    // Pop items from stack if current item is at same or higher level (smaller number)
    while (stack.length > 0 && stack[stack.length - 1].level >= item.level) {
      stack.pop()
    }

    // If stack is empty or current item is direct child of last item in stack
    if (stack.length === 0) {
      treeStructure.push(item)
    } else {
      if (!stack[stack.length - 1].children) {
        stack[stack.length - 1].children = []
      }
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

// Make sure observer is initialized after content changes
watch(() => content.value, () => {
  nextTick(() => {
    initializeObserver()
  })
}, { flush: 'post' })

// Initialize observer after initial content load
onMounted(async () => {
  try {
    appConfig.value = await fetchAppConfig()
    products.value = appConfig.value.products
    if (products.value.length > 0) {
      await loadProduct(appConfig.value.products[0])
      nextTick(() => {
        initializeObserver()
      })
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product list'
  }
})

// Clean up observer
onUnmounted(() => {
  if (observer) {
    observer.disconnect()
  }
})

// Function to scroll to section
const scrollToSection = (id: string) => {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    activeSection.value = id
  }
}
</script>

<style>
.prose {
  max-width: none;
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

/* Active state styles */
.toc-active {
  color: #3b82f6 !important;
  font-weight: 500;
}

/* Add scroll margin to headers */
:deep(h2), :deep(h3), :deep(h4) {
  scroll-margin-top: 100px;
}
</style>
  