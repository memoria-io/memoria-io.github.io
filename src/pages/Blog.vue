<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <div class="relative flex gap-24">
        <!-- Left Sidebar with TOC -->
        <aside class="w-70 absolute">
          <div class="fixed w-64 pt-32">
            <!-- Blog List -->
            <div class="mb-6">
              <h3 class="text-sm font-medium text-[#5c738a] uppercase tracking-wider mb-3">Blog Posts</h3>
              <div v-if="groupedBlogPosts" class="space-y-4">
                <div v-for="(posts, year) in groupedBlogPosts" :key="year" class="space-y-2">
                  <h4 class="text-xs font-semibold text-[#3f7fbf] uppercase tracking-wider">{{ year }}</h4>
                  <ul class="space-y-1 ml-2">
                    <li v-for="entry in posts" :key="entry.filePath">
                      <a 
                        href="#" 
                        @click.prevent="loadBlogPost(entry)"
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
              </div>
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
            <!-- Blog Post Header -->
            <div v-if="currentArticle" class="mb-8 pb-6 border-b border-gray-200">
              <h1 class="text-3xl font-bold text-[#101418] mb-3">{{ currentArticle.title }}</h1>
              <div class="flex items-center text-[#5c738a] text-sm">
                <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <time :datetime="currentArticle.lastUpdated">
                  {{ formatDate(currentArticle.lastUpdated) }}
                </time>
              </div>
            </div>
            <div v-if="content" v-html="content" ref="contentDiv"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, nextTick, watch, computed } from 'vue'
import { useRoute } from 'vue-router'
import { parseMarkdown, highlightCode } from '../services/markdown'
import { config as fetchAppConfig, type BlogPostMeta, AppConfig } from '../services/config'
import { loadDocument } from '../services/resources'
import TableOfContents from '../components/TableOfContents.vue'

// State
const route = useRoute()
const appConfig = ref<AppConfig | null>(null)
const blogPosts = ref<BlogPostMeta[] | null>(null)
const currentArticle = ref<BlogPostMeta | null>(null)
const content = ref('')
const contentDiv = ref<HTMLElement | null>(null)
const isLoading = ref(false)
const error = ref<string | null>(null)

const groupedBlogPosts = computed(() => {
  if (!blogPosts.value) return null
  
  const grouped = blogPosts.value.reduce((acc, post) => {
    const year = new Date(post.lastUpdated).getFullYear().toString()
    if (!acc[year]) {
      acc[year] = []
    }
    acc[year].push(post)
    return acc
  }, {} as Record<string, typeof blogPosts.value>)
  
  // Sort posts within each year by date (newest first)
  Object.keys(grouped).forEach(year => {
    grouped[year].sort((a, b) => new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime())
  })
  
  // Sort years in descending order (newest first)
  const sortedYears = Object.keys(grouped).sort((a, b) => parseInt(b) - parseInt(a))
  
  const result: Record<string, typeof blogPosts.value> = {}
  sortedYears.forEach(year => {
    result[year] = grouped[year]
  })
  
  return result
})

const formatDate = (dateString: string): string => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

const loadBlogPost = async (blogPostMeta: BlogPostMeta) => {
  isLoading.value = true
  error.value = null
  
  try {
    const markdown = await loadDocument(blogPostMeta.filePath)
    content.value = await parseMarkdown(markdown)
    currentArticle.value = blogPostMeta || null
    
    // Update URL hash
    const postId = blogPostMeta.filePath.replace('blog/', '').replace('.md', '')
    window.history.pushState({}, '', `#${postId}`)
    
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
    error.value = e instanceof Error ? e.message : 'Failed to load blog post'
    content.value = ''
  } finally {
    isLoading.value = false
  }
}

const loadBlogPostById = async (postId: string) => {
  if (!blogPosts.value) return
  
  const post = blogPosts.value.find(p => {
    const id = p.filePath.replace('blog/', '').replace('.md', '')
    return id === postId
  })
  
  if (post) {
    await loadBlogPost(post)
  }
}

// Initialize
onMounted(async () => {
  try {
    appConfig.value = await fetchAppConfig()
    blogPosts.value = appConfig.value.blogPosts
    
    // Check for hash in URL
    const hash = window.location.hash.slice(1)
    if (hash && blogPosts.value.length > 0) {
      await loadBlogPostById(hash)
    } else if (blogPosts.value.length > 0) {
      // Load first blog post by default
      await loadBlogPost(appConfig.value.blogPosts[0])
    }
  } catch (e) {
    error.value = e instanceof Error ? e.message : 'Failed to load blog list'
  }
})

// Watch for hash changes
watch(() => route.hash, async (newHash) => {
  const postId = newHash.slice(1)
  if (postId) {
    await loadBlogPostById(postId)
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