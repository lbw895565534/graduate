//引入mockjs
const Mock = require('mockjs')
//使用mockjs模拟数据
/* 米饭菜谱 */
Mock.mock('/sort/homecook', (req, res) => {
  return {
    data: [
      {
        "name": "凉拌茄子",
        "img": "./src/mock/static/food/liangbanqiezi.jpg",
        "likes": "120",
        "collects": "110",
        "info": "凉拌菜是餐桌不可忽视美味。即使是素菜，凉拌一下也很美味，凉拌茄子是最喜欢的凉拌菜之一。简单、美味、开胃，多吃也不怕长肉。",
        "content": [

        ],
      },
      {
        "name": "菠萝咕咾肉",
        "img": "./src/mock/static/food/boluogulaorou.jpg",
        "likes": "120",
        "collects": "110",
        "info": "菠萝咕咾肉是一道广东的传统名菜，属于粤菜系。其口感清新解腻，酸甜的味道能增进食欲，无论下酒还是下饭，都非常美味。这道菜因为其酸甜的口味、鲜艳的色泽，深受孩子们的喜爱，里面青红椒、菠萝的加入，不仅丰富了其口感，还增加了营养，妈妈们可以常给孩子做。",
        "content": [

        ],
      },
      {
        "name": "扇贝粉丝",
        "img": "./src/mock/static/food/shanbeifensi.jpg",
        "likes": "120",
        "collects": "110",
        "info": "味道很鲜美很简单易做的菜。新年餐桌上的一大亮点。",
        "content": [

        ],
      },
      {
        "name": "避风塘炒虾",
        "img": "./src/mock/static/food/bifengtangchaoxia.jpg",
        "likes": "120",
        "collects": "110",
        "info": "避风塘炒虾，它源自于香港避风塘地区的一种烹饪方法，港式茶餐厅中很流行的一道菜，以蒜末和面包糠为原料，炸得金黄的大蒜末又香又脆，佐以面包糠，酥脆的口感，香气四溢，让普通的菜肴变得不再平庸，摇身一变介入高档菜肴的行业中了。",
        "content": [

        ],
      }
    ]
  }
})
/* 饮料菜谱 */
Mock.mock('/sort/drink', (req, res) => {
  return {
    data: [
      {
        "name": "草莓鸡尾饮料",
        "img": "./src/mock/static/drink/caomeijiwei.jpg",
        "likes": "120",
        "collects": "110",
        "info": "这是一款完美的夏日饮品。如果你想来点刺激，那就加一点朗姆酒吧！",
        "content": [

        ]
      },
      {
        "name": "洛神花创意饮料",
        "img": "./src/mock/static/drink/luoshenhuachuangyi.jpg",
        "likes": "120",
        "collects": "110",
        "info": "猫猫把蜂蜜洛神花茶做了几个小变化让它呈现出3种不同吃法。1.洛神花蜂蜜果冻2.洛神花蜂蜜气泡饮",
        "content": [

        ]
      },
      {
        "name": "凤梨冻饮",
        "img": "./src/mock/static/drink/fenglidongyin.jpg",
        "likes": "120",
        "collects": "110",
        "info": "",
        "content": [

        ]
      },
      {
        "name": "芦荟醋饮",
        "img": "./src/mock/static/drink/luhuicuyin.jpg",
        "likes": "120",
        "collects": "110",
        "info": "体质虚寒者不宜长期饮用。",
        "content": [

        ]
      }
    ]
  }
})
/* 比萨菜谱 */
Mock.mock('/sort/pizza', (req, res) => {
  return {
    data: [
      {
        "name": "鸡蛋吐司披萨",
        "img": "./src/mock/static/pizza/jidantusi.jpg",
        "likes": "120",
        "collects": "110",
        "info": "不用烤箱也能做出披萨 万变女料理世界的第一道入门！ 材料是鸡蛋、吐司，相当平凡无奇吧？ 不过万变女可不是普通的厨师， 相信我，跟着我继续看下去吧！ 不需要烤箱，世界上最松软可口的万变女披萨即将诞生。",
        "content": [

        ],
      },
      {
        "name": "火腿鲜菇披萨",
        "img": "./src/mock/static/pizza/huotuixiangu.jpg",
        "likes": "120",
        "collects": "110",
        "info": "面皮材料：高筋面粉200g，酵母1小勺，盐1/2小勺，奶粉10g，糖8g，植物油15ml，水适量。",
        "content": [

        ]
      },
      {
        "name": "低脂清爽水果披萨",
        "img": "./src/mock/static/pizza/dizhiqingshuangshuiguo.jpg",
        "likes": "120",
        "collects": "110",
        "info": "它是水果口味滴。我用了多种的水果，菠萝、猕猴桃、香蕉、圣女果。是营养又保健的水果，还放上了一些核桃仁，那营养和美味真的没说的的，这几种水果也是非常的适合高脂的人群，而且味道一点不次于肉肉的披萨，别样的口感和风味，一样的美味可口，好吃的很哦！",
        "content": [

        ]
      },
      {
        "name": "叉烧百匯披萨",
        "img": "./src/mock/static/pizza/chashaobaihui.jpg",
        "likes": "120",
        "collects": "110",
        "info": "叉烧酱材料：酱油50cc、糖20g、麦芽15g、水50cc、蒜末适量、葱适量、姜适量作法：取一锅，倒入全部材料一同熬煮至呈现浓稠状即可。",
        "content": [

        ]
      }
    ]
  }
})
/* 蛋糕菜谱 */
Mock.mock('/sort/cake', (req, res) => {
  return {
    data: [
      {
        "name": "蜂蜜蛋糕",
        "img": "./src/mock/static/cake/fengmidangao.jpg",
        "likes": "120",
        "collects": "110",
        "info": "对我来说，虽然中华料理做了400多道，但西式料理真的是门外汉，经历了第一次将蛋糕烤成一张鸡蛋饼的失败，真的很怀疑自己是不是做西式料理的料，但一次失败算什么，重新再来，一步步实践，总会有做出一样出色糕点。",
        "content": [

        ],
      },
      {
        "name": "酸奶蛋糕",
        "img": "./src/mock/static/cake/suannaidangao.jpg",
        "likes": "120",
        "collects": "110",
        "info": "酸奶100ml，低筋面粉20克，鸡蛋2个，黄油24克，白砂糖40克，玉米淀粉12克",
        "content": [

        ],
      },
      {
        "name": "鲜奶油蛋糕",
        "img": "./src/mock/static/cake/xiannaiyoudangao.jpg",
        "likes": "120",
        "collects": "110",
        "info": "鸡蛋150克，低粉50克，玉米油24克，牛奶24克，细砂糖（蛋白用）36克，细砂糖（蛋黄用）18克",
        "content": [

        ],
      },
      {
        "name": "乳酪蛋糕",
        "img": "./src/mock/static/cake/nailaodangao.jpg",
        "likes": "120",
        "collects": "110",
        "info": "很喜欢乳酪蛋糕的柔软浓郁口感，无需任何装饰，就以口感取胜～",
        "content": [

        ],
      }
    ]
  }
})
/* 蛋糕菜谱 */
Mock.mock('/commodity', (req, res) => {
  return {
    data: [
      {
        "name": "香葱",
        "img": "./src/mock/static/commodity/xiangcong.jpg",
        "price": 15,
        "unit": "斤",
        "info": "",
        "site": "",
        "content": [

        ]
      },
      {
        "name": "白砂糖",
        "img": "./src/mock/static/commodity/baishatang.jpg",
        "price": 5,
        "unit": "斤",
        "info": "",
        "site": "广东广州",
        "content": [

        ]
      },
      {
        "name": "食盐",
        "img": "./src/mock/static/commodity/shiyan.jpg",
        "price": 20,
        "unit": "包",
        "info": "粤盐自然食用盐250g*10袋天然海盐加碘精制盐巴调味料品食盐批发",
        "site": "广东广州",
        "content": [

        ]
      },
      {
        "name": "酱油",
        "img": "./src/mock/static/commodity/jiangyou.jpg",
        "price": 13,
        "unit": "瓶",
        "info": " 李锦记蒸鱼豉油，豉香浓郁，味道鲜甜，使用方法简单，可轻易带吃蒸鱼的鲜美本质，也可用于蒸食和烹饪海鲜，味道媲美酒家出品。",
        "site": "广东江门",
        "content": [

        ]
      }
    ]
  }
})
