<template>
  <div class="space-y-5">
    <div v-for="item in infoItems" :key="item.label">
      <p class="text-[13px] font-medium text-zinc-700 mb-0.5">{{ item.label }}</p>
      <p class="text-[15px] text-zinc-500">{{ item.value }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/company'

const infoItems = [
  { label: 'Address', value: company.contact.address },
  { label: 'Phone', value: company.contact.phone },
  { label: 'Email', value: company.contact.email },
  { label: 'Business Hours', value: company.contact.hours },
]
</script>
