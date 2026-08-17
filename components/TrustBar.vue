<template>
  <!-- Supporting stats grid -->
  <section class="container-site py-20 md:py-24">
    <div class="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
      <div v-for="stat in company.stats" :key="stat.label">
        <div class="font-display text-4xl md:text-5xl text-zinc-900 font-semibold tnum tracking-tight">
          {{ stat.value }}<span v-if="stat.suffix" class="text-cobalt-accent">{{ stat.suffix }}</span>
        </div>
        <p class="stat-label mt-2">{{ stat.label }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { company } from '~/data/company'
</script>
