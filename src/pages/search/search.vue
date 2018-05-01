<template>
  <div class="box">
    <mt-search v-model="key" cancel-text="取消" placeholder="搜索">
    </mt-search>
    <div class="list">
      <Cookbook :kind="'search'"></Cookbook>
    </div>
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
  import Cookbook from '@/components/sort/sort-cookbook/cookbook'
  export default {
    components: {
      Cookbook
    },
    data() {
      return {
        key: "",
        result: []
      }
    },
    props: ['txt'],
    computed: {
      ...mapGetters(['cookbookSearch']),
    },
    methods: {
      ...mapActions(['search']),
      ...mapActions(['clearCookbookFilter']),
    },
    watch: {
      key(val, oldVal) {
        var value1 = val.replace(/(^\s*)|(\s*$)/g, "");
        var value2 = oldVal.replace(/(^\s*)|(\s*$)/g, "");
        if (value1 != "") {
          if (value1 != value2) {
            this.search(val);
          }
        }else {
          this.clearCookbookFilter();
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

  .mint-search {
    height: 45px;
  }

  .mint-search-list {
    display: none;
  }

  .list {
    overflow: scroll;
    position: absolute;
    top: 45px;
    bottom: 45px;
  }

</style>
