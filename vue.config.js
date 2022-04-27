const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: '@import "~@/assets/scss/variable.scss";@import "~@/assets/scss/mixin.scss";'
            }
        }
    },
    configureWebpack: {
        plugins: [
            new NodePolyfillPlugin()
          ]
    }
}
