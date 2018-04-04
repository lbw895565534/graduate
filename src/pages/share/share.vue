<template>
  <div class="box">
    <mt-navbar fixed v-model="selected">
      <mt-tab-item id="1">最新</mt-tab-item>
      <mt-tab-item id="2">最热</mt-tab-item>
      <mt-tab-item id="3">我的</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="active">
      <mt-tab-container-item id="1">
        <Cookbook></Cookbook>
      </mt-tab-container-item>
      <mt-tab-container-item id="2">

      </mt-tab-container-item>
      <mt-tab-container-item id="3">

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
.mint-navbar.is-fixed {
  margin-top: 45px;
}
</style>
