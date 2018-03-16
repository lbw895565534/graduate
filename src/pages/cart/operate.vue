<template>
    <div class="box_operate">
        <div class="item-wrapper">
            <div class='item_sel'>
              全选
            </div>
            <div class='item_total'>
                合计：￥{{ total }}
            </div>
            <div class="item_pay">
              <button class="btn_pay">结算</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'info',
  data() {
    return {
      totalNum: 13,
      totalPrice: 342,
    };
  },
};
</script>

<style scoped>
.box_operate {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 65px;
}
.item-wrapper {
  display: flex;
  height: 100%;
  align-items: center;
  border-top: 1px solid #ddd;
  justify-content: center;
}
.item_sel {
  flex: 2;
  text-align: center;
}
.item_total {
  flex: 4;
  color: #f55263;
  text-align: center;
}
.item_pay {
  flex: 2;
}
.btn_pay {
  width: 90px;
  height: 40px;
  background: #f55263;
  border: none;
  color: white;
}
</style>

