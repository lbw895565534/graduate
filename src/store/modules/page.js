import axios from 'axios'

const state = {
  page: "home",
  kind: "new"
}

const getters = {
  getPage: state => state.page,
  cookbookfilter: state => state.cookbook_filter,
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
