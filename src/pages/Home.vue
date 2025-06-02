<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <!-- Banner Image -->
      <div class="w-full mb-8">
        <img src="/src/assets/images/memoria_banner.png" alt="Memoria Banner"
          class="w-full h-auto rounded-lg shadow-md">
      </div>

      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Cloud-Native by Design</p>
          <p class="text-[#5c738a] text-sm font-normal leading-normal">
            We help you ship better software through architecture, automation, and observability.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-[#101418] text-xl font-bold mb-2">Our Products</h2>
          <p class="text-[#5c738a] mb-4">
            Explore our range of cutting-edge solutions designed to meet your business needs.
          </p>
          <router-link to="/products" class="inline-flex items-center text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">
            View Products →
          </router-link>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-[#101418] text-xl font-bold mb-2">About Us</h2>
          <p class="text-[#5c738a] mb-4">
            Learn about our mission, team, and commitment to innovation.
          </p>
          <router-link to="/about" class="inline-flex items-center text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">
            Learn More →
          </router-link>
        </div>
      </div>

      <div class="p-4 mt-4">
        <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Experties</h3>
            <p class="text-[#5c738a] text-sm">Deep expertise in JVM ecosystems and cloud infrastructure.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Agile</h3>
            <p class="text-[#5c738a] text-sm">Lean, iterative development with close client collaboration.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Support</h3>
            <p class="text-[#5c738a] text-sm">24/7 expert support to ensure your success.</p>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Reliability</h3>
            <p class="text-[#5c738a] text-sm">Focus on secure, resilient, and maintainable systems.</p>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Security</h3>
            <p class="text-[#5c738a] text-sm">Industry best practices in IAM, PAM, and zero-trust architecture.</p>
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Observability</h3>
            <p class="text-[#5c738a] text-sm">Built-in monitoring, tracing, and logging from day one.</p>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
