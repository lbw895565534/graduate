<template>
    <div class="list_box">
      <div class="list_item" v-for="(shop,index) in shoplist">
        <div class="list_item_picture">
          <img :src="shop.img" alt="">
        </div>
        <div class="item list_item_name">
          <div class="item_name">{{ shop.name }}</div>
        </div>
        <div class="item list_item_price">
          <div class="item_price">{{ shop.price }}.00/<small>{{ shop.unit }}</small></div>
        </div>
        <div class="item list_item_site">
          <div class="item_site">{{ shop.site }}</div>
        </div>
        <div class="item list_item_select">
          <div class="item_select">
            <button class="item_select—_btn" @click="addToCart(shop)">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import { mapGetters, mapActions } from "vuex";
export default {
  props: [],
  data() {
    name: "product";
    return {
      commoditys: []
    };
  },
  mounted() {
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
.list_box {
}
.list_item {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #555;
}
.list_item_picture {
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
.item {
  width: 137px;
  height: 50px;
  float: left;
}
.item_name {
  margin: 20px 0 0 10px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_price {
  color: red;
  font-size: 24px;
  margin: 10px 0 0 10px;
}
small {
  font-size: 16px !important;
  color: black;
}
.item_site {
  color: #555;
  font-size: 14px;
  margin: 15px 0 0 10px;
}
.item_select—_btn {
  height: 25px;
  margin: 10px 0 0 10px;
}
</style>


