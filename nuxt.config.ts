export default defineNuxtConfig({
  compatibilityDate: '2026-07-30',
  devtools: { enabled: true },
  ssr: true,

  modules: ['@nuxtjs/tailwindcss'],

  tailwindcss: {
    configPath: 'tailwind.config.js',
  },

  app: {
    head: {
      title: 'PT Anugerah Megah Perkasa — Official Distributor of Wacker & Durabuild',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'PT Anugerah Megah Perkasa is an authorized distributor of Wacker and Durabuild silicone sealants and construction supporting materials across Indonesia.' },
        { name: 'keywords', content: 'silicone sealant, WACKER, DURABUILD, neutral silicone sealant, acetic silicone sealant, weather resistant adhesive, PT Anugerah Megah Perkasa, sealant supplier Indonesia, industrial adhesive, facade glazing silicone' },
        { name: 'author', content: 'PT Anugerah Megah Perkasa' },
        { name: 'apple-mobile-web-app-title', content: 'AMG' },
        
        // Open Graph / Facebook / WhatsApp
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'PT Anugerah Megah Perkasa' },
        { property: 'og:title', content: 'PT Anugerah Megah Perkasa — Trusted Partner for Quality Sealant Solutions' },
        { property: 'og:description', content: 'Authorized distributor of Wacker and Durabuild sealant products and construction supporting materials for construction, industrial, and building projects.' },
        { property: 'og:image', content: 'https://anugrah-megahperkasa.com/og-image.png' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:locale', content: 'en_US' },

        // Twitter Cards
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'PT Anugerah Megah Perkasa — Wacker & Durabuild Distributor' },
        { name: 'twitter:description', content: 'Official distributor of Wacker & Durabuild industrial silicone sealants and construction supporting materials in Indonesia.' },
        { name: 'twitter:image', content: 'https://anugrah-megahperkasa.com/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon-96x96.png', sizes: '96x96' },
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'shortcut icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400&family=Space+Grotesk:wght@500;600;700&display=swap' },
      ],
    },
  },

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/about', '/products', '/contact'],
      ignore: ['//', '/__nuxt_error', '//__nuxt_error'],
    },
  },
})
