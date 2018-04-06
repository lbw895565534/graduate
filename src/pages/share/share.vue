<template>
  <div class="box">
    <mt-navbar fixed v-model="selected">
      <mt-tab-item id="1">最新</mt-tab-item>
      <mt-tab-item id="2">最热</mt-tab-item>
      <mt-tab-item id="3">我的</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="active">
      <mt-tab-container-item :key="k" id="1" v-for="k in kind">
        <Cookbook :kind="k"></Cookbook>
      </mt-tab-container-item>

    </mt-tab-container>
  </div>
</template>
<script>
import Cookbook from "@/components/sort/sort-cookbook/cookbook";
import { Navbar, TabItem } from "mint-ui";
import { TabContainer, TabContainerItem } from "mint-ui";
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
  props: []
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
</style>
