<template>
    <div class="list_box">
      <div class="list_item" v-for="food in foods">
        <div class="list_item_picture">
          <img v-bind:src="food.img" alt="">
        </div>
        <div class="item list_item_name">
          <div class="item_name">{{ food.name }}</div>
        </div>
        <div class="item list_item_info">
          <div class="item_info">
            {{ food.info }}
          </div>
        </div>
        <div class="blank"></div>
        <div class="item list_item_op">
          <div class="item_op">
            <div class="op_like">
              <img src="../../assets/share/like.svg" width="16px">
              <span>{{ food.likes }}</span>
            </div>
            <div class="op_collect">
              <img src="../../assets/share/collect.svg" width="16px">
              <span>{{ food.collects }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
export default {
  data () {
    return {
      foods: [],
      params: ''
    }
  },
  mounted() {
    this.params = this.$route.params;
    this.$http.get("/sort/" + this.params.type).then(res => {
      this.foods = res.data.data;
      console.log(this.foods);
    }, res => {
      console.log("请求无响应");
    })
  }

};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
.list_item {
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
  height: 25%;
  font-weight: bold;
}
.list_item_info {
  height: 44%;
}
.blank {
  height: 6%;
}
.list_item_op {
  height: 25%;
}
.item_name {
  margin-top: 5px;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
.item_info {
  width: 95%;
  height: 100%;
  font-size: 12px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.2;
}
.op_like {
  float: left;
  margin-right: 10px;
}
.op_collect {
  float: left;
}
.list_item_op img {
}
.list_item_op span {
  width: 40px;
  height: 18px;
  margin-left: -1px;
  display: inline-block;
  vertical-align:top;
  color: rgb(180, 180, 180);
}
span, div {
  font-family: Helvetica, Tahoma, Arial, '华文细黑', 'Microsoft YaHei', '微软雅黑', sans-serif;
}
</style>


