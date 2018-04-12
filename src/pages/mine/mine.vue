<template>
  <div class="box">
    <div class="box_headshot" :style="backgroundImage">
      <div class="column_headshot">
        <img class="headshot" src="static/images/picture/mine.png" alt="" >
      </div>
      <div class="column_core">
        <div class="core">
          <img class="icon" src="static/images/icon/mine/shareMine.svg" alt="">
          <span class="record">发布：</span>
        </div>
        <div class="core core_middle">
          <img class="icon" src="static/images/icon/mine/collect.svg" alt="">
          <span class="record">发布：</span>
        </div>
        <div class="core">
          <img class="icon" src="static/images/icon/mine/cart.svg" alt="">
          <span class="record">发布：</span>
        </div>
      </div>
    </div>
    <div class="box_cell">
      <div class="cell">

      </div>
      <div class="cell">

      </div>
      <div class="cell">

      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      backgroundImage: {
        background:
          "url('static/images/background/bg_mine.jpg') no-repeat fixed top"
      }
    };
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  min-height: 557px;
  display: flex;
  flex-direction: column;
}
.box_headshot {
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
}
.box_cell {
  width: 100%;
  flex: 1;
}

.column_headshot {
  width: 100%;
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}
.column_core {
  width: 100%;
  /* 不设置height: 100%; 子元素将无法获取父元素的高度 */
  height: 100%;
  flex: 2;
  border-top: 2px solid #ffd40059;
  display: flex;
}

.headshot {
  width: 100px;
  position: absolute;
  display: inline-block;
}

.core {
  width: 100%;
  height: 0;
  flex: 1;
  justify-content: center;
  text-align: center;
}
.core_middle {
  border-left: 1px solid #fff;
  border-right: 1px solid #999;
}

.icon {
  width: 50px;
  height: 50px;
  display: block;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 5px;
}

.record {
  flex: 2;
  color: #fff;
}

</style>
