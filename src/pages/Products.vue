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
import { useRoute, useRouter } from 'vue-router'
import { parseMarkdown, highlightCode } from '../services/markdown'
import { config as fetchAppConfig, type ProductMeta, AppConfig } from '../services/config'
import { loadDocument } from '../services/resources'
import TableOfContents from '../components/TableOfContents.vue'

// State
const route = useRoute()
const router = useRouter()
const appConfig = ref<AppConfig | null>(null)
const products = ref<ProductMeta[] | null>(null)
const currentArticle = ref<ProductMeta | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

const loadProduct = async (productMeta: ProductMeta) => {
  isLoading.value = true
  error.value = null
  
  try {
    const markdown = await loadDocument(productMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = productMeta || null
    
    // Update URL to use route parameter
    const productId = productMeta.filePath.replace('products/', '').replace('.md', '')
    await router.push(`/products/${productId}`)
    
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

// Initialize
onMounted(async () => {
  try {
    appConfig.value = await fetchAppConfig()
    products.value = appConfig.value.products
    
    // Check for product ID in route parameter
    const productId = route.params.productId as string
    if (productId && products.value.length > 0) {
      await loadProductById(productId)
    } else if (products.value.length > 0) {
      // Load first product by default
      await loadProduct(appConfig.value.products[0])
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load product list'
  }
})

// Watch for route parameter changes
watch(() => route.params.productId, async (newProductId) => {
  if (newProductId && products.value) {
    await loadProductById(newProductId as string)
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
  