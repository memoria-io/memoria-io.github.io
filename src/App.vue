<template>
  <div class="min-h-screen">
    <header class="bg-gray-800 text-white p-4">
      <nav>
        <ul class="flex space-x-4">
          <li>
            <router-link to="/" class="hover:text-blue-300 transition-colors" active-class="text-blue-300">
              Home
            </router-link>
          </li>
          <li>
            <router-link to="/products" class="hover:text-blue-300 transition-colors" active-class="text-blue-300">
              Products
            </router-link>
          </li>
          <li>
            <router-link to="/about" class="hover:text-blue-300 transition-colors" active-class="text-blue-300">
              About
            </router-link>
          </li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto p-4">
      <router-view></router-view>
    </main>

    <footer class="bg-gray-800 text-white p-4 mt-8">
      <p class="text-center">&copy; 2024 My Site</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import './assets/styles/tailwind.css'
</script>

<style>
.router-link-active {
  @apply text-blue-300;
}
</style>
