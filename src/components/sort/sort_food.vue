<template>
  <div>
    <router-link :to="{ name:'sort', params: {txt: txt[0]} }">
      <div class="sort_box">
        <img class="sort_icon" src="../../assets/images/picture/rice.png" alt="">
        <span class="sort_name">{{ txt[0] }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {txt: txt[1]} }">
      <div class="sort_box" @click="getItem(txt[1])">
        <img class="sort_icon" src="../../assets/images/picture/drink.png" alt="">
        <span class="sort_name">{{ txt[1] }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {txt: txt[2]} }">
      <div class="sort_box" @click="getItem(txt[2])">
        <img class="sort_icon" src="../../assets/images/picture/pizza.png" alt="">
        <span class="sort_name">{{ txt[2] }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {txt: txt[3]} }">
      <div class="sort_box" @click="getItem(txt[3])">
        <img class="sort_icon" src="../../assets/images/picture/cake.png" alt="">
        <span class="sort_name">{{ txt[3] }}</span>
      </div>
    </router-link>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  data: function() {
    return {
      txt: ["米饭", "饮料", "比萨", "蛋糕"]
    };
  },
  methods: {
    getItem: function(i) {
      this.$router.push("/main/sort");
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
</style>
