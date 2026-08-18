<template>
  <!-- Hero: full-height image showcase + Stat-Led overlay (max 100vh) -->
  <section class="relative h-screen max-h-[100dvh] flex items-center overflow-hidden">
    <!-- Background image -->
    <div class="absolute inset-0 bg-zinc-950">
      <img :src="heroImage" alt="Industrial silicone sealant application" class="w-full h-full object-cover"
        loading="eager" />
    </div>

    <!-- Dark gradient overlays for text readability -->
    <div class="absolute inset-0 bg-gradient-to-b from-zinc-950/75 via-zinc-950/45 to-zinc-950/90" />
    <div class="absolute inset-0 bg-gradient-to-tr from-zinc-950/50 via-transparent to-cobalt-accent/10" />

    <!-- Content: scaled for max 100vh fit -->
    <div class="relative container-site w-full pt-20 pb-16 sm:pt-24 sm:pb-20 flex flex-col justify-center">
      <div class="max-w-3xl">
        <!-- 3-Logo Unified Lockup -->
        <div
          class="mb-3 sm:mb-4 lg:mb-6 inline-flex flex-wrap items-center gap-2.5 sm:gap-3.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-zinc-900/70 backdrop-blur-xl border border-white/15 hover:border-white/30 shadow-[0_8px_32px_rgba(0,0,0,0.35)] transition-colors duration-300">
          <!-- Main Company Brand -->
          <div class="flex items-center justify-center">
            <img src="/logo1.png" alt="PT Anugrah Megah Perkasa"
              class="h-5 sm:h-6 md:h-7 w-auto object-contain drop-shadow-[0_2px_8px_rgba(0,163,255,0.35)]" />
          </div>

          <!-- Divider -->
          <div class="hidden sm:block w-px h-5 sm:h-6 bg-white/20" />

          <!-- 2 Child / Partner Logos -->
          <div class="flex items-center gap-2 sm:gap-2.5">
            <span class="text-[9px] sm:text-[10px] text-zinc-400 font-mono tracking-wider uppercase leading-none">
              Authorized Distributor & Partner of
            </span>

            <!-- Child 1: DURABUILD -->
            <div
              class="h-5 sm:h-6 px-1 bg-black/80 rounded border border-white/15 flex items-center shadow-sm hover:scale-105 transition-transform duration-200">
              <img src="/logo3.png" alt="DURABUILD" class="h-4 sm:h-5 w-auto object-contain" />
            </div>

            <!-- Child 2: WACKER -->
            <div
              class="h-5 sm:h-6 px-1 bg-white rounded flex items-center shadow-sm hover:scale-105 transition-transform duration-200">
              <img src="/logo2.png" alt="WACKER" class="h-4 sm:h-5 w-auto object-contain" />
            </div>
          </div>
        </div>

        <!-- Lead Heading -->
        <h1
          class="font-display text-8xl font-semibold text-white/95 tracking-tight leading-[1.05] mb-3 sm:mb-4 lg:mb-6">
          PT <span class="text-cobalt-accent">Anugrah</span> Megah<br />
          <span>Perkasa</span>
        </h1>

        <!-- Description & Slogan -->
        <div class="max-w-xl mb-6 sm:mb-8">
          <p class="text-zinc-300 text-sm sm:text-base md:text-lg leading-relaxed">
            One-component neutral silicone weather-resistant adhesive for doors, windows, glass, and aluminum.
          </p>
          <p
            class="mt-2 text-cobalt-accent text-lg sm:text-xl md:text-2xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,163,255,0.4)]">
            Built to seal. Built to last.
          </p>
        </div>

        <!-- CTAs -->
        <div class="flex flex-wrap items-center gap-3">
          <NuxtLink to="/products"
            class="pill-cta-primary !py-2.5 !px-6 sm:!py-3 sm:!px-8 text-sm sm:text-base shadow-lg shadow-black/40">
            Explore Products
            <ArrowRight class="w-4 h-4" />
          </NuxtLink>
          <NuxtLink to="/contact"
            class="pill-cta-secondary !py-2.5 !px-6 sm:!py-3 sm:!px-8 text-sm sm:text-base !border-zinc-400/80 !text-zinc-200 hover:!border-white hover:!text-white backdrop-blur-sm">
            Get a Quote
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Scroll indicator -->
    <div
      class="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 text-xs font-medium tracking-widest uppercase pointer-events-none">
      <div class="w-px h-6 sm:h-8 bg-gradient-to-b from-zinc-400 to-transparent animate-pulse" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const heroImage = 'https://lf-cdn.trae.ai/obj/trae-ai-image-sg/page_image/352319a52bbbb4ac1b2bf61304aded1c.jpeg'
</script>
