import axios from 'axios'

const state = {
  page: "home"
}

const getters = {
  getPage: state => state.page,

}

const actions = {
  changePage({
    commit
  }, page) {
    commit('changePage', {
      page: page
    })
  },
  toMain({
    commit
  }) {
    commit('toMain')
  },
}

const mutations = {
  changePage(state, page) {
    state.page = page;
  },
  toMain(state) {
    state.page = localStorage.getItem("page");
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
