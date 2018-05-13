<template>
  <div class="list_box">
    <div class="list_item" v-for="(shop,index) in cart">
      <div class="list_item_radio">
        <input type="checkbox" @click="shopChecked(shop)" :checked="shop.checked">
      </div>
      <div class="list_item_picture">
        <img :src="shop.img" alt="">
      </div>
      <div class="center">
        <div class="item list_item_name">
          <div class="item_name">{{ shop.name }}</div>
        </div>
        <div class="item list_item_info">
          <div class="item_site">{{ shop.info }}</div>
        </div>
        <div class="item list_item_price">
          <div class="item_price">￥{{ shop.price }}</small>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="item_total">
          <div class="add" @click="addNum(shop)">+</div>
          <div class="total">
            <span class="total_num">{{ shop.num }}</span>
          </div>
          <div class="reduce" @click="reduceNum(shop)">-</div>
        </div>
        <div class="del">
          <img src="@/assets/img/icon/del.svg" class="btn_del" @click='delProduct(shop)'>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import { Toast } from "mint-ui";
  export default {
    props: ["cart"],
    mounted() {
      console.log(this.cart);
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
      return true;
    },
    computed: {
      ...mapGetters(["loginUser"])
    },
    methods: {
      ...mapActions(["delProduct"]),
      ...mapActions(["addNum"]),
      ...mapActions(["reduceNum"]),
      ...mapActions(["shopChecked"])
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
    border-bottom: 1px solid #ddd;
    display: flex;
  }

  .list_item_radio {
    flex: 1;
  }

  input[type="checkbox"] {
    margin: 43px auto;
    display: block;
    width: 16px;
    height: 16px;
  }

  .list_item_picture {
    flex: 3;
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
    height: 100%;
    flex: 3;
  }

  .list_item_name {
    height: 35%;
  }

  .item_name {
    padding-top: 9px;
  }

  .list_item_info {
    height: 35%;
    font-size: 12px;
    color: #888;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  .list_item_price {
    height: 30%;
  }

  .item_price {
    width: 50%;
    height: 100%;
    display: inline-block;
  }

  .right {
    height: 100%;
    flex: 3;
  }

  .del {
    height: 50%;
    width: 100%;
    text-align: center;
  }

  .btn_del {
    margin: 13px auto;
    width: 25px;
  }

  .item_total {
    width: 120px;
    height: 50%;
    position: relative;
    top: 15px;
    text-align: center;
    margin: auto;
    display: flex;
  }

  .add {
    flex: 3;
    width: 20px;
    height: 30px;
    display: inline-block;
    font-size: 20px;
  }

  .reduce {
    flex: 3;
    width: 20px;
    height: 30px;
    display: inline-block;
    font-size: 20px;
  }

  .total {
    flex: 5;
    width: 50px;
    height: 28px;
    font-size: 18px;
    border: 1px solid #999;
    display: table-cell;
    vertical-align: middle;
  }

  .total_num {
    display: block;
    line-height: 28px;
  }

</style>
