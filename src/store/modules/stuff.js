const state = {
  detail_stuff: []
}

const getters = {
  getDetailStuff: state => state.detail_stuff
}

const actions = {
  saveStuffDetail({
    commit
  }, stuff) {
    commit('saveStuffDetail', stuff)
  }
}

const mutations = {
  //保存打开的食材详情信息
  saveStuffDetail(state, stuff) {
    state.detail_stuff = stuff;
  }
}
