// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/apollo'
  ],
  build: {
    transpile: ['@headlessui/vue']
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://millemedia-magento.shop/graphql'
      }
    },
  },
})
