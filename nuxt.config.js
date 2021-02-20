export default {
  head: {
    title: 'DevCells',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We will make open-source projects.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/DevCells_NoSpace.png' }
    ]
  },
  target: 'static',
  css: [
    '~/assets/css/main.css',
    '~/assets/css/animate.min.css'
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    '@nuxtjs/tailwindcss'
  ],

  axios: {},

  build: {
  }
}
