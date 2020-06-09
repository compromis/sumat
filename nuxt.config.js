
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Suma't a Compromís",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { property: 'og:image', content: '/thumbnail.png' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://compromis.net/sub/fonts/compromis.css'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://compromis.net/sub/icons/favicon.ico'
      },
      {
        rel: 'icon',
        type: 'image/png',
        size: '32x32',
        href: 'https://compromis.net/sub/icons/favicon32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '192x192',
        href: 'https://compromis.net/sub/icons/favicon192.png'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    './sass/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    './plugins/espai.js',
    './plugins/tooltip.js'
  ],
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
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },

  /*
  ** Router
  */
  router: {
    extendRoutes (routes, resolve) {
      routes.push({
        name: 'simpatitzant',
        path: '/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue')
      })

      routes.push({
        name: 'party-type',
        path: '/:party/:type?',
        component: resolve(__dirname, 'pages/index.vue')
      })
    }
  },

  bootstrapVue: {
    componentPlugins: [
      'ModalPlugin'
    ],
    directivePlugins: [],
    bootstrapCSS: false,
    bootstrapVueCSS: false
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
