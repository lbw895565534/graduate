<template>
    <div class="list_box">
      <div class="list_item">
        <div class="list_item_picture">
          <img src="./commodity1.jpg" alt="">
        </div>
        <div class="item list_item_name">
          <div class="item_name">香葱11111111111111</div>
        </div>
        <div class="item list_item_price">
          <div class="item_price">15.00</div>
        </div>
        <div class="item list_item_site">
          <div class="item_site">广州</div>
        </div>
        <div class="item list_item_select">
          <div class="item_select">
            <button class="item_select—_btn">加入购物车</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: []
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.list_box {
  border-bottom: 1px solid #555;
}
.list_item {
  width: 100%;
  height: 100px;
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
  font-size: 28px;
  margin: 10px 0 0 10px;
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


