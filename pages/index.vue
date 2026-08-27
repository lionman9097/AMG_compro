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
  title: 'Sealant Distributor Indonesia | PT Anugerah Megah Perkasa',
  description: 'PT Anugerah Megah Perkasa supplies DURABUILD, WACKER, and SUPER SHIELD sealants for construction, glazing, facade, industrial, and building projects across Indonesia.',
  ogType: 'website',
  ogSiteName: 'PT Anugerah Megah Perkasa',
  ogTitle: 'Sealant Distributor Indonesia | PT Anugerah Megah Perkasa',
  ogDescription: 'PT Anugerah Megah Perkasa supplies DURABUILD, WACKER, and SUPER SHIELD sealants for construction, glazing, facade, industrial, and building projects across Indonesia.',
  ogImage: 'https://amperkasa.co.id/og-image.png',
  ogImageAlt: 'PT Anugerah Megah Perkasa — Official Sealant Distributor',
  ogUrl: 'https://amperkasa.co.id/',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Sealant Distributor Indonesia | PT Anugerah Megah Perkasa',
  twitterDescription: 'PT Anugerah Megah Perkasa supplies DURABUILD, WACKER, and SUPER SHIELD sealants for construction, glazing, facade, industrial, and building projects across Indonesia.',
  twitterImage: 'https://amperkasa.co.id/og-image.png',
  robots: 'index, follow',
})

useHead({
  title: 'Sealant Distributor Indonesia | PT Anugerah Megah Perkasa',
  link: [
    { rel: 'canonical', href: 'https://amperkasa.co.id/' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': 'https://amperkasa.co.id/#website',
            url: 'https://amperkasa.co.id/',
            name: 'PT Anugerah Megah Perkasa',
            description: company.shortDescription,
            publisher: {
              '@id': 'https://amperkasa.co.id/#organization',
            },
          },
          {
            '@type': 'Organization',
            '@id': 'https://amperkasa.co.id/#organization',
            name: company.name,
            alternateName: ['PT AMP', 'Anugerah Megah Perkasa', 'WACKER & DURABUILD Distributor'],
            url: 'https://amperkasa.co.id/',
            logo: 'https://amperkasa.co.id/logo1.png',
            image: 'https://amperkasa.co.id/og-image.png',
            description: company.description,
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
              areaServed: ['ID'],
              availableLanguage: ['Indonesian', 'English'],
            },
            brand: company.brandPartners.map(b => ({
              '@type': 'Brand',
              name: b.name,
              description: b.description,
            })),
          },
        ],
      }),
    },
  ],
})
</script>
