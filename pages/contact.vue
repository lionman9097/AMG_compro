<template>
  <div>
    <!-- Page header -->
    <section class="container-site pt-40 pb-16 md:pt-48 md:pb-20">
      <div class="stat-figure text-zinc-900 tnum">
        24<span class="text-cobalt-accent">h</span>
      </div>
      <h1 class="font-display text-2xl md:text-3xl text-zinc-900 mt-4 mb-4 tracking-tight">
        Get in Touch
      </h1>
      <p class="text-zinc-500 text-lg max-w-2xl leading-relaxed">
        Response within 24 hours. Our technical team is ready to help you find the perfect sealant for your application.
      </p>
    </section>

    <!-- Two-column contact -->
    <section class="container-site border-t border-zinc-200 section-spacing">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <!-- Form -->
        <div>
          <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">Send a Message</span>
          <ContactForm />
        </div>

        <!-- Info -->
        <div>
          <span class="block text-xs font-medium tracking-widest uppercase text-zinc-400 mb-8">Contact Information</span>
          <CompanyInfo />

          <hr class="hairline-rule mt-10 mb-8" />

          <p class="text-[13px] text-zinc-400 leading-relaxed">
            We typically respond within one business day. For urgent technical inquiries, please call us directly.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { company } from '~/data/company'
import ContactForm from '~/components/ContactForm.vue'
import CompanyInfo from '~/components/CompanyInfo.vue'

useSeoMeta({
  title: 'Contact PT Anugrah Megah Perkasa — Get a Silicone Sealant Quote',
  description: 'Request a quote or technical consultation for DURABUILD industrial silicone sealants and weather-resistant adhesives from PT Anugrah Megah Perkasa.',
  ogTitle: 'Contact PT Anugrah Megah Perkasa — DURABUILD Sealant Quotes',
  ogDescription: 'Get in touch with our technical team for industrial silicone sealant pricing, TDS sheets, and delivery options across Indonesia.',
  ogImage: 'https://anugrah-megahperkasa.com/og-image.png',
  ogUrl: 'https://anugrah-megahperkasa.com/contact',
  twitterCard: 'summary_large_image',
})

useHead({
  title: 'Contact Us — PT Anugrah Megah Perkasa',
  link: [
    { rel: 'canonical', href: 'https://anugrah-megahperkasa.com/contact' },
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: 'Contact PT Anugrah Megah Perkasa',
        description: 'Get in touch with PT Anugrah Megah Perkasa for DURABUILD silicone sealant inquiries and quotes.',
        url: 'https://anugrah-megahperkasa.com/contact',
        mainEntity: {
          '@type': 'Organization',
          name: company.name,
          telephone: company.contact.phone,
          email: company.contact.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Jl. Industri Raya No. 88, Kawasan Industri Pulogadung',
            addressLocality: 'Jakarta Timur',
            postalCode: '13920',
            addressCountry: 'ID',
          },
        },
      }),
    },
  ],
})
</script>
