<template>
  <div class="box">
    <img src="@/assets/images/background/bg_login.jpg" alt="" class="bg">
    <div class="box_input">
      <div id="input1" class="input">

      </div>
      <div id="input2" class="input">
        <div class="border">
          <div class="box_icon">
            <img src="@/assets/img/icon/username.svg" alt="" class="icon">
          </div>
          <input type="text" class="input_username" placeholder="用户名">
        </div>
      </div>
      <div id="input3" class="input">
        <div class="border">
          <div class="box_icon">
            <img src="@/assets/img/icon/password.svg" alt="" class="icon">
          </div>
          <input type="text" class="input_password" placeholder="密码">
        </div>
      </div>
      <div id="input4" class="input">
        <button class="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
export default {
  props: []
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
  background: #fff;
  margin: 0 auto;
  position: fixed;
  left: 5%;
  top: 40%;
  box-shadow: 0 0 20px 3px #999;
  display: flex;
  flex-direction: column;
  opacity: 0.6;
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
.border {
  width: 80%;
  height: 45px;
  border-radius: 30px;
  background: #fff;
  border: 1px solid #999;
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
  display: block;
  margin: 0 auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.input_username,
.input_password {
  height: 100%;
  width: 70%;
  margin: 0 auto;
  display: block;
  border: none;
  outline: none;
  font-size: 16px;
  display: inline-block;
  float: left;
}
.login {
}
@media screen and (max-width: 500px) {
  .box_input {
  }
}
</style>

