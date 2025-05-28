<template>
  <footer class="flex justify-center">
    <div class="flex max-w-[960px] flex-1 flex-col">
      <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
        <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <router-link v-for="link in footerLinks" 
             :key="link.text"
             :to="link.route"
             class="text-[#5c738a] text-base font-normal leading-normal min-w-40">
             {{ link.text }}
          </router-link>
        </div>
        <div class="flex items-center justify-center gap-4">
          <a href="https://linkedin.com/company/m-io" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=flat&logo=linkedin&logoColor=white" alt="LinkedIn" />
          </a>
          <a href="https://github.com/memoria-io" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white" alt="GitHub" />
          </a>
          <a href="https://twitter.com/memoria_io" target="_blank" rel="noopener noreferrer">
            <img src="https://img.shields.io/badge/Twitter-1DA1F2?style=flat&logo=twitter&logoColor=white" alt="Twitter" />
          </a>
        </div>
        <p class="text-[#5c738a] text-base font-normal leading-normal">@2025 Memoria IO, S.L. All rights reserved.</p>
      </footer>
    </div>
  </footer>
</template>

<script setup lang="ts">
const footerLinks = [
  { text: 'Privacy Policy', route: '/privacy-policy' },
  { text: 'Terms of Service', route: '/terms-of-service' },
  { text: 'Contact Us', route: '/contact' }
]
</script>
