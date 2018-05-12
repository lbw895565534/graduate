<template>
  <div>
    <div class="title">
      <img :src="cookbook.img" alt="">
      <span>{{ cookbook.name }}</span>
      <br>
      <small>{{ cookbook.date }}发布</small>
    </div>
    <hr>
    <div class="introduce">
      <div class="op">
        <div class="op_like">
          <img src="@/assets/img/icon/like.svg" width="16px" @click="addLike(cookbook)" v-if="!liked">
          <img src="@/assets/img/icon/liked.svg" width="16px" @click="addLike(cookbook)" v-if="liked">
          <span>{{ cookbook.likes }}</span>
        </div>
        <div class="blank"></div>
        <div class="op_collect">
          <img src="@/assets/img/icon/collect.svg" width="16px" @click="addCollect(cookbook)" v-if="!collected">
          <img src="@/assets/img/icon/collected.svg" width="16px" @click="addCollect(cookbook)" v-if="collected">
          <span>{{ cookbook.collects }}</span>
        </div>
      </div>
      <div class="info">{{ cookbook.info }}</div>
    </div>
    <div class="shoplist">
      <table>
        <tr>
          <th>原料</th>
          <th class="addAll" @click="allAdd(cookbook.shoplist)">全部加入</th>
        </tr>
        <tr v-for="shop in cookbook.shoplist">
          <td @click="addOne(shop)">{{ shop.name }}</td>
          <td>{{ shop.num }}</td>
        </tr>
      </table>
    </div>
    <div class="step">
      <div class="step_title">
        <span>制作步骤</span>
      </div>
      <div class="step_content" v-for="(step,i) in cookbook.content" :class="{active:mark[i]}" @click="selStep(i)">
        <span class="num">步骤{{ step.num }}/{{ cookbook.content.length }}:</span>
        <div class="content">
          <div class="blank"></div>
          <span>{{ step.content }}</span>
        </div>
      </div>
    </div>
    <div class="comment">
      <div class="step_title">
        <span>留言板</span>
        <router-link :to="{ name: 'comments', params: {name: '留言板', cookbook: cookbook}}">{{ nums }}条留言</router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    Indicator,
    MessageBox,
    Toast
  } from "mint-ui";
  import Top from "@/components/next/next";
  import Page from '@/store/modules/page'
  export default {
    components: {
      Top
    },
    data() {
      return {
        cookbook: "",
        stuffId: [],
        mark: [],
        liked: false,
        collected: false,
        nums: 0
      };
    },
    computed: {
      ...mapGetters(["stufflist"]),
      ...mapGetters(["loginUser"]),
      ...mapGetters(["getParams"])
    },
    methods: {
      ...mapActions(["getStuff"]),
      ...mapActions(["addLike"]),
      ...mapActions(["addCollect"]),
      ...mapActions(["addToCart"]),
      isLiked(arr, value) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
            this.liked = true;
          }
        }
      },
      isCollected(arr, value) {
        for (var i = 0; i < arr.length; i++) {
          if (arr[i] == value) {
            this.collected = true;
          }
        }
      },
      opLike() {
        if (this.loginUser != null) {
          this.addLike();
        }
      },
      opCollect() {
        if (this.loginUser != null) {
          this.addCollect();
        }
      },
      allAdd(stuff) {
        if (this.loginUser != null) {
          MessageBox.confirm("是否将食材全部加入购物车?", "提示").then(action => {
            if (action == "confirm") {
              Indicator.open();
              stuff.forEach(n => {
                this.addToCart(n);
              });
              setTimeout(() => Indicator.close(), 2000);
              setTimeout(() => {
                MessageBox.confirm("是否进入购物车?", "操作成功").then(action => {
                  if (action == "confirm") {
                    this.$router.push({
                      name: "cart"
                    });
                  }
                });
              }, 2000);
            }
          });
        }
        if (this.loginUser == null) {
          Toast({
            message: "请先登录",
            position: "bottom",
            duration: 2000
          });
          setTimeout(() => {
            this.$router.push({
              name: "login"
            });
          }, 2000);
        }
      },
      addOne(shop) {
        this.addToCart(shop);
        Toast({
          message: "加入购物车成功",
          iconClass: "mintui mintui-success"
        });
      },
      selStep(index) {
        for (var m = 0; m < this.mark.length; m++) {
          if (m == index) {
            this.mark[m] = true;
          } else {
            this.mark[m] = false;
          }
        }
      }
    },
    mounted() {      
      this.cookbook = this.$route.params;
      if(this.cookbook.name == undefined){
        this.getParams.forEach((n,i) => {
          if (n.name = "detail") {
            this.cookbook = n.params;
          }
        })
      }
      this.stuffId = this.cookbook.shoplist;
      this.nums = this.cookbook.comment.length;
      //记录制作步骤
      var length = this.cookbook.content.length;
      this.mark.length = length;
      for (var m = 0; m < length; m++) {
        this.mark[m] = false;
      }
      this.getStuff(this.stuffId);
      this.isLiked(this.cookbook.likeUser, this.loginUser);
      this.isCollected(this.cookbook.collectUser, this.loginUser);
    },
    beforeRouteLeave(to, from, next) {
      if (to.name == "comments") {        
        this.$store.dispatch('refreshParams', from);
      }
      if (to.name == "sort") {        
        this.$store.dispatch('removeParams', from);
      }
      next();
    }
  };

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .box_back {
    width: 100%;
    height: 42px;
    position: absolute;
    background: #ffffff47;
  }

  .box_back>img {
    margin-top: 5px;
    margin-left: 5px;
  }

  hr {
    width: 80%;
    size: 1px;
    color: #eee;
    margin: auto;
  }

  .title {
    width: 100%;
    height: auto;
    text-align: center;
  }

  .title>img {
    width: 375px;
    height: 245px;
    display: block;
    margin: auto;
  }

  .title>span {
    line-height: 48px;
    font-family: sans-serif;
    font-size: 24px;
    font-weight: bold;
  }

  .introduce {
    height: auto;
    width: 100%;
  }

  .op {
    display: flex;
  }

  .blank {
    flex: 1;
  }

  .op_like,
  .op_collect {
    flex: 4;
  }

  .op_like {
    text-align: right;
  }

  .info {
    width: 80%;
    margin: 20px auto;
  }

  table {
    width: 80%;
    margin: auto;
    text-align: center;
    border-bottom: 1px solid #ddd;
  }

  th {
    width: 50%;
    height: 40px;
    border-bottom: 1px solid #ddd;
  }

  .addAll {
    color: #f55263;
  }

  td {
    color: #555;
    line-height: 25px;
  }

  .step {
    width: 90%;
    height: auto;
    margin: 20px auto;
  }

  .step_title {
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 20px;
  }

  .step_content {
    margin-bottom: 10px;
    border-bottom: 1px solid #ddd;
    box-shadow: 0 0 5px 0 #ddd;
    transition: box-shadow 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  }

  .active {
    box-shadow: 0 0 5px 0 red;
  }

  .num {
    display: inline-block;
    margin: 10px 10px 0 10px;
  }

  .content>span {
    display: inline-block;
    font-family: arial;
    margin: 10px 0;
    margin-left: 1rem;
  }

  .comment {
    width: 90%;
    height: auto;
    margin: 20px auto;
  }

</style>
