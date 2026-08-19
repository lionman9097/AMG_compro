<template>
  <!-- N5 Floating pill nav -->
  <header class="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-2xl">
    <nav
      class="flex items-center justify-between px-5 py-3 rounded-full border transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)] backdrop-blur-xl"
      :class="scrolled ? 'bg-white/95 border-zinc-200/90 shadow-[0_12px_40px_rgba(0,0,0,0.12)]' : 'bg-white/85 border-zinc-200/70 hover:shadow-[0_10px_35px_rgba(0,0,0,0.1)]'"
    >
      <NuxtLink to="/" class="flex items-center gap-1.5 shrink-0">
        <img src="/logo1.png" alt="PT Anugerah Megah Perkasa Logo" class="max-h-5 sm:max-h-6 w-auto object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.25)] hover:drop-shadow-[0_4px_10px_rgba(0,0,0,0.35)] transition-all duration-200" />
      </NuxtLink>

      <div class="hidden sm:flex items-center gap-6">
        <NuxtLink
          v-for="link in navLinks"
          :key="link.to"
          :to="link.to"
          class="text-[13px] font-medium text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
        >
          {{ link.label }}
        </NuxtLink>
      </div>

      <button
        class="sm:hidden p-1"
        @click="mobileOpen = !mobileOpen"
        aria-label="Toggle navigation"
      >
        <Menu v-if="!mobileOpen" class="w-5 h-5 text-zinc-600" />
        <X v-else class="w-5 h-5 text-zinc-600" />
      </button>
    </nav>

    <!-- Mobile dropdown -->
    <div
      v-if="mobileOpen"
      class="mt-2 mx-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-zinc-200 shadow-[0_12px_36px_rgba(0,0,0,0.15)] p-4 flex flex-col gap-3 sm:hidden"
    >
      <NuxtLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-sm font-medium text-zinc-600 hover:text-zinc-900 transition-colors py-1"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </NuxtLink>
    </div>
  </header>
</template>

<script setup lang="ts">
import { Menu, X } from '@lucide/vue'

const scrolled = ref(false)
const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
]

const route = useRoute()
watch(() => route.path, () => { mobileOpen.value = false })

onMounted(() => {
  const handleScroll = () => { scrolled.value = window.scrollY > 20 }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>
