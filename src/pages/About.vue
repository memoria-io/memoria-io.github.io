<template>
  <div class="px-40 flex flex-1 justify-center py-5">
    <div class="layout-content-container flex flex-col max-w-[960px] flex-1">
      <div class="flex flex-wrap justify-between gap-3 p-4">
        <div class="flex min-w-72 flex-col gap-3">
          <p class="text-[#101418] tracking-light text-[32px] font-bold leading-tight">About Innovatech Solutions</p>
          <p class="text-[#5c738a] text-sm font-normal leading-normal">
            We're a team of passionate innovators dedicated to transforming industries through cutting-edge technology. Our mission is to empower businesses with solutions
            that drive growth, efficiency, and success.
          </p>
        </div>
      </div>
      <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Mission</h2>
      <p class="text-[#101418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        At Innovatech Solutions, we believe in the power of technology to solve complex challenges and create a better future. Our mission is to develop and deliver
        innovative software solutions that enable businesses to thrive in the digital age. We are committed to excellence, integrity, and customer satisfaction in everything
        we do.
      </p>
      <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Our Story</h2>
      <p class="text-[#101418] text-base font-normal leading-normal pb-3 pt-1 px-4">
        Founded in 2015 by a group of visionary engineers and entrepreneurs, Innovatech Solutions started with a simple idea: to build software that makes a real difference.
        Over the years, we've grown from a small startup to a leading provider of SaaS solutions, serving clients across various industries. Our journey has been marked by
        continuous innovation, a relentless pursuit of quality, and a deep commitment to our customers' success.
      </p>
      <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Meet the Team</h2>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
        <TeamMember
          v-for="member in teamMembers"
          :key="member.name"
          :name="member.name"
          :role="member.role"
          :image="member.image"
        />
      </div>
      <h2 class="text-[#101418] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">Customer Success Stories</h2>
      <div class="flex overflow-y-auto [-ms-scrollbar-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div class="flex items-stretch p-4 gap-3">
          <SuccessStory
            v-for="story in successStories"
            :key="story.title"
            :title="story.title"
            :description="story.description"
            :image="story.image"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface SuccessStory {
  title: string;
  description: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Ethan Carter',
    role: 'CEO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOQEUrOvkRKCZO17hRAvAP7G81NipuSeytj9vK3sjm0epRpHZ9KfWDw6W2IabQdavDqjkw-tofDkGgaGq3xPV709TrnKM23CCENtRciEaga7GE-uBAEljkn6ZgrBEG8FJjWiswOiaIAyBptrA8iXRR1Yzg_z4kR-iDwZwoALB0_ptNqkO3Hi7kqvxmFVBYygjs_4EfISVdixyvXNT-FHhiFShis_PPk1ixmfSr00MpcjzQpAupzaWMnHQib8GWNQp_5_bZcBYpSwCL'
  },
  {
    name: 'Olivia Bennett',
    role: 'Head of Product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBeKd3AdiLaj6AGcOK1YwlhLKkzPjb40MM1BCdWRddreKoJ4cBbS52NSgiiGmy0um_fYyeYVBgLVXu0rovZWFKZJk8EEJBVXCeV-oXC3Y3h3-SJbuF41LH4h7wshCqdblawZpXNfPdT3Vy1X9UQBXaZpH5bX_gUEmgcYlCkXI1r29PYWa6JjVGn2D0mQn1ROc5HiejMUtW6fxb8PUV5zCUAhwYG3BI8nMV0s2ziZv8nOxFCkcN1EblN479aRU_rZBRTUHt3A9hS7BHb'
  },
  {
    name: 'Noah Thompson',
    role: 'CTO',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUGRza9tokkCo-Eru0e-c9AQLl04QMHNdTodqIfrayrEDtwpsYXIuPOdggzzBj9riU6_uhxH3UjNjk4khBnhJuBJjKB9wnaA28PJhkj2EV4FCRvuL8PDHVY_SlvnvQnVLaWFKy_EPZio4YWGF78mBX-sKfPZTRRSiVJup2YDgwppxOPHnXTUjVizcAlu4p6XCOIRd1HQLNLukvz__cxEUq9rru4I1rcP9btLeThFDp6UCyKgasON-OA6Hnjumnmq7OsGHMnwFoJmN3'
  },
  {
    name: 'Ava Harper',
    role: 'Head of Marketing',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUOgHJCaT_1s8EkC2DCjREty7erYgDpbYoSaeFbPvdauEC0dPAOXztykXeL3jiWiBCFLpTTQ0BDbcdYD5p-8nB8Yobd8f6tL4yXLgrSLlqDf1Y6zmSCxKvt9dZKDJLB8U8CvvPU5BIU_Z8CZDjufly8YFbVbtGdHq_MaB_rag99ffUC_kcXJ7jp3CNOPXg7GHUcZ5PgmxMv6pnc3mXBS1GsOkR8goKIVa_yA5c7JDm312kWMVCnXsCRetMhRV6Z21K7BVxJTvgUhtv'
  }
];

const successStories: SuccessStory[] = [
  {
    title: 'Transforming Operations for Global Enterprises',
    description: 'Learn how we helped a leading global enterprise optimize their operations and achieve significant cost savings.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwsha3_oY3zW6Q4vCU5o_RdgD8ELB9Kfb0PS2siSW2nZsFSTh7-5htWPYUkjX_6oq60oJdDvWrYCPGzM3jF_WMDyl5OfYZI7o2LRyNACEx7faiWKUjaY5bCPr-nfkutq9lI9m1dgH3tqYhmfmpCWu1nYEImFK3bk7DB76Ex0UFxQfdrvTO0ZKDR2Lx6cBIz1L8lsu-wDdu8xa3C7pQaF6Xxj2RFrKMCZphNWFyUlZrrn58bALV4BO7W52Dp_5M6-TDtmpM693hRedh'
  },
  {
    title: 'Streamlining Production Processes for Efficiency',
    description: 'Discover how our solutions improved production efficiency and reduced downtime for a major manufacturing company.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADmeimfYfIhKeUVIdfJYwbhXYC3JmV1YZEDuKZhXv0jNk4U2yVbqjO0v9sBv9LIc9I9ghG-XfzGD-b6iYLHss6u-xLA7E825WCDQV3KzAw2JP4pHQId4Tnuo6itkUwmGzYN4tR3-RrRFFzcjygD3FO_rahWgsBtPqZTtAFtF5M__DHkonBz5L9sXsNX4y6wvqZRQPEKYUXxrrJBA-n2b8oDLIJSw-aa638IqTkKheAk5VFF49ZD6RJ4G4bsdaekSCvefeVTJyXxcvR'
  },
  {
    title: 'Enhancing Customer Experience in Retail',
    description: 'See how we empowered a retail chain to deliver personalized experiences and boost customer loyalty.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3sW82eHMPCvMlJ3aL2WMQoJAoxCGc6jgdvYPVjZc-S1D4U2-qIXZn72V44Z4634DRhyapklgLplHn3Mf7Q8EMarQiJQRyp6ah7GTSMkisgB7Dayj8ddzwfRnQLjrjntucWSbwNeE1QltbOBV04yvK4i6JACDMinqUbaAbdptPsITzV32Ih-reze1zuthLXcNzBcapQR6lhgaX2_yJuzzutCTuXOIqDZ1pqt35DDibgvMRxSDErjSpKdKxjr7kAfimP4STp_TRHaU_'
  }
];
</script>

<script lang="ts">
// Define components
const TeamMember = defineComponent({
  props: {
    name: { type: String, required: true },
    role: { type: String, required: true },
    image: { type: String, required: true }
  },
  template: `
    <div class="flex flex-col gap-3 text-center pb-3">
      <div class="px-4">
        <div
          class="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
          :style="{ backgroundImage: 'url(' + image + ')' }"
        ></div>
      </div>
      <div>
        <p class="text-[#101418] text-base font-medium leading-normal">{{ name }}</p>
        <p class="text-[#5c738a] text-sm font-normal leading-normal">{{ role }}</p>
      </div>
    </div>
  `
});

const SuccessStory = defineComponent({
  props: {
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  },
  template: `
    <div class="flex h-full flex-1 flex-col gap-4 rounded-lg min-w-60">
      <div
        class="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl flex flex-col"
        :style="{ backgroundImage: 'url(' + image + ')' }"
      ></div>
      <div>
        <p class="text-[#101418] text-base font-medium leading-normal">{{ title }}</p>
        <p class="text-[#5c738a] text-sm font-normal leading-normal">{{ description }}</p>
      </div>
    </div>
  `
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;900&family=Noto+Sans:wght@400;500;700;900&display=swap');
</style>
