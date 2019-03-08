const pkg = require('./package');

module.exports = {
  mode: 'universal',

  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'en'
    },
    bodyAttrs: {
      class: 'hidden'
    },
    title: 'HDF Example Website',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: false,

  /*
  ** Global CSS
  */
  css: [
    '~assets/scss/vendor/normalize.scss',
    '~assets/scss/vendor/tiny-slider.scss',
    '~assets/scss/base/buttons.scss',
    '~assets/scss/base/common.scss',
    '~assets/scss/base/inputs.scss',
    '~assets/scss/base/typography.scss',
    '~assets/scss/components/arrow.scss',
    '~assets/scss/components/circles.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~plugins/vue-lazyload',
    {
      ssr: false,
      src: '~plugins/appear'
    }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/style-resources',
    [
      'nuxt-imagemin',
      {
        optipng: {
          optimizationLevel: 9
        }
      }
    ]
  ],

  /*
  ** Styles to expose to all vue components
  */
  styleResources: {
    scss: ['~assets/scss/variables.scss', '~assets/scss/mixins/*.scss']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }

      config.resolve.alias.vue = 'vue/dist/vue.common';
    }
  },

  router: {
    scrollBehavior(to) {
      if (to.hash) {
        document
          .querySelector('.mobile-navigation-wrapper')
          .classList.remove('active');
        document.body.classList.remove('overlay');

        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop - 100,
          behavior: 'smooth'
        });
      }

      return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
