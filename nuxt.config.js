import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

export default {
  server:{
	host: '0.0.0.0'
  },
  axios: {
    baseURL: 'https://serikaubakirov.ru/',
  },
	head: {
    titleTemplate: 'Гипнотерапия для бизнесменов',
    title: 'Терапия для бизнесменов',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Рутинные проблемы бизнесмена? Как обрести свободное время для себя, для семьи и родных, если бизнес или работа не позволяют? Как избавиться от страхов, многих бизнесменов? Страх потерять все финансовое состояние, потерять контроль над бизнесом или же вам трудно доверять людям, быть может им нужны не вы, а ваш капитал? У вас проблемы со здоровьем, из-за стресса? Немедленно Запишитесь на бесплатную консультацию, если вы страдаете этими недугами, решения которого я знаю!' },
      { name: 'format-detection', content: 'telephone=no' },
	  { name:"google-site-verification", content: "XdMgi2L1-9-jj1jLJmzg0jeWYL3QIyil9aPDgUKA2CE"}
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
	 [ '@nuxtjs/dotenv', { path: './' }],
    ['nuxt-mail', {
      message: {
        to: 'saubakirov36@gmail.com',
      },
      smtp: {
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        auth: {
          user: 'saubakirov36@gmail.com',
          pass: 'wtab fakd paaw lrgk'
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
