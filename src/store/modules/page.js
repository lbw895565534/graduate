import axios from 'axios'

const state = {
  page: "home",
  paramsMap: [],
  detail_cookbook: [],
  detail_stuff: [],
  
}

const getters = {
  getPage: state => state.page,
  getParams: state => state.paramsMap,
  getDetailCookbook: state => state.detail_cookbook,
  getDetailStuff: state => state.detail_stuff
}

const actions = {
  changePage({
    commit
  }, page) {
    commit('changePage', {
      page: page
    })
  },
  refreshParams({
    commit
  }, route) {
    commit('refreshParams',route)
  },
  removeParams({
    commit
  }, route) {
    commit('removeParams',route)
  },
  saveCookbookDetail({
    commit
  }, cookbook) {
    commit('saveCookbookDetail', cookbook)
  },
  saveStuffDetail({
    commit
  }, stuff) {
    commit('saveStuffDetail', stuff)
  }
}

const mutations = {
  changePage(state, page) {
    state.page = page;
    localStorage.setItem("page", state.page);
  },
  refreshParams(state, route) { 
    var isAdd = false;   
    var r = {};
    r.name = route.name;
    r.params = route.params;
    state.paramsMap.push(r);
    console.log(state.paramsMap);
  },
  removeParams(state, route) {
    state.paramsMap.forEach((n,i) => {
      if (n.name == route.name) {
        state.paramsMap.splice(i, 1);
      }
    });
    console.log(state.paramsMap);
  },
  //保存打开的食谱详情信息
  saveCookbookDetail(state, cookbook) {
    state.detail_cookbook = cookbook;
  },
  //保存打开的食材详情信息
  saveStuffDetail(state, stuff) {
    state.detail_stuff = stuff;
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
