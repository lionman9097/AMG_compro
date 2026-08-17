<template>
  <div class="relative w-full">
    <!-- Carousel Main Stage -->
    <div
      class="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-950 shadow-xl group"
      @touchstart="handleTouchStart"
      @touchend="handleTouchEnd"
    >
      <!-- Image Display -->
      <div class="relative min-h-[380px] sm:min-h-[480px] md:min-h-[580px] w-full flex items-center justify-center bg-zinc-950 p-4 sm:p-6 md:p-8">
        <img
          :src="currentSlide.src"
          :alt="currentSlide.title"
          class="max-h-[500px] md:max-h-[620px] w-auto max-w-full object-contain rounded-xl shadow-2xl transition-all duration-300 select-none"
        />

        <!-- Top Right: Fullscreen / Inspect Button -->
        <button
          class="absolute top-4 right-4 z-10 px-3 py-1.5 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-white border border-zinc-700/80 backdrop-blur-md text-xs font-mono flex items-center gap-1.5 transition-all duration-200"
          @click="isLightboxOpen = true"
          title="Inspect full resolution image"
        >
          <Maximize2 class="w-3.5 h-3.5 text-cobalt-accent" />
          <span class="hidden sm:inline">Inspect Image</span>
        </button>

        <!-- Slide Content Overlay (Bottom Gradient Pill) -->
        <div class="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent">
          <div class="max-w-2xl">
            <span class="px-2.5 py-0.5 rounded-full bg-cobalt-accent text-white text-[10px] font-mono font-semibold uppercase tracking-widest inline-block mb-2">
              {{ currentSlide.tag }}
            </span>
            <h3 class="font-display text-lg sm:text-2xl text-white font-semibold tracking-tight mb-1">
              {{ currentSlide.title }}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              {{ currentSlide.caption }}
            </p>
          </div>
        </div>

        <!-- Next / Prev Controls -->
        <button
          class="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/80 hover:bg-white hover:text-zinc-950 text-white border border-zinc-700/80 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="currentIndex === 0"
          @click="prevSlide"
          aria-label="Previous slide"
        >
          <ChevronLeft class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          class="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-900/80 hover:bg-white hover:text-zinc-950 text-white border border-zinc-700/80 backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-lg disabled:opacity-30 disabled:cursor-not-allowed"
          :disabled="currentIndex === slides.length - 1"
          @click="nextSlide"
          aria-label="Next slide"
        >
          <ChevronRight class="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>

    <!-- THUMBNAILS & SLIDE INDICATORS STRIP -->
    <div class="mt-5 flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Thumbnail Selector Cards -->
      <div class="grid grid-cols-3 gap-3 w-full sm:w-auto flex-1">
        <button
          v-for="(slide, idx) in slides"
          :key="slide.id"
          class="p-2 sm:p-3 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3 relative overflow-hidden group"
          :class="currentIndex === idx
            ? 'bg-zinc-900 text-white border-zinc-900 shadow-md ring-2 ring-cobalt-accent'
            : 'bg-white text-zinc-700 border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50'"
          @click="selectSlide(idx)"
        >
          <img
            :src="slide.src"
            :alt="slide.title"
            class="w-10 h-10 sm:w-12 sm:h-12 object-cover rounded-lg shrink-0 border border-zinc-700/30"
          />
          <div class="min-w-0 hidden md:block">
            <span class="text-[9px] font-mono uppercase tracking-widest block text-zinc-400">
              0{{ idx + 1 }} • {{ slide.tag }}
            </span>
            <h4 class="font-display font-semibold text-xs truncate" :class="currentIndex === idx ? 'text-white' : 'text-zinc-900'">
              {{ slide.shortTitle }}
            </h4>
          </div>
        </button>
      </div>

      <!-- Slide Counter & Dots -->
      <div class="flex items-center gap-3 shrink-0 self-center">
        <span class="font-mono text-xs font-semibold text-zinc-500">
          0{{ currentIndex + 1 }} / 0{{ slides.length }}
        </span>
        <div class="flex items-center gap-1.5">
          <button
            v-for="(_, idx) in slides"
            :key="idx"
            class="h-2 rounded-full transition-all duration-300"
            :class="currentIndex === idx ? 'w-6 bg-cobalt-accent' : 'w-2 bg-zinc-300 hover:bg-zinc-400'"
            @click="selectSlide(idx)"
            :aria-label="`Go to slide ${idx + 1}`"
          />
        </div>
      </div>
    </div>

    <!-- LIGHTBOX / INSPECT MODAL -->
    <div
      v-if="isLightboxOpen"
      class="fixed inset-0 z-50 bg-zinc-950/95 backdrop-blur-xl flex flex-col items-center justify-center p-4 animate-fadeIn"
      @click="isLightboxOpen = false"
    >
      <button
        class="absolute top-6 right-6 p-2 rounded-full bg-zinc-900 hover:bg-zinc-800 text-white border border-zinc-700 transition-colors"
        @click="isLightboxOpen = false"
      >
        <X class="w-6 h-6" />
      </button>

      <div class="max-w-5xl max-h-[90vh] overflow-auto p-2" @click.stop>
        <img
          :src="currentSlide.src"
          :alt="currentSlide.title"
          class="max-w-full max-h-[85vh] object-contain rounded-xl mx-auto shadow-2xl"
        />
        <div class="text-center mt-4 text-white">
          <h4 class="font-display text-lg font-semibold">{{ currentSlide.title }}</h4>
          <p class="text-xs text-zinc-400 mt-1">{{ currentSlide.caption }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { ChevronLeft, ChevronRight, Maximize2, X } from '@lucide/vue'

export interface ImageSlide {
  id: string
  src: string
  title: string
  shortTitle: string
  tag: string
  caption: string
}

const slides: ImageSlide[] = [
  {
    id: 'slide-durabuild-main',
    src: '/durabuild_main.png',
    title: 'DURABUILD Neutral & Acetic Silicone High Quality Sealants',
    shortTitle: 'DURABUILD Product Line',
    tag: 'PRODUCT OVERVIEW',
    caption: 'One-component moisture cure silicone weather resistant adhesive.',
  },
  {
    id: 'slide-technical-tds',
    src: '/technical.png',
    title: 'Technical Data Sheet (TDS) & Application Methods',
    shortTitle: 'TDS & Specifications',
    tag: 'TECHNICAL SHEET',
    caption: 'Laboratory test standards: Density 1.50 g/cm³, Shore A 38, Extrudability 62 g/5s, Surface dry 22 min, 95%+ adhesion pass rate.',
  },
  {
    id: 'slide-color-options',
    src: '/color_options.jpg',
    title: 'Available Colors & Application Substrates',
    shortTitle: 'Colors & Substrates',
    tag: 'COLOR & APPLICATION',
    caption: 'Black, White, Transparent (Clear), Brown options. High compatibility for glass, tiles, aluminum frames, and structural joints.',
  },
]

const currentIndex = ref(0)
const isLightboxOpen = ref(false)

const currentSlide = computed(() => slides[currentIndex.value])

const nextSlide = () => {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++
  } else {
    currentIndex.value = 0 // Loop back
  }
}

const prevSlide = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  } else {
    currentIndex.value = slides.length - 1
  }
}

const selectSlide = (idx: number) => {
  currentIndex.value = idx
}

// Touch swipe controls
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

// Keyboard controls
const handleKeydown = (e: KeyboardEvent) => {
  if (isLightboxOpen.value && e.key === 'Escape') {
    isLightboxOpen.value = false
  } else if (e.key === 'ArrowRight') {
    nextSlide()
  } else if (e.key === 'ArrowLeft') {
    prevSlide()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})
</script>
