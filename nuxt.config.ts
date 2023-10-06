// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@pinia/nuxt', 'nuxt-swiper', 'nuxt-simple-sitemap', '@nuxt/image'],
  sitemap: {
    xslTips: false,
  },
  swiper: {
    modules: [],
  },
})
