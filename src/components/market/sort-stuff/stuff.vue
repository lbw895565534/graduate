<template>
    <div class="list_box">
      <div class="list_item" v-for="(shop,index) in shoplist">
        <div class="list_item_picture">
          <img v-bind:src="shop.img">
        </div>
        <div class="center">
          <div class="msg">
            <div class="item list_item_name">
              <div class="item_name">{{ shop.name }}</div>
            </div>
            <div class="item list_item_info">
              <div class="item_name">{{ shop.info }}</div>
            </div>
            <div class="item list_item_site">
              <div class="item_site">{{ shop.site }}</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="list_item_price">
            <div class="item_price">
              <span class="red">{{ shop.price }}.00/</span>
              <span class="small">{{ shop.unit }}</span>
            </div>
          </div>
          <div class="list_item_op">
            <div class="item_op">
              <img src="@/assets/img/icon/cart.svg" class="item_op_btn" @click="add(shop)"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import { Toast } from "mint-ui";
export default {
  created() {
    this.getShop();
  },
  computed: {
    ...mapGetters(['shoplist']),
    ...mapGetters(['loginUser'])
  },
  methods: {
    ...mapActions(['getShop']),
    ...mapActions(['addToCart']),
    add (shop) {
      if (this.isLogin()) {
        this.addToCart(shop);
      }
    },
    isLogin() {
      if (this.loginUser == null) {
        Toast({
          message: "请先登录",
          position: "bottom",
          duration: 2000
        });
        return false;
      }
      return true;
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.list_item {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
}
.list_item_picture {
  flex: 2;
  width: 98px;
  height: 98px;
  float: left;
  margin-right: 1px;
}
.list_item_picture img {
  width: 80px;
  height: 80px;
  margin: auto;
  margin: 10px;
}
.center {
  flex: 4;
  height: 100%;
}
.msg {
  margin: 10px 0;
  width: 100%;
  height: 80px;
}
.list_item_name {
  width: 100%;
  height: 22px;
  position: relative;
}
.list_item_info {
  width: 100%;
  height: 35px;
  font-size: 12px;
  position: relative;
  margin-bottom: 5px;
  color: #888;
  overflow: hidden;
  display: -webkit-box !important; 
  word-break: break-all; 
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.list_item_site {
  position: relative;
  height: 18px;
  bottom: 0;
  color: #555;
  font-size: 14px;
}
.right {
  flex: 2;
}
.list_item_price {
  height: 40px;
  width: 100%;
  padding-top: 10px;
  text-align: center;
  flex: 3;  
  /* 去除行内元素的换行导致的间隔 */
  font-size: 0;
}
.red {
  color: red;
  font-size: 24px;
}
.small {
  font-size: 14px !important;
  color: #555; 
  position: relative;
  left: 0;
  bottom: 0;
}
.list_item_op  {
  height: 50px;
  width: 100%;
}
.item_op {
  height: 100%;
  text-align: center;
}
.item_op_btn {
  width: 35px;
  margin-top: 5px;
}
</style>


