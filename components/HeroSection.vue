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
    <div class="relative container-site w-full py-24">
      <div class="max-w-3xl">
        <!-- 3-Logo Unified Lockup -->
        <div
          class="mb-4 md:mb-6 inline-flex flex-wrap items-center gap-3 sm:gap-4 px-3.5 py-2 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-colors duration-300">
          <!-- Main Company Brand -->
          <div class="flex items-center justify-center md:w-auto w-full ">
            <img src="/logo1.png" alt="PT Anugrah Megah Perkasa"
              class="h-6 sm:h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,163,255,0.35)]" />
          </div>

          <!-- Divider -->
          <div class="hidden sm:block w-px h-6 bg-white/20" />

          <!-- 2 Child / Partner Logos -->
          <div class="flex items-center gap-2.5">
            <span class="text-[10px] text-zinc-400 font-mono tracking-wider uppercase leading-none">Authorized
              Distributor and Partner of</span>

            <!-- Child 1: DURABUILD -->
            <div
              class="h-6 px-0.5 bg-black/80 rounded border border-white/15 flex items-center shadow-sm hover:scale-105 transition-transform duration-200">
              <img src="/logo3.png" alt="DURABUILD" class="h-6 w-auto object-contain" />
            </div>

            <!-- Child 2: WACKER -->
            <div
              class="h-6 bg-white rounded flex items-center shadow-sm hover:scale-105 transition-transform duration-200">
              <img src="/logo2.png" alt="WACKER" class="h-6 w-auto object-contain" />
            </div>
          </div>
        </div>

        <!-- Lead Heading -->
        <h1 class="font-display text-6xl md:text-9xl font-semibold text-white/95 tracking-tight leading-[1.05] mb-6">
          PT <span class="text-cobalt-accent">Anugrah</span> Megah<br />
          <span>Perkasa</span>
        </h1>

        <p class="text-zinc-300 text-lg max-w-xl mb-10 leading-relaxed">
          One-component neutral silicone weather-resistant adhesive for doors, windows, glass, and aluminum.
          <br />
          <span class="text-cobalt-accent text-3xl font-extrabold shadow-lg"> Built to seal. Built to last. </span>
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
