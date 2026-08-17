<template>
  <!-- Hero: full-height image showcase + Stat-Led overlay -->
  <section class="relative min-h-screen flex items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 bg-zinc-950">
      <img :src="heroImage" alt="Industrial silicone sealant application" class="w-full h-full object-cover"
        loading="eager" />
    </div>

    <!-- Dark gradient overlays for text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/40 to-zinc-950/85" />
    <div class="absolute inset-0 bg-gradient-to-tr from-zinc-950/40 via-transparent to-cobalt-accent/10" />

    <!-- Content -->
    <div class="relative container-site w-full py-24 md:py-0">
      <div class="max-w-3xl">
        <!-- Main logo -->
        <div class="mb-10">
          <img :src="heroImage" alt="Industrial silicone sealant application" class="w-full h-full object-cover"
            loading="eager" />
        </div>

        <!-- Lead figure -->
        <div class="stat-figure text-white/95 animate-tick tnum">
          18<span class="text-cobalt-accent">+</span>
        </div>

        <h1
          class="font-display text-3xl md:text-4xl lg:text-5xl text-white mt-4 mb-6 leading-tight tracking-tight text-balance">
          Years of engineering bonds<br class="hidden sm:block" /> that last.
        </h1>

        <p class="text-zinc-300 text-lg max-w-xl mb-10 leading-relaxed">
          Premium industrial silicone sealants for construction, manufacturing, and specialty applications. Trusted by
          2,500+ clients across the Asia-Pacific.
        </p>

        <div class="flex flex-wrap gap-3 mb-12">
          <NuxtLink to="/products" class="pill-cta-primary">
            Explore Products
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink to="/contact"
            class="pill-cta-secondary !border-zinc-400 !text-zinc-200 hover:!border-white hover:!text-white">
            Get a Quote
          </NuxtLink>
        </div>

        <!-- Secondary logos row -->
        <div class="flex items-center gap-6">
          <span class="text-[11px] text-zinc-500 font-medium tracking-widest uppercase">Certified</span>
          <div class="w-px h-5 bg-zinc-600" />
          <!-- ISO 9001 badge -->
          <svg class="h-6 w-auto opacity-60 hover:opacity-90 transition-opacity duration-200" viewBox="0 0 90 32"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="89" height="31" rx="4" stroke="white" stroke-opacity="0.4" fill="none" />
            <text x="45" y="21" text-anchor="middle" font-family="'Inter', system-ui, sans-serif" font-weight="600"
              font-size="11" fill="white" fill-opacity="0.7" letter-spacing="1">ISO 9001</text>
          </svg>
          <!-- CE Certified badge -->
          <svg class="h-6 w-auto opacity-60 hover:opacity-90 transition-opacity duration-200" viewBox="0 0 90 32"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="89" height="31" rx="4" stroke="white" stroke-opacity="0.4" fill="none" />
            <text x="45" y="21" text-anchor="middle" font-family="'Inter', system-ui, sans-serif" font-weight="600"
              font-size="11" fill="white" fill-opacity="0.7" letter-spacing="1">CE Certified</text>
          </svg>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 text-xs font-medium tracking-widest uppercase">
      <div class="w-px h-8 bg-gradient-to-b from-zinc-400 to-transparent animate-pulse" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const heroImage = 'https://lf-cdn.trae.ai/obj/trae-ai-image-sg/page_image/352319a52bbbb4ac1b2bf61304aded1c.jpeg'
</script>
