<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  titleTemplate: (titleChunk) => {
    if (!titleChunk) return 'Sealant Distributor Indonesia | PT Anugerah Megah Perkasa'
    if (titleChunk.includes('PT Anugerah Megah Perkasa') || titleChunk.includes('AMP')) return titleChunk
    return `${titleChunk} | PT Anugerah Megah Perkasa`
  },
})
</script>
