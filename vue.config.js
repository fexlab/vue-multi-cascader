module.exports = {
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  // 强制内联CSS
  css: { extract: false },
  chainWebpack: config => {
    config.module
      .rule('js')
      .use('babel')
        .loader('babel-loader')
        .tap(options => {
          return options
        })
  }
}
