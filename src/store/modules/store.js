import axios from 'axios'

//初始化数据
const state = {
  //用户状态
  user_status: 400,
  loginUser: null,
  //美食列表
  cookbook_list: [],
  cookbook_filter: [],
  cookbook_new: [],
  cookbook_hot: [],
  cookbook_mine: [],
  //商品列表
  shop_list: [],
  stuff_list: [],
  //添加到购物车的商品（已选商品）
  added: [],
  //搜索的结果
  cookbook_search: []
}

//getter 抛出去的数据
const getters = {
  //用户列表获取
  loginUser: state => state.loginUser,
  userstatus: state => state.user_status,
  //美食菜谱数据获取请求
  cookbooklist: state => state.cookbook_list,
  cookbookfilter: state => state.cookbook_filter,
  cookbooknew: state => state.cookbook_new,
  cookbookhot: state => state.cookbook_hot,
  cookbookmine: state => state.cookbook_mine,
  //商品列表
  shoplist: state => state.shop_list,
  //菜谱所需食材
  stufflist: state => state.stuff_list,
  //搜索食谱
  cookbookSearch: state => state.cookbook_search,
  //购物车的列表
  userCart: state => {
    return state.loginUser.cart.map(({
      id,
      num,
      checked
    }) => {
      let product = state.shop_list.find(n => n.id == id)
      return {
        ...product,
        num,
        checked
      }
    })
  },
  //计算总价
  totalPrice: (state, getters) => {
    let total = 0;
    getters.userCart.forEach(n => {
      if (n.checked) {
        total += n.price * n.num
      }
    })
    return total;
  },
  //计算总数量
  totalNum: (state, getters) => {
    let total = 0;
    getters.userCart.forEach(n => {
      if (n.checked) {
        total += n.num
      }
    })
    return total;
  },
}

//action 异步的操作
const actions = {
  login({
    commit
  }, user) {
    commit('login', {
      user: user
    })
  },
  getCookbook({
    commit
  }) {
    commit('getCookbook')
  },
  getStaple({
    commit
  }) {
    commit('getStaple')
  },
  getHomecook({
    commit
  }) {
    commit('getHomecook')
  },
  getSoup({
    commit
  }) {
    commit('getSoup')
  },
  getSweets({
    commit
  }) {
    commit('getSweets')
  },
  getStuff({
    commit
  }, stuff) {
    commit('getStuff', {
      id: stuff
    })
  },
  clearCookbookFilter({
    commit
  }, stuff) {
    commit('clearCookbookFilter')
  },
  shareCookbook({
    commit
  }, share) {
    commit('shareCookbook', {
      cookbook: share
    })
  },
  //搜索
  search({
    commit
  }, value) {
    commit('search', value)
  },
  //按照点赞数、收藏数排序
  sortOfLikes({
    commit
  }) {
    commit('sortOfLikes')
  },
  sortOfCollects({
    commit
  }) {
    commit('sortOfCollects')
  },
  sortOfDate({
    commit
  }) {
    commit('sortOfDate')
  },
  sortOfHot({
    commit
  }) {
    commit('sortOfHot')
  },
  sortOfMine({
    commit
  }) {
    commit('sortOfMine')
  },
  addLike({
    commit
  }, cookbook) {
    commit('addLike', {
      id: cookbook.id
    })
  },
  addCollect({
    commit
  }, cookbook) {
    commit('addCollect', {
      id: cookbook.id
    })
  },
  //获取食材
  getShop({
    commit
  }) {
    commit('getShop')
  },
  //添加到购物车操作
  addToCart({
    commit
  }, product) {
    commit('add', {
      id: product.id
    })
  },
  //清除购物车
  clearAllCart({
    commit
  }) {
    commit('clearAll')
  },
  //删除购物车的指定的商品
  delProduct({
    commit
  }, product) {
    commit('del', product)
  },
  //添加商品数量
  addNum({
    commit
  }, product) {
    commit('addNum', product)
  },
  //减少商品数量
  reduceNum({
    commit
  }, product) {
    commit('reduceNum', product)
  },
  //选中状态
  shopChecked({
    commit
  }, product) {
    commit('shopChecked', product)
  },
  //全选中状态
  allChecked({
    commit
  }) {
    commit('allChecked')
  },
  delPayed({
    commit
  }) {
    commit('delPayed')
  },
  pay({
    commit
  }, paynumber) {
    commit('pay', {
      paynumber: paynumber
    })
  },
}

//mutation
const mutations = {
  //登录
  login(state, user) {
    axios.post('/user/login', user).then(
      res => {
        console.log(res);
        state.loginUser = res.data;
        if (state.loginUser != null) {
          state.user_status = 200;
        }
      }
    ).catch(err => {
      console.log(error);
    })

  },
  //获取食谱
  getCookbook(state) {
    axios.get('/cookbook/getCookbook').then(
      res => {
        state.cookbook_list = res.data;
        console.log(state.cookbook_list);
      }
    ).catch(err => {
      console.log(err)
    })
  },
  getStaple(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "staple") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getHomecook(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "homecook") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getSoup(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "soup") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getSweets(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "sweets") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getStuff(state, {
    cookbook
  }) {
    state.stuff_list = [];
    for (i in cookbook) {
      for (n in state.shop_list) {
        if (i.stuff.id == n.id) {
          state.stuff_list.push(n);
        }
      }
    }
  },
  //发布食谱
  shareCookbook(state, {
    cookbook
  }) {
    var d = new Date();
    var date = d.getFullYear() + "-" + d.getMonth() + "-" + d.getDate();
    cookbook.likes = 0;
    cookbook.collects = 0;
    cookbook.date = date;
    console.log(cookbook);
  },
  //搜索
  search(state, value) {
    var result = [];
    for (var i = 0; i < state.cookbook_list.length; i++) {
      if (state.cookbook_list[i].name.search(value) != -1 || state.cookbook_list[i].info.search(value) != -1) {
        result.push(state.cookbook_list[i]);
      }
    }
    state.cookbook_filter = result;
  },
  clearCookbookFilter(state) {
    state.cookbook_filter = [];
    console.log(state.cookbook_filter);
  },
  //点赞排序
  sortOfLikes(state) {
    console.log(state.cookbook_list);
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return b.likes - a.likes;
    });
  },
  //收藏排序
  sortOfCollects(state) {
    console.log(state.cookbook_list);
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return b.collects - a.collects;
    });
  },
  //时间排序
  sortOfDate(state) {
    state.cookbook_new = state.cookbook_list;
    console.log(state.cookbook_new);
    state.cookbook_new.sort((a, b) => new Date(b).getTime() - new Date(a).getTime())
  },
  //热度排序
  sortOfHot(state) {
    state.cookbook_hot = state.cookbook_list;
    var left = 0;
    var right = state.cookbook_hot.length - 1;
    while (left < right) {
      for (var i = 0; i < right; i++) {
        if ((state.cookbook_hot[i].likes + state.cookbook_hot[i].collects) < (state.cookbook_hot[i + 1].likes + state.cookbook_hot[i + 1].collects)) {
          var temp = state.cookbook_hot[i];
          state.cookbook_hot[i] = state.cookbook_hot[i + 1];
          state.cookbook_hot[i + 1] = temp;
        }
      }
      right--;
      for (var i = right; i > left; i--) {
        if ((state.cookbook_hot[i - 1].likes + state.cookbook_hot[i - 1].collects) < (state.cookbook_hot[i].likes + state.cookbook_hot[i].collects)) {
          var temp = state.cookbook_hot[i];
          state.cookbook_hot[i] = state.cookbook_hot[i - 1];
          state.cookbook_hot[i - 1] = temp;
        }
      }
      left++;
    }
  },
  //用户发布的食谱
  sortOfMine(state) {
    if (state.loginUser != null) {
      state.cookbook_mine = state.loginUser.cookbook;
    } else {
      state.cookbook_mine = "";
    }
  },
  //点赞，收藏
  addLike(state, {
    id
  }) {
    state.cookbook_list.forEach((n, i) => {
      if (n.id == cookbook.id) {
        state.cookbook_list[i].likes++;
      }
    })
  },
  addCollect(state, {
    id
  }) {
    state.cookbook_list.forEach((n, i) => {
      if (n.id == cookbook.id) {
        state.cookbook_list[i].collects++;
      }
    })
  },
  //获取食材
  getShop(state) {
    axios.get('/stuff/getStuff').then(
      res => {
        console.log(res.data);
        state.shop_list = res.data;
      }
    ).catch(err => {
      console.log(err)
    })
    console.log(state.shop_list);
  },
  //添加到购物车操作
  add(state, {
    id
  }) {
    let record = state.loginUser.cart.find(n => n.id == id);
    if (!record) {
      state.loginUser.cart.push({
        id,
        num: 1,
        checked: false
      })
    } else {
      record.num++
    }
    console.log(state.loginUser.cart);
  },
  //清除购物车所有项
  clearAll(state) {
    state.loginUser.cart = []
  },
  //删除购物车的指定项
  del(state, product) {
    state.loginUser.cart.forEach((n, i) => {
      if (n.id == product.id) {
        state.loginUser.cart.splice(i, 1)
      }
    })
  },
  //商品数目增加
  addNum(state, product) {
    state.loginUser.cart.forEach((n, i) => {
      if (n.id == product.id) {
        state.loginUser.cart[i].num++;
      }
    })
  },
  //商品数目减少
  reduceNum(state, product) {
    state.loginUser.cart.forEach((n, i) => {
      if (n.id == product.id) {
        if (state.loginUser.cart[i].num > 1) {
          state.loginUser.cart[i].num--;
        }
      }
    })
  },
  //商品选择
  shopChecked(state, product) {
    state.loginUser.cart.forEach((n, i) => {
      if (n.id == product.id) {
        state.loginUser.cart[i].checked = !state.loginUser.cart[i].checked;
      }
    })
  },
  //商品全选
  allChecked(state) {
    let b = false;
    state.loginUser.cart.forEach(n => {
      n.checked = b;
    });
    b = true;
  },
  //支付成功删除商品
  delPayed(state) {
    state.loginUser.cart.forEach((n, i) => {
      if (n.checked) {
        state.loginUser.cart.splice(i, 1);
      }
    });
  },
  //判断支付密码
  pay(state, paynumber) {
    if (paynumber == state.loginUser.paynumber) {
      return true;
    } else {
      return false;
    }
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
