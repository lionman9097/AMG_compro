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
      title: 'SealPro — Industrial Silicone Sealant Solutions',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'SealPro distributes premium industrial silicone sealants for construction, manufacturing, and specialty applications.' },
        { name: 'apple-mobile-web-app-title', content: 'AMG' },
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
      routes: ['/', '/about', '/products', '/contact'],
    },
  },
})
