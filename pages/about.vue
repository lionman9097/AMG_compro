<template>
  <div class="bg-[var(--color-paper)] text-[var(--color-ink)] min-h-screen">
    <!-- Page Header: Editorial Statement -->
    <section class="container-site pt-28 pb-10 sm:pt-36 sm:pb-14 border-b border-zinc-200">
      <div class="max-w-3xl">
        <!-- Partner Lockup Badge: AMG + Authorized Brands -->
        <div
          class="mb-6 inline-flex flex-wrap items-center gap-2 sm:gap-3 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-zinc-50 border border-zinc-200/80 shadow-xs">
          <!-- Main Company Brand -->
          <div class="flex items-center justify-center">
            <img src="/logo1.png" alt="PT Anugerah Megah Perkasa" class="h-5 sm:h-6 w-auto object-contain" />
          </div>

          <!-- Divider -->
          <div class=" w-px h-5 sm:h-6 bg-zinc-200" />

          <!-- Child Partner Logos -->
          <div class="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            <span
              class="hidden sm:block text-[10px] sm:text-[11px] text-zinc-500 font-mono tracking-wider uppercase font-medium leading-none">
              Authorized Distributor & Partner of
            </span>

            <!-- Child 1: DURABUILD -->
            <div
              class="h-6 sm:h-7 px-2 bg-zinc-950 rounded-lg border border-zinc-900 flex items-center shadow-xs hover:scale-105 transition-transform duration-200"
              title="DURABUILD">
              <img src="/logo3.png" alt="DURABUILD" class="h-4 sm:h-5 w-auto object-contain" />
            </div>

            <!-- Child 2: WACKER -->
            <div
              class="h-6 sm:h-7 px-2 bg-white rounded-lg border border-zinc-200/90 flex items-center shadow-xs hover:scale-105 transition-transform duration-200"
              title="WACKER">
              <img src="/logo2.png" alt="WACKER" class="h-4 sm:h-5 w-auto object-contain" />
            </div>

            <!-- Child 3: SUPER SHIELD -->
            <div class="h-6 sm:h-8 px-2 flex items-center shadow-xs hover:scale-105 transition-transform duration-200"
              title="SUPER SHIELD">
              <img src="/supershield_logo.png" alt="SUPER SHIELD" class="h-8 sm:h-8 w-auto object-contain" />
            </div>
          </div>
        </div>

        <!-- Main Display Heading -->
        <h1
          class="font-display text-3xl sm:text-5xl md:text-6xl font-semibold text-zinc-900 tracking-tight leading-[1.08] mb-4 sm:mb-5">
          PT <span class="text-cobalt-accent">Anugerah</span> Megah Perkasa
        </h1>

        <!-- Slogan / Sub-heading -->
        <p class="font-display text-lg sm:text-2xl text-zinc-800 font-medium mb-4 sm:mb-6 leading-snug">
          {{ company.tagline }}
        </p>

        <!-- Lead Narrative Paragraph -->
        <p class="text-zinc-600 text-sm sm:text-lg leading-relaxed max-w-2xl">
          {{ company.shortDescription }}
        </p>
      </div>
    </section>

    <!-- 01 · Company Overview (Long Document Prose & Scope) -->
    <section class="container-site section-spacing border-b border-zinc-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div class="lg:col-span-4">
          <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">01 &middot;
            Overview</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
            Who We Are
          </h2>
          <p class="text-zinc-400 text-xs font-mono mt-3 uppercase tracking-wider">
            Industrial &bull; Commercial &bull; Facade
          </p>
        </div>

        <div class="lg:col-span-8 max-w-2xl space-y-6 text-zinc-700 leading-relaxed text-[15px] sm:text-base">
          <p class="text-zinc-900 font-medium text-base sm:text-lg leading-relaxed">
            <strong class="text-zinc-900">ANUGERAH MEGAH PERKASA</strong> is a company engaged as a distributor of
            sealant products and construction supporting materials, providing high-quality products to meet the needs of
            various construction, industrial, and building projects.
          </p>

          <p>
            As a specialized distributor, we bridge international polymer technology with domestic construction demands.
            Our catalog encompasses neutral moisture-cure silicones, general purpose neutral formulations, multipurpose
            adhesives,
            and specialized construction sealants engineered for long-term weatherproofing, UV resistance, and
            structural
            elasticity.
          </p>

          <!-- Spec Table for Company Scope -->
          <div class="mt-8 border border-zinc-200 rounded-xl overflow-hidden bg-white">
            <div
              class="px-4 py-2.5 sm:px-5 sm:py-3 bg-zinc-50 border-b border-zinc-200 flex items-center justify-between text-xs font-mono">
              <span class="font-semibold text-zinc-800 uppercase tracking-wider">Distribution Scope Summary</span>
              <span class="text-zinc-400 text-[10px] sm:text-xs">Spec Ref: ID-DIST-2026</span>
            </div>
            <div class="divide-y divide-zinc-200/70 text-xs sm:text-sm">
              <div class="flex flex-col sm:grid sm:grid-cols-4 px-4 py-2.5 sm:px-5 sm:py-3 gap-0.5 sm:gap-0">
                <span class="text-zinc-500 font-mono text-[11px] sm:text-xs">Core Products</span>
                <span class="sm:col-span-3 text-zinc-900 font-medium">Neutral Silicone, General Purpose
                  Neutral, Multipurpose &amp; Adhesive</span>
              </div>
              <div class="flex flex-col sm:grid sm:grid-cols-4 px-4 py-2.5 sm:px-5 sm:py-3 gap-0.5 sm:gap-0">
                <span class="text-zinc-500 font-mono text-[11px] sm:text-xs">Brand Partners</span>
                <span class="sm:col-span-3 text-zinc-900 font-medium">WACKER &bull; DURABUILD &bull; SUPER SHIELD</span>
              </div>
              <div class="flex flex-col sm:grid sm:grid-cols-4 px-4 py-2.5 sm:px-5 sm:py-3 gap-0.5 sm:gap-0">
                <span class="text-zinc-500 font-mono text-[11px] sm:text-xs">Key Substrates</span>
                <span class="sm:col-span-3 text-zinc-700">Glass, Aluminum Profiles, Glazed Ceramic Tiles,
                  Concrete &amp; Masonry, Stainless Steel, ACP</span>
              </div>
              <div class="flex flex-col sm:grid sm:grid-cols-4 px-4 py-2.5 sm:px-5 sm:py-3 gap-0.5 sm:gap-0">
                <span class="text-zinc-500 font-mono text-[11px] sm:text-xs">Supply Coverage</span>
                <span class="sm:col-span-3 text-zinc-700">Nationwide network with regional warehousing in
                  Jakarta, Bekasi, Surabaya, and Semarang</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 02 · Authorized Brand Distribution -->
    <section class="container-site section-spacing border-b border-zinc-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div class="lg:col-span-4">
          <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">02 &middot;
            Partnerships</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
            Authorized Brands
          </h2>
          <p class="text-zinc-500 text-sm mt-3 leading-relaxed">
            Delivering products with trusted quality, optimal performance, and suitability for professional field
            applications.
          </p>
        </div>

        <div class="lg:col-span-8 space-y-6">
          <p class="text-zinc-800 text-base sm:text-lg leading-relaxed">
            As a distributor of <strong class="text-zinc-900 font-semibold">Wacker</strong>, <strong
              class="text-zinc-900 font-semibold">Durabuild</strong>, and <strong
              class="text-zinc-900 font-semibold">Super Shield</strong>, we are committed to delivering products with
            trusted quality, optimal performance, and suitability for professional field applications.
          </p>

          <!-- Technical Triptych for the 3 Brands -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-5 pt-2">
            <!-- WACKER Spec Block -->
            <div class="p-5 rounded-xl border border-zinc-200 bg-white flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pt-4 pb-3 mb-3 border-b border-zinc-100">
                  <img src="/logo2.png" alt="WACKER" class="h-5 w-auto object-contain" />
                  <span class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-100 text-zinc-600">Global
                    Leader</span>
                </div>
                <h3 class="font-display text-base font-semibold text-zinc-900 mb-1.5">WACKER Solutions</h3>
                <p class="text-xs text-zinc-600 leading-relaxed mb-3">
                  German polymer engineering delivering extreme weathering durability and precision neutral
                  formulations.
                </p>
              </div>
              <div class="pt-3 border-t border-zinc-100">
                <ul class="text-[11px] text-zinc-500 space-y-1 font-mono">
                  <li>&bull; ISO 11600 G Class 20HM</li>
                  <li>&bull; Strict international QA</li>
                  <li>&bull; Primerless adhesion</li>
                </ul>
              </div>
            </div>

            <!-- DURABUILD Spec Block -->
            <div class="p-5 rounded-xl border border-zinc-200 bg-white flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pt-4 pb-3 mb-3 border-b border-zinc-100">
                  <img src="/logo3.png" alt="DURABUILD" class="h-5 w-auto object-contain" />
                  <span class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-zinc-900 text-white">Built to
                    Last</span>
                </div>
                <h3 class="font-display text-base font-semibold text-zinc-900 mb-1.5">DURABUILD Series</h3>
                <p class="text-xs text-zinc-600 leading-relaxed mb-3">
                  High-performance neutral moisture-cure silicone sealants engineered for curtain walls, doors, and
                  glazing.
                </p>
              </div>
              <div class="pt-3 border-t border-zinc-100">
                <ul class="text-[11px] text-zinc-500 space-y-1 font-mono">
                  <li>&bull; 1.50 g/cm&sup3; &bull; 38 Shore A</li>
                  <li>&bull; Non-corrosive neutral cure</li>
                  <li>&bull; -40&deg;C to +150&deg;C tolerance</li>
                </ul>
              </div>
            </div>

            <!-- SUPER SHIELD Spec Block -->
            <div class="p-5 rounded-xl border border-zinc-200 bg-white flex flex-col justify-between">
              <div>
                <div class="flex items-center justify-between pb-3 mb-3 border-b border-zinc-100">
                  <img src="/supershield_logo.png" alt="SUPER SHIELD" class="h-9 w-auto object-contain" />
                  <span
                    class="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-blue-50 text-cobalt-accent">Heavy
                    Duty</span>
                </div>
                <h3 class="font-display text-base font-semibold text-zinc-900 mb-1.5">SUPER SHIELD</h3>
                <p class="text-xs text-zinc-600 leading-relaxed mb-3">
                  Oil-free multipurpose protective sealant with high strength bond for roofing, gutters, and ACP panels.
                </p>
              </div>
              <div class="pt-3 border-t border-zinc-100">
                <ul class="text-[11px] text-zinc-500 space-y-1 font-mono">
                  <li>&bull; Oil-Free formulation</li>
                  <li>&bull; Weathershield protection</li>
                  <li>&bull; Crack-proof &amp; flexible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 03 · Core Strategic Priorities (Tabular Rationale) -->
    <section class="container-site section-spacing border-b border-zinc-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-8">
        <div class="lg:col-span-4">
          <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">03 &middot;
            Priorities</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
            Strategic Pillars
          </h2>
        </div>
        <div class="lg:col-span-8">
          <p class="text-zinc-700 text-base leading-relaxed">
            By prioritizing <strong class="text-zinc-900">product quality</strong>, <strong
              class="text-zinc-900">service excellence</strong>, <strong class="text-zinc-900">product
              availability</strong>, and <strong class="text-zinc-900">customer satisfaction</strong>, Anugerah Megah
            Perkasa continues to build long-term relationships across the industry.
          </p>
        </div>
      </div>

      <!-- Tabular List of the 4 Pillars -->
      <div class="border border-zinc-200 rounded-xl divide-y divide-zinc-200 bg-white">
        <div v-for="(pillar, index) in company.pillars" :key="pillar.title"
          class="p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline hover:bg-zinc-50/50 transition-colors">
          <div class="md:col-span-1 text-xs font-mono text-cobalt-accent font-semibold">
            0{{ index + 1 }}
          </div>
          <div class="md:col-span-4">
            <h3 class="font-display text-base font-semibold text-zinc-900">
              {{ pillar.title }}
            </h3>
          </div>
          <div class="md:col-span-7 text-xs sm:text-sm text-zinc-600 leading-relaxed">
            {{ pillar.description }}
          </div>
        </div>
      </div>
    </section>

    <!-- 04 · Our Commitment Statement -->
    <section class="container-site section-spacing border-b border-zinc-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div class="lg:col-span-4">
          <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">04 &middot;
            Promise</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
            Our Commitment
          </h2>
          <p class="text-zinc-500 text-sm mt-3 leading-relaxed">
            The guiding philosophy governing our customer and contractor relationships.
          </p>
        </div>

        <div class="lg:col-span-8">
          <div class="p-5 sm:p-8 md:p-10 rounded-2xl bg-zinc-900 text-white border border-zinc-800 shadow-md">
            <div class="text-xs font-mono text-cobalt-accent uppercase tracking-widest mb-3 sm:mb-4">
              Pillars of Commitment
            </div>
            <div class="font-display text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-6">
              Quality &bull; Reliability &bull; Professional Service
            </div>
            <p class="text-zinc-300 text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              &ldquo;We believe that quality products must be supported by professional service. Therefore, we are ready
              to be your trusted partner in providing sealant solutions and construction needs.&rdquo;
            </p>
            <div class="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <p class="font-display text-sm font-semibold text-white tracking-wide uppercase">
                  PT ANUGERAH MEGAH PERKASA
                </p>
                <p class="text-xs text-zinc-400 font-mono">
                  Trusted Partner for Quality Sealant Solutions
                </p>
              </div>
              <NuxtLink to="/contact" class="pill-cta-primary !bg-white !text-zinc-900 hover:!bg-zinc-100 text-xs">
                Inquire &amp; Partner
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 05 · Client Ecosystem (Who We Serve) -->
    <section class="container-site section-spacing border-b border-zinc-200">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 mb-8">
        <div class="lg:col-span-4">
          <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">05 &middot;
            Ecosystem</span>
          <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
            Who We Serve
          </h2>
        </div>
        <div class="lg:col-span-8">
          <p class="text-zinc-700 text-base leading-relaxed">
            Anugerah Megah Perkasa continues to build long-term relationships with a diverse range of industry partners
            across Indonesia.
          </p>
        </div>
      </div>

      <!-- 4 Structured Segment Rows -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="segment in company.clientSegments" :key="segment.title"
          class="p-5 rounded-xl border border-zinc-200 bg-white flex flex-col justify-between">
          <div>
            <div class="text-xs font-mono text-zinc-400 uppercase tracking-widest mb-1.5">Segment</div>
            <h3 class="font-display text-base font-semibold text-zinc-900 mb-2">
              {{ segment.title }}
            </h3>
            <p class="text-xs sm:text-sm text-zinc-600 leading-relaxed">
              {{ segment.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- 06 · Nationwide Distribution Network (Regional Hubs) -->
    <section class="container-site section-spacing">
      <div class="max-w-3xl mb-10">
        <span class="text-xs font-mono font-semibold tracking-widest uppercase text-cobalt-accent">06 &middot;
          Network</span>
        <h2 class="font-display text-2xl sm:text-3xl font-semibold text-zinc-900 mt-2 tracking-tight">
          Regional Distribution Hubs
        </h2>
        <p class="text-zinc-600 text-sm sm:text-base mt-2 leading-relaxed">
          Operating direct branch offices and warehouse hubs to provide swift supply and on-site support across Java and
          nationwide.
        </p>
      </div>

      <CompanyInfo />
    </section>

    <!-- CTA Section -->
    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/company'
import CompanyInfo from '~/components/CompanyInfo.vue'
import CTABanner from '~/components/CTABanner.vue'

useSeoMeta({
  title: 'About PT Anugerah Megah Perkasa | Sealant Distributor',
  description: 'Learn about PT Anugerah Megah Perkasa, an authorized distributor of sealant products serving contractors, applicators, developers, and building material stores across Indonesia.',
  ogType: 'website',
  ogSiteName: 'PT Anugerah Megah Perkasa',
  ogTitle: 'About PT Anugerah Megah Perkasa | Sealant Distributor',
  ogDescription: 'Learn about PT Anugerah Megah Perkasa, an authorized distributor of sealant products serving contractors, applicators, developers, and building material stores across Indonesia.',
  ogImage: 'https://amperkasa.co.id/og-image.png',
  ogImageAlt: 'PT Anugerah Megah Perkasa — Official Sealant Distributor',
  ogUrl: 'https://amperkasa.co.id/about',
  twitterCard: 'summary_large_image',
  twitterTitle: 'About PT Anugerah Megah Perkasa | Sealant Distributor',
  twitterDescription: 'Learn about PT Anugerah Megah Perkasa, an authorized distributor of sealant products serving contractors, applicators, developers, and building material stores across Indonesia.',
  twitterImage: 'https://amperkasa.co.id/og-image.png',
  robots: 'index, follow',
})

useHead({
  title: 'About PT Anugerah Megah Perkasa | Sealant Distributor',
  link: [
    { rel: 'canonical', href: 'https://amperkasa.co.id/about' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'AboutPage',
        name: 'About PT Anugerah Megah Perkasa',
        description: company.description,
        url: 'https://amperkasa.co.id/about',
        mainEntity: {
          '@type': 'Organization',
          name: company.name,
          alternateName: ['PT AMP', 'Anugerah Megah Perkasa'],
          url: 'https://amperkasa.co.id/',
          logo: 'https://amperkasa.co.id/logo1.png',
          description: company.shortDescription,
          slogan: company.tagline,
          brand: company.brandPartners.map(b => ({
            '@type': 'Brand',
            name: b.name,
            description: b.description,
          })),
        },
      }),
    },
  ],
})
</script>
