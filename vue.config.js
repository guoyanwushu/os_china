module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'https://www.oschina.net/action/openapi',
        pathRewrite : {
          '^/api': ''
        }
      }
    }
  }
}