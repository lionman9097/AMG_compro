<template>
  <div class="container-site">
    <!-- Numeral prefix -->
    <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-4">{{ numeral }}</span>

    <!-- Heading -->
    <h2 class="font-display text-3xl md:text-4xl text-zinc-900 mb-3 leading-tight">
      {{ title }}
    </h2>

    <p v-if="subtitle" class="text-zinc-500 max-w-xl text-[15px] leading-relaxed">
      {{ subtitle }}
    </p>

    <hr class="hairline-rule mt-8" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  numeral: string
  title: string
  subtitle?: string
}>()
</script>
