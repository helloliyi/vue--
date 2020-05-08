import Vue from 'vue'
import App from './App.vue'
import http from '@/http/index.js'
import router from '@/router'
import store from '@/store'
import 'lib-flexible/flexible'
import './static/font_i4f3h1zfru/iconfont.css'

Vue.config.productionTip = false
Vue.prototype.$http = http

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
