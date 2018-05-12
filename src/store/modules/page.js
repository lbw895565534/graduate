import axios from 'axios'

const state = {
  page: "home",
  paramsMap: []
}

const getters = {
  getPage: state => state.page,
  getParams: state => state.paramsMap
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
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
