<template>
  <div>
    <router-link :to="{ name:'sort', params: {name: txt[0].name, kind: txt[0].kind , lastShow: true} }" class="keep">
      <div class="sort_box">
        <img class="sort_icon" src="@/assets/img/icon/staple.png" alt="">
        <span class="sort_name">{{ txt[0].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[1].name, kind: txt[1].kind , lastShow: true} }" class="keep">
      <div class="sort_box">
        <img class="sort_icon" src="@/assets/img/icon/homecook.png" alt="">
        <span class="sort_name">{{ txt[1].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[2].name, kind: txt[2].kind , lastShow: true} }" class="keep">
      <div class="sort_box">
        <img class="sort_icon" src="@/assets/img/icon/soup.png" alt="">
        <span class="sort_name">{{ txt[2].name }}</span>
      </div>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[3].name, kind: txt[3].kind , lastShow: true} }" class="keep">
      <div class="sort_box">
        <img class="sort_icon" src="@/assets/img/icon/sweets.png" alt="">
        <span class="sort_name">{{ txt[3].name }}</span>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      txt: [
      {name: "主食", kind: "staple"},
      {name: "常菜", kind: "homecook"},
      {name: "汤", kind: "soup"},
      {name: "甜品", kind: "sweets"}]
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
