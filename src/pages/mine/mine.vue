<template>
  <div class="box">
    <div class="box_headshot" :style="backgroundImage">
      <div class="column_headshot">
        <span>
          <img class="headshot" src="static/images/picture/mine.png" alt="" @click="toLogin()">
        </span>
      </div>

      <div class="column_core">
        <div class="core" @click="toShare()">
          <img class="icon" src="static/images/icon/mine/shareMine.svg" alt="">
          <span v-if="loginUser" class="record">发布：{{ loginUser.shareMine.length }}</span>
          <span v-if="!loginUser" class="record">未登录</span>
        </div>
        <div class="core core_middle" @click="toCollect()">
          <img class="icon" src="static/images/icon/mine/collect.svg" alt="">
          <span v-if="loginUser" class="record">收藏：{{ loginUser.collect.length }}</span>
          <span v-if="!loginUser" class="record">未登录</span>
        </div>
        <div class="core" @click="toCart()">
          <img class="icon" src="static/images/icon/mine/cart.svg" alt="">
          <span v-if="loginUser" class="record">购物：{{ loginUser.cart.length }}</span>
          <span v-if="!loginUser" class="record">未登录</span>
        </div>
      </div>
    </div>
    <div class="box_cell">
      <div class="container">
        <div class="cell" @click="toProfile()">
          <div class="left">
            <img class="icon_cell" :src="cells[0].src" alt="">
          </div>
          <div class="right">
            <span class="title_cell">{{ cells[0].name }}</span>
            <img class="arrows" src="static/images/icon/mine/advance.svg" alt="">
          </div>
        </div>
        <div class="cell" @click="toSetting()">
          <div class="left">
            <img class="icon_cell" :src="cells[1].src" alt="">
          </div>
          <div class="right">
            <span class="title_cell">{{ cells[1].name }}</span>
            <img class="arrows" src="static/images/icon/mine/advance.svg" alt="">
          </div>
        </div>
        <div class="cell" @click="toEncourage()">
          <div class="left">
            <img class="icon_cell" :src="cells[2].src" alt="">
          </div>
          <div class="right">
            <span class="title_cell">{{ cells[2].name }}</span>
            <img class="arrows" src="static/images/icon/mine/advance.svg" alt="">
          </div>
        </div>
      </div>
      <div class="container_logout">
        <button @click="exit()">退出登录</button>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    TabContainer,
    TabContainerItem,
    Toast
  } from "mint-ui";
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        backgroundImage: {
          background: "url('static/images/background/bg_mine.jpg') no-repeat fixed top"
        },
        record: {
          shareMine: 0,
          collect: 0,
          cart: 0
        },
        cells: [{
            name: "资料修改",
            src: "static/images/icon/mine/profile.svg"
          },
          {
            name: "设置",
            src: "static/images/icon/mine/setting.svg"
          },
          {
            name: "好评鼓励",
            src: "static/images/icon/mine/encourage.svg"
          }
        ]
      };
    },
    computed: {
      ...mapGetters(["loginUser"]),
      ...mapGetters(["userstatus"])
    },
    methods: {
      ...mapActions(["changePage"]),
      ...mapActions(["logout"]),
      isLogin() {
        console.log(this.loginUser);
        if (this.loginUser == null) {
          Toast({
            message: '请先登录',
            position: 'bottom',
            duration: 2000
          });
          return false;
        }
        return true;
      },
      //是否已经登录
      toLogin() {
        this.$router.push({
          name: "login"
        });
      },
      //跳转页面
      toShare() {
        if (this.isLogin()) {
          this.changePage("share");
          this.$router.push({
            name: "share",
            params: {
              selected: "3"
            }
          });
        }
      },
      toCollect() {
        if (this.isLogin()) {
          this.$router.push({
            name: "collect"
          });
        }
      },
      toCart() {
        if (this.isLogin()) {
          this.$router.push({
            name: "cart"
          });
        }
      },
      toProfile() {
        if (this.isLogin()) {
          this.$router.push({
            name: "profile",
            params: {
              name: "修改个人资料"
            }
          });
        }
      },
      toSetting() {
        if (this.isLogin()) {
          this.$router.push({
            name: "setting",
            params: {
              name: "设置"
            }
          });
        }
      },
      toEncourage() {
        if (this.isLogin()) {
          this.$router.push({
            name: "encourage",
            params: {
              name: "鼓励好评"
            }
          });
        }
      },
      exit() {
        console.log(this.loginUser);
        if (this.loginUser != null) {
          var that = this;
          Toast({
            message: '退出成功',
            position: 'bottom',
            duration: 2000
          })
          setTimeout(() => {
            that.$router.push({
              name: "login"
            });
          }, 2000)
        }
        if (this.loginUser == null) {
          Toast({
            message: '请先登录',
            position: 'bottom',
            duration: 2000
          });
        }
      }
    }
  };

</script>
<style scoped>
  .box {
    width: 100%;
    min-height: 557px;
    display: flex;
    flex-direction: column;
  }

  /** 上半部分 **/

  .box_headshot {
    width: 100%;
    height: 278px;
    display: flex;
    flex-direction: column;
  }

  .column_headshot {
    width: 100%;
    height: 100%;
    flex: 3;
    position: relative;
  }

  .column_headshot span {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headshot {
    width: 100px;
    height: 100px;
  }

  .column_core {
    width: 100%;
    /* 不设置height: 100%; 子元素将无法获取父元素的高度 */
    height: 100%;
    flex: 2;
    display: flex;
  }

  .core {
    width: 100%;
    height: 0;
    flex: 1;
    justify-content: center;
    text-align: center;
  }

  .core_middle {
    border-left: 1px solid #fff;
    border-right: 1px solid #999;
  }

  .icon {
    width: 50px;
    height: 50px;
    display: block;
    margin: auto;
    margin-top: 20px;
    margin-bottom: 5px;
  }

  .record {
    flex: 2;
    color: #fff;
  }

  /** 下半部分 **/

  .box_cell {
    width: 100%;
    height: 100%;
    flex: 1;
    position: relative;
    border-top: 10px solid #eee;
  }

  .container {
    width: 100%;
  }

  .blank {
    width: 100%;
    height: 15px;
    background: #fff;
  }

  .cell:first-child {
    border-top: 1px solid #d9d9d9
  }

  .cell {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
  }

  .left {
    width: 50px;
    height: 100%;
  }

  .icon_cell {
    display: inline-block;
    margin: 9px;
  }

  .right {
    height: 100%;
    width: 100%;
    border-bottom: 1px solid #d9d9d9;
  }

  .title_cell {
    line-height: 50px;
    font-size: 16px;
  }

  .arrows {
    height: 21px;
    float: right;
    position: relative;
    top: 15px;
    right: 10px;
  }

  .container_logout {
    width: 100%;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 10px solid #eee;
  }

  .container_logout>button {
    width: 80%;
    max-width: 360px;
    height: 36px;
    color: #fff;
    font-family: "黑体";
    border: none;
    background: #ff2c45;
    border-radius: 18px;
    outline: none;
  }

</style>
