<template>
  <div class="body">
    <div class="tabbarHeader" v-show="getPage != 'mine'">
      <Top :sel="getPage"></Top>
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      <div class="tabbarFooter">
        <Item txt="首页" mark="home" :sel="getPage" @change="$router.push({name: 'home'})">
          <img src="@/assets/img/icon/home.png" alt="" slot="normalImg">
          <img src="@/assets/img/icon/homered.png" alt="" slot="activeImg">
        </Item>
        <Item txt="分享" mark="share" :sel="getPage" @change="$router.push({name: 'share'})">
          <img src="@/assets/img/icon/share.png" alt="" slot="normalImg">
          <img src="@/assets/img/icon/sharered.png" alt="" slot="activeImg">
        </Item>
        <Item txt="市集" mark="market" :sel="getPage" @change="$router.push({name: 'market'})">
          <img src="@/assets/img/icon/market.png" alt="" slot="normalImg">
          <img src="@/assets/img/icon/marketred.png" alt="" slot="activeImg">
        </Item>
        <Item txt="我的" mark="mine" :sel="getPage" @change="$router.push({name: 'mine'})">
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
  import {
    mapGetters,
    mapActions
  } from "vuex";
  //  默认设置
  export default {
    //  子组件
    components: {
      Item,
      Top
    },
    data: function () {
      return {
        show: true,
        selected: "home"
      }
    },
    computed: {
      ...mapGetters(['getPage']),
    },
    mounted() {
      this.getCookbook();
      this.getShop();
      console.log(this.selected);
    },
    methods: {
      //获取路由地址
      ...mapActions(["changePage"]),
      //获取全部食谱
      ...mapActions(["getCookbook"]),
      //获取食材
      ...mapActions(["getShop"]),      
    },
    watch: {
      '$route' (to, from) {
        this.changePage(this.$route.name);
      }
    }
  }

</script>

<style scoped>
  .body {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .tabbarHeader {
    width: 100%;
    height: 44px;
    position: relative;
    top: 0;
    left: 0;
  }

  .content {
    width: 100%;
    z-index: 1;
    position: relative;
    padding-bottom: 64px;
    margin: 0 auto;
  }

  .footer {
    z-index: 5;
    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    left: 0;
  }

  .tabbarFooter {
    width: 100%;
    height: 64px;
    border-top: 1px solid #ccc;
    text-align: center;
    background: #fff;
  }

</style>
