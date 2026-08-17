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
  title: 'PT Anugrah Megah Perkasa — Industrial Silicone Sealants & DURABUILD Distributor',
  description: 'Official distributor of DURABUILD high-performance neutral and acetic silicone sealants, weather-resistant adhesives, and glazing solutions in Indonesia.',
  ogTitle: 'PT Anugrah Megah Perkasa — Official DURABUILD Sealant Distributor',
  ogDescription: 'Official distributor of DURABUILD high-performance neutral and acetic silicone sealants for construction, door/window glazing, and manufacturing.',
  ogImage: 'https://anugrah-megahperkasa.com/og-image.png',
  ogUrl: 'https://anugrah-megahperkasa.com/',
  twitterTitle: 'PT Anugrah Megah Perkasa — DURABUILD Silicone Sealants',
  twitterDescription: 'Official distributor of DURABUILD industrial silicone sealants and weather-resistant adhesives.',
  twitterImage: 'https://anugrah-megahperkasa.com/og-image.png',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'PT Anugrah Megah Perkasa — Industrial Silicone Sealants & DURABUILD Distributor',
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
        alternateName: ['PT AMP', 'DURABUILD Distributor Indonesia'],
        url: 'https://anugrah-megahperkasa.com/',
        logo: 'https://anugrah-megahperkasa.com/logo1.png',
        image: 'https://anugrah-megahperkasa.com/og-image.png',
        description: company.description,
        foundingDate: `${company.founded}`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Jl. Industri Raya No. 88, Kawasan Industri Pulogadung',
          addressLocality: 'Jakarta Timur',
          postalCode: '13920',
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
        brand: {
          '@type': 'Brand',
          name: 'DURABUILD',
          slogan: 'Built to Seal. Built to Last.',
        },
      }),
    },
  ],
})
</script>
