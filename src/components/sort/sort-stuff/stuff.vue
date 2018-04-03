<template>
    <div class="list_box">
      <div class="list_item" v-for="(shop,index) in shoplist">
        <div class="list_item_picture">
          <img v-bind:src="shop.img">
        </div>
        <div class="center">
          <div class="item list_item_name">
            <div class="item_name">{{ shop.name }}</div>
          </div>
          <div class="item list_item_info">
            <div class="item_name">{{ shop.info }}</div>
          </div>
          <div class="blank"></div>
          <div class="item list_item_site">
            <div class="item_site">{{ shop.site }}</div>
          </div>
        </div>
        <div class="right">
          <div class="list_item_price">
            <div class="item_price">{{ shop.price }}.00/<small>{{ shop.unit }}</small></div>
          </div>
          <div class="list_item_op">
            <div class="item_op">
              <img src="@/assets/icon/cart.svg" class="item_op_btn" @click="addToCart(shop)"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  data() {
    name: "product";
    return {
      stuff: []
    };
  },
  mounted() {
    this.stuff = this.shoplist;
    console.log(this.stuff);
    // this.$http.get("/commodity").then(
    //   res => {
    //     this.commoditys = res.data.data;
    //     console.log(this.commoditys);
    //   },
    //   res => {
    //     console.log("请求无响应");
    //   }
    // );
  },
  computed: {
    ...mapGetters(['shoplist'])
  },
  methods: {
    ...mapActions(['addToCart'])
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
  border-bottom: 1px solid #555;
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
.list_item_name {
  height: 25%;
}
.item_name {
  position: relative;
  top: 4px;
}
.list_item_info {
  width: 100%;
  height: 35%;
  font-size: 12px;
  color: #888;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.blank {
  width: 100%;
  height: 15%;
}
.list_item_site {
  height: 25%;
}
.item_site {
  color: #555;
  font-size: 14px;
}
.item_select—_btn {
  height: 25px;
  margin: 10px 0 0 10px;
}
.right {
  flex: 2;
}
.list_item_price {
  height: 50%;
  width: 100%;
  color: red;
  font-size: 24px;
  text-align: center;
}
.item_price {
  position: relative;
  top: 4px;
}
small {
  font-size: 14px !important;
  color: #555;
}
.list_item_op  {
  height: 50%;
  width: 100%;
}
.item_op {
  text-align: center;
}
.item_op_btn {
  width: 35px;
  margin-top: 13px;
}
</style>


