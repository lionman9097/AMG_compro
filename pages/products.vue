<template>
  <div>
    <!-- Page header: Stat-Led (Image Documents & Products) -->
    <section class="container-site pt-36 pb-10 md:pt-44 md:pb-14">
      <div class="stat-figure text-zinc-900 tnum">
        Products
      </div>
      <h1 class="font-display text-3xl md:text-4xl text-zinc-900 mt-4 mb-3 tracking-tight">
        Showcase & Documentation
      </h1>
      <p class="text-zinc-600 text-base md:text-lg max-w-2xl leading-relaxed">
        Explore our authentic product images, technical data sheets (TDS), color options, and application standards for DURABUILD neutral and acetic silicone sealants.
      </p>
    </section>

    <!-- MAIN FEATURE: IMAGE CAROUSEL SECTION -->
    <section class="container-site pb-20 md:pb-24 border-t border-zinc-200/80 pt-6">
      <div class="mb-6 flex items-center justify-between">
        <span class="hidden sm:inline-block text-xs font-mono text-zinc-400">
          Click "Inspect Image" for full high-res view
        </span>
      </div>

      <!-- IMAGE CAROUSEL COMPONENT -->
      <ImageCarousel />
    </section>

    <!-- TECHNICAL SPECIFICATIONS & APPLICATION OVERVIEW -->
    <section class="container-site border-t border-zinc-200 py-16">
      <div class="max-w-3xl">
        <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
          Technical Summary
        </span>
        <h3 class="font-display text-2xl text-zinc-900 font-semibold mb-4 tracking-tight">
          DURABUILD Neutral Silicone Weather Resistant Adhesive
        </h3>
        <p class="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
          DURABUILD is a one-component moisture-cure silicone weather-resistant sealant engineered for high-durability bonding on glass, tiles, and aluminum doors, windows, and curtain wall structures.
        </p>

        <!-- Quick Spec Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono">
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Density</span>
            <span class="text-zinc-900 font-bold text-sm">1.50 g/cm³</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Extrudability</span>
            <span class="text-zinc-900 font-bold text-sm">62 g / 5s</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Surface Dry</span>
            <span class="text-zinc-900 font-bold text-sm">22 min</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Hardness</span>
            <span class="text-zinc-900 font-bold text-sm">38 Shore A</span>
          </div>
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '~/components/ImageCarousel.vue'
import CTABanner from '~/components/CTABanner.vue'

useHead({ title: 'DURABUILD Product Showcase & Technical Documentation' })
</script>
