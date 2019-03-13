const pkg = require('./package');

module.exports = {
  mode: 'universal',

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
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: '//fonts.googleapis.com/css?family=Arsenal:400,700'
      }
    ]
  },

  loading: false,

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

  plugins: [
    '~plugins/vue-lazyload',
    {
      ssr: false,
      src: '~plugins/appear'
    }
  ],

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

  styleResources: {
    scss: ['~assets/scss/variables.scss', '~assets/scss/mixins/*.scss']
  },

  build: {
    extend(config, ctx) {
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
        return window.scrollTo({
          top: document.querySelector(to.hash).offsetTop - 50,
          behavior: 'smooth'
        });
      }

      return window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
};
