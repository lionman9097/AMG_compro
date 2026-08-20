<template>
  <section class="section-spacing border-t border-zinc-200">
    <div class="container-site">
      <SectionHeader
        numeral="01"
        title="Product Categories"
        subtitle="High-performance silicone sealants and adhesives from authorized partners, engineered for professional field applications."
      />

      <div class="mt-14 md:mt-18">
        <NuxtLink
          v-for="(cat, i) in categories"
          :key="cat.id"
          :to="`/products?category=${cat.id}`"
          class="group flex items-center gap-5 md:gap-8 py-6 first:pt-0 border-b border-zinc-100 last:border-b-0 hover:border-zinc-200/80 transition-colors duration-200"
        >
          <!-- Decorative numeral -->
          <span class="font-display text-4xl md:text-5xl font-semibold text-zinc-200 group-hover:text-cobalt-accent/20 transition-colors duration-300 tabular-nums leading-none w-12 md:w-14 shrink-0 text-right select-none">
            {{ String(i + 1).padStart(2, '0') }}
          </span>

          <!-- Icon badge -->
          <div class="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-zinc-50 group-hover:bg-cobalt-accent/10 flex items-center justify-center shrink-0 transition-colors duration-200">
            <component :is="cat.icon" class="w-[18px] h-[18px] text-zinc-400 group-hover:text-cobalt-accent transition-colors duration-200" />
          </div>

          <!-- Copy -->
          <div class="flex-1 min-w-0">
            <h3 class="font-display text-lg md:text-xl text-zinc-900 mb-1 tracking-tight">
              {{ cat.label }}
            </h3>
            <p class="text-sm text-zinc-500 leading-relaxed max-w-lg">{{ cat.description }}</p>
          </div>

          <!-- Arrow -->
          <ArrowRight class="w-4 h-4 text-zinc-300 group-hover:text-cobalt-accent group-hover:translate-x-0.5 transition-all duration-200 shrink-0" />
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ArrowRight, FlaskConical, Shield, Sparkles } from '@lucide/vue'
import SectionHeader from '~/components/SectionHeader.vue'

const categories = [
  {
    id: 'neutral-cure',
    label: 'Neutral Cure Weatherproofing (DURABUILD)',
    description: 'One-component moisture cure silicone weather resistant adhesive for doors, windows, glass, and aluminum curtain wall assemblies.',
    icon: Shield,
  },
  {
    id: 'acetic-cure',
    label: 'General Purpose Acetic Silicone (WACKER® GP)',
    description: 'Fast-curing acetoxy silicone rubber with 800 g/min extrusion rate and 520% elongation for window glazing, stainless sash, and plumbing.',
    icon: FlaskConical,
  },
  {
    id: 'multipurpose',
    label: 'Multipurpose Premium Sealant & Adhesive (SUPER SHIELD)',
    description: 'Oil-free multipurpose protective sealant with high strength bond for construction, roofing, gutters, glass, and ACP panels.',
    icon: Sparkles,
  },
]
</script>
