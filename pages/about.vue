<template>
  <div>
    <!-- Page header: Stat-Led -->
    <section class="container-site pt-40 pb-16 md:pt-48 md:pb-20">
      <div class="stat-figure text-zinc-900 tnum">
        {{ company.founded }}
      </div>
      <h1 class="font-display text-2xl md:text-3xl text-zinc-900 mt-4 mb-4 tracking-tight">
        About PT Anugrah Megah Perkasa
      </h1>
      <p class="text-zinc-500 text-lg max-w-2xl leading-relaxed">
        {{ company.shortDescription }}
      </p>
    </section>

    <!-- Long Document: Company Story -->
    <section class="container-site section-spacing border-t border-zinc-200">
      <div class="max-w-2xl">
        <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">01 · Our Story</span>

        <p class="text-[15px] text-zinc-600 leading-relaxed mb-5">{{ company.description }}</p>

        <p class="text-[15px] text-zinc-600 leading-relaxed mb-5">
          As the authorized supplier of DURABUILD products, we provide full technical datasheets (TDS), substrate compatibility testing, and application guidance for door and window glazing, aluminum curtain walls, structural joints, and extreme temperature industrial applications.
        </p>

        <!-- Milestones as prose -->
        <div class="mt-12 space-y-4">
          <div v-for="milestone in company.milestones" :key="milestone.year" class="flex gap-6">
            <span class="text-xs font-mono text-zinc-400 w-10 shrink-0 pt-0.5">{{ milestone.year }}</span>
            <div>
              <h4 class="text-sm font-semibold text-zinc-900">{{ milestone.title }}</h4>
              <p class="text-sm text-zinc-500">{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision as prose -->
    <section class="container-site section-spacing border-t border-zinc-200">
      <div class="max-w-2xl">
        <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">02 · Purpose</span>

        <h3 class="font-display text-lg text-zinc-900 mb-3">Our Mission</h3>
        <p class="text-[15px] text-zinc-600 leading-relaxed mb-8">{{ company.mission }}</p>

        <h3 class="font-display text-lg text-zinc-900 mb-3">Our Vision</h3>
        <p class="text-[15px] text-zinc-600 leading-relaxed">{{ company.vision }}</p>
      </div>
    </section>

    <!-- Core Values as prose list -->
    <section class="container-site section-spacing border-t border-zinc-200">
      <div class="max-w-2xl">
        <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-6">03 · Values</span>

        <div class="space-y-6">
          <div v-for="value in company.values" :key="value.title">
            <h4 class="text-sm font-semibold text-zinc-900 mb-1">{{ value.title }}</h4>
            <p class="text-sm text-zinc-500 leading-relaxed">{{ value.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/company'
import CTABanner from '~/components/CTABanner.vue'

useHead({ title: 'About Us' })
</script>
