<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#101418] tracking-light text-[32px] font-bold leading-tight">Welcome to Innovatech Solutions</p>
          <p class="text-[#5c738a] text-sm font-normal leading-normal">
            Discover our innovative products and solutions designed to transform your business.
          </p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-[#101418] text-xl font-bold mb-2">Our Products</h2>
          <p class="text-[#5c738a] mb-4">
            Explore our range of cutting-edge solutions designed to meet your business needs.
          </p>
          <router-link 
            to="/products" 
            class="inline-flex items-center text-[#3f7fbf] hover:text-[#2d5d8f] font-medium"
          >
            View Products →
          </router-link>
        </div>

        <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
          <h2 class="text-[#101418] text-xl font-bold mb-2">About Us</h2>
          <p class="text-[#5c738a] mb-4">
            Learn about our mission, team, and commitment to innovation.
          </p>
          <router-link 
            to="/about" 
            class="inline-flex items-center text-[#3f7fbf] hover:text-[#2d5d8f] font-medium"
          >
            Learn More →
          </router-link>
        </div>
      </div>

      <div class="p-4 mt-4">
        <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] mb-4">Why Choose Us</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Innovation</h3>
            <p class="text-[#5c738a] text-sm">Cutting-edge solutions that keep you ahead of the competition.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Reliability</h3>
            <p class="text-[#5c738a] text-sm">Trusted by businesses worldwide with proven results.</p>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-[#101418] text-lg font-semibold">Support</h3>
            <p class="text-[#5c738a] text-sm">24/7 expert support to ensure your success.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Add any logic or imports here if needed
</script>
