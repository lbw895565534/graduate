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
  }
}

const mutations = {
  changePage(state, page) {
    state.page = page;
    console.log(page);
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
