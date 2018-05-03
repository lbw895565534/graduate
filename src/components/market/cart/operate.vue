<template>
  <div class="box_operate">
    <div class="item-wrapper">
      <div class='item_sel' @click="allChecked">
        全选
      </div>
      <div class='item_total'>
        合计：￥{{ totalPrice }}
      </div>
      <div class="item_pay">
        <button class="btn_pay" @click="indicator()">结算({{ totalNum }})</button>
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
    name: "info",
    data() {
      return {};
    },
    methods: {
      ...mapActions(["clearAllCart"]),
      ...mapActions(["allChecked"]),
      ...mapActions(["delPayed"]),
      indicator() {
        Indicator.open();
        setTimeout(() => {
          Indicator.close();
          this.certainer();
        }, 2000);
      },
      certainer() {
        if (this.totalPrice == 0) {
          Toast({
            message: '您未选择任何商品',
            position: 'bottom',
            duration: 5000
          });
        }else {
          MessageBox.confirm(
          "是否确定支付?",
          "总金额为" + this.totalPrice + "元"
        ).then(action => {
          if (action == "confirm") {
            Toast({
              message: "操作成功",
              iconClass: "mintui mintui-success"
            });            
          }
          this.delPayed();
        });
        }        
      }
    },
    computed: {
      ...mapGetters(["totalPrice", "totalNum"])
    }
  };

</script>

<style scoped>
  .box_operate {
    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    background: #fffffd;
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
    height: 100%;
    text-align: center;
    line-height: 64px;
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
