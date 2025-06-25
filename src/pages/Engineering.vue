<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
      <!-- Hero Section -->
      <div class="mb-12 text-center">
        <h1 class="text-[#101418] text-4xl font-bold mb-4">How We Build</h1>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          Enterprise-grade systems powered by modern architectures, proven practices, and cutting-edge technologies.
        </p>
      </div>

      <!-- Architecture & Best Practices -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Microservices</h3>
            <p class="text-[#5c738a] text-sm">Scalable, maintainable, and independently deployable services.</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Domain-Driven Design</h3>
            <p class="text-[#5c738a] text-sm">Complex domain modeling with bounded contexts and ubiquitous language.</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Event-Driven</h3>
            <p class="text-[#5c738a] text-sm">Reactive systems with event sourcing and CQRS patterns.</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">12-Factor App</h3>
            <p class="text-[#5c738a] text-sm">Cloud-native applications following modern development principles.</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Polyglot Persistence</h3>
            <p class="text-[#5c738a] text-sm">Right database for the right model with pluggable storage integrations.</p>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Serverless support</h3>
            <p class="text-[#5c738a] text-sm">Designed to support serverless where it makes sense—event-driven, auto-scaling, and infrastructure-free.</p>
          </div>
        </div>
      </section>

      <!-- Security Section -->
      <section class="mb-16 bg-white rounded-lg p-8 shadow-sm">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="space-y-4">
            <h3 class="text-[#101418] text-xl font-semibold mb-4">Zero Trust Security Model</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Secure-by-default infrastructure and deployments</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Privileged Access Management (PAM)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Identity and Access Management (IAM)</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Role-Based Access Control (RBAC)</span>
              </li>
            </ul>
          </div>
          <div class="space-y-4">
            <h3 class="text-[#101418] text-xl font-semibold mb-4">Enterprise Security Features</h3>
            <ul class="space-y-3">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Multi-Tenant Authentication & SSO</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Tenant Isolation and Scoped Authorization</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">OWASP Top 10 Compliance</span>
              </li>
              <li class="flex items-start">
                <span class="text-green-500 mr-2">✓</span>
                <span class="text-[#5c738a]">Secure Software Development Lifecycle (SSDLC)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Technology Stack -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h3 class="text-[#101418] text-lg font-semibold mb-4">Languages</h3>
            <ul class="space-y-2 text-[#5c738a] text-sm">
              <li>Java</li>
              <li>Kotlin</li>
              <li>Scala</li>
              <li>TypeScript</li>
              <li>Rust (Evaluating)</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h3 class="text-[#101418] text-lg font-semibold mb-4">Frameworks</h3>
            <ul class="space-y-2 text-[#5c738a] text-sm">
              <li>Oracle Helidon</li>
              <li>Spring</li>
              <li>Maven</li>
              <li>Gradle</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h3 class="text-[#101418] text-lg font-semibold mb-4">Cloud & Infrastructure</h3>
            <ul class="space-y-2 text-[#5c738a] text-sm">
              <li>AWS</li>
              <li>GCP</li>
              <li>Kubernetes</li>
              <li>Helm</li>
              <li>ArgoCD</li>
            </ul>
          </div>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h3 class="text-[#101418] text-lg font-semibold mb-4">Messaging & Event Streaming</h3>
            <ul class="space-y-2 text-[#5c738a] text-sm">
              <li>Apache Kafka</li>
              <li>Apache Pulsar</li>
              <li>Event Streaming</li>
              <li>Message Queuing</li>
            </ul>
          </div>
        </div>
      </section>

      <!-- Case studies Transition -->
      <section class="mb-12 text-center">
        <div class="bg-gradient-to-r from-[#3f7fbf] to-[#2d5d8f] rounded-lg p-8 text-white">
          <h2 class="text-2xl font-bold mb-4">Lessons from the Field</h2>
          <p class="text-lg opacity-90 max-w-2xl mx-auto">
            Explore what we've learned building and operating scalable systems across industries and contexts.
          </p>
        </div>
      </section>

      <!-- Case Studies -->
      <section class="mb-16" id="case-studies">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="study in caseStudies" :key="study.id"
               class="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
               @click="openCaseStudy(study.id)">
            <div class="p-6 flex flex-col h-full">
              <div class="flex items-center gap-3 mb-4">
                <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-lg">
                  <object v-if="isSvg(study.logo)" :data="study.logo" type="image/svg+xml" class="w-8 h-8 text-[#3f7fbf]">
                    <img :src="study.logo" :alt="study.title + ' logo'" class="w-8 h-8 object-contain">
                  </object>
                  <img v-else :src="study.logo" :alt="study.title + ' logo'" class="w-8 h-8 object-contain">
                </div>
                <h3 class="text-[#101418] text-xl font-semibold">{{ study.title }}</h3>
              </div>
              <p class="text-[#5c738a] mb-4">{{ study.excerpt }} <span class="text-[#3f7fbf] hover:text-[#2d5d8f] transition-colors text-sm font-medium">Learn More →</span></p>
              
              <!-- Bottom section with tags -->
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in study.technologies" :key="tech"
                      class="px-3 py-1 bg-[#3f7fbf] bg-opacity-10 text-[#3f7fbf] rounded-full text-sm">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Case Study Modal -->
      <div v-if="selectedCaseStudy" 
           class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
           @click="closeCaseStudy">
        <div class="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto"
             @click.stop>
          <div class="p-8">
            <div class="flex justify-between items-start mb-6">
              <h2 class="text-2xl font-bold text-[#101418]">{{ selectedCaseStudy.title }}</h2>
              <button @click="closeCaseStudy" class="text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="prose max-w-none" v-html="selectedCaseStudy.content"></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <section class="text-center bg-[#3f7fbf] bg-opacity-5 rounded-lg p-8">
        <h2 class="text-[#101418] text-2xl font-bold mb-4">Ready to Build Something Great?</h2>
        <p class="text-[#5c738a] mb-6 max-w-2xl mx-auto">
          Let's discuss how our technical expertise can help you achieve your business goals.
        </p>
        <router-link to="/contact" class="inline-flex items-center px-6 py-3 bg-[#3f7fbf] text-white rounded-lg hover:bg-[#2d5d8f] transition-colors">
          Get Started
        </router-link>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { marked } from 'marked'

interface CaseStudy {
  id: string
  title: string
  technologies: string[]
  logo: string
  excerpt: string
  content?: string
}

const route = useRoute()
const selectedCaseStudy = ref<CaseStudy | null>(null)
const caseStudies = ref<CaseStudy[]>([])
const config = ref<any>(null)
const hashChangeHandler = ref<((event: HashChangeEvent) => void) | null>(null)
const popStateHandler = ref<((event: PopStateEvent) => void) | null>(null)

const isSvg = (filePath: string): boolean => {
  return filePath.toLowerCase().endsWith('.svg')
}

const fetchMarkdown = async (filePath: string): Promise<string> => {
  const response = await fetch(`/${filePath}`)
  return response.text()
}

const openCaseStudy = async (id: string) => {
  const study = caseStudies.value.find(study => study.id === id)
  if (study) {
    const configStudy = config.value.caseStudies.find((cs: any) => cs.id === id)
    if (configStudy) {
      const markdown = await fetchMarkdown(configStudy.filePath)
      study.content = marked(markdown) as string
      selectedCaseStudy.value = study
      // Update URL hash for hash-based routing
      window.location.hash = `/engineering#${id}`
    }
  }
}

const closeCaseStudy = () => {
  selectedCaseStudy.value = null
  // Update URL hash for hash-based routing
  window.location.hash = '/engineering#case-studies'
}

// Helper function to get case study ID from URL hash
const getCaseStudyIdFromHash = () => {
  const fullHash = window.location.hash
  const hashParts = fullHash.split('#')
  return hashParts.length > 2 ? hashParts[2] : null
}

// Initialize case studies from config
onMounted(async () => {
  try {
    const response = await fetch('/config.json')
    config.value = await response.json()
    
    // Initialize case studies from config
    caseStudies.value = config.value.caseStudies.map((study: any) => ({
      id: study.id,
      title: study.title,
      technologies: study.technologies,
      logo: study.logo,
      excerpt: study.excerpt
    }))

    // Handle direct links to case studies
    const caseStudyId = getCaseStudyIdFromHash()
    if (caseStudyId) {
      await openCaseStudy(caseStudyId)
    }
  } catch (error) {
    console.error('Failed to load case studies:', error)
  }
  
  // Add hashchange event listener to handle browser navigation
  const handleHashChange = async () => {
    const caseStudyId = getCaseStudyIdFromHash()
    if (caseStudyId) {
      await openCaseStudy(caseStudyId)
    } else {
      closeCaseStudy()
    }
  }
  
  // Also listen for popstate events (back/forward navigation)
  const handlePopState = async () => {
    const caseStudyId = getCaseStudyIdFromHash()
    if (caseStudyId) {
      await openCaseStudy(caseStudyId)
    } else {
      closeCaseStudy()
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
  const caseStudyId = getCaseStudyIdFromHash()
  if (caseStudyId) {
    await openCaseStudy(caseStudyId)
  } else {
    closeCaseStudy()
  }
})
</script>

<style>
.prose {
  max-width: none;
}
</style> 