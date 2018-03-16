<template>
    <div class="list_box">
      <div class="list_item" v-for="c in cart">
        <div class="list_item_radio">
          <input type="radio" :checked="c.checked">
        </div>
        <div class="list_item_picture">
          <img :src="c.img" alt="">
        </div>
        <div class="center">
          <div class="item list_item_name">
            <div class="item_name">{{ c.name }}</div>
          </div>
          <div class="item list_item_info">
            <div class="item_site">{{ c.info }}</div>
          </div>
          <div class="item list_item_price">
            <div class="item_price">￥{{ c.price }}.00</small></div>
          </div>
        </div>
        <div class="right">
          <div class="item_total">
              <div class="add">+</div>
              <div class="total">{{ c.num }}</div>
              <div class="reduce">-</div>
            </div>
             <div class="del">
            <img src="@/assets/share/del.svg" class="btn_del"></button>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: ['cart'],
  mounted() {
    console.log(this.cart);
  }
}
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
input[type=radio] {
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
  overflow: hidden;
  font-size: 12px;
  color: #888;
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
  margin: 10px auto;
  width: 25px;
}
.item_total {
  display: inline-block;
  width: 120px;
  height: 50%;
  position: relative;
  top: 15px;
  display: flex;
  text-align: center;
}
.add {
  flex: 3;
  width: 20px;
  height: 30px;
  display: inline-block;
  font-size: 20px;
  text-align: center;
}
.reduce {
  flex: 3;
  width: 20px;
  height: 30px;
  display: inline-block;
  font-size: 20px;
  text-align: center;
}
.total {
  flex: 5;
  display: inline-block;
  width: 50px;
  height: 25px;
  font-size: 18px;
  position: relative;
  top: 2px;
  text-align: center;
  border: 1px solid #999;
}
</style>


