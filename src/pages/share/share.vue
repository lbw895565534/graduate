<template>
  <div class="box">
    <div class="box_navbar">
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
    </div>

    <mt-tab-container  v-model="selected" :swipeable="true">
      <mt-tab-container-item :key="kind[0]" id="1">
        <Cookbook :cookbook="cookbooknew"></Cookbook>
      </mt-tab-container-item>
      <mt-tab-container-item :key="kind[1]" id="2">
        <Cookbook :cookbook="cookbookhot"></Cookbook>
      </mt-tab-container-item>
      <mt-tab-container-item :key="kind[2]" id="3">
        <div class="box_publish">
          <Publish></Publish>
        </div>
        <Cookbook :cookbook="cookbookmine"></Cookbook>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
import Cookbook from "@/components/sort/sort-cookbook/shareCookbook";
import Publish from "@/components/share/publish";
import { Navbar, TabItem, TabContainer, TabContainerItem } from "mint-ui";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      selected: "1",
      kind: ["shareNew", "shareHot", "shareMine"],
      active: ""
    };
  },
  components: {
    Cookbook,
    Publish
  },
  computed: {
    ...mapGetters(["cookbooknew"]),
    ...mapGetters(["cookbookhot"]),
    ...mapGetters(["cookbookmine"])
  },
  methods: {
    ...mapActions(["sortOfDate"]),
    ...mapActions(["sortOfHot"]),
    ...mapActions(["sortOfMine"]),
  },
  mounted() {
    this.sortOfDate();
    this.sortOfHot();
    this.sortOfMine();
    console.log(this.cookbookmine);
    if (this.$route.params.selected) {
      this.selected = this.$route.params.selected;
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  height: 100%;
  position: relative;
  top: 0;
  bottom: 64px;
}

.box_navbar {
  width: 100%;
  height: 45px;
}

.mint-navbar {
  height: 45px;
  border-bottom: 2px solid #e7e9e8;
  margin-top: 45px;
}

.mint-navbar .mint-tab-item.is-selected {
  border-bottom: 3px solid #e5173a;
  color: #e5173aff;
}

.mint-tab-container {
  position: relative;
  top: 0;
}

.box_publish {
  width: 100%;
  height: 45px;
  position: relative;
}
</style>
