<template>
  <div class="px-40 flex flex-1 justify-center py-12">
    <div class="max-w-[1200px] w-full">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-[#101418] mb-4">Contact Us</h1>
        <p class="text-[#5c738a] text-lg max-w-2xl mx-auto">
          We'd love to hear from you! Whether you have a question about our services, need technical support, 
          or want to explore how we can help your business, our team is here to help.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <!-- Sales Section -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-[#101418] mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M3 3h18v18H3V3zm4 10h2v4H7v-4zm4-6h2v10h-2V7zm4 3h2v7h-2v-7z"/>
              </svg>
              Sales Inquiries
            </h2>
            <div class="space-y-3 text-[#5c738a]">
              <a href="mailto:sales@memoria.io" 
                 class="flex items-center hover:text-[#3f7fbf] transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                sales@memoria.io
              </a>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Monday - Friday, 9:00 AM - 6:00 PM (CET)
              </div>
            </div>
          </div>

          <!-- General Inquiries Section -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-[#101418] mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
              General Inquiries
            </h2>
            <div class="space-y-3 text-[#5c738a]">
              <a href="mailto:contact@memoria.io" 
                 class="flex items-center hover:text-[#3f7fbf] transition-colors">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                contact@memoria.io
              </a>
              <div class="flex items-center">
                <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                Response time: within 24 hours
              </div>
            </div>
          </div>

          <!-- Location Section -->
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-[#101418] mb-4 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Office Location
            </h2>
            <div class="space-y-2 text-[#5c738a]">
              <p class="font-medium">Memoria IO, S.L.</p>
              <p>Barcelona, Spain</p>
            </div>
          </div>
        </div>

        <!-- Social & Connect -->
        <div class="space-y-8">
          <div class="bg-white rounded-lg p-6 shadow-sm">
            <h2 class="text-xl font-semibold text-[#101418] mb-6 flex items-center">
              <svg class="w-5 h-5 mr-2 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"/>
              </svg>
              Connect With Us
            </h2>
            <div class="grid grid-cols-1 gap-4">
              <!-- LinkedIn -->
              <a href="https://linkedin.com/company/m-io" 
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center p-4 rounded-lg border border-[#e5e7eb] hover:border-[#3f7fbf] transition-colors group">
                <svg class="w-6 h-6 text-[#0077B5] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
                <div>
                  <div class="font-medium text-[#101418] group-hover:text-[#3f7fbf]">LinkedIn</div>
                  <div class="text-sm text-[#5c738a]">Follow us for company updates</div>
                </div>
              </a>

              <!-- GitHub -->
              <a href="https://github.com/memoria-io"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center p-4 rounded-lg border border-[#e5e7eb] hover:border-[#3f7fbf] transition-colors group">
                <svg class="w-6 h-6 text-[#181717] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <div>
                  <div class="font-medium text-[#101418] group-hover:text-[#3f7fbf]">GitHub</div>
                  <div class="text-sm text-[#5c738a]">Check out our open-source projects</div>
                </div>
              </a>

              <!-- Twitter -->
              <a href="https://twitter.com/memoria_io"
                 target="_blank"
                 rel="noopener noreferrer"
                 class="flex items-center p-4 rounded-lg border border-[#e5e7eb] hover:border-[#3f7fbf] transition-colors group">
                <svg class="w-6 h-6 text-[#1DA1F2] mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
                <div>
                  <div class="font-medium text-[#101418] group-hover:text-[#3f7fbf]">Twitter</div>
                  <div class="text-sm text-[#5c738a]">Stay updated with our latest news</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MarkdownPage from '../components/MarkdownPage.vue'
</script> 