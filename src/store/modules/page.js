import axios from 'axios'

const state = {
  page: "home",
  title: "首页",
  paramsMap: [],
  detail_cookbook: [],
  detail_stuff: [],

}

const getters = {
  getPage: state => state.page,
  getTitle: state => state.title,
  getParams: state => state.paramsMap,
  getDetailCookbook: state => state.detail_cookbook,
  getDetailStuff: state => state.detail_stuff
}

const actions = {
  changePage({
    commit
  }, page) {
    commit('changePage', page)
  },
  refreshParams({
    commit
  }, route) {
    commit('refreshParams', route)
  },
  removeParams({
    commit
  }, route) {
    commit('removeParams', route)
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
  },
  addComment({
    commit
  }, data) {
    commit('addComment', data)
  },
}

const mutations = {
  changePage(state, page) {
    state.page = page;
    switch (state.page) {
      case "home":
        {
          state.title = "首页";
          break;
        }
      case "share":
        {
          state.title = "分享";
          break;
        }
      case "market":
        {
          state.title = "市集";
          break;
        }
    }
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
    state.paramsMap.forEach((n, i) => {
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
  },
  //留言
  addComment(state, data) {
    var n = data.name;
    var t = data.txt;
    var time = new Date();
    var d = time.getFullYear()+"-"+time.getMonth()+"-"+time.getDay();
    if (n == "") {
      n = "无名用户"
    }
    state.detail_cookbook.comment.push({
      name: n,
      txt: t,
      date: d
    });
    // var id = state.detail_cookbook.id;
    // console.log(id);
    // state.cookbook_list.forEach(n => {
    //   if (n.id == id) {
    //     n.comment.add(txt);
    //     state.cookbook_filter = n;
    //   }
    // })    
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
};
