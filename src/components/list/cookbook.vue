<template>
    <div class="list_box">
      <div class="list_item">
        <div class="list_item_picture">
          <img src="./cookbook1.jpg" alt="">
        </div>
        <div class="item list_item_name">
          <div class="item_name">凉拌茄子</div>
        </div>
        <div class="item list_item_info">
          <div class="item_info">
            凉拌菜是餐桌不可忽视美味。即使是素菜，凉拌一下也很美味，凉拌茄子是最喜欢的凉拌菜之一。简单、美味、开胃，多吃也不怕长肉。
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
  height: 50%;
  width: 276px;
  float: left;
}
.list_item_name {
  height: 40%;
}
.list_item_info {
  height: 60%;
}
.item_name {
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_info {
  width: 100%;
  height: 70%;
  font-size: 12px;
 overflow : hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 3;
-webkit-box-orient: vertical;
 line-height: 1.2;
}
</style>


