import Vue from "vue"
import App from "@/App.vue"
import router from "@/router"
import store from "@/store"
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
