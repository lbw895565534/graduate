//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
const state = {
  user: [{
      id: 1,
      username: "Xiaoming",
      password: "123456",
      name: "",
      sex: "男",
      birth: Mock.Random.date('yyyy-MM-dd'),
      telnumber: "18819492932",
      info: "",
      paynumber: 123456,
      cookbook: [],
      cart: []
    },
    {
      id: 2,
      username: "Liming",
      password: "1234567",
      name: "",
      sex: "男",
      birth: Mock.Random.date('yyyy-MM-dd'),
      telnumber: "18819492932",
      info: "",
      paynumber: 123456,
      cookbook: [],
      cart: []
    },
    {
      id: 3,
      username: "Alice",
      password: "12345678",
      name: "",
      sex: "女",
      birth: Mock.Random.date('yyyy-MM-dd'),
      telnumber: "18819492932",
      info: "",
      paynumber: 123456,
      cookbook: [],
      cart: []
    }
  ],
  cookbooks: [{
      id: 11,
      kind: "homecook",
      name: "凉拌茄子",
      img: "static/images/cookbook/homecook/liangbanqiezi.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "凉拌菜是餐桌不可忽视美味。即使是素菜，凉拌一下也很美味，凉拌茄子是最喜欢的凉拌菜之一。简单、美味、开胃，多吃也不怕长肉。",
      content: [
        {num: 1, content: "备好茄子及蒜头"},
        {num: 2, content: "茄子上蒸锅，蒸至熟"},
        {num: 3, content: "蒜头压成蒜头泥备用"},
        {num: 4, content: "蒸好的茄子出锅"},
        {num: 5, content: "用筷子划散茄子"},
        {num: 6, content: "加入蒜头"},
        {num: 7, content: "加入适量酱油调味即可"}
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 15,
        name: "茄子",
        num: "500g"
      }, {
        id: 16,
        name: "尖椒",
        num: "半个"
      }, {
        id: 17,
        name: "蒜头",
        num: "三个"
      }, {
        id: 14,
        name: "酱油",
        num: "适量"
      }],
      likeUser: ["Liming"],
      collectUser: []
    },
    {
      id: 12,
      kind: "homecook",
      name: "菠萝咕咾肉",
      img: "static/images/cookbook/homecook/boluogulaorou.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "菠萝咕咾肉是一道广东的传统名菜，属于粤菜系。其口感清新解腻，酸甜的味道能增进食欲，无论下酒还是下饭，都非常美味。这道菜因为其酸甜的口味、鲜艳的色泽，深受孩子们的喜爱，里面青红椒、菠萝的加入，不仅丰富了其口感，还增加了营养，妈妈们可以常给孩子做。",
      content: [
        {num: 1, content: "备好原料菠萝，番茄"},
        {num: 2, content: "将肉丝提前用葱姜酒盐腌制，用淀粉拌匀，裹上面包糠"},
        {num: 3, content: "入锅炸熟"},
        {num: 4, content: "将肉丝乘出后放入菠萝和番茄翻炒，然后加入肉丝"},
        {num: 5, content: "淋入少许酱油 糖 盐 翻炒装盘"},
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 112,
        name: "菠萝",
        num: "适量"
      },{
        id: 110,
        name: "猪肉",
        num: "适量"
      },{
        id: 111,
        name: "番茄",
        num: "适量"
      },{
        id: 11,
        name: "葱",
        num: "适量"
      },{
        id: 18,
        name: "姜",
        num: "适量"
      },{
        id: 19,
        name: "黄酒",
        num: "适量"
      },{
        id: 13,
        name: "食盐",
        num: "适量"
      },{
        id: 14,
        name: "酱油",
        num: "适量"
      },{
        id: 113,
        name: "面包糠",
        num: "适量"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 13,
      kind: "homecook",
      name: "扇贝粉丝",
      img: "static/images/cookbook/homecook/shanbeifensi.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "味道很鲜美很简单易做的菜。新年餐桌上的一大亮点。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 14,
      kind: "homecook",
      name: "避风塘炒虾",
      img: "static/images/cookbook/homecook/bifengtangchaoxia.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "避风塘炒虾，它源自于香港避风塘地区的一种烹饪方法，港式茶餐厅中很流行的一道菜，以蒜末和面包糠为原料，炸得金黄的大蒜末又香又脆，佐以面包糠，酥脆的口感，香气四溢，让普通的菜肴变得不再平庸，摇身一变介入高档菜肴的行业中了。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 15,
      kind: "sweets",
      name: "凤梨冻饮",
      img: "static/images/cookbook/sweets/fenglidongyin.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 16,
      kind: "sweets",
      name: "芦荟醋饮",
      img: "static/images/cookbook/sweets/luhuicuyin.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "体质虚寒者不宜长期饮用。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 17,
      kind: "sweets",
      name: "蜂蜜蛋糕",
      img: "static/images/cookbook/sweets/fengmidangao.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "对我来说，虽然中华料理做了400多道，但西式料理真的是门外汉，经历了第一次将蛋糕烤成一张鸡蛋饼的失败，真的很怀疑自己是不是做西式料理的料，但一次失败算什么，重新再来，一步步实践，总会有做出一样出色糕点。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 18,
      kind: "sweets",
      name: "鲜奶油蛋糕",
      img: "static/images/cookbook/sweets/xiannaiyoudangao.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "鸡蛋150克，低粉50克，玉米油24克，牛奶24克，细砂糖（蛋白用）36克，细砂糖（蛋黄用）18克",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    },
    {
      id: 19,
      kind: "sweets",
      name: "乳酪蛋糕",
      img: "static/images/cookbook/sweets/nailaodangao.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "很喜欢乳酪蛋糕的柔软浓郁口感，无需任何装饰，就以口感取胜～",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }],
      likeUser: [],
      collectUser: []
    }
  ],
  stuff: [{
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
      info: "李锦记蒸鱼豉油，豉香浓郁，味道鲜甜，使用方法简单，可轻易带吃蒸鱼的鲜美本质，也可用于蒸食和烹饪海鲜，味道媲美酒家出品。",
      site: "广东江门",
    },
    {
      id: 15,
      name: "茄子",
      img: "static/images/stuff/qiezi.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 16,
      name: "尖椒",
      img: "static/images/stuff/jianjiao.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 17,
      name: "蒜头",
      img: "static/images/stuff/suantou.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 18,
      name: "姜",
      img: "static/images/stuff/jiang.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 19,
      name: "黄酒",
      img: "static/images/stuff/huangjiu.jpg",
      price: 13,
      unit: "瓶",
      info: "",
      site: "广东江门",
    },
    {
      id: 110,
      name: "猪肉",
      img: "static/images/stuff/zhurou.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 111,
      name: "番茄",
      img: "static/images/stuff/fanqie.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 112,
      name: "菠萝",
      img: "static/images/stuff/boluo.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    },
    {
      id: 113,
      name: "面包",
      img: "static/images/stuff/mianbao.jpg",
      price: 13,
      unit: "斤",
      info: "",
      site: "广东江门",
    }
  ],
}
/* 登录 */
Mock.mock('/user/login', (req, res) => {
  //string转换json
  var user = JSON.parse(req.body).user;
  //状态码
  var status = 400;
  //返回对象
  var loginUser = null;
  //验证用户名和密码
  state.user.forEach(n => {
    if (n.username == user.username && n.password == user.password) {
      status = 200;
      loginUser = n;
    }
  });
  return loginUser;
})
/* 注册 */
Mock.mock('/user/regist', (req, res) => {
  //string转换json
  var newUser = JSON.parse(req.body);
  //状态码
  var status = 200;
  //验证用户名和密码
  state.user.forEach(n => {
    if (n.username == newUser.username) {
      status = 400;
    }
  });
  if (status == 200) {
    console.log(newUser);
    state.user.push(newUser);
  }
  console.log(state.user);
  return status;
})
/* 获取全部菜谱 */
Mock.mock('/cookbook/getCookbook', (req, res) => {
  return state.cookbooks;
})
/* 常菜菜谱 */
Mock.mock('/cookbook/staple', (req, res) => {
  let staple = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "staple") {
      staple.push(state.cookbooks[i]);
    }
  })
  return staple;
})
/* 饮料菜谱 */
Mock.mock('/cookbook/homecook', (req, res) => {
  let homecook = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "homecook") {
      homecook.push(state.cookbooks[i]);
    }
  })
  return homecook;
})
/* 比萨菜谱 */
Mock.mock('/cookbook/soup', (req, res) => {
  let soup = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "soup") {
      soup.push(state.cookbooks[i]);
    }
  })
  return soup;
})
/* 蛋糕菜谱 */
Mock.mock('/cookbook/sweets', (req, res) => {
  let sweets = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "sweets") {
      sweets.push(state.cookbooks[i]);
    }
  })
  return sweets;
})
/* 图片上传 */
Mock.mock('/shareInput/img', (req, res) => {
  console.log(req);
  return true;
})
/* 食材 */
Mock.mock('/stuff/getStuff', (req, res) => {
  return state.stuff;
})
/* 修改信息 */
Mock.mock('/mine/profile', (req, res) => {
  console.log(req);
  return true;
})
