<template>
  <div class="box">
    <div class="box_search">
      <Search></Search>
    </div>
    <div class="box_sort">
      <Sort></Sort>
    </div>
    <div class="box_program">
      <Program></Program>
    </div>
    <div class="box_banner">
        <Banner swiperid="go">
          <div slot='swiper-con' class='swiper-slide'>
            <img src='static/images/banner/01.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='static/images/banner/02.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='static/images/banner/03.jpg' />
          </div>
        </Banner>
    </div>
  </div>
</template>
<script>
  import Sort from "@/components/home/sort/sort"
  import Search from "@/components/common/search/search"
  import Banner from "@/components/common/banner/index";
  import Program from "@/components/home/program/index";
  import { mapGetters, mapActions } from "vuex";
  export default {
    components: {
      Search,
      Banner,
      Program,
      Sort
    }
  };

</script>

<style scoped>

  .box_search {
    position: relative;
    top: 0;
    width: 100%;
    height: 45px;
    background: #fff;
    z-index: 1;
  }

  .box_sort {
    width: 100%;
    max-width: 512px;
    height: 120px;
    margin: 0 auto;
  }

  .box_program {
    width: 100%;
    max-width: 512px;
    height: 160px;
    margin: 0 auto;
  }

  .box_banner {
    width: 100%;
    max-width: 512px;
    height: 240px;
    padding-top: 20px;
    margin: 0 auto;
  }

</style>
