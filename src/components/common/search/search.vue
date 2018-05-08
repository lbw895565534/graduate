<template>
  <div id="box">
    <div class="search_box">
      <div class="search_detail"  @click="toSearch()">
        <img class="search_icon" src="@/assets/img/icon/search.png" alt="">
        <span class="search_text">搜索</span>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    props: ['txt'],
    computed: {
      ...mapGetters(["getPage"])
    },
    methods: {
      toSearch() {
        console.log(this.getPage.page);
        this.$router.push({name:'search'});
      }
    }
  }
</script>
<style scoped>
  #box {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #DADADA;
    position: fixed;
    background: #fff;
  }

  .search_box {
    width: 80%;
    height: 30px;
    background: #DADADA;
    border-radius: 3px;
    margin: auto;
    position: relative;
    top: 7px;
    text-align: center;
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
