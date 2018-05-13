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
      cart: [],
      collect: []
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
      cart: [],
      collect: []
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
      cart: [],
      collect: []
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
      collectUser: ["Liming"],
      comment: [
        {name: "用户13245", txt: "还不错巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉巴拉", date: "2018-03-28"},
        {name: "君莫笑", txt: "很详细，已经做出来了！", date: "2018-01-20"},
      ]
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
      collectUser: [],
      comment: []
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
      collectUser: [],
      comment: []
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
      collectUser: [],
      comment: []
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
        {num: 1, content: "凤梨去皮后果肉切丁备用。。"},
        {num: 2, content: "取100cc凤梨汁以小火加热至80度时,加入果冻粉拌匀,倒入果冻模后冷藏,待凝固时将凤梨果冻切丁备用。"},
        {num: 3, content: "将作法1的凤梨丁、100cc凤梨汁及少许冰块一起放入果汁机中搅打至细砂状后,放入作法3的凤梨果冻丁及凤梨丁(份量外)稍加搅拌即可。"},
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 12,
        name: "白糖",
        num: "适量"
      },{
        id: 112,
        name: "菠萝",
        num: "半只"
      }],
      likeUser: [],
      collectUser: [],
      comment: []
    },
    {
      id: 16,
      kind: "sweets",
      name: "冻泡奶茶",
      img: "static/images/cookbook/sweets/dongpaonaicha.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "最近沉迷于冷泡茶 冷泡咖灰 灰常之方便 发现冷泡奶茶也很好喝 相比于热奶茶 多了一丝夏日的清爽",
      content: [
        {num: 1, content: "将茶包放入罐中，为了让茶更好的释放出味道，倒入刚好淹过茶包的热水先泡几分钟（如果觉得这个步骤麻烦可以省略 相比味道会淡一些）"},
        {num: 2, content: "将牛奶倒入（可以根据自己的口味加入糖，炼乳等），盖好盖子放入冰箱冷藏一夜，如果时间不容许至少冷藏5个小时，才能更好的泡出味道。可以自己加一些布丁，珍珠啊之类的，技能升级。"}
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 12,
        name: "白糖",
        num: "适量"
      },{
        id: 117,
        name: "牛奶",
        num: "适量"
      },{
        id: 118,
        name: "红茶",
        num: "适量"
      }],
      likeUser: [],
      collectUser: [],
      comment: []
    },
    {
      id: 17,
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
      collectUser: [],
      comment: []
    },
    {
      id: 18,
      kind: "soup",
      name: "番茄土豆汤",
      img: "static/images/cookbook/soup/fanqietudoutang.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "某天，随意的搭配，做出来竟然这么好喝！再配上欧包，绝了",
      content: [
        {num: 1, content: "西红柿切小块（去皮会更好），土豆切小块"},
        {num: 2, content: "热锅倒油，油7、8分热时，倒入西红柿翻炒，炒出汤汁，再倒入土豆翻炒一会儿"},
        {num: 3, content: "加水没过食材，大火烧开转中火，再煮20分钟到30分钟（视加水量而定），汤汁会变得浓稠，出锅前，加入适量盐和糖（稍加一点糖，酸酸甜甜的味道）"},
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "适量"
      },{
        id: 111,
        name: "番茄",
        num: "2个"
      },{
        id: 114,
        name: "土豆",
        num: "1个"
      },{
        id: 12,
        name: "白砂糖",
        num: "适量"
      }],
      likeUser: [],
      collectUser: [],
      comment: []
    },
    {
      id: 19,
      kind: "staple",
      name: "番茄鸡蛋面",
      img: "static/images/cookbook/staple/fanqiejidanmian.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "家常的一道面食，很适合狼吞虎咽。",
      content: [
        {num: 1, content: "青菜择洗干净，番茄切块。"},
        {num: 2, content: "鸡蛋加少许盐，筷子打散。"},
        {num: 3, content: "锅里加少许油，鸡蛋开炒"},
        {num: 4, content: "鸡蛋稍微成型下西红柿，加茄汁面酱，加开水，煮面，最后下青菜，放适量盐和鸡精。"},
        {num: 5, content: "撒上小葱花装碗里，是不是超级快？"},
      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "适量"
      },{
        id: 111,
        name: "番茄",
        num: "1个"
      },{
        id: 11,
        name: "香葱",
        num: "1个"
      },{
        id: 115,
        name: "生菜",
        num: "适量"
      },{
        id: 116,
        name: "鸡蛋",
        num: "2个"
      }],
      likeUser: [],
      collectUser: [],
      comment: []
    }
  ],
  stuff: [{
      id: 11,
      name: "香葱",
      img: "static/images/stuff/xiangcong.jpg",
      price: 15.00,
      unit: "斤",
      info: "小汤山 香葱 新鲜蔬菜 北京基地",
      site: "北京市朝阳区",
      link: [12]
    },
    {
      id: 12,
      name: "白砂糖",
      img: "static/images/stuff/baishatang.jpg",
      price: 5.00,
      unit: "斤",
      info: "广西一级白砂糖散装纯甘蔗白糖批发烹饪烘焙细砂糖食用糖",
      site: "广东广州",
    },
    {
      id: 13,
      name: "食盐",
      img: "static/images/stuff/shiyan.jpg",
      price: 20.00,
      unit: "包",
      info: "粤盐自然食用盐250g*10袋天然海盐加碘精制盐巴调味料品食盐批发",
      site: "广东广州",
    },
    {
      id: 14,
      name: "酱油",
      img: "static/images/stuff/jiangyou.jpg",
      price: 13.00,
      unit: "瓶",
      info: "李锦记蒸鱼豉油，豉香浓郁，味道鲜甜，使用方法简单，可轻易带吃蒸鱼的鲜美本质，也可用于蒸食和烹饪海鲜，味道媲美酒家出品。",
      site: "广东江门",
    },
    {
      id: 15,
      name: "茄子",
      img: "static/images/stuff/qiezi.jpg",
      price: 5.90,
      unit: "斤",
      info: "农家自种茄子新鲜蔬菜农产品 细茄子 细长茄子",
      site: "浙江台州",
    },
    {
      id: 16,
      name: "尖椒",
      img: "static/images/stuff/jianjiao.jpg",
      price: 5.00,
      unit: "斤",
      info: "新鲜辣椒红小米椒特辣农家现摘现发蔬菜500g尖椒朝指天椒",
      site: "广东江门",
    },
    {
      id: 17,
      name: "蒜头",
      img: "static/images/stuff/suantou.jpg",
      price: 22.90,
      unit: "斤",
      info: "农大姐妹 新鲜大蒜 鲜蒜头 可腌制糖醋蒜 紫皮大蒜",
      site: "广东广州",
    },
    {
      id: 18,
      name: "姜",
      img: "static/images/stuff/jiang.jpg",
      price: 13.00,
      unit: "斤",
      info: "土哆哆新鲜生姜老姜云南罗平小黄姜包",
      site: "云南罗平",
    },
    {
      id: 19,
      name: "黄酒",
      img: "static/images/stuff/huangjiu.jpg",
      price: 18.00,
      unit: "瓶",
      info: "绍兴黄酒 老闸黄酒六年陈手工糯米花雕酒500ml",
      site: "浙江绍兴",
    },
    {
      id: 110,
      name: "猪肉",
      img: "static/images/stuff/zhurou.jpg",
      price: 35.00,
      unit: "斤",
      info: "润民生鲜猪肉新鲜现杀原生态有机瘦猪腿上肉香港驻港部队",
      site: "广东深圳",
    },
    {
      id: 111,
      name: "番茄",
      img: "static/images/stuff/fanqie.jpg",
      price: 25.00,
      unit: "斤",
      info: "有机汇 有机西红柿新鲜蔬菜",
      site: "山东潍坊",
    },
    {
      id: 112,
      name: "菠萝",
      img: "static/images/stuff/boluo.jpg",
      price: 19.90,
      unit: "斤",
      info: "湛江徐闻菠萝热带春季夏季当季农家新鲜水果",
      site: "广东湛江",
    },
    {
      id: 113,
      name: "面包",
      img: "static/images/stuff/mianbao.jpg",
      price: 38.90,
      unit: "包",
      info: "港荣奶香蒸蛋糕1kg整箱早餐代餐糕点手撕小面包休闲零食品",
      site: "广东江门",
    },
    {
      id: 114,
      name: "土豆",
      img: "static/images/stuff/tudou.jpg",
      price: 15.80,
      unit: "斤",
      info: "阿表哥洋芋小土豆农产品新鲜蔬菜马铃薯红皮黄心云南高山土豆生鲜",
      site: "云南曲靖",
    },
    {
      id: 115,
      name: "生菜",
      img: "static/images/stuff/shengcai.jpg",
      price: 38.90,
      unit: "斤",
      info: "四季播蔬菜种子 奶油生菜种子 生吃超嫩营养蔬菜沙拉 意大利生菜",
      site: "广西桂林",
    },    
    {
      id: 116,
      name: "鸡蛋",
      img: "static/images/stuff/jidan.jpg",
      price: 36.00,
      unit: "斤",
      info: "日本独资 上海大鹤蛋品有限公司",
      site: "上海",
    },    
    {
      id: 117,
      name: "牛奶",
      img: "static/images/stuff/niunai.jpg",
      price: 45.00,
      unit: "箱",
      info: "",
      site: "北京",
    },    
    {
      id: 118,
      name: "红茶",
      img: "static/images/stuff/hongcha.jpg",
      price: 68.00,
      unit: "斤",
      info: "优质茶叶",
      site: "安徽黄山",
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
