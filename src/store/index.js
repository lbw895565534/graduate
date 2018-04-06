// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import Cart from './modules/cart'
import Page from './modules/page'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Cart, Page
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});
