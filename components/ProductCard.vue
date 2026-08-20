<template>
  <div
    class="group relative block py-6 border-b border-zinc-200/70 last:border-b-0 hover:bg-zinc-50/60 transition-all duration-200 cursor-pointer"
    @click="isExpanded = !isExpanded">
    <!-- Left accent bar (appears on hover or when expanded) -->
    <div class="absolute left-0 top-0 bottom-0 w-1 bg-cobalt-accent transition-opacity duration-200"
      :class="isExpanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'" />

    <div class="px-3 sm:px-4">
      <div class="flex items-start justify-between gap-6">
        <!-- Left: product info -->
        <div class="min-w-0 flex-1">
          <div class="flex items-center gap-3 mb-1.5 flex-wrap">
            <span class="text-[11px] font-semibold tracking-widest uppercase text-cobalt-accent">
              {{ categoryLabel }}
            </span>
            <span class="text-[10px] px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-mono font-medium">
              {{ product.brand }}
            </span>
            <span class="text-[11px] text-zinc-400 font-mono">{{ product.id.toUpperCase() }}</span>
          </div>

          <h3
            class="font-display text-lg sm:text-xl text-zinc-900 mb-1.5 group-hover:text-cobalt-accent transition-colors duration-150 tracking-tight flex items-center gap-2">
            {{ product.name }}
            <ChevronDown class="w-4 h-4 text-zinc-400 group-hover:text-cobalt-accent transition-transform duration-200"
              :class="isExpanded ? 'rotate-180 text-cobalt-accent' : ''" />
          </h3>

          <p class="text-sm text-zinc-600 leading-relaxed max-w-2xl">{{ product.description }}</p>
        </div>

        <!-- Right: quick specs preview (Uniform column widths) -->
        <div class="hidden md:grid grid-cols-3 w-[330px] lg:w-[360px] gap-x-4 shrink-0 text-right">
          <div class="w-full min-w-0">
            <dt class="text-[10px] text-zinc-400 uppercase tracking-widest font-medium mb-0.5 truncate">Density</dt>
            <dd class="text-[13px] font-medium text-zinc-800 font-mono truncate">{{ product.specs.density }}</dd>
          </div>
          <div class="w-full min-w-0">
            <dt class="text-[10px] text-zinc-400 uppercase tracking-widest font-medium mb-0.5 truncate">Hardness</dt>
            <dd class="text-[13px] font-medium text-zinc-800 font-mono truncate">{{ product.specs.hardness }}</dd>
          </div>
          <div class="w-full min-w-0">
            <dt class="text-[10px] text-zinc-400 uppercase tracking-widest font-medium mb-0.5 truncate">Tack-Free</dt>
            <dd class="text-[13px] font-medium text-zinc-800 font-mono truncate">{{ product.specs.tackFreeTime }}</dd>
          </div>
        </div>
      </div>

      <!-- EXPANDABLE TECHNICAL DATA SHEET & SPECIFICATION DRAWER -->
      <div v-if="isExpanded"
        class="mt-6 pt-6 border-t border-zinc-200/80 space-y-6 text-sm text-zinc-700 animate-fadeIn cursor-default"
        @click.stop>
        <!-- Section 1: Characters & Features -->
        <div v-if="product.characters && product.characters.length"
          class="bg-zinc-50 p-4 rounded-xl border border-zinc-200/60">
          <h4
            class="font-display font-semibold text-zinc-900 text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <CheckCircle2 class="w-4 h-4 text-cobalt-accent" />
            Product Characters & Key Features
          </h4>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <li v-for="(char, i) in product.characters" :key="i" class="flex items-start gap-2 text-zinc-700">
              <span class="w-1.5 h-1.5 rounded-full bg-cobalt-accent mt-1.5 shrink-0" />
              <span>{{ char }}</span>
            </li>
          </ul>
        </div>

        <!-- Section 2: Technical Data Sheet (TDS Table) -->
        <div v-if="product.tds && product.tds.length" class="overflow-x-auto">
          <h4
            class="font-display font-semibold text-zinc-900 text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <FileText class="w-4 h-4 text-cobalt-accent" />
            Technical Data Sheet (TDS)
          </h4>
          <table class="w-full text-left text-xs border-collapse rounded-lg overflow-hidden border border-zinc-200">
            <thead class="bg-zinc-900 text-white font-mono uppercase text-[10px] tracking-wider">
              <tr>
                <th class="py-2.5 px-3">Test Parameter</th>
                <th class="py-2.5 px-3">Standard Requirement</th>
                <th class="py-2.5 px-3">Test Result</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-zinc-200 bg-white">
              <tr v-for="(row, i) in product.tds" :key="i" class="hover:bg-zinc-50/80">
                <td class="py-2 px-3 font-medium text-zinc-900">{{ row.test }}</td>
                <td class="py-2 px-3 text-zinc-600 font-mono">{{ row.standard }}</td>
                <td class="py-2 px-3 font-semibold text-cobalt-accent font-mono">{{ row.result }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Section 3: Application Methods & Substrates -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <!-- Application Areas -->
          <div
            v-if="product.applicationAreas && product.applicationAreas.length"
            class="bg-white p-4 rounded-xl border border-zinc-200"
            :class="(!product.colors || product.colors.length === 0) && (!product.packaging || product.packaging.length === 0) ? 'md:col-span-2' : ''"
          >
            <h4
              class="font-display font-semibold text-zinc-900 text-xs tracking-wider uppercase mb-2 flex items-center gap-2">
              <Layers class="w-4 h-4 text-cobalt-accent" />
              Application Area & Substrates
            </h4>
            <ul class="space-y-1.5 text-xs text-zinc-600">
              <li v-for="(area, i) in product.applicationAreas" :key="i" class="flex items-start gap-2">
                <span class="text-cobalt-accent">•</span>
                <span>{{ area }}</span>
              </li>
            </ul>
          </div>

          <!-- Color & Packaging (Only if data exists) -->
          <div
            v-if="(product.colors && product.colors.length > 0) || (product.packaging && product.packaging.length > 0)"
            class="bg-white p-4 rounded-xl border border-zinc-200 space-y-3"
          >
            <h4
              class="font-display font-semibold text-zinc-900 text-xs tracking-wider uppercase flex items-center gap-2">
              <Box class="w-4 h-4 text-cobalt-accent" />
              Color & Package Formats
            </h4>
            <div v-if="product.colors && product.colors.length > 0" class="text-xs">
              <span class="text-zinc-400 uppercase font-mono text-[10px] tracking-wider block mb-1">Available
                Colors</span>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="c in product.colors" :key="c"
                  class="px-2 py-0.5 bg-zinc-100 border border-zinc-200 rounded text-zinc-800 text-[11px] font-medium">
                  {{ c }}
                </span>
              </div>
            </div>
            <div v-if="product.packaging && product.packaging.length > 0" class="text-xs">
              <span class="text-zinc-400 uppercase font-mono text-[10px] tracking-wider block mb-1">Package Size</span>
              <div class="flex flex-wrap gap-1.5">
                <span v-for="p in product.packaging" :key="p"
                  class="px-2 py-0.5 bg-zinc-900 text-white rounded text-[11px] font-mono">
                  {{ p }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Section 4: Application Instructions -->
        <div v-if="product.applicationMethods && product.applicationMethods.length" class="bg-white p-4 rounded-xl border border-zinc-200">
          <h4 class="font-display font-semibold text-zinc-900 text-xs tracking-wider uppercase mb-3 flex items-center gap-2">
            <Wrench class="w-4 h-4 text-cobalt-accent" />
            Application Instructions (How to Use)
          </h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div v-for="step in product.applicationMethods" :key="step.step" class="p-3 rounded-lg bg-zinc-50 border border-zinc-200/60">
              <span class="font-mono text-xs text-cobalt-accent font-bold block mb-0.5">STEP {{ step.step }}: {{ step.title.toUpperCase() }}</span>
              <p class="text-zinc-600 leading-relaxed text-[11px]">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Section 5: Storage & Safety Attention -->
        <div v-if="product.storageSafety"
          class="bg-amber-50/50 p-4 rounded-xl border border-amber-200/80 text-amber-900 text-xs space-y-2">
          <h4
            class="font-display font-semibold text-amber-950 text-xs tracking-wider uppercase flex items-center gap-2">
            <AlertTriangle class="w-4 h-4 text-amber-600" />
            Storage & Safety Attention
          </h4>
          <p>
            <template v-if="product.storageSafety.storagePeriod && product.storageSafety.storagePeriod !== '-'">
              <strong class="font-semibold">Storage Period:</strong> {{ product.storageSafety.storagePeriod }} — 
            </template>
            <strong class="font-semibold">Storage:</strong> {{ product.storageSafety.storageConditions }}
          </p>
          <ul class="list-disc list-inside space-y-1 text-[11px] text-amber-800">
            <li v-for="(note, i) in product.storageSafety.attention" :key="i">{{ note }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import {
  ChevronDown,
  CheckCircle2,
  FileText,
  Layers,
  Box,
  Wrench,
  AlertTriangle,
} from '@lucide/vue'
import type { Product } from '~/data/products'

const props = defineProps<{
  product: Product
}>()

const isExpanded = ref(false)

const categoryLabels: Record<string, string> = {
  'acetic-cure': 'Acetic Cure',
  'neutral-cure': 'Neutral Cure',
  'multipurpose': 'Multipurpose & Adhesive',
}

const categoryLabel = computed(() => categoryLabels[props.product.category] || props.product.category)
</script>
