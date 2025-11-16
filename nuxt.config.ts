// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@wpnuxt/core'],
  wpNuxt: {
      wordpressUrl: 'http://localhost/wordpress_sixeightthree',
      // frontendUrl: 'http://localhost:3000'
      // wordpressUrl: 'https://wordpress.wpnuxt.com'
  }
})