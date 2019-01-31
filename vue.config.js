module.exports = {
  devServer: {
    // disableHostCheck: true,
    host: 'localhost',
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