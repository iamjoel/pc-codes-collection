module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'pc-codes-collection',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [ // 每个页面都会引的css
    '@/assets/reset.css',
    'css-utils-collection',
    'element-ui/lib/theme-chalk/index.css',
    '@/assets/common.css',
  ],
  loading: { color: '#3B8070' },
  plugins: [{
    src: '@/plugins/element-ui'
  }],
  build: {
    vendor: [
      '@/assets/common.js',
      'axios',
      'element-ui',
    ],
    extend (config, { isDev, isClient }) {
    }
  }
}

