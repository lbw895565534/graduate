<template>
  <div class="box" @click="toInput()">
    <img src="@/assets/img/icon/publish.svg" width="36px">
  </div>
</template>
<script>
  export default {
    methods: {
      toInput() {
        this.$router.push({name: 'shareInput'})
      }
    }
  }
</script>
<style scoped>
  .box {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #DADADA;
    text-align: center;
    position: fixed;
    top: 90px;
    background: #fff;
  }
  .box:active {
    background: #ddd;
  }
  img {
    display: inline-block;
    position: relative;
    top: 4px;
  }
</style>
