<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
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
            <h3 class="text-[#101418] text-lg font-semibold mb-4">Data & Messaging</h3>
            <ul class="space-y-2 text-[#5c738a] text-sm">
              <li>Apache Kafka</li>
              <li>Apache Pulsar</li>
              <li>Event Streaming</li>
              <li>Message Queuing</li>
            </ul>
          </div>
        </div>
      </section>

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
// Component logic can be added here if needed
</script>

<style>
.prose {
  max-width: none;
}
</style> 