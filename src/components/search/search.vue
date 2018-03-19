<template>
  <div id="box" @click="toSearch()">
    <div class="search_box">
      <div class="search_detail">
        <img class="search_icon" src="../../assets/img/ic_search_gray.png" alt="">
        <span class="search_text">搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    props: ['txt'],
    methods: {
      toSearch() {
        this.$router.push('/main/search');
      }
    }
  }
</script>
<style scoped>
  #box {
    width: 100%;
    height: 44px;
    position: relative;
    border-bottom: 1px solid #DADADA;
    text-align: center;
  }

  .search_box {
    width: 80%;
    height: 30px;
    background: #DADADA;
    border-radius: 3px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .search_icon {
    width: 16px;
    position: relative;
    top: 5px;
  }

  .search_text {
    color: #fff;
    position: relative;
    color: #9F9F9F;
    font-size: 14px;
    top: 2px;
  }

</style>
