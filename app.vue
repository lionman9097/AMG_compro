<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return 'PT Anugerah Megah Perkasa — Trusted Partner for Quality Sealant Solutions'
    if (titleChunk.includes('PT Anugerah Megah Perkasa')) return titleChunk
    return `${titleChunk} — PT Anugerah Megah Perkasa`
  },
})
</script>
