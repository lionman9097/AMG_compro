<template>
  <div>
    <HeroSection />
    <TrustBar />
    <CategoryOverview />
    <CTABanner />
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/company'

useSeoMeta({
  title: 'PT Anugerah Megah Perkasa — Official Distributor of Wacker & Durabuild',
  description: 'Official distributor of Wacker and Durabuild high-performance neutral and acetic silicone sealants, weather-resistant adhesives, and construction supporting materials.',
  ogTitle: 'PT Anugerah Megah Perkasa — Trusted Partner for Quality Sealant Solutions',
  ogDescription: 'Authorized distributor of WACKER and DURABUILD high-performance silicone sealants for construction, industrial, and building projects.',
  ogImage: 'https://anugrah-megahperkasa.com/og-image.png',
  ogUrl: 'https://anugrah-megahperkasa.com/',
  twitterTitle: 'PT Anugerah Megah Perkasa — Wacker & Durabuild Distributor',
  twitterDescription: 'Official distributor of Wacker and Durabuild industrial silicone sealants and construction supporting materials.',
  twitterImage: 'https://anugrah-megahperkasa.com/og-image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'PT Anugerah Megah Perkasa — Official Distributor of Wacker & Durabuild',
  link: [
    { rel: 'canonical', href: 'https://anugrah-megahperkasa.com/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: company.name,
        alternateName: ['PT AMP', 'Anugerah Megah Perkasa', 'Wacker and Durabuild Distributor'],
        url: 'https://anugrah-megahperkasa.com/',
        logo: 'https://anugrah-megahperkasa.com/logo1.png',
        image: 'https://anugrah-megahperkasa.com/og-image.png',
        description: company.description,
        foundingDate: `${company.founded}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: company.contact.address,
          addressLocality: 'Jakarta Barat',
          addressCountry: 'ID',
        },
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: company.contact.phone,
          contactType: 'sales',
          email: company.contact.email,
          areaServed: ['ID', 'South East Asia'],
          availableLanguage: ['Indonesian', 'English'],
        },
        brand: [
          {
            '@type': 'Brand',
            name: 'WACKER',
          },
          {
            '@type': 'Brand',
            name: 'DURABUILD',
            slogan: 'Built to Seal. Built to Last.',
          },
        ],
      }),
    },
  ],
})
</script>
