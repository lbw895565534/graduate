<template>
  <div class="animated fadeInRight">
    <div class="title">
      <img :src="cookbook.img" alt="">
      <span>{{ cookbook.name }}</span><br>
      <small>{{ cookbook.date }}发布</small>
    </div>
    <hr>
    <div class="introduce">
      <div class="op">
        <div class="op_like">
          <img src="@/assets/icon/like.svg" width="16px" @click="addLike(cookbook)">
          <span>{{ cookbook.likes }}</span>
        </div>
        <div class="blank"></div>
        <div class="op_collect">
          <img src="@/assets/icon/collect.svg" width="16px" @click="addCollect(cookbook)">
          <span>{{ cookbook.collects }}</span>
        </div>
      </div>
      <div class="info">{{ cookbook.info }}</div>
    </div>
    <div class="shoplist">
      <table>
        <tr>
          <th>原料</th>
          <th class="addAll" @click="openConfirm()">全部加入</th>
        </tr>
        <tr v-for="shop in cookbook.shoplist">
          <td @click="addToCart(shop)">{{ shop.name }}</td>
          <td>{{ shop.num }}</td>
        </tr>
      </table>
    </div>
    <div class="step">

    </div>
    <div class="comment">

    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { MessageBox } from "mint-ui";
import { Indicator } from "mint-ui";
export default {
  data() {
    return {
      cookbook: ""
    };
  },
  methods: {
    ...mapActions(["addLike"]),
    ...mapActions(["addCollect"]),
    ...mapActions(["addToCart"]),
    openConfirm() {
      MessageBox.confirm("确定执行此操作?", "提示").then(action => {
        if (action == "confirm") {
          this.openIndicator();
        }
      });
    },
    openIndicator() {
      Indicator.open();
      setTimeout(() => Indicator.close(), 2000);
      setTimeout(() => this.reConfirm(), 2000);
    },
    reConfirm() {
      MessageBox.confirm("是否进入购物车?", "操作成功").then(action => {
        if (action == "confirm") {
          this.$router.push({name: 'cart'});
        }
      });
    }
  },
  mounted() {
    this.cookbook = this.$route.query.param;
    console.log(this.cookbook);
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
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

.title > img {
  width: 375px;
  height: 245px;
  display: block;
  margin: auto;
}

.title > span {
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
</style>
