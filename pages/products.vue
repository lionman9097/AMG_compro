<template>
  <div>
    <!-- Page header: Stat-Led (Image Documents & Products) -->
    <section class="container-site pt-36 pb-10 md:pt-44 md:pb-14">
      <div class="stat-figure text-zinc-900 tnum">
        Products
      </div>
      <h1 class="font-display text-3xl md:text-4xl text-zinc-900 mt-4 mb-3 tracking-tight">
        DURABUILD Silicone Sealants &amp; Technical Specifications
      </h1>
      <p class="text-zinc-600 text-base md:text-lg max-w-2xl leading-relaxed">
        Explore authentic product images, technical data sheets (TDS), color options, and application standards for DURABUILD one-component neutral moisture-cure silicone weather-resistant adhesives.
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

    <!-- TECHNICAL SPECIFICATIONS & APPLICATION OVERVIEW -->
    <section class="container-site border-t border-zinc-200 py-16">
      <div class="max-w-3xl">
        <h2 class="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-2">
          Technical Summary &amp; Datasheet (TDS)
        </h2>
        <h3 class="font-display text-2xl text-zinc-900 font-semibold mb-4 tracking-tight">
          DURABUILD Neutral Silicone Weather Resistant Adhesive
        </h3>
        <p class="text-zinc-600 text-sm md:text-base leading-relaxed mb-6">
          DURABUILD is a one-component moisture-cure silicone weather-resistant adhesive engineered for high-durability bonding across doors, windows, glass, tiles, and aluminum curtain wall structures.
        </p>

        <!-- Quick Spec Grid -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-zinc-50 border border-zinc-200 text-xs font-mono">
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Density</span>
            <span class="text-zinc-900 font-bold text-sm">1.50 g/cm³</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Extrudability</span>
            <span class="text-zinc-900 font-bold text-sm">62 g / 5s</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Surface Dry</span>
            <span class="text-zinc-900 font-bold text-sm">22 min</span>
          </div>
          <div>
            <span class="text-zinc-400 uppercase block mb-1">Hardness</span>
            <span class="text-zinc-900 font-bold text-sm">38 Shore A</span>
          </div>
        </div>
      </div>
    </section>

    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import ImageCarousel from '~/components/ImageCarousel.vue'
import CTABanner from '~/components/CTABanner.vue'

useSeoMeta({
  title: 'DURABUILD Silicone Sealants & Technical Data Sheets (TDS)',
  description: 'Download TDS technical specifications and view color options for DURABUILD one-component neutral silicone weather-resistant sealants in Indonesia.',
  ogTitle: 'DURABUILD Silicone Sealant Catalog & Technical Data (TDS)',
  ogDescription: 'One-component moisture cure silicone sealant for doors, windows, glass, and aluminum. Density 1.50 g/cm³, 38 Shore A.',
  ogImage: 'https://anugrah-megahperkasa.com/og-image.png',
  ogUrl: 'https://anugrah-megahperkasa.com/products',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'DURABUILD Product Showcase & Technical Documentation',
  link: [
    { rel: 'canonical', href: 'https://anugrah-megahperkasa.com/products' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'DURABUILD Neutral Silicone Weather Resistant Adhesive',
        image: [
          'https://anugrah-megahperkasa.com/durabuild_main.webp',
          'https://anugrah-megahperkasa.com/technical.webp',
        ],
        description: 'DURABUILD Neutral silicone weather resistant adhesive is a one component moisture cure silicone for doors, windows, glass, and aluminum surfaces.',
        brand: {
          '@type': 'Brand',
          name: 'DURABUILD',
        },
        category: 'Building Adhesives & Sealants',
        material: 'Neutral Moisture-Cure Silicone',
        color: ['Black', 'White', 'Transparent', 'Brown'],
        offers: {
          '@type': 'AggregateOffer',
          priceCurrency: 'IDR',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: 'PT Anugrah Megah Perkasa',
          },
        },
        additionalProperty: [
          { '@type': 'PropertyValue', name: 'Density', value: '1.50 g/cm³' },
          { '@type': 'PropertyValue', name: 'Hardness', value: '38 Shore A' },
          { '@type': 'PropertyValue', name: 'Surface Dry Time', value: '22 minutes' },
          { '@type': 'PropertyValue', name: 'Curing Rate', value: '2.0 mm / 24H' },
          { '@type': 'PropertyValue', name: 'Packaging', value: '300ml Cartridge, 600ml Sausage' },
        ],
      }),
    },
  ],
})
</script>
