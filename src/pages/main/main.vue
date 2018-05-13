<template>
  <div class="body">
    <div class="tabbarHeader" v-show="show">
      <Top :sel="selected"></Top>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
        <div class="tabbarFooter" >
            <Item txt="首页" mark="home" :sel="selected" @change="getItem">
              <img src="@/assets/img/icon/home.png" alt="" slot="normalImg">
              <img src="@/assets/img/icon/homered.png" alt="" slot="activeImg">
            </Item>
            <Item txt="分享" mark="share" :sel="selected" @change="getItem">
              <img src="@/assets/img/icon/share.png" alt="" slot="normalImg">
              <img src="@/assets/img/icon/sharered.png" alt="" slot="activeImg">
            </Item>
            <Item txt="市集" mark="market" :sel="selected" @change="getItem">
              <img src="@/assets/img/icon/market.png" alt="" slot="normalImg">
              <img src="@/assets/img/icon/marketred.png" alt="" slot="activeImg">
            </Item>
            <Item txt="我的" mark="mine" :sel="selected" @change="getItem">
              <img src="@/assets/img/icon/mine.png" alt="" slot="normalImg">
              <img src="@/assets/img/icon/minered.png" alt="" slot="activeImg">
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
        selected: "home",
        show: true
      }
    },
    computed: {
      ...mapGetters(["getPage"])
    },
    watch: {
      //标题是否显示
      getPage() {
        this.show = true;
        this.selected = this.getPage.page;
        if(this.selected == "mine") {
          this.show = false;
        }
        this.$router.push({name: this.selected});
      }
    },
    mounted() {
      this.selected = this.getPage.page;
      this.changePage("home");
      this.getCookbook();
      this.getShop();
    },
    methods: {
      ...mapActions(["changePage"]),
       //获取全部食谱
      ...mapActions(["getCookbook"]),
      //获取食材
      ...mapActions(["getShop"]),
      //  获取选中的Item的mark值，并且实现Item路由跳转
      getItem: function (i) {
        this.changePage(i);
      }
    }
  }
</script>

<style scoped>
  .body {width: 100%; height: 100%;position: absolute;}
  .tabbarHeader {width: 100%;height: 44px;position: relative;top:0;left:0;}
  .content {width: 100%;z-index: 1;position: relative;padding-bottom: 64px;margin: 0 auto;}
  .footer {z-index: 5;width: 100%;height: 64px;position: fixed;bottom:0;left:0;}
  .tabbarFooter {width: 100%; height: 64px;border-top: 1px solid #ccc; text-align: center;background: #fff;}
</style>
