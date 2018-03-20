<template>
  <div class="body">
    <div class="tabbarHeader">
      <Top :sel="selected"></Top>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>

    <div class="tabbarFooter" >
      <Item txt="首页" mark="main" :sel="selected" @change="getItem">
        <img src="../../assets/img/1.png" alt="" slot="normalImg">
        <img src="../../assets/img/6.png" alt="" slot="activeImg">
      </Item>
      <Item txt="分享" mark="share/shareNew" :sel="selected" @change="getItem">
        <img src="../../assets/img/2.png" alt="" slot="normalImg">
        <img src="../../assets/img/7.png" alt="" slot="activeImg">
      </Item>
      <Item txt="市集" mark="market" :sel="selected" @change="getItem">
        <img src="../../assets/img/3.png" alt="" slot="normalImg">
        <img src="../../assets/img/8.png" alt="" slot="activeImg">
      </Item>
      <Item txt="我的" mark="mine" :sel="selected" @change="getItem">
        <img src="../../assets/img/4.png" alt="" slot="normalImg">
        <img src="../../assets/img/9.png" alt="" slot="activeImg">
      </Item>
    </div>
  </div>
</template>

<script>
  import Item from '../item'
  import Top from '../title'
  import { mapGetters, mapActions } from "vuex";
  //  默认设置
  export default {
    //  子组件
    components: {
      Item, Top
    },
    data: function () {
      return {
        // selected记录选中的Item，高亮显示
        selected: 'main'
      }
    },
    computed: {
      // ...mapGetters(["cookbooklist"])
    },
    mounted() {

      this.getCookbook();
    },
    methods: {
      //获取全部美食
      ...mapActions(["getCookbook"]),
      //  获取选中的Item的mark值，并且实现Item路由跳转
      getItem: function (i) {
        this.selected = i;
        this.$router.push('/' + i);
      }
    }
  }
</script>

<style scoped>
  .body {width: 100%; height: 100%;}
  .tabbarHeader {z-index: 5;width: 100%;height: 44px;position: fixed;top: 0;left: 0;}
  .content {width: 100%;height: 100%;z-index: 4;position: relative;top: 45px;margin-bottom:64px;}
  .tabbarFooter {z-index: 5;width: 100%; height: 64px; position: fixed;bottom: 0px;
    border-top: 1px solid #ccc; text-align: center;background: #fff;}
</style>
