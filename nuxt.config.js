import colors from 'vuetify/es5/util/colors'

export default {
  server: {
    host: '0.0.0.0'
  },
  head: {
    titleTemplate: '%s - vetom.korea',
    title: 'kadyrzhan',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
      
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
      "@nuxtjs/svg",
      '@nuxtjs/axios',
    ['nuxt-mail', {
      message: {
        to: 'saubakirov36@mail.ru',
      },
      smtp: {
        service: 'mail',
        host: 'smtp.mail.ru',
        port: 465,
        auth: {
          user: 'saubakirov36@mail.ru',
          pass: 'RtfYynh655La1viPTTvy'
        },
      },
    }],
  ],

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build:{
      extractCSS: true,
  }
}
