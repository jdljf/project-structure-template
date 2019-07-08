/**
 * vue-cli3.x 的配置文件
 */
"use strict"
const path = require("path")

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.join(__dirname, "src/")
      }
    }
  }
}
