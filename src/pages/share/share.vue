<template>
  <div class="box">
    <mt-navbar fixed v-model="selected">
      <mt-tab-item id="1">
        <span class="nav">最新</span>
      </mt-tab-item>
      <mt-tab-item id="2">
        <span class="nav">最热</span>
      </mt-tab-item>
      <mt-tab-item id="3">
        <span class="nav">我的</span>
      </mt-tab-item>
    </mt-navbar>
    <mt-tab-container  v-model="selected" swipeable="true">
      <mt-tab-container-item :key="kind[0]" id="1">
        <Cookbook :kind="kind[0]"></Cookbook>
      </mt-tab-container-item>
      <mt-tab-container-item :key="kind[1]" id="2">
        <Cookbook :kind="kind[1]"></Cookbook>
      </mt-tab-container-item>
      <mt-tab-container-item :key="kind[2]" id="3">
        <Cookbook :kind="kind[2]"></Cookbook>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>
<script>
  import Cookbook from "@/components/sort/sort-cookbook/cookbook";
  import {
    Navbar,
    TabItem
  } from "mint-ui";
  import {
    TabContainer,
    TabContainerItem
  } from "mint-ui";
  export default {
    data() {
      return {
        selected: "1",
        kind: ["shareNew", "shareHot", "shareMine"],
        selected: "",
        active: "",
      };
    },
    components: {
      Cookbook
    },
    mounted() {
      $('.mint-tab-item:first').trigger("click");
    }
  };

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
    position: relative;
    bottom: 64px;
  }

  .mint-navbar {
    height: 45px;
  }

  .mint-tab-item-label {
    color: inherit;
    font-size: 14px;
    line-height: 1;
  }

  .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #e5173a;
    color: #e5173aff;
  }

  .mint-navbar.is-fixed {
    margin-top: 45px;
  }

  .nav {
    font-size: 16px;
  }

  .mint-navbar {
    border-bottom: 2px solid #E7E9E8;
  }

</style>
