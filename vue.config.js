/**
 * vue-cli3.x 的配置文件
 */
"use strict"
const path = require("path")

function resolve(dir) {
  return path.join(__dirname, dir)
}

// const port = 8080

module.exports = {
  // baseUrl: "/",
  publicPath: "/",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      "/api": {
        target: "http://192.168.20.50",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/api": ""
        }
      },
      "/mock": {
        target: "http://127.0.0.1:3000",
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/mock": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src")
      }
    }
  }
}
