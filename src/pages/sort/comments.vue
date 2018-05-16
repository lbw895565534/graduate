<template>
  <div class="box">
    <div class="item" v-for="c in getDetailCookbook.comment">
      <div class="container">
        <div class="row1">
          <img src="static/images/cookbook/boy.svg" alt="">
          <span class="name">{{ c.name }}:</span>
        </div>
        <div class="row2">
          <span class="txt">{{ c.txt }}</span>
        </div>
        <div class="row3">
          <span class="date">{{ c.date }}</span>
        </div>
      </div>
    </div>
    <div class="edit">
      <img src="static/images/icon/detail/edit.svg" alt="" @click="toEdit()">
    </div>
  </div>
</template>
<script>
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        cookbook: [],
        comments: []
      }
    },
    computed: {
      ...mapGetters(['getDetailCookbook'])
    },
    methods: {
      back() {
        this.$router.push({name: 'detailCookbook'});
      },
      toEdit() {
        this.$router.push({name: 'edit'});
      }
    },
    mounted() {
      this.cookbook = this.$route.params.cookbook;
      this.comments = this.cookbook.comment;
    }
  }

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .container {
    width: 90%;
    height: auto;
    margin: 0 auto;
    padding-top: 15px;
  }

  .item {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }

  .row1 {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .row1>img {
    margin-right: 10px;
  }

  .name {
    color: #999;
  }

  .row2 {
    width: 100%;
    display: flex;
    align-items: center;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .row3 {
    width: 100%;
    display: flex;
    align-items: center;
  }

  .date {
    font-size: 12px;
    color: #999;
    padding-bottom: 10px;
  }

  .edit {
    width: 50px;
    height: 50px;
    position: fixed;
    right: 20px;
    bottom: 84px;
  }
</style>
