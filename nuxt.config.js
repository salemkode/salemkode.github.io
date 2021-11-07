export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  srcDir: 'src/',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'website',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "src/static/main.css"
  ],

  // Set base
  router: {
    base: process.env.BASE || '/next/'
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "plugin/aos.vue"
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "nuxt-windicss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/i18n"
  ],

  // i18n config
  i18n: {
    defaultLocale: 'en',
    vueI18n: {
      fallbackLocale: 'en',
    },
    locales : [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      // soon { code: 'ar', iso: 'ar-EG', file: 'ar.js', dir: 'rtl' },
    ],
    langDir : "~/lang"
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
