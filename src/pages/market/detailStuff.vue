<template>
  <div class="box">
    <div class="picture">
      <img class="img-stuff" :src="getDetailStuff.img" alt="">
    </div>
    <div class="seperator"></div>
    <div class="container">
        <div class="item information">
            <div class="np">
              <div class="name">
                <span>{{ getDetailStuff.name }}</span>
              </div>
              <div class="blank"></div>
              <div class="price">
                <span>{{ getDetailStuff.price }}.00</span>/
                <span>{{ getDetailStuff.unit }}</span>
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
    
    <div class="seperator"></div>
    <div class="item link">
      <div class="title">
        <span>食材可以做：</span>
      </div>
      <div>
          <div class="tab" ref="tab">
              <ul class="tab_content" ref="tabWrapper">
                <li class="tab_item" v-for="link in cookbooklink" ref="tabitem">
                  <img :src="link.img" alt="">
                  <span>{{ link.name }}</span>
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
  export default {
    data() {
      return {
        itemList: []
      };
    },
    computed: {
      ...mapGetters(['getDetailStuff']),
      ...mapGetters(['cookbooklink'])
    },
    methods: {
      ...mapActions(['getLink']),
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

  hr {
    width: 90%;
    size: 1px;
    color: #eee;
    margin: 10px 0 10px 0;
  }
  .seperator {
    width: 100%;
    height: 20px;
    background: #eee;
  }  

  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
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
  }

  .item {
    width: 90%;
    max-width: 512px;
    margin: 0 auto;
  }

  .information {
    height: 120px;
  }

  .np {
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
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
    font-size: 16px;
    color: #999;
  }

  .site {
    padding-top: 10px;
    font-size: 12px;
    color: #999;
  }

  .link {
    height: 300px;
    margin-top: 10px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
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
  }

  .tab_content {
    display: flex;
    height: 100%;
    list-style-type: none;
  }

  .tab_item {
    flex: 0 0 158px;
    height: 100%;
    margin-right: 20px;
    box-shadow: 0 0 5px 0 #999;
  }
  .tab_item>img {
    width: 150px;
    margin: 4px;
  }
  .tab_item>span {
    margin: 0 auto;
    font-size: 16px;
  }

</style>
