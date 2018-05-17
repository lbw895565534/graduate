<template>
  <div class="box">
    <div class="container_txt" v-bind:class="{focus:shuru}">
      <textarea name="txt" id="txt" v-model="txt" placeholder="请输入你想说的话~" @focus="shuru=true" @blur="shuru=false"></textarea>
    </div>
    <div class="container_btn">
      <button class="btn" @click="submit()">提交</button>
    </div>
  </div>
</template>
<script>
  import {
    Toast,
    MessageBox
  } from "mint-ui"
  import {
    mapGetters,
    mapActions
  } from "vuex";
  export default {
    data() {
      return {
        txt: "",
        shuru: false
      }
    },
    computed: {
      ...mapGetters(['loginUser']),
      ...mapGetters(['getDetailCookbook']),
    },
    methods: {
      ...mapActions(['addComment']),
      submit() {
        if (this.loginUser) {
          var data = {
            name: this.loginUser.name,
            txt: this.txt
          }
          this.addComment(data);
        } else {
          this.loginTip();
        }
      },
      loginTip() {
        Toast({
          message: "请先登录",
          position: "bottom",
          duration: 2000
        });
        setTimeout(() => {
          MessageBox.confirm('是否现在登录?').then(action => {
            if (action == "confirm") {
              this.$router.push({name: "login"});
            }
            if(action == "cancel") {

            }
          });
        }, 2000)
      }
    }
  }

</script>
<style scoped>
  .container_txt {
    padding: 10px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ddd;
    border-top: 1px solid #ddd;
  }

  textarea {
    width: 100%;
    height: 200px;
    border: none;
    resize: none;
    overflow: hidden;
    outline: none;
    font-size: 18px;
  }

  .focus {
    border: none;
    box-shadow: 0 0 5px 0 #E9A144 inset;
  }

  button {
    width: 120px;
    height: 45px;
    border: none;
    float: right;
    margin-right: 20px;
    background: #F55263;
    color: #fff;
    font-size: 18px;
    box-shadow: 0 0 2px 0 #727272;
    outline: none;
  }

</style>
