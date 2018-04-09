<template>
  <div class="box">
    <img src="./img/bg_login.jpg" alt="" class="bg">
    <transition-group enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
      <div class="box_input box_input1 animated" v-show="login" @click="login=!login" :key="1">
        <div id="input1" class="input">
          <span class="title">用户登录</span>
        </div>
        <div id="input2" class="input">
          <div class="border" v-bind:class="{focus:focus.username}">
            <div class="box_icon">
              <img src="./img/username.svg" alt="" class="icon" v-if="!focus.username">
              <img src="./img/username_after.svg" alt="" class="icon" v-if="focus.username">
            </div>
            <input type="text" class="input_username" placeholder="用户名" @focus="focusUsername()" @blur="blurUsername()">
          </div>
        </div>
        <div id="input3" class="input">
          <div class="border" v-bind:class="{focus:focus.password}">
            <div class="box_icon">
              <img src="./img/password.svg" alt="" class="icon" v-if="!focus.password">
              <img src="./img/password_after.svg" alt="" class="icon" v-if="focus.password">
            </div>
            <input type="text" class="input_password" placeholder="密码" @focus="focusPassword()" @blur="blurPassword()">
          </div>
        </div>
        <div id="input4" class="input">
          <button class="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
      </div>

      <div class="box_input box_input2 animated" v-show="!login" @click="login=!login" :key="2">
        <div id="input1" class="input">
          <span class="title">用户注册</span>
        </div>
        <div id="input2" class="input">
          <div class="border" v-bind:class="{focus:focus.username}">
            <div class="box_icon">
              <img src="./img/username.svg" alt="" class="icon" v-if="!focus.username">
              <img src="./img/username_after.svg" alt="" class="icon" v-if="focus.username">
            </div>
            <input type="text" class="input_username" placeholder="用户名" @focus="focusUsername()" @blur="blurUsername()">
          </div>
        </div>
        <div id="input3" class="input">
          <div class="border" v-bind:class="{focus:focus.password}">
            <div class="box_icon">
              <img src="./img/password.svg" alt="" class="icon" v-if="!focus.password">
              <img src="./img/password_after.svg" alt="" class="icon" v-if="focus.password">
            </div>
            <input type="text" class="input_password" placeholder="密码" @focus="focusPassword()" @blur="blurPassword()">
          </div>
        </div>
        <div id="input4" class="input">
          <button class="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
        </div>
      </div>
    </transition-group>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        focus: {
          username: false,
          password: false
        },
        login: true,
        show: true
      }
    },
    props: [],
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
      }
    }
  };

</script>
<style scoped>
  .box {
    width: 100%;
    height: 100%;
  }

  .bg {
    width: 100%;
    height: 100%;
  }

  .box_input {
    width: 90%;
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
  }

  .input {
    width: 100%;
    display: table-cell;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #input1 {
    flex: 3;
  }

  #input2,
  #input3 {
    flex: 2;
  }

  #input4 {
    flex: 3;
  }

  .title {
    font-size: 24px;
  }

  .border {
    width: 90%;
    height: 45px;
    border-radius: 30px;
    background: #fff;
    border: 1px solid #999;
  }

  .focus {
    border: 2px solid #f8a227;
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

  @media screen and (max-width: 500px) {
    .box_input {}
  }

</style>
