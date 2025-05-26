<template>
  <div class="relative flex size-full min-h-screen flex-col bg-gray-50 group/design-root overflow-x-hidden" style='font-family: Inter, "Noto Sans", sans-serif;'>
    <div class="layout-container flex h-full grow flex-col">
      <!-- Centered Header -->
      <header class="flex justify-center whitespace-nowrap">
        <div class="flex w-full max-w-[1200px] items-center justify-between px-10 py-5">
          <div class="flex items-center gap-4 text-[#101418]">
            <a href="/">
              <img src="/src/assets/images/logo.png" alt="Memoria IO Logo" class="h-14   w-auto">
            </a>
          </div>
          <div class="flex flex-1 justify-end gap-8">
            <nav class="flex items-center gap-14">
              <router-link to="/" class="text-[#101418] text-sm font-medium leading-normal">Home</router-link>
              <router-link to="/products" class="text-[#101418] text-sm font-medium leading-normal">Products</router-link>
              <router-link to="/solutions" class="text-[#101418] text-sm font-medium leading-normal">Solutions</router-link>
              <router-link to="/about" class="text-[#101418] text-sm font-medium leading-normal">About</router-link>
            </nav>
            <div class="flex gap-2">
              <button
                class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedf1] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span class="truncate">Contact Sales</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <!-- Main Content -->
      <main class="flex-1">
        <router-view></router-view>
      </main>

      <!-- Centered Footer -->
      <footer class="flex justify-center">
        <div class="flex max-w-[960px] flex-1 flex-col">
          <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
            <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
              <a v-for="link in footerLinks" 
                 :key="link"
                 class="text-[#5c738a] text-base font-normal leading-normal min-w-40" 
                 href="#">{{ link }}</a>
            </div>
            <p class="text-[#5c738a] text-base font-normal leading-normal">@2025 Memoria IO. All rights reserved.</p>
          </footer>
        </div>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import './assets/styles/tailwind.css'

const footerLinks = ['Privacy Policy', 'Terms of Service', 'Contact Us']
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');
</style>
