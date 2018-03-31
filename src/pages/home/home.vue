<template>
  <div>
    <Search></Search>
    <div class="box_sort">
      <Sort></Sort>
    </div>
    <div class="box_program">
      <Program></Program>
    </div>
    <div class="box_banner">
      <div class="banner">
        <Banner swiperid="go">
          <div slot='swiper-con' class='swiper-slide'>
            <img src='@/assets/images/banner/01.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='@/assets/images/banner/02.jpg' />
          </div>
          <div slot='swiper-con' class='swiper-slide'>
            <img src='@/assets/images/banner/03.jpg' />
          </div>
        </Banner>
      </div>
    </div>
  </div>
</template>
<script>
  import Sort from "@/components/home/sort/sort"
  import Search from "@/components/common/search/search"
  import Banner from "@/components/common/banner/index";
  import Program from "@/components/home/program/index";

  export default {
    components: {
      Search,
      Banner,
      Program,
      Sort
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
