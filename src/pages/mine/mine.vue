<template>
  <div class="box">
    <div class="box_headshot" :style="backgroundImage">
      <div class="column_headshot">
        <img class="headshot" src="static/images/picture/mine.png" alt="" >
      </div>
      <div class="column_core">
        <div class="core">
          <img class="icon" src="static/images/icon/mine/shareMine.svg" alt="">
          <span class="record">发布：{{ record.shareMine }}</span>
        </div>
        <div class="core core_middle">
          <img class="icon" src="static/images/icon/mine/collect.svg" alt="">
          <span class="record">收藏：{{ record.collect }}</span>
        </div>
        <div class="core">
          <img class="icon" src="static/images/icon/mine/cart.svg" alt="">
          <span class="record">购物：{{ record.cart }}</span>
        </div>
      </div>
    </div>
    <div class="box_cell">
      <div></div>
    </div>
  </div>
</template>
<script>
import { TabContainer, TabContainerItem } from 'mint-ui';
export default {
  data() {
    return {
      backgroundImage: {
        background:
          "url('static/images/background/bg_mine.jpg') no-repeat fixed top"
      },
      record: {
        shareMine: 0,
        collect: 0,
        cart: 0
      },
      cells: [
        {name: '资料修改', src: ''},
        {name: '设置', src: ''},
        {name: '好评鼓励', src: ''},
      ]
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
  height: 100%;
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
  border-top: 1px solid #fafafa;
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
  color: #000;
}

</style>
