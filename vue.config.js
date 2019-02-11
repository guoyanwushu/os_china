const path = require("path")
function resolve(target) {
  return path.join(__dirname, target)
}
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
  },
  chainWebpack: function (config) {
    config.resolve.alias
      .set('@api', resolve('src/api'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
  }
}
