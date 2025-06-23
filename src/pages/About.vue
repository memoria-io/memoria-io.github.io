<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[1200px] flex-1">
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
          To help small and medium-sized businesses grow by delivering modern, secure, and maintainable
          technology—accelerating digital transformation and enabling AI-powered solutions.

        </p>
      </section>

      <!-- Values Section -->
      <section class="mb-16">
        <h2 class="text-[#101418] text-2xl font-bold mb-8 text-center">Our Values & Strengths</h2>
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Transparency</h3>
            <p class="text-[#5c738a]">
              We foster open communication and collaborative partnerships with our clients and community.
            </p>
          </div>

          <!-- Technical Excellence -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Technical Excellence</h3>
            <p class="text-[#5c738a]">
              We maintain high standards of technical quality while ensuring long-term maintainability.
            </p>
          </div>

          <!-- Expertise -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Deep Expertise</h3>
            <p class="text-[#5c738a]">
              Specialized knowledge in JVM ecosystems and cloud infrastructure, backed by years of experience.
            </p>
          </div>

          <!-- Security -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Security-First</h3>
            <p class="text-[#5c738a]">
              Industry best practices in security, with focus on IAM, PAM, and zero-trust architecture.
            </p>
          </div>

          <!-- Observability -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Full Observability</h3>
            <p class="text-[#5c738a]">
              Comprehensive monitoring, tracing, and logging built into every solution from day one.
            </p>
          </div>

          <!-- Support -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">24/7 Support</h3>
            <p class="text-[#5c738a]">
              Round-the-clock expert support ensuring your systems run smoothly at all times.
            </p>
          </div>

          <!-- Agile -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">Agile Methodology</h3>
            <p class="text-[#5c738a]">
              Lean, iterative development process with continuous feedback and close client collaboration.
            </p>
          </div>

          <!-- Reliability -->
          <div class="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all">
            <div class="bg-[#3f7fbf] bg-opacity-10 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-[#3f7fbf]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="text-[#101418] text-lg font-semibold mb-3">System Reliability</h3>
            <p class="text-[#5c738a]">
              Building resilient, maintainable systems that you can depend on for years to come.
            </p>
          </div>
        </div>
      </section>

      <!-- About the Founder Section -->
      <section class="mb-16 bg-white rounded-lg p-10 shadow-sm">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-[#101418] text-2xl font-bold mb-8 text-center">About the Founder</h2>

          <!-- Founder Info -->
          <div class="mb-8">
            <p class="text-[#5c738a] text-lg leading-relaxed mb-6">
              Memoria IO was founded by <strong class="text-[#101418]">Ismail Marmoush</strong>, a Software Engineer
              with over a decade of experience across leading European tech companies.
            </p>
            <p class="text-[#5c738a] text-lg leading-relaxed mb-6">
              He specializes in building resilient distributed systems, developer platforms, and scalable cloud-native
              solutions—working closely with engineering teams to reduce complexity and improve delivery speed.
            </p>
            <p class="text-[#5c738a] text-lg leading-relaxed">
              You can follow his work on the <router-link to="/blog"
                class="text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">Memoria Blog</router-link>, connect on
              <a href="https://www.linkedin.com/in/ismailmarmoush/" target="_blank" rel="noopener noreferrer"
                class="text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">LinkedIn</a>, or reach out directly at
              <a href="mailto:contact@memoria.io"
                class="text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">contact@memoria.io</a>.
            </p>
          </div>

          <!-- Testimonials -->
          <div>
            <h3 class="text-[#101418] text-lg font-semibold mb-6 text-center">What Clients & Colleagues Say</h3>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <!-- Testimonial 1 -->
              <div class="bg-[#3f7fbf] bg-opacity-5 rounded-lg p-4">
                <div class="flex items-start mb-3">
                  <svg class="w-5 h-5 text-[#3f7fbf] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="text-[#5c738a] text-sm italic leading-relaxed">
                      "We managed to more than double our revenue while improving significantly along all parts of our
                      service. We built the by far best service in curated shopping and the biggest fashion freelance
                      employer in Europe within 3 years only.
                      I am especially thankful that you joined our team, as I can see how much you make a positive
                      impact. The team loves to discuss all technical complexities with you and really acknowledges your
                      skills and appreciates your opinion. You are having great ideas on how to best set-up our data
                      initiatives "
                    </p>
                    <p class="text-[#101418] font-medium text-sm mt-2">
                      — CEO, <a href="https://zalando.de" target="_blank" rel="noopener noreferrer"
                        class="text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">Zalon By Zalando</a>
                    </p>
                  </div>
                </div>
              </div>
              <!-- Testimonial 2 -->
              <div class="bg-[#3f7fbf] bg-opacity-5 rounded-lg p-4">
                <div class="flex items-start mb-3">
                  <svg class="w-5 h-5 text-[#3f7fbf] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="text-[#5c738a] text-sm italic leading-relaxed">
                      "Ismail, a highly technical and hands-on Software Architect whose expertise in AWS, Java,
                      Microservices, Kubernetes, and Domain-Driven Design is truly impressive. His disciplined approach
                      to writing software according to best practices consistently results in robust, scalable solutions
                      that meet both current and future needs."
                    </p>
                    <p class="text-[#101418] font-medium text-sm mt-2">
                      — VP Engineering, <a href="https://tamias.com" target="_blank" rel="noopener noreferrer"
                        class="text-[#3f7fbf] hover:text-[#2d5d8f] font-medium">Tamias</a>
                    </p>
                  </div>
                </div>
              </div>


              <!-- Testimonial 3 -->
              <div class="bg-[#3f7fbf] bg-opacity-5 rounded-lg p-4">
                <div class="flex items-start mb-3">
                  <svg class="w-5 h-5 text-[#3f7fbf] mt-1 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <div>
                    <p class="text-[#5c738a] text-sm italic leading-relaxed">
                      "Ismail is one of the best colleagues I've met, I've seen none of his genuine dedication
                      and effort in any other, perfectionist in a good way, ambitious and very talented and possesses
                      many skills which he's acquired in a short time span compared to the others, I sincerely hope I
                      get the chance to work with him again."
                    </p>
                    <p class="text-[#101418] font-medium text-sm mt-2">
                      — Software Architect, Nets Group
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
