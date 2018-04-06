import axios from 'axios'

//初始化数据
const state = {
  //美食列表
  cookbook_list: [],
  cookbook_filter: [],
  //商品列表
  shop_list: [{
      id: 11,
      name: "香葱",
      img: "static/images/stuff/xiangcong.jpg",
      price: 15,
      unit: "斤",
      info: "",
      site: "",
    },
    {
      id: 12,
      name: "白砂糖",
      img: "static/images/stuff/baishatang.jpg",
      price: 5,
      unit: "斤",
      info: "",
      site: "广东广州",
    },
    {
      id: 13,
      name: "食盐",
      img: "static/images/stuff/shiyan.jpg",
      price: 20,
      unit: "包",
      info: "粤盐自然食用盐250g*10袋天然海盐加碘精制盐巴调味料品食盐批发",
      site: "广东广州",
    },
    {
      id: 14,
      name: "酱油",
      img: "static/images/stuff/jiangyou.jpg",
      price: 13,
      unit: "瓶",
      info: " 李锦记蒸鱼豉油，豉香浓郁，味道鲜甜，使用方法简单，可轻易带吃蒸鱼的鲜美本质，也可用于蒸食和烹饪海鲜，味道媲美酒家出品。",
      site: "广东江门",
    }
  ],
  stuff_list: [],
  //添加到购物车的商品（已选商品）
  added: [],
}

//getter 抛出去的数据
const getters = {
  //美食菜谱数据获取请求
  cookbooklist: state => state.cookbook_list,
  cookbookfilter: state => state.cookbook_filter,
  //商品列表
  shoplist: state => state.shop_list,
  //菜谱所需食材
  stufflist: state => state.stuff_list,
  //购物车的列表
  cartProducts: state => {
    return state.added.map(({
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
    getters.cartProducts.forEach(n => {
      if (n.checked) {
        total += n.price * n.num
      }
    })
    return total;
  },
  //计算总数量
  totalNum: (state, getters) => {
    let total = 0;
    getters.cartProducts.forEach(n => {
      if (n.checked) {
        total += n.num
      }
    })
    return total;
  },
}

//action 异步的操作
const actions = {
  getCookbook({
    commit
  }) {
    commit('getCookbook')
  },
  getHomecook({
    commit
  }) {
    commit('getHomecook')
  },
  getDrink({
    commit
  }) {
    commit('getDrink')
  },
  getPizza({
    commit
  }) {
    commit('getPizza')
  },
  getCake({
    commit
  }) {
    commit('getCake')
  },
  getStuff({
    commit
  }, stuff) {
    commit('getStuff', {
      id: stuff
    })
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
  }
}

//mutation
const mutations = {
  //获取菜谱
  getCookbook(state) {
    axios.get('/sort').then(
      res => {
        state.cookbook_list = res.data;
      }
    ).catch(err => {
      console.log(error)
    })
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return b.date - a.date;
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
  getDrink(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "drink") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getPizza(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "pizza") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getCake(state) {
    state.cookbook_filter = [];
    state.cookbook_list.forEach((n, i) => {
      if (n.kind == "cake") {
        state.cookbook_filter.push(n);
      }
    })
  },
  getStuff(state, {cookbook}) {
    state.stuff_list = [];
    for ( i in cookbook) {
      for ( n in state.shop_list) {
        if ( i.stuff.id == n.id){
          state.stuff_list.push(n);
        }
      }
    }
  },
  //排序
  sortOfLikes(state) {
    console.log(state.cookbook_list);
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return b.likes - a.likes;
    });
  },
  sortOfCollects(state) {
    console.log(state.cookbook_list);
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return b.collects - a.collects;
    });
  },
  sortOfDate(state) {
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function(a,b){
      return Date.parse(a.time) - Date.parse(b.time);//时间正序
  });
  },
  sortOfHot(state) {
    state.cookbook_filter = state.cookbook_list;
    state.cookbook_filter.sort(function (a, b) {
      return (b.likes + b.collects) - (a.likes + a.collects);
    });
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
  //添加到购物车操作
  add(state, {
    id
  }) {
    let record = state.added.find(n => n.id == id);
    if (!record) {
      state.added.push({
        id,
        num: 1,
        checked: false
      })
    } else {
      record.num++
    }
  },
  //清除购物车
  clearAll(state) {
    state.added = []
  },
  //删除购物车的指定的商品
  del(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        state.added.splice(i, 1)
      }
    })
  },
  addNum(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        state.added[i].num++;
      }
    })
  },
  reduceNum(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        if (state.added[i].num > 1) {
          state.added[i].num--;
        }
      }
    })
  },
  shopChecked(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
      state.added[i].checked = !state.added[i].checked;
      }
    })
  },
  allChecked(state) {
    state.added.forEach(n => {
      n.checked = !n.checked;
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters,
};
