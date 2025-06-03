<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <!-- Banner Image -->
      <div class="w-full mb-12">
        <img src="/src/assets/images/memoria_banner.png" alt="Memoria Banner"
          class="w-full h-auto rounded-lg shadow-md">
      </div>

      <!-- Hero Section -->
      <div class="mb-12 text-center">
        <h1 class="text-[#101418] text-4xl font-bold mb-4">Cloud-Native by Design</h1>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          Helping you deliver better software—faster—through smart design, secure and scalable architecture, and deep observability.
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <!-- Left Column -->
        <div class="space-y-8">
          <section>
            <h2 class="text-[#101418] text-2xl font-bold mb-4">Our Core Consulting Services</h2>
            <ul class="space-y-2 text-[#5c738a]">
              <li class="flex items-start">
                <span class="text-[#3f7fbf] mr-2">→</span>
                <span>Software Development</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#3f7fbf] mr-2">→</span>
                <span>Data Analytics</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#3f7fbf] mr-2">→</span>
                <span>IT Strategy</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#3f7fbf] mr-2">→</span>
                <span>Cloud Services</span>
              </li>
              <li class="flex items-start">
                <span class="text-[#3f7fbf] mr-2">→</span>
                <span>Cybersecurity and compliance</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 class="text-[#101418] text-2xl font-bold mb-4">What We're Building</h2>
            <ul class="space-y-2 text-[#5c738a]">
              <li class="flex items-start">
                <span class="text-green-500 mr-2">●</span>
                <span>Cloud-native Java Microservice Framework – Released</span>
              </li>
              <li class="flex items-start">
                <span class="text-yellow-500 mr-2">●</span>
                <span>Infrastructure as a Service – Alpha release</span>
              </li>
              <li class="flex items-start">
                <span class="text-blue-500 mr-2">●</span>
                <span>SaaS Tool for Knowledge Management and Collaboration – In progress</span>
              </li>
              <li class="flex items-start">
                <span class="text-brown-500 mr-2">●</span>
                <span>Open source utilities <a href="https://github.com/memoria-io" target="_blank"
                    rel="noopener noreferrer"> <svg class="w-4 h-4 inline-block" fill="none" stroke="currentColor"
                      viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </span>
              </li>
            </ul>
          </section>
        </div>

        <!-- Right Column -->
        <div class="space-y-8">
          <section>
            <h2 class="text-[#101418] text-2xl font-bold mb-4">Clients We Serve</h2>
            <div class="bg-white rounded-lg p-6 shadow-sm space-y-4">
              <div class="flex items-center">
                <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span class="text-[#5c738a]">Startups and scale-ups</span>
              </div>
              <div class="flex items-center">
                <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <span class="text-[#5c738a]">SMEs undergoing digital transformation</span>
              </div>
              <div class="flex items-center">
                <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full mr-4">
                  <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <span class="text-[#5c738a]">Technical teams in need of cloud-native guidance</span>
              </div>
            </div>
          </section>

          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-[#101418] text-xl font-bold mb-4">Ready to Get Started?</h2>
            <p class="text-[#5c738a] mb-4">
              Learn more about our products and services or get in touch with our team.
            </p>
            <div class="flex gap-4">
              <router-link to="/products"
                class="inline-flex items-center px-4 py-2 bg-[#3f7fbf] text-white rounded-lg hover:bg-[#2d5d8f] transition-colors">
                View Products
              </router-link>
              <router-link to="/contact"
                class="inline-flex items-center px-4 py-2 border border-[#3f7fbf] text-[#3f7fbf] rounded-lg hover:bg-[#3f7fbf] hover:text-white transition-colors">
                Contact Us
              </router-link>
            </div>
          </div>
        </div>
      </div>

      <!-- Features Grid -->
      <section class="bg-white rounded-lg p-8 shadow-sm">
        <h2 class="text-[#101418] text-2xl font-bold mb-8 text-center">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Expertise</h3>
            <p class="text-[#5c738a] text-sm">Deep expertise in JVM ecosystems and cloud infrastructure.</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Agile</h3>
            <p class="text-[#5c738a] text-sm">Lean, iterative development with close client collaboration.</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Support</h3>
            <p class="text-[#5c738a] text-sm">24/7 expert support to ensure your success.</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Reliability</h3>
            <p class="text-[#5c738a] text-sm">Focus on secure, resilient, and maintainable systems.</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Security</h3>
            <p class="text-[#5c738a] text-sm">Industry best practices in IAM, PAM, and zero-trust architecture.</p>
          </div>

          <div class="flex flex-col items-center text-center p-4">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mb-4">
              <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-2">Observability</h3>
            <p class="text-[#5c738a] text-sm">Built-in monitoring, tracing, and logging from day one.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
