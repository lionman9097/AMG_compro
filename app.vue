<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return 'PT Anugrah Megah Perkasa — Industrial Silicone Sealants & DURABUILD Distributor'
    if (titleChunk.includes('PT Anugrah Megah Perkasa')) return titleChunk
    return `${titleChunk} — PT Anugrah Megah Perkasa`
  },
})
</script>
