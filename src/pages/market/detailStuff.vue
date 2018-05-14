<template>
  <div class="box">
    <div class="picture">
      <img class="img-stuff" :src="getDetailStuff.img" alt="">
    </div>
    <div class="container">
      <div class="item information">
        <div class="np">
          <div class="name">
            <span>{{ getDetailStuff.name }}</span>
          </div>
          <div class="blank"></div>
          <div class="price">
            <span>{{ getDetailStuff.price.toFixed(2) }}</span>/<span>{{ getDetailStuff.unit }}</span>
          </div>
        </div>
        <div class="info">
          <span>{{ getDetailStuff.info }}</span>
        </div>
        <div class="site">
          <span>{{ getDetailStuff.site }}</span>
        </div>
      </div>
    </div>
    <div class="item link">
      <div class="title">
        <span>食材可以做：</span>
      </div>
      <div>
        <div class="tab" ref="tab">
          <ul class="tab_content" ref="tabWrapper">
            <li class="tab_item" v-for="cookbook in cookbooklink" ref="tabitem" @click="toCookbook(cookbook)">
              <img :src="cookbook.img" alt="">
              <span>{{ cookbook.name }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  import {
    Indicator,
    MessageBox,
    Toast
  } from "mint-ui";
  import BScroll from 'better-scroll'
<<<<<<< HEAD
  export default {
    computed: {
      ...mapGetters(['getDetailStuff']),
      ...mapGetters(['cookbooklink'])
=======
  export default {   
    computed: {
      ...mapGetters(['getDetailStuff']),
      ...mapGetters(['cookbooklink'])      
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
    },
    methods: {
      ...mapActions(['getLink']),
      ...mapActions(['saveCookbookDetail']),
      InitTabScroll() {
        let width = 0
        for (let i = 0; i < this.itemList.length; i++) {
          width += this.$refs.tabitem[0].getBoundingClientRect().width; //getBoundingClientRect() 返回元素的大小及其相对于视口的位置
        }
        this.$refs.tabWrapper.style.width = width + 'px'
        this.$nextTick(() => {
          if (!this.scroll) {
            this.scroll = new BScroll(this.$refs.tab, {
              startX: 0,
              click: true,
              scrollX: true,
              scrollY: false,
              eventPassthrough: 'vertical'
            });
          } else {
            this.scroll.refresh()
          }
        });
      },
      toCookbook(c) {
        this.saveCookbookDetail(c);
        this.$router.push({name: 'detailCookbook', params: c});
      }
    },
    created() {
      this.$nextTick(() => {
        this.InitTabScroll();
      });
    },
    mounted() {
      this.getLink(this.getDetailStuff.link);
    }
  };

</script>
<style scoped>
  * {
    margin: 0;
    padding: 0;
  }
<<<<<<< HEAD

  .box {
    width: 100%;
    max-width: 512px;
    height: 100%;
=======
 
  .box {
    width: 100%;
    max-width: 512px;
    height: 100%;   
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
  }

  .picture {
    height: 245px;
    width: 100%;
    max-width: 512px;
  }

  .picture>img {
    width: 100%;
    max-width: 512px;
    height: 245px;
  }

  .container {
    width: 100%;
    height: auto;
    border-top: 10px solid #eee;
<<<<<<< HEAD
    border-bottom: 10px solid #eee;
    margin: 0 auto;
=======
    border-bottom: 10px solid #eee;  
    margin: 0 auto;  
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
  }

  .item {
    width: 90%;
    max-width: 512px;
    margin: 0 auto;
  }

  .information {
<<<<<<< HEAD
    height: 120px;
=======
    height: 120px;   
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
  }

  .np {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
<<<<<<< HEAD
    align-items: center;
=======
    align-items: center; 
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
  }

  .name {
    font-size: 24px;
  }

  .blank {
    flex: 1;
  }

  .price {
    font-size: 28px;
  }

  .price>span:first-child {
    text-align: right;
    color: red;
  }

  .price>span:last-child {
    font-size: 16px;
    font-weight: normal;
    position: relative;
    left: 0;
  }

  .info {
    height: 42px;
    font-size: 16px;
    color: #999;
  }

  .site {
    padding-bottom: 10px;
    font-size: 12px;
    color: #999;
  }

  /*  水平滚动  */
  .link {
    height: 300px;
    margin-top: 10px;
<<<<<<< HEAD
    margin-bottom: 20px;
=======
    margin-bottom: 20px;    
>>>>>>> bdb91c9a29cbdb68f0fc41aadaf94d2bb17a7933
  }

  .title {
    height: 42px;
    font-weight: bold;
    font-size: 16px;
    display: flex;
    align-items: center;
  }

  .tab {
    width: 90vw;
    height: 100%;
    padding-bottom: 20px;
    overflow-x: scroll;
  }

  .tab_content {
    display: flex;
    height: 100%;
    list-style-type: none;
  }

  .tab_item {
    flex: 0 0 158px;
    height: 165px;
    margin-left: 1px;
    margin-right: 10px;
    box-shadow: 0 0 5px 0 #999;
  }

  .tab_item>img {
    width: 150px;
    margin: 4px;
  }

  .tab_item>span {
    font-size: 16px;
    text-align: center;
    display: inherit;
    margin-bottom: 20px;
  }

</style>
