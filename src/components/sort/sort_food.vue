<template>
  <div>
    <div class="sort_box">
      <img class="sort_icon" src="../../assets/images/picture/rice.png" alt="">
      <span class="sort_name">{{ txt[0] }}</span>
    </div>
    <div class="sort_box">
      <img class="sort_icon" src="../../assets/images/picture/drink.png" alt="">
      <span class="sort_name">{{ txt[1] }}</span>
    </div>
    <div class="sort_box">
      <img class="sort_icon" src="../../assets/images/picture/pizza.png" alt="">
      <span class="sort_name">{{ txt[2] }}</span>
    </div>
    <div class="sort_box">
      <img class="sort_icon" src="../../assets/images/picture/cake.png" alt="">
      <span class="sort_name">{{ txt[3] }}</span>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
        data: function () {
          return {
            txt: ["米饭", "饮料", "比萨", "蛋糕"]
          }
        }
    }
</script>
<style>
  .sort_box {
    float: left;
    text-align: center;
    width: 25%;
    height: 100px;
    margin-top: 20px ;
  }
  .sort_icon {
    width: 50px;
    display: block;
    margin: auto;
  }
  .sort_name {
    display: block;
    margin-top: 5px;
  }
</style>
