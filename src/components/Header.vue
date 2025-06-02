<template>
  <header class="flex justify-center whitespace-nowrap">
    <div class="flex w-full max-w-[1200px] items-center justify-between px-10 py-5">
      <div class="flex items-center gap-4 text-[#101418]">
        <a href="/">
          <img src="/src/assets/images/logo.png" alt="Memoria IO Logo" class="h-10 w-auto">
        </a>
      </div>
      <div class="flex flex-1 justify-end gap-8">
        <nav class="flex items-center gap-14">
          <router-link to="/" class="text-[#101418] text-sm font-medium leading-normal">Home</router-link>
          <router-link to="/products" class="text-[#101418] text-sm font-medium leading-normal">Products</router-link>
          <router-link to="/engineering" class="text-[#101418] text-sm font-medium leading-normal">Engineering</router-link>
          <router-link to="/about" class="text-[#101418] text-sm font-medium leading-normal">About</router-link>
        </nav>
        <div class="flex gap-2">
          <router-link
            to="/contact"
            class="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#eaedf1] text-[#101418] text-sm font-bold leading-normal tracking-[0.015em]"
          >
            <span class="truncate">Contact us</span>
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>
