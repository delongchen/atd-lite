import Vue from 'vue'
import App from './App.vue'

import store from './store'
import router from './router'
import { VueAxios } from '@/utils/request'

Vue.config.productionTip = false

import './mock'

import bootstrap from "@/core/bootstrap";
import './core/lazy_use'

Vue.use(VueAxios)

new Vue({
  render: h => h(App),
  store,
  router,
  created: bootstrap
}).$mount('#app')
