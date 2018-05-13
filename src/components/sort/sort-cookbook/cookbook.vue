<template>
  <div class="list_box">
    <div class="list_item" v-for="cookbook in cookbookfilter" @click="toDetail(cookbook)">
      <div class="left">
        <div class="list_item_picture">
          <img v-bind:src="cookbook.img" alt="">
        </div>
      </div>
      <div class="right">
        <div class="item list_item_name">
          <div class="item_name">{{ cookbook.name }}</div>
        </div>

        <div class="item list_item_info">
          <div class="item_info">
            {{ cookbook.info }}
          </div>
        </div>
        <div class="item list_item_op">
          <div class="item_op">
            <div class="op_like">
              <img src="@/assets/img/icon/like.svg" width="16px">
              <span>{{ cookbook.likes }}</span>
            </div>
            <div class="op_collect">
              <img src="@/assets/img/icon/collect.svg" width="16px">
              <span>{{ cookbook.collects }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["kind"],
  computed: {
    ...mapGetters(["cookbookfilter"]),
    ...mapGetters(["loginUser"]),
  },
  methods: {
    ...mapActions(["getStaple"]),
    ...mapActions(["getHomecook"]),
    ...mapActions(["getSoup"]),
    ...mapActions(["getSweets"]),
    ...mapActions(["sortOfLikes"]),
    ...mapActions(["sortOfCollects"]),
    ...mapActions(["clearCookbookFilter"]),
    ...mapActions(["saveCookbookDetail"]),
    toDetail(c) {
      this.saveCookbookDetail(c);
      this.$router.push({name:'detailCookbook',params:c});
    }
  },
  mounted() {
    switch (this.kind) {
      case "staple": {
        this.getStaple();
        break;
      }
      case "homecook": {
        this.getHomecook();
        break;
      }
      case "soup": {
        this.getSoup();
        break;
      }
      case "sweets": {
        this.getSweets();
        break;
      }
      case "like": {
        this.sortOfLikes();
        break;
      }
      case "collect": {
        this.sortOfCollects();
        break;
      }
      case "search": {
        this.clearCookbookFilter();
        break;
      }
    }
  }
};
</script>
<style scoped>

.list_item {
  width: 100%;
  height: 100px;
  border-bottom: 1px solid #d9d9d9;
  display: flex;
}
.left {
  flex: 2;
}
.right {
  flex: 5;
}
.list_item_picture {
  width: 98px;
  height: 98px;
  margin: auto;
}

.list_item_picture img {
  width: 80px;
  height: 80px;
  margin: auto;
  margin: 10px;
}

.list_item_name {
  height: 25%;
  font-weight: bold;
}

.list_item_info {
  height: 50%;
}

.list_item_op {
  height: 25%;
}

.item_name {
  margin-top: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  -o-text-overflow: ellipsis;
  white-space: nowrap;
}

.item_info {
  width: 98%;
  height: 100%;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.op_like {
  float: left;
  margin-right: 10px;
}

.op_collect {
  float: left;
}

.list_item_op {
  padding-top: 2px;
}

.list_item_op span {
  width: 40px;
  height: 18px;
  margin-left: -1px;
  display: inline-block;
  vertical-align: top;
  color: rgb(180, 180, 180);
}

span,
div {
  font-family: Helvetica, Tahoma, Arial, "华文细黑", "Microsoft YaHei",
    "微软雅黑", sans-serif;
}
</style>
