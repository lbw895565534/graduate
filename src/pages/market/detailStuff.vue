<template>
  <div class="box">
    <div class="picture">
      <img class="img-stuff" :src="getDetailStuff.img" alt="">
    </div>
    <div class="item information">
      <div class="np">
        <div class="name">
          <span>{{ getDetailStuff.name }}</span>
        </div>
        <div class="blank"></div>
        <div class="price">
          <span>{{ getDetailStuff.price }}.00</span>/<span>{{ getDetailStuff.unit }}</span>
        </div>
      </div>
      <div class="info">
        <span>{{ getDetailStuff.info }}</span>
      </div>
      <div class="site">
        <span>{{ getDetailStuff.site }}</span>
      </div>
    </div>
    <div class="item link">
      <div class="title">
        <span>食材可以做：</span>
      </div>
      <div class="swiper-cookbook">
        <div class="cookbook">
          <img src="" alt="">
          <span></span>
        </div>
        <div class="cookbook">
            <img src="" alt="">
            <span></span>
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
  export default {
    data() {
      return {

      };
    },
    computed: {
      ...mapGetters(['getDetailStuff'])
    },
    methods: {

    },
    mounted() {
      console.log(this.getDetailStuff);
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

  .item {
    width: 90%;
    max-width: 512px;
  }

  .information {
    height: 120px;
    display: flex;
    flex-direction: column;
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
    height: 240px;
    margin-top: 10px;
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
  .swiper-cookbook {
    height: 100%;    
    overflow-x: scroll;
  }
  .cookbook {
    width: 158px;
    height: 100%;
    margin-right: 20px;
    background: #999;
    display: inline-block;
  }
</style>
