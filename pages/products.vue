<template>
  <div>
    <!-- Page header: Stat-Led (Image Documents & Products) -->
    <section class="container-site pt-36 pb-10 md:pt-44 md:pb-14">
      <div class="stat-figure text-zinc-900 tnum">
        Products
      </div>
      <h1 class="font-display text-3xl md:text-4xl text-zinc-900 mt-4 mb-3 tracking-tight">
        Product Specifications &amp; Technical Datasheets
      </h1>
      <p class="text-zinc-600 text-base md:text-lg max-w-2xl leading-relaxed">
        Explore authentic product specifications, technical data sheets (TDS), color options, and application standards
        for high-performance silicone sealants and construction supporting materials distributed by PT Anugerah Megah
        Perkasa.
      </p>
    </section>

    <!-- MAIN FEATURE: IMAGE CAROUSEL SECTION -->
    <section class="container-site pb-20 md:pb-24 border-t border-zinc-200/80 pt-6">
      <div class="mb-6 flex items-center justify-between">
        <h2 class="text-xs font-mono text-zinc-400 uppercase tracking-wider">
          Visual Catalog &amp; High-Res Inspection
        </h2>
        <span class="hidden sm:inline-block text-xs font-mono text-zinc-400">
          Click "Inspect Image" for full high-res view
        </span>
      </div>

      <!-- IMAGE CAROUSEL COMPONENT -->
      <ImageCarousel />
    </section>

    <!-- FULL INTERACTIVE PRODUCT CATALOG WITH EXPANDABLE TDS DRAWERS -->
    <section class="container-site border-t border-zinc-200 py-16">
      <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div>
          <span class="text-xs font-mono text-cobalt-accent font-semibold uppercase tracking-widest block mb-2">
            Catalog &bull; TDS Specifications
          </span>
          <h2 class="font-display text-2xl sm:text-3xl text-zinc-900 font-semibold tracking-tight">
            Product Catalog
          </h2>
          <p class="text-zinc-500 text-sm mt-1 max-w-xl">
            Click on any product row to view detailed technical parameters.
          </p>
        </div>

        <!-- Category Filter Tabs -->
        <div class="flex items-center gap-1.5 flex-wrap">
          <button class="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors border" :class="selectedCategory === null
            ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
            : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'"
            @click="selectedCategory = null">
            All ({{ products.length }})
          </button>
          <button v-for="cat in productCategories" :key="cat.id"
            class="px-3.5 py-1.5 rounded-full text-xs font-mono font-medium transition-colors border" :class="selectedCategory === cat.id
              ? 'bg-zinc-900 text-white border-zinc-900 shadow-xs'
              : 'bg-white text-zinc-600 border-zinc-200 hover:border-zinc-300 hover:text-zinc-900'"
            @click="selectedCategory = cat.id">
            {{ cat.label }}
          </button>
        </div>
      </div>

      <!-- Product Cards List -->
      <div class="border-t border-zinc-200">
        <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
      </div>
    </section>

    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ImageCarousel from '~/components/ImageCarousel.vue'
import ProductCard from '~/components/ProductCard.vue'
import CTABanner from '~/components/CTABanner.vue'
import { products, productCategories } from '~/data/products'

const selectedCategory = ref<string | null>(null)

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products
  return products.filter(p => p.category === selectedCategory.value)
})

useSeoMeta({
  title: 'Product Specifications & Technical Data Sheets (TDS) — PT Anugerah Megah Perkasa',
  description: 'Download TDS technical specifications and view color options for high-performance silicone sealants and construction supporting materials in Indonesia.',
  ogTitle: 'Silicone Sealant Catalog & Technical Data (TDS) — PT Anugerah Megah Perkasa',
  ogDescription: 'One-component moisture cure silicone sealants for doors, windows, glass, and aluminum curtain walls. Density 1.50 g/cm³, 38 Shore A.',
  ogImage: 'https://anugrah-megahperkasa.com/og-image.png',
  ogUrl: 'https://anugrah-megahperkasa.com/products',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'Product Specifications & Technical Documentation — PT Anugerah Megah Perkasa',
  link: [
    { rel: 'canonical', href: 'https://anugrah-megahperkasa.com/products' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'Silicone Sealant Product Catalog',
        description: 'High-performance silicone sealants distributed by PT Anugerah Megah Perkasa',
        itemListElement: products.map((prod, index) => ({
          '@type': 'Product',
          position: index + 1,
          name: prod.name,
          description: prod.description,
          brand: {
            '@type': 'Brand',
            name: prod.brand,
          },
          category: prod.category,
        })),
      }),
    },
  ],
})
</script>
