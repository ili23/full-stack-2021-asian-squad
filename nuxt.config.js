export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'full-stack-2021-asian-squad',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['vuesax/dist/vuesax.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['@/plugins/vuesax'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios', '@nuxtjs/firebase'],

  firebase: {
    config: {
      apiKey: 'AIzaSyBQ8qyDb_NCgq6dPaolSdtBlqTuFiUW5h4',
      databaseURL: 'https://bone-apple-teeth-default-rtdb.firebaseio.com/',
      authDomain: 'bone-apple-teeth.firebaseapp.com',
      projectId: 'bone-apple-teeth',
      storageBucket: 'bone-apple-teeth.appspot.com',
      messagingSenderId: '738508615418',
      appId: '1:738508615418:web:5c78943bda4006914e6343',
      measurementId: 'G-KH82K5LGVK',
    },
    services: {
      auth: true,
      firestore: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}