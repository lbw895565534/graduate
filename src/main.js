// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import MintUI from 'mint-ui'
import '@/assets/css/my-mint.css';
import '@/assets/libs/font/iconfont.css';
import 'mint-ui/lib/style.css'
import $ from '@/assets/libs/jquery-3.3.1.min.js'
import animate from 'animate.css'
import ElementUI from 'element-ui';
import '@/assets/css/my-element.css';
import 'element-ui/lib/theme-chalk/index.css';

require("@/mock/mock.js")

Vue.prototype.$http = axios
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: {
    App
  }
})
