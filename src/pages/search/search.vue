<template>
  <div class="box">
    <div class="search_box">
      <div class="searcher">  
        <input class="input_searcher" v-model="searchVal">
        <img class="icon_searcher" src="../../assets/img/search_big.svg" width="30px">
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
    data() {
      return {
        searchVal: '',
        result: []
      }
    },
    props: ['txt'],
    computed: {
      ...mapGetters(['cookbooklist']),
      list: function () {

        var cookbooks = this.cookbooklist;
        console.log(cookbooks);
        //逻辑-->根据input的value值筛选goodsList中的数据
        var arrByZM = []; //声明一个空数组来存放数据
        for (var i = 0; i < this.goodsList.length; i++) {
          //for循环数据中的每一项（根据name值）
          if (this.goodsList[i].name.search(this.searchVal) != -1) {
            //判断输入框中的值是否可以匹配到数据，如果匹配成功
            arrByZM.push(this.goodsList[i]);
            //向空数组中添加数据
          }
        }
      }
    }
  }

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }

  .search_box {
    width: 100%;
    height: 44px;
    border-bottom: 1px solid #ddd;
  }
  
  .searcher {
    width: 80%;
    height: 30px;
    position: relative;
    top: 7px;
    border: 1px solid #aaa;
    border-radius: 3px;
    margin: auto;
  }

  .input_searcher {
    width: 90%;
    height: 28px;
    position: relative;
    padding-left: 30px;
    vertical-align: middle;
    border: none;

  }

  .icon_searcher {
    position: absolute;
    top: 0px;
    left: 0px;
    vertical-align:middle
  }
</style>
