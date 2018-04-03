//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
const state = {
  cookbooks: [{
      id: 11,
      kind: "homecook",
      name: "凉拌茄子",
      img: "static/images/cookbook/food/liangbanqiezi.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "凉拌菜是餐桌不可忽视美味。即使是素菜，凉拌一下也很美味，凉拌茄子是最喜欢的凉拌菜之一。简单、美味、开胃，多吃也不怕长肉。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 11,
        name: "香葱",
        num: "1"
      }, {
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 12,
      kind: "homecook",
      name: "菠萝咕咾肉",
      img: "static/images/cookbook/food/boluogulaorou.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "菠萝咕咾肉是一道广东的传统名菜，属于粤菜系。其口感清新解腻，酸甜的味道能增进食欲，无论下酒还是下饭，都非常美味。这道菜因为其酸甜的口味、鲜艳的色泽，深受孩子们的喜爱，里面青红椒、菠萝的加入，不仅丰富了其口感，还增加了营养，妈妈们可以常给孩子做。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 13,
      kind: "homecook",
      name: "扇贝粉丝",
      img: "static/images/cookbook/food/shanbeifensi.jpg",
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
      }]
    },
    {
      id: 14,
      kind: "homecook",
      name: "避风塘炒虾",
      img: "static/images/cookbook/food/bifengtangchaoxia.jpg",
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
      }]
    },
    {
      id: 21,
      kind: "drink",
      name: "草莓鸡尾饮料",
      img: "static/images/cookbook/drink/caomeijiwei.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "这是一款完美的夏日饮品。如果你想来点刺激，那就加一点朗姆酒吧！",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 22,
      kind: "drink",
      name: "洛神花创意饮料",
      img: "static/images/cookbook/drink/luoshenhuachuangyi.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "猫猫把蜂蜜洛神花茶做了几个小变化让它呈现出3种不同吃法。1.洛神花蜂蜜果冻2.洛神花蜂蜜气泡饮",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 23,
      kind: "drink",
      name: "凤梨冻饮",
      img: "static/images/cookbook/drink/fenglidongyin.jpg",
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
      }]
    },
    {
      id: 24,
      kind: "drink",
      name: "芦荟醋饮",
      img: "static/images/cookbook/drink/luhuicuyin.jpg",
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
      }]
    },
    {
      id: 31,
      kind: "pizza",
      name: "鸡蛋吐司披萨",
      img: "static/images/cookbook/pizza/jidantusi.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "不用烤箱也能做出披萨 万变女料理世界的第一道入门！ 材料是鸡蛋、吐司，相当平凡无奇吧？ 不过万变女可不是普通的厨师， 相信我，跟着我继续看下去吧！ 不需要烤箱，世界上最松软可口的万变女披萨即将诞生。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 32,
      kind: "pizza",
      name: "火腿鲜菇披萨",
      img: "static/images/cookbook/pizza/huotuixiangu.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "面皮材料：高筋面粉200g，酵母1小勺，盐1/2小勺，奶粉10g，糖8g，植物油15ml，水适量。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 33,
      kind: "pizza",
      name: "低脂清爽水果披萨",
      img: "static/images/cookbook/pizza/dizhiqingshuangshuiguo.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "它是水果口味滴。我用了多种的水果，菠萝、猕猴桃、香蕉、圣女果。是营养又保健的水果，还放上了一些核桃仁，那营养和美味真的没说的的，这几种水果也是非常的适合高脂的人群，而且味道一点不次于肉肉的披萨，别样的口感和风味，一样的美味可口，好吃的很哦！",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 34,
      kind: "pizza",
      name: "叉烧百匯披萨",
      img: "static/images/cookbook/pizza/chashaobaihui.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "叉烧酱材料：酱油50cc、糖20g、麦芽15g、水50cc、蒜末适量、葱适量、姜适量作法：取一锅，倒入全部材料一同熬煮至呈现浓稠状即可。",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 41,
      kind: "cake",
      name: "蜂蜜蛋糕",
      img: "static/images/cookbook/cake/fengmidangao.jpg",
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
      }]
    },
    {
      id: 42,
      kind: "cake",
      name: "酸奶蛋糕",
      img: "static/images/cookbook/cake/suannaidangao.jpg",
      likes: Mock.Random.natural(1, 100),
      collects: Mock.Random.natural(1, 100),
      info: "酸奶100ml，低筋面粉20克，鸡蛋2个，黄油24克，白砂糖40克，玉米淀粉12克",
      content: [

      ],
      date: Mock.Random.date('yyyy-MM-dd'),
      shoplist: [{
        id: 13,
        name: "食盐",
        num: "半勺"
      }]
    },
    {
      id: 43,
      kind: "cake",
      name: "鲜奶油蛋糕",
      img: "static/images/cookbook/cake/xiannaiyoudangao.jpg",
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
      }]
    },
    {
      id: 44,
      kind: "cake",
      name: "乳酪蛋糕",
      img: "static/images/cookbook/cake/nailaodangao.jpg",
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
      }]
    }
  ]
}
/* 获取全部菜谱 */
Mock.mock('/sort', (req, res) => {
  return state.cookbooks;
})
/* 常菜菜谱 */
Mock.mock('/sort/homecook', (req, res) => {
  let homecooks = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "homecook") {
      homecooks.push(state.cookbooks[i]);
    }
  })
  return homecooks;
})
/* 饮料菜谱 */
Mock.mock('/sort/drink', (req, res) => {
  let drink = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "drink") {
      drink.push(state.cookbooks[i]);
    }
  })
  return drink;
})
/* 比萨菜谱 */
Mock.mock('/sort/pizza', (req, res) => {
  let pizza = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "pizza") {
      pizza.push(state.cookbooks[i]);
    }
  })
  return pizza;
})
/* 蛋糕菜谱 */
Mock.mock('/sort/cake', (req, res) => {
  let cake = [];
  state.cookbooks.forEach((n, i) => {
    if (n.kind == "cake") {
      cake.push(state.cookbooks[i]);
    }
  })
  return cake;
})
