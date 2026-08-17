<template>
  <div class="relative w-full">
    <!-- Top Bar: Category Filter & Slide Controls -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
      <!-- Category Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
        <button
          class="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 border"
          :class="selectedCategory === null
            ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
            : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'"
          @click="setCategory(null)"
        >
          All Products ({{ products.length }})
        </button>
        <button
          v-for="cat in productCategories"
          :key="cat.id"
          class="px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 shrink-0 border"
          :class="selectedCategory === cat.id
            ? 'bg-zinc-900 text-white border-zinc-900 shadow-sm'
            : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'"
          @click="setCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Slide Counter & Next/Prev Controls -->
      <div class="flex items-center gap-4 shrink-0 self-end md:self-auto">
        <div class="font-mono text-xs font-semibold text-zinc-400 tracking-wider">
          <span class="text-zinc-900 font-bold text-sm">{{ String(currentIndex + 1).padStart(2, '0') }}</span>
          <span class="mx-1">/</span>
          <span>{{ String(filteredProducts.length).padStart(2, '0') }}</span>
        </div>

        <div class="flex items-center gap-2">
          <button
            class="w-10 h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-zinc-700 disabled:hover:border-zinc-300 disabled:cursor-not-allowed transition-all duration-200"
            :disabled="currentIndex === 0"
            @click="prevSlide"
            aria-label="Previous product"
          >
            <ChevronLeft class="w-5 h-5" />
          </button>
          <button
            class="w-10 h-10 rounded-full border border-zinc-300 bg-white flex items-center justify-center text-zinc-700 hover:bg-zinc-900 hover:text-white hover:border-zinc-900 disabled:opacity-30 disabled:hover:bg-white disabled:hover:text-zinc-700 disabled:hover:border-zinc-300 disabled:cursor-not-allowed transition-all duration-200"
            :disabled="currentIndex === filteredProducts.length - 1"
            @click="nextSlide"
            aria-label="Next product"
          >
            <ChevronRight class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>

    <!-- MAIN CAROUSEL STAGE -->
    <div
      class="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900 text-white shadow-xl"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <div v-if="currentProduct" class="p-6 sm:p-8 md:p-10 transition-all duration-300">
        <!-- Top Metadata Lockup -->
        <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div class="flex items-center gap-3">
            <span class="px-3 py-1 rounded-full bg-cobalt-accent text-white text-xs font-mono font-semibold uppercase tracking-wider">
              {{ currentProduct.brand }}
            </span>
            <span class="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              {{ currentProduct.id.toUpperCase() }}
            </span>
          </div>

          <span class="text-xs font-mono text-cobalt-accent/90 border border-cobalt-accent/30 px-3 py-1 rounded-full bg-cobalt-accent/10">
            {{ currentProduct.tagline }}
          </span>
        </div>

        <!-- Product Title & Main Specs Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
          <!-- Left Col: Product Title & Description -->
          <div class="lg:col-span-7 space-y-4">
            <h2 class="font-display text-2xl sm:text-3xl md:text-4xl text-white font-semibold leading-tight tracking-tight">
              {{ currentProduct.name }}
            </h2>
            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed">
              {{ currentProduct.description }}
            </p>

            <!-- Key Characters List -->
            <div v-if="currentProduct.characters && currentProduct.characters.length" class="pt-2">
              <h4 class="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-2.5">Key Performance Characters</h4>
              <ul class="space-y-1.5 text-xs text-zinc-300">
                <li v-for="(char, i) in currentProduct.characters.slice(0, 3)" :key="i" class="flex items-start gap-2">
                  <CheckCircle2 class="w-4 h-4 text-cobalt-accent shrink-0 mt-0.5" />
                  <span>{{ char }}</span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Right Col: Technical Highlights Card -->
          <div class="lg:col-span-5 bg-zinc-900/90 border border-zinc-800 rounded-2xl p-5 sm:p-6 space-y-4">
            <h3 class="text-xs font-mono text-zinc-400 uppercase tracking-widest flex items-center gap-2 border-b border-zinc-800 pb-3">
              <Sparkles class="w-4 h-4 text-cobalt-accent" />
              Technical Summary
            </h3>

            <div class="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Density</span>
                <span class="font-mono text-sm font-semibold text-white">{{ currentProduct.specs.density }}</span>
              </div>
              <div>
                <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Shore Hardness</span>
                <span class="font-mono text-sm font-semibold text-white">{{ currentProduct.specs.hardness }}</span>
              </div>
              <div>
                <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Tack-Free Time</span>
                <span class="font-mono text-sm font-semibold text-white">{{ currentProduct.specs.tackFreeTime }}</span>
              </div>
              <div>
                <span class="text-zinc-500 uppercase text-[10px] tracking-wider block">Curing Speed</span>
                <span class="font-mono text-sm font-semibold text-white">{{ currentProduct.specs.curingSpeed }}</span>
              </div>
            </div>

            <div class="pt-2 border-t border-zinc-800 flex items-center justify-between text-xs">
              <span class="text-zinc-400">Temp Range:</span>
              <span class="font-mono font-medium text-cobalt-accent">{{ currentProduct.specs.temperatureRange }}</span>
            </div>
          </div>
        </div>

        <!-- Action Bar: Expand Full Technical Data Sheet (TDS) -->
        <div class="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            class="inline-flex items-center gap-2 text-xs font-semibold text-cobalt-accent hover:text-white transition-colors duration-200"
            @click="showTdsModal = !showTdsModal"
          >
            <FileText class="w-4 h-4" />
            <span>{{ showTdsModal ? 'Hide Full Technical Data Sheet (TDS)' : 'View Full Technical Data Sheet (TDS)' }}</span>
            <ChevronDown class="w-4 h-4 transition-transform duration-200" :class="showTdsModal ? 'rotate-180' : ''" />
          </button>

          <NuxtLink to="/contact" class="pill-cta-primary !py-2.5 !px-6 !text-xs">
            Inquire For Bulk Supply
          </NuxtLink>
        </div>

        <!-- EXPANDABLE TDS DRAWER INSIDE CAROUSEL STAGE -->
        <div v-if="showTdsModal" class="mt-6 pt-6 border-t border-zinc-800 space-y-6 text-xs animate-fadeIn">
          <!-- TDS Table -->
          <div v-if="currentProduct.tds && currentProduct.tds.length" class="overflow-x-auto">
            <h4 class="font-mono text-xs uppercase tracking-widest text-zinc-400 mb-3">Verified Laboratory Test Results</h4>
            <table class="w-full text-left border-collapse rounded-xl overflow-hidden border border-zinc-800">
              <thead class="bg-zinc-950 text-zinc-400 font-mono text-[10px] uppercase">
                <tr>
                  <th class="py-2.5 px-3">Test Parameter</th>
                  <th class="py-2.5 px-3">Standard Requirement</th>
                  <th class="py-2.5 px-3">Test Result</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-zinc-800/80 bg-zinc-900/60">
                <tr v-for="(row, i) in currentProduct.tds" :key="i" class="hover:bg-zinc-800/40">
                  <td class="py-2 px-3 font-medium text-white">{{ row.test }}</td>
                  <td class="py-2 px-3 text-zinc-400 font-mono">{{ row.standard }}</td>
                  <td class="py-2 px-3 font-semibold text-cobalt-accent font-mono">{{ row.result }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Application Steps & Safety -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div v-if="currentProduct.applicationMethods" class="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-2">
              <h5 class="font-mono text-xs uppercase text-zinc-400">Application Methods</h5>
              <div v-for="step in currentProduct.applicationMethods" :key="step.step" class="text-zinc-300">
                <strong class="text-cobalt-accent font-mono">Step {{ step.step }}: {{ step.title }}</strong>
                <p class="text-zinc-400 text-[11px] mt-0.5">{{ step.description }}</p>
              </div>
            </div>

            <div v-if="currentProduct.storageSafety" class="bg-zinc-900 p-4 rounded-xl border border-zinc-800 space-y-2">
              <h5 class="font-mono text-xs uppercase text-amber-400">Storage & Handling Precautions</h5>
              <p class="text-zinc-300"><strong class="text-white">Shelf Life:</strong> {{ currentProduct.storageSafety.storagePeriod }}</p>
              <ul class="list-disc list-inside text-zinc-400 text-[11px] space-y-1">
                <li v-for="(att, i) in currentProduct.storageSafety.attention" :key="i">{{ att }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- QUICK SELECT THUMBNAILS / PRODUCT STRIP -->
    <div class="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
      <button
        v-for="(prod, idx) in filteredProducts"
        :key="prod.id"
        class="p-3.5 rounded-2xl border text-left transition-all duration-200 relative overflow-hidden"
        :class="currentIndex === idx
          ? 'bg-zinc-900 text-white border-zinc-900 shadow-md ring-2 ring-cobalt-accent'
          : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-400 hover:bg-zinc-50'"
        @click="selectSlide(idx)"
      >
        <span class="text-[10px] font-mono uppercase tracking-widest block mb-1" :class="currentIndex === idx ? 'text-cobalt-accent' : 'text-zinc-400'">
          {{ prod.brand }} • {{ prod.id.toUpperCase() }}
        </span>
        <h4 class="font-display font-semibold text-xs leading-snug line-clamp-2" :class="currentIndex === idx ? 'text-white' : 'text-zinc-900'">
          {{ prod.name }}
        </h4>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  FileText,
  Sparkles,
  ChevronDown,
} from '@lucide/vue'
import { products, productCategories, type Product } from '~/data/products'

const selectedCategory = ref<string | null>(null)
const currentIndex = ref(0)
const showTdsModal = ref(false)

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products
  return products.filter((p) => p.category === selectedCategory.value)
})

const currentProduct = computed<Product | undefined>(() => filteredProducts.value[currentIndex.value])

const setCategory = (catId: string | null) => {
  selectedCategory.value = catId
  currentIndex.value = 0
  showTdsModal.value = false
}

const nextSlide = () => {
  if (currentIndex.value < filteredProducts.value.length - 1) {
    currentIndex.value++
    showTdsModal.value = false
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
    showTdsModal.value = false
  }
}

const selectSlide = (idx: number) => {
  currentIndex.value = idx
  showTdsModal.value = false
}

// Touch swipe handling
let touchStartX = 0
let touchEndX = 0

const handleTouchStart = (e: TouchEvent) => {
  touchStartX = e.changedTouches[0].screenX
}

const handleTouchEnd = (e: TouchEvent) => {
  touchEndX = e.changedTouches[0].screenX
  if (touchStartX - touchEndX > 50) {
    nextSlide()
  } else if (touchEndX - touchStartX > 50) {
    prevSlide()
  }
}

// Keyboard arrow controls
const handleKeydown = (e: KeyboardEvent) => {
  if (e.key === 'ArrowRight') nextSlide()
  if (e.key === 'ArrowLeft') prevSlide()
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
