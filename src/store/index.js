// 组装模块并导出 store 的地方
import Vue from 'vue';
import Vuex from 'vuex';

import Store from './modules/store'
import Page from './modules/page'
import Stuff from './modules/stuff'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Store, Page, Stuff
  },
  strict: process.env.NODE_ENV !== 'production', // 严格模式
});
