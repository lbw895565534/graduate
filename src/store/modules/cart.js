//初始化数据
const state = {
  //商品列表
  shop_list: [
    {
      id: 11,
      name: "香葱",
      img: "./src/mock/static/commodity/xiangcong.jpg",
      price: 15,
      unit: "斤",
      info: "",
      site: "",
    },
    {
      id: 12,
      name: "白砂糖",
      img: "./src/mock/static/commodity/baishatang.jpg",
      price: 5,
      unit: "斤",
      info: "",
      site: "广东广州",
    },
    {
      id: 13,
      name: "食盐",
      img: "./src/mock/static/commodity/shiyan.jpg",
      price: 20,
      unit: "包",
      info: "粤盐自然食用盐250g*10袋天然海盐加碘精制盐巴调味料品食盐批发",
      site: "广东广州",
    },
    {
      id: 14,
      name: "酱油",
      img: "./src/mock/static/commodity/jiangyou.jpg",
      price: 13,
      unit: "瓶",
      info: " 李锦记蒸鱼豉油，豉香浓郁，味道鲜甜，使用方法简单，可轻易带吃蒸鱼的鲜美本质，也可用于蒸食和烹饪海鲜，味道媲美酒家出品。",
      site: "广东江门",
    }
  ],

  //添加到购物车的商品（已选商品）
  added: []
}

//getter 抛出去的数据
const getters = {
  //商品列表
  shoplist: state => state.shop_list,
  //购物车的列表
  cartProducts: state => {
    return state.added.map(({ id, num, checked }) => {
      let product = state.shop_list.find(n => n.id == id)
      // console.info('product',product)
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
  //添加到购物车操作
  addToCart({ commit }, product) {
    commit('add', {
      id: product.id
    })
  },
  //清除购物车
  clearAllCart({ commit }) {
    commit('clearAll')
  },
  //删除购物车的指定的商品
  delProduct({ commit }, product) {
    commit('del', product)
  },
  //添加商品数量
  addNum({ commit }, product) {
    commit('addNum', product)
  },
  //减少商品数量
  reduceNum({ commit }, product) {
    commit('reduceNum', product)
  },
  //选中状态
  shopChecked({ commit }, product) {
    commit('shopChecked', product)
  },
  //全选中状态
  allChecked({ commit }) {
    commit('allChecked')
  }
}

//mutation
const mutations = {
  //添加到购物车操作
  add(state, { id }) {
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
    // console.info(record)

  },
  //清除购物车
  clearAll(state) {
    state.added = []
  },
  //删除购物车的指定的商品
  del(state, product) {
    state.added.forEach((n, i) => {
      if (n.id == product.id) {
        //console.info(11,n)
        //找到index的下标值
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
      if (state.added[i].num > 1) {
        state.added[i].num--;
      }
    })
  },
  shopChecked(state, product) {
    state.added.forEach((n, i) => {
      state.added[i].checked = !state.added[i].checked;
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