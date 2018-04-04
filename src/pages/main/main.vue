<template>
  <div class="body">
    <div class="tabbarHeader">
      <Top :sel="selected"></Top>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
        <div class="tabbarFooter" >
            <Item txt="首页" mark="home" :sel="selected" @change="getItem">
              <img src="@/assets/icon/home.png" alt="" slot="normalImg">
              <img src="@/assets/icon/homered.png" alt="" slot="activeImg">
            </Item>
            <Item txt="分享" mark="share" :sel="selected" @change="getItem">
              <img src="@/assets/icon/share.png" alt="" slot="normalImg">
              <img src="@/assets/icon/sharered.png" alt="" slot="activeImg">
            </Item>
            <Item txt="市集" mark="market" :sel="selected" @change="getItem">
              <img src="@/assets/icon/market.png" alt="" slot="normalImg">
              <img src="@/assets/icon/marketred.png" alt="" slot="activeImg">
            </Item>
            <Item txt="我的" mark="mine" :sel="selected" @change="getItem">
              <img src="@/assets/icon/mine.png" alt="" slot="normalImg">
              <img src="@/assets/icon/minered.png" alt="" slot="activeImg">
            </Item>
          </div>
    </div>

  </div>
</template>

<script>
  import Item from '@/components/main/item'
  import Top from '@/components/main/title'
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
        selected: 'home'
      }
    },
    mounted() {
      console.log(this.selected);
      this.getCookbook();
    },
    methods: {
      //获取全部美食
      ...mapActions(["getCookbook"]),
      ...mapActions(["sortOfDate"]),
      //  获取选中的Item的mark值，并且实现Item路由跳转
      getItem: function (i) {
        this.selected = i;
        this.$router.push('/main/' + i);
        if( i == "share/shareNew" ){
          this.sortOfDate();
        }
      }
    }
  }
</script>

<style scoped>
  .body {width: 100%; height: 100%;position: relative;}
  .tabbarHeader {z-index: 5;width: 100%;height: 44px;}
  .content {width: 100%;z-index: 4;position: relative;top: 45px;margin-bottom: 64px; bottom: 64px;}
  .footer {width: 100%;height: 64px;position: relative;bottom: 0;}
  .tabbarFooter {z-index: 5;width: 100%; height: 64px; position: fixed;bottom: 0px;
    border-top: 1px solid #ccc; text-align: center;background: #fff;}
</style>
