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
    /* flex布局居中 */
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
  }
  .box:active {
    background: #ddd;
  }
  img {
    position: relative;
    width: 32px;
    height: 32px;
  }
</style>
