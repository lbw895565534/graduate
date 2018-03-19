<template>
  <div class="box">
    <router-link :to="{ name:'sort', params: {name: txt[0].name, kind: txt[0].kind , lastShow: false} }" class="program" @click="sortOfLike">
      <Program :txt="txt[0].name"></Program>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[1].name, kind: txt[1].kind , lastShow: false} }" class="program" @click="sortOfCollect">
      <Program :txt="txt[1].name"></Program>
    </router-link>
  </div>
</template>
<script>
  import Program from "./program";
  export default {
    components: {
      Program
    },
    data() {
      return {
        txt: [{
            name: "最受喜欢",
            kind: "like"
          },
          {
            name: "最多收藏",
            kind: "collect"
          }
        ],

      }
    },
    methods: {
      sortLikes: function (a, b) {
        return a.likes - b.likes;
      },
      sortCollects: function (a, b) {
        return a.likes - b.likes;
      },
      sortOfLike() {
        this.cookbooklist.sort(this.sortLikes);
      },
      sortOfCollect() {
        this.cookbooklist.sort(this.sortCollects);
      }
    }
  };

</script>
<style scoped>
  .box {
    display: flex;
  }

  .program {
    flex: 1;
  }

</style>
