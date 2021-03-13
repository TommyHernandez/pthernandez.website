// ./nuxt.config.js
const config = require('./.contentful.json');
export default {
  target: 'static',
  ssr: false,
  /*
   ** Headers of the page
   */
  head: {
    title: 'Pedro Hernández | Web developer Portfolio"',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Web personal a modo de portfolio del desarrollador web Pedro Hernández, espcialista en desarrollo frontend HTML, CSS  y Javascript.'
      }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com/' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;700;900&display=swap'
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fbfbfb' },
  /*
   ** Global CSS
   */
  css: ['vue-material-design-icons/styles.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  env: {
    CTF_SPACE_ID: config.CTF_SPACE_ID,
    CTF_CDA_ACCESS_TOKEN: config.CTF_CDA_ACCESS_TOKEN,
    CTF_PERSON_ID: config.CTF_PERSON_ID,
    CTF_BLOG_POST_TYPE_ID: config.CTF_BLOG_POST_TYPE_ID
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
