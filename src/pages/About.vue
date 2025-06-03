<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <!-- Hero Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <h1 class="text-[#101418] text-5xl font-bold mb-4">Memoria IO, S.L.</h1>
          <div class="w-20 h-1 bg-[#3f7fbf] mx-auto mb-4"></div>
          <p class="text-[#3f7fbf] text-xl font-medium tracking-wide uppercase">Technology Consulting & Software
            Engineering</p>
        </div>

        <div class="max-w-3xl mx-auto text-center">
          <p class="text-[#5c738a] text-xl leading-relaxed mb-6">
            We partner with startups and growing businesses to shape their digital future. Our expertise helps
            organizations
            <span class="text-[#3f7fbf] font-medium">modernize</span>,
            <span class="text-[#3f7fbf] font-medium">scale</span>, and
            <span class="text-[#3f7fbf] font-medium">secure</span>
            their technology infrastructure.
          </p>

          <div class="flex items-center justify-center space-x-2 text-[#5c738a]">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
            </svg>
            <p class="text-base">
              Remote-first
              <span class="mx-2">•</span>
              Global reach
              <span class="mx-2">•</span>
              On-site available
            </p>
          </div>
        </div>
      </div>

      <!-- Vision Section -->
      <section class="mb-16 bg-white rounded-lg p-10 shadow-sm">
        <div class="flex items-center mb-8">
          <div class="bg-[#3f7fbf] bg-opacity-10 p-4 rounded-full mr-6">
            <svg class="w-8 h-8 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <h2 class="text-[#101418] text-2xl font-bold">Our Vision</h2>
        </div>
        <p class="text-[#5c738a] text-lg leading-relaxed pl-20">
          To empower teams with modern, maintainable, and secure technology that supports long-term growth and
          accelerates delivery.
        </p>
      </section>

      <!-- Values Section -->
      <section class="mb-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Simplicity -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Simplicity Over Complexity</h3>
            <p class="text-[#5c738a]">
              We believe in elegant solutions that solve problems effectively without unnecessary complexity.
            </p>
          </div>

          <!-- Transparency -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Transparency and Open Collaboration</h3>
            <p class="text-[#5c738a]">
              We foster open communication and collaborative partnerships with our clients and community.
            </p>
          </div>

          <!-- Excellence -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Technical Excellence</h3>
            <p class="text-[#5c738a]">
              We maintain high standards of technical quality while ensuring long-term maintainability.
            </p>
          </div>
        </div>
      </section>

      <!-- Open Source Section -->
      <section class="bg-[#3f7fbf] bg-opacity-5 rounded-lg p-8 text-center">
        <div class="max-w-3xl mx-auto">
          <h2 class="text-[#101418] text-2xl font-bold mb-4">Open Source Commitment</h2>
          <p class="text-[#5c738a] text-lg mb-6">
            We're building open tools and frameworks to support the developer community.
          </p>
          <a href="https://github.com/memoria-io/" target="_blank" rel="noopener noreferrer"
            class="inline-flex items-center px-6 py-3 bg-[#3f7fbf] text-white rounded-lg hover:bg-[#2d5d8f] transition-colors">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            Visit Our GitHub
          </a>
        </div>
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
