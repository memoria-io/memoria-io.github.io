<template>
  <footer class="flex justify-center">
    <div class="flex max-w-[960px] flex-1 flex-col">
      <footer class="flex flex-col gap-6 px-5 py-10 text-center @container">
        <div class="flex flex-wrap items-center justify-center gap-6 @[480px]:flex-row @[480px]:justify-around">
          <router-link v-for="link in footerLinks" 
             :key="link.text"
             :to="link.route"
             class="text-[#5c738a] text-base font-normal leading-normal min-w-40 hover:text-[#3f7fbf] transition-colors">
             {{ link.text }}
          </router-link>
        </div>
        <div class="flex items-center justify-center gap-6">
          <!-- LinkedIn -->
          <a href="https://linkedin.com/company/m-io" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-[#5c738a] hover:text-[#0077B5] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
          </a>
          
          <!-- GitHub -->
          <a href="https://github.com/memoria-io" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-[#5c738a] hover:text-[#181717] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
            </svg>
          </a>
          
          <!-- Twitter -->
          <a href="https://twitter.com/memoria_io" 
             target="_blank" 
             rel="noopener noreferrer"
             class="text-[#5c738a] hover:text-[#1DA1F2] transition-colors">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
            </svg>
          </a>
        </div>
        <p class="text-[#5c738a] text-base font-normal leading-normal">©2025 Memoria IO, S.L. All rights reserved.</p>
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
