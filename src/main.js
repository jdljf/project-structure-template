import Vue from "vue"
import App from "@/App.vue"
import "@/common/css/reset.css"
import "@/common/css/common.css" // 必须先引用 reset.css 再引入该文件
import '@/icons/index.js'

import router from "@/router/index.js"
import store from "@/vuex/index.js"
import api from "@/http/index.js"
import "./registerServiceWorker"
import "@/mock/index.js"

// 把 http 请求绑定到 vue 的原型上
Object.defineProperty(Vue.prototype, "$api", {
  value: api
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")
