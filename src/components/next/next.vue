<template>
  <div class="box">
    <mt-header fixed :title="title">
      <mt-button icon="back" slot="left" @click="back()"></mt-button>
    </mt-header>
  </div>
</template>
<script>
  import {
    Header
  } from "mint-ui";
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    props: ['title'],
    methods: {
      ...mapActions(["toMain"]),
      back() {
        this.$router.go(-1);
      }
    }
  };

</script>
<style scoped>
  .box {
    height: 45px;
    width: 100%;
    z-index: 5;
    position: fixed;
  }

  .mint-header {
    height: 45px;
    background: #E9A144;
    font-size: 20px;
  }

</style>
