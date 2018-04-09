<template>
  <div class="box">
    <mt-search v-model="value" cancel-text="取消" placeholder="搜索">
    </mt-search>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    Search
  } from 'mint-ui';
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
    border-bottom: 1px solid #ddd;
    position: fixed;
  }
  .mint-searchbar-cancel {
    color: #fff;
  }

</style>
