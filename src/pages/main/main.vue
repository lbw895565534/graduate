<template>
  <div>
    <Search></Search>
    <div class="box_sort">
      <SortFood></SortFood>
    </div>
    <div class="box_program">
      <Program></Program>
    </div>
    <div class="box_banner">
      <div class="banner">
        <Banner swiperid="go">
          <div slot='swiper-con' class='swiper-slide'>
            <img src='../../assets/images/banner/01.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='../../assets/images/banner/02.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='../../assets/images/banner/03.jpg' />
          </div>
        </Banner>
      </div>
    </div>
  </div>
</template>
<script>
  import Search from "../../components/search/search"
  import Banner from "../../components/banner/index";
  import Program from "../../components/program/index";
  import SortFood from "../../components/sort/sort_food";
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    computed: {
      ...mapGetters(["cookbooklist"])
    },
    methods: {
      ...mapActions(["getCookbook"])
    },
    mounted() {
      this.getCookbook();
    },
    components: {
      Search,
      Banner,
      Program,
      SortFood
    }
  };

</script>

<style>
  * {
    padding: 0;
    margin: 0;
  }

  .box_sort {
    width: 100%;
    height: 120px;
  }

  .box_program {
    width: 100%;
    height: 160px;
  }

  .box_banner {
    width: 100%;
    height: 160px;
  }

</style>
