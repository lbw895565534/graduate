<template>
  <div class="box">
    <router-link :to="{ name:'sort', params: {name: txt[0].name, kind: txt[0].kind , lastShow: false} }" class="program">
      <Program :txt="txt[0].name" @click="sortOfLikes()"></Program>
    </router-link>
    <router-link :to="{ name:'sort', params: {name: txt[1].name, kind: txt[1].kind , lastShow: false} }" class="program">
      <Program :txt="txt[1].name" @click="sortOfCollects()"></Program>
    </router-link>
  </div>
</template>
<script>
  import Program from "./program";
    import { mapGetters, mapActions } from "vuex";
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
