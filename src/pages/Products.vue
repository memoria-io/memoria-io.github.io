<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      

      <div class="relative flex gap-24">
        <!-- Left Sidebar with TOC -->
        <aside class="w-70 absolute">
          <div class="fixed w-64 pt-32">
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
            <TableOfContents
              :content-ref="contentDiv"
              title="Table of Contents"
              :start-level="2"
              :max-level="4"
            />
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
import { useRoute } from 'vue-router'
import { parseMarkdown, highlightCode } from '../services/markdown'
import { config as fetchAppConfig, type ProductMeta, AppConfig } from '../services/config'
import { loadDocument } from '../services/resources'
import TableOfContents from '../components/TableOfContents.vue'

// State
const route = useRoute()
const appConfig = ref<AppConfig | null>(null)
const products = ref<ProductMeta[] | null>(null)
const currentArticle = ref<ProductMeta | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)
const hashChangeHandler = ref<((event: HashChangeEvent) => void) | null>(null)
const popStateHandler = ref<((event: PopStateEvent) => void) | null>(null)

const loadProduct = async (productMeta: ProductMeta) => {
  isLoading.value = true
  error.value = null
  
  try {
    const markdown = await loadDocument(productMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = productMeta || null
    
    // Update URL hash for hash-based routing
    // Keep the route structure: /#/products#productId
    const productId = productMeta.filePath.replace('products/', '').replace('.md', '')
    window.location.hash = `/products#${productId}`
    
    // Reset scroll position and wait for content to be rendered
    window.scrollTo(0, 0)
    await nextTick()
    
    // Force TOC to reinitialize by temporarily removing the ref
    const tempDiv = contentDiv.value
    contentDiv.value = null
    await nextTick()
    contentDiv.value = tempDiv
    
    // Initialize syntax highlighting
    if (contentDiv.value) {
      highlightCode(contentDiv.value)
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product'
    content.value = ''
  } finally {
    isLoading.value = false
  }
}

const loadProductById = async (productId: string) => {
  if (!products.value) return
  
  const product = products.value.find(p => {
    const id = p.filePath.replace('products/', '').replace('.md', '')
    return id === productId
  })
  
  if (product) {
    await loadProduct(product)
  }
}

// Helper function to get hash from URL, handling both with and without slashes
const getHashFromUrl = () => {
  // With hash routing, the full hash will be like "#/products#argon"
  const fullHash = window.location.hash
  
  // Extract the product hash from the full hash
  // If hash is "#/products#argon", we want "argon"
  const hashParts = fullHash.split('#')
  const productHash = hashParts.length > 2 ? hashParts[2] : null
  
  // Fallback to route.hash if available
  const routeHash = route.hash.slice(1)
  
  // Return the product hash or route hash
  return productHash || routeHash
}

// Initialize
onMounted(async () => {
  try {
    appConfig.value = await fetchAppConfig()
    products.value = appConfig.value.products
    
    // Check for hash in URL
    const hash = getHashFromUrl()
    if (hash && products.value.length > 0) {
      await loadProductById(hash)
    } else if (products.value.length > 0) {
      // Load first product by default
      await loadProduct(appConfig.value.products[0])
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product list'
  }
  
  // Add hashchange event listener to handle browser slash insertion
  const handleHashChange = async () => {
    const hash = getHashFromUrl()
    if (hash && products.value) {
      await loadProductById(hash)
    }
  }
  
  // Also listen for popstate events (back/forward navigation)
  const handlePopState = async () => {
    const hash = getHashFromUrl()
    if (hash && products.value) {
      await loadProductById(hash)
    }
  }
  
  hashChangeHandler.value = handleHashChange
  popStateHandler.value = handlePopState
  window.addEventListener('hashchange', handleHashChange)
  window.addEventListener('popstate', handlePopState)
})

// Cleanup
onUnmounted(() => {
  if (hashChangeHandler.value) {
    window.removeEventListener('hashchange', hashChangeHandler.value)
    hashChangeHandler.value = null
  }
  if (popStateHandler.value) {
    window.removeEventListener('popstate', popStateHandler.value)
    popStateHandler.value = null
  }
})

// Watch for hash changes
watch(() => route.hash, async (newHash) => {
  const productId = getHashFromUrl()
  if (productId) {
    await loadProductById(productId)
  }
})
</script>

<style>
.prose {
  max-width: none;
}

/* Add scroll margin to headers */
:deep(h2), :deep(h3), :deep(h4) {
  scroll-margin-top: 100px;
}
</style>
  