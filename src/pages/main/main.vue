<template>
    <div>
      <Research></Research>
      <div class="box_sort">
        <Sort></Sort>
      </div>
      <div class="box_program">
        <div class="program">
          <Program></Program>
        </div>
        <div class="program">
          <Program></Program>
        </div>
        <div class="clear"></div>
      </div>
      <div class="box_banner">
         <div class="banner">
            <Banner swiperid="go">
            <div slot='swiper-con' class='swiper-slide'>
              <img src='../../assets/images/banner/01.jpg'/>
            </div>
            <div slot='swiper-con' class='swiper-slide'>
              <img src='../../assets/images/banner/02.jpg'/>
            </div>
            <div slot='swiper-con' class='swiper-slide'>
              <img src='../../assets/images/banner/03.jpg'/>
            </div>
          </Banner>
         </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
import Research from "../../components/research/index";
import Banner from "../../components/banner/index";
import Program from "../../components/program/index";
import Sort from "../../components/sort/sort_food";
export default {
  components: {
    Banner,
    Research,
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
  margin: auto;
}
.box_program {
  width: 100%;
}
.program {
  width: 50%;
  height: 160px;
  float: left;
}
.blank {
  width: 20px;
  height: 140px;
  float: left;
}
.clear {
  clear: both;
}
.box_banner {
  width: 100%;
  height: 160px;
}
</style>
