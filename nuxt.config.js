module.exports = {
  target: 'static',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: ['~/assets/scss/main'],

  styleResources: {
    sass: ['~/assets/scss/vars']
  },

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: `~plugins/vimeo-player`, ssr: false },
    { src: `~plugins/vue-cookie-law`, ssr: false },
    { src: `~plugins/vue-cookie-law`, ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    ['@nuxtjs/eslint-module', { fix: true }],
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    '@nuxtjs/style-resources'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    ['nuxt-buefy', { css: false }],
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/svg',
    [
      '@nuxtjs/google-tag-manager',
      { id: 'G-BZ085883NG', scriptURL: '//www.googletagmanager.com/gtag/js' }
    ]
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  env: {
    FIRE_ENV: process.env.FIRE_ENV,
    PRE_REG_STAGING_URI:
      'https://europe-west1-bootbag-staging.cloudfunctions.net/api-http-public-preRegistration',
    PRE_REG_PRODUCTION_URI:
      'https://europe-west1-bootbag-production.cloudfunctions.net/api-http-public-preRegistration'
  },
  /*
   ** Build configuration
   */
  build: {
    vendor: ['vue-vimeo-player'],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const fileLoader = config.module.rules.find((rule) =>
        '.png'.match(rule.test)
      )

      fileLoader.use[0].options = { esModule: false }
    }
  }
}
