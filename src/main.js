// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './config/vuex'
import elements from './config/element'
import 'element-ui/lib/theme-chalk/index.css';
import "babel-polyfill"
import { $axios } from './config/axios'
Vue.use(elements)
Vue.config.productionTip = false

Vue.prototype.axios = function (url, obj, type, host) {
  return $axios.call(this, url, obj, type, host)
}
/* eslint-disable no-new */
window._vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
