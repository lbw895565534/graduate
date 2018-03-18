<template>
  <div class="box">
    <router-link :to="{ name:'sort', params: {name: txt[0].name, kind: txt[0].kind , lastShow: false} }" class="program">
      <Program :txt="txt[0]" @click="sortOfLike"></Program>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[0].name, kind: txt[0].kind , lastShow: false} }" class="program">
      <Program :txt="txt[1]" @click="sortOfCollect"></Program>
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
        txt: ["最受喜欢", "最多收藏"]
      }
    },
    methods: {
      sortOfLike() {

      },
      sortOfCollect() {

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
