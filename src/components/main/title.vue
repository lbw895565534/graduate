<template>
  <div class="titleWrap">
    <div class="titleBox1">
      <mt-header fixed :title="getTitle">
      </mt-header>
    </div>
  </div>
</template>
<script>
  import {
    Header,
  } from "mint-ui";
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    prop: ['sel'],
    data: function () {
      return {
        txt: "首页"
      };
    },
    computed: {
      ...mapGetters(['getTitle'])
    },
  };

</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .mint-header {
    height: 45px;
    font-size: 20px;
    background: #efa341;
    z-index: 5;
  }

</style>
