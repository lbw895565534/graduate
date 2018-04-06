import axios from 'axios'

const state = {
  page: "home",
  kind: "new"
}

const getters = {
  item: page => {
    return page;
  }
}

const actions = {
  changePage({
    commit
  }, page) {
    commit('changePage', page)
  }
}

const mutations = {
  changePage(state, page) {
    state.page = page;
    console.log(state.page);
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
