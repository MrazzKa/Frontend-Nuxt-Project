export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@sidebase/nuxt-auth'],

  auth: {
    globalAppMiddleware: true
  },

  runtimeConfig: {
    public: {
      GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID,
      GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
    }
  },

  compatibilityDate: '2025-04-14'
})