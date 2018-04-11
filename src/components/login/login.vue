<template>
   <div class="box_login box_input1 animated" v-show="status=='login'">
        <div id="input1" class="input">
          <span class="title">用户登录</span>
        </div>
        <div id="input2" class="input">
          <div class="border" v-bind:class="{focus:focus.username}">
            <div class="box_icon">
              <img src="@/assets/img/icon/username.svg" alt="" class="icon" v-if="!focus.username">
              <img src="@/assets/img/icon/username_after.svg" alt="" class="icon" v-if="focus.username">
            </div>
            <input type="text" class="input_username" placeholder="用户名" @focus="focusUsername()" @blur="blurUsername()">
          </div>
        </div>
        <div id="input3" class="input">
          <div class="border" v-bind:class="{focus:focus.password}">
            <div class="box_icon">
              <img src="@/assets/img/icon/password.svg" alt="" class="icon" v-if="!focus.password">
              <img src="@/assets/img/icon/password_after.svg" alt="" class="icon" v-if="focus.password">
            </div>
            <input type="text" class="input_password" placeholder="密码" @focus="focusPassword()" @blur="blurPassword()">
          </div>
        </div>
        <div id="input4" class="input">
          <button class="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
        <div id="input5" class="input">
          <span class="jump" @click="toRegist()">还没有账号？</span>
        </div>
      </div>
</template>
<script>
  export default {
    props: ['status'],
    data() {
      return {
        focus: {
          username: false,
          password: false
        }
      }
    },
    methods: {
      focusUsername() {
        this.focus.username = true;
      },
      blurUsername() {
        this.focus.username = false;
      },
      focusPassword() {
        this.focus.password = true;
      },
      blurPassword() {
        this.focus.password = false;
      },
      toRegist() {
        this.$emit("change", "regist");
      }
    }
  };

</script>
<style scoped>
  .box_login {
    width: 85%;
    height: 50%;
    margin: auto;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 0 5px 0 #999;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 5px;
  }

  .input {
    width: 100%;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #input1 {
    flex: 4;
  }

  #input2,
  #input3 {
    flex: 3;
  }

  #input4 {
    flex: 3;
  }
  #input5 {
    flex: 2;
  }
  .title {
    font-size: 24px;
  }

  .jump {
    font-size: 12px;
    color: #05C1FF;
  }
  .border {
    width: 90%;
    height: 45px;
    border-radius: 30px;
    background: #fff;
    box-shadow: 0 0 2px 0 #999;
  }

  .focus {
    border: 2px solid #f8a227;
    box-shadow: 0 0 5px 0 #f8a227;
  }

  .box_icon {
    width: 15%;
    height: 100%;
    display: inline-block;
    float: left;
    position: relative;
  }

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -10px;
    /* 高度的一半 */
    margin-left: -10px;
    /* 宽度的一半 */
  }

  .input_username,
  .input_password {
    height: 44px;
    width: 70%;
    margin: 0 auto;
    padding-top: 1px;
    display: block;
    border: none;
    outline: none;
    font-size: 16px;
    display: inline-block;
    float: left;
  }

  .login {
    width: 50%;
    height: 45px;
    background: #ffc107;
    border: none;
    border-radius: 30px;
    color: #fff;
    font-size: 18px;
    outline: none;
  }
  </style>
