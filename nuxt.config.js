export default {
  head: {
    title: "DevCells",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { 
        charset: "utf-8" 
      },
      { 
        name: "viewport", 
        content: "width=device-width, initial-scale=1" 
      },
      { 
        hid: "description", 
        name: "description", 
        content: "We share our projects as open source on GitHub."
      },
      {
        hid: "theme-color",
        name: "theme-color",
        content: "#7289DA"
      },
      {
        hid: "twitter:card",
        property: "twitter:card",
        content: "summary"
      },
      {
        hid: "twitter:url",
        property: "twitter:url",
        content: "https://devcells.party"
      },
      {
        hid: "twitter:description",
        property: "twitter:description",
        content: "We share our projects as open source on GitHub."
      },  
      {
        hid: "twitter:image",
        property: "twitter:image",
        content: "http://devcells.party/assets/images/DevCells_512x512.jpg"
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "DevCells"
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "DevCells"
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "We share our projects as open source on GitHub."
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "http://devcells.party/assets/images/DevCells_512x512.jpg"
      }  
    ],
    link: [
      { 
        rel: "icon", 
        type: "image/x-icon", 
        href: "/images/DevCells_NoSpace.png" 
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/assets/fonts/FontAwesome/all.css"
      }
    ]
  },
  target: "static",
  css: [
    "~/assets/css/main.css",
    "~/assets/css/animate.min.css"
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
    "@nuxtjs/tailwindcss"
  ],

  axios: {},

  build: {
  }
}
