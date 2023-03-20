const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // 配置反向代理，
  devServer: {
    proxy: {
      // '/api': {
      //   target: 'https://i.maoyan.com',
      //   changeOrigin: true
      // },
      '/hor': {
        target: 'https://i.maoyan.com',
        changeOrigin: true,
        pathRewrite: {
          '^/hor': ''
        }
      }
    }
  }
})
