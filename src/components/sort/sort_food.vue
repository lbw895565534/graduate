<template>
  <div>
    <router-link :to="{ name:'sort', params: {name: txt[0].name, type: txt[0].type} }" class="keep">
      <div class="sort_box">
        <img class="sort_icon" src="../../assets/images/picture/rice.png" alt="">
        <span class="sort_name">{{ txt[0].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[1].name, type: txt[1].type} }" class="keep">
      <div class="sort_box" @click="getItem(txt[1])">
        <img class="sort_icon" src="../../assets/images/picture/drink.png" alt="">
        <span class="sort_name">{{ txt[1].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[2].name, type: txt[2].type} }" class="keep">
      <div class="sort_box" @click="getItem(txt[2])">
        <img class="sort_icon" src="../../assets/images/picture/pizza.png" alt="">
        <span class="sort_name">{{ txt[2].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[3].name, type: txt[3].type} }" class="keep">
      <div class="sort_box" @click="getItem(txt[3])">
        <img class="sort_icon" src="../../assets/images/picture/cake.png" alt="">
        <span class="sort_name">{{ txt[3].name }}</span>
      </div>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data: function() {
    return {
      txt: [
      {name: "常菜", type: "homecook"}, 
      {name: "饮料", type: "drink"}, 
      {name: "比萨", type: "pizza"}, 
      {name: "蛋糕", type: "cake"}]
    };
  },
  methods: {
    getItem: function(i) {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
.sort_box {
  float: left;
  text-align: center;
  width: 25%;
  height: 100px;
  margin-top: 20px;
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
.keep:link {
  color: black;
}
.keep:visited {
  color: black;
}
</style>
