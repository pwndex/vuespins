const pkg = require('../../../package.json')

module.exports = {
  base: '/vuespins/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: pkg.name,
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: pkg.description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo:
      'https://raw.githubusercontent.com/vuejs/art/master/logo-monochrome.svg',
    repo: 'pwndex/vuespins',
    docsDir: 'docs/src',
    docsBranch: 'master',
    editLinkText: 'Edit this page on GitHub',
    editLinks: true,
    lastUpdated: 'Last Updated',
    search: false,
    smoothScroll: true,
    nav: [
      {
        text: 'Docs',
        link: '/documentation/installation'
      }
    ],
    sidebar: {
      '/documentation/': [
        {
          title: 'Documentation',
          collapsable: false,
          children: ['Installation', 'Ring', 'CubeGrid', 'Spinner']
        }
      ]
    }
  }
}
