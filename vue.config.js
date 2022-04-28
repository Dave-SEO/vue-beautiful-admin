const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
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
)
