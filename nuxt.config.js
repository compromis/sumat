export default {
  target: 'static',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'ca'
    },
    title: "Suma't a Compromís",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A Compromís apostem per una nova manera de fer política. I sabem que el nostre principal actiu ets tu. Per això pensem que la millor manera de donar a conèixer el nostre projecte és confiar en la teua implicació, il·lusió i desig de canvi. Ens ajudes?' },
      { property: 'og:image', content: 'https://sumat.compromis.net/thumbnail.png' },
      { hid: 'og:title', property: 'og:title', content: "Suma't a Compromís" },
      { property: 'og:description', content: 'A Compromís apostem per una nova manera de fer política. Ens ajudes?' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://sumat.compromis.net' },
      { property: 'og:type', content: 'website' },
      { property: 'fb:app_id', content: '252515324782640' },
      { property: 'twitter:site', content: '@compromis' },
      { property: 'twitter:account_id', content: '1510092958' },
      { property: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:title', property: 'twitter:title', content: "Suma't a Compromís" },
      { property: 'twitter:description', content: 'A Compromís apostem per una nova manera de fer política. Ens ajudes?' },
      { property: 'twitter:image', content: 'https://sumat.compromis.net/thumbnail.png' },
      { property: 'twitter:url', content: 'http://compromis.net' }
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
  loading: { color: '#FF6720', height: '3px' },

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
    '@nuxtjs/eslint-module',
    '@nuxtjs/netlify-files'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    ['nuxt-fontawesome', {
      component: 'fa',
      imports: [
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['faFacebook', 'faTwitter', 'faInstagram', 'faWhatsapp', 'faYoutube', 'faTelegram']
        }
      ]
    }],
    [
      'nuxt-i18n',
      {
        locales: [{
          code: 'val',
          name: 'Valencià',
          iso: 'ca',
          file: 'val.js'
        },
        {
          code: 'cas',
          name: 'Castellano',
          iso: 'es-ES',
          file: 'cas.js'
        }],
        defaultLocale: 'val',
        seo: false,
        baseUrl: 'https://sumat.compromis.net',
        lazy: true,
        langDir: 'lang/',
        vueI18n: {
          fallbackLocale: 'val'
        }
      }
    ]
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
      /* Compromís */
      routes.push({
        name: 'simpatitzant',
        path: '/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '14' }
      })

      /* Més */
      routes.push({
        name: 'party-mes',
        path: '/mes',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '1', party: '2' }
      })

      routes.push({
        name: 'party-mes-simpa',
        path: '/mes/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '2' }
      })

      routes.push({
        name: 'party-mes-activista',
        path: '/mes/activista',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '3', party: '2' }
      })

      /* Iniciativa */
      routes.push({
        name: 'party-iniciativa',
        path: '/iniciativa',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '1', party: '3' }
      })

      routes.push({
        name: 'party-iniciativa-activista',
        path: '/iniciativa/activista',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '3', party: '3' }
      })

      routes.push({
        name: 'party-iniciativa-simpa',
        path: '/iniciativa/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '3' }
      })

      /* Verds */
      routes.push({
        name: 'party-verds',
        path: '/verds',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '1', party: '4' }
      })

      routes.push({
        name: 'party-verds-simpa',
        path: '/verds/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '4' }
      })

      /* Joves PV */
      routes.push({
        name: 'party-jovespv',
        path: '/jovespv',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '1', party: '314', youth: true }
      })

      routes.push({
        name: 'party-jovespv-simpa',
        path: '/jovespv/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '314', youth: true }
      })

      /* Som Joves */
      routes.push({
        name: 'party-som',
        path: '/som',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '1', party: '384', youth: true }
      })

      routes.push({
        name: 'party-som-simpa',
        path: '/som/simpatitzant',
        component: resolve(__dirname, 'pages/index.vue'),
        meta: { type: '2', party: '384', youth: true }
      })

      /* Legacy: Bloc */
      routes.push({
        name: 'party-bloc',
        path: '/bloc',
        redirect: '/mes'
      })

      routes.push({
        name: 'party-bloc-simpa',
        path: '/bloc/simpatitzant',
        redirect: '/mes/simpatitzant'
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
