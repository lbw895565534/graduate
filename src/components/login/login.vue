<template>
  <div class="box_login box_input1 animated">
    <div id="input1" class="input">
      <span class="title">用户登录</span>
    </div>
    <div id="input2" class="input">
      <div class="border" v-bind:class="{focus:form[0].focus}">
        <div class="box_icon">
          <img src="@/assets/img/icon/username.svg" alt="" class="icon" v-if="!form[0].focus">
          <img src="@/assets/img/icon/username_after.svg" alt="" class="icon" v-if="form[0].focus">
        </div>
        <input type="text" class="input_username" placeholder="用户名" v-model="username" @focus="focus(0)" @blur="unFocus(0)">
      </div>
    </div>
    <div id="input3" class="input">
      <div class="border" v-bind:class="{focus:form[1].focus}">
        <div class="box_icon">
          <img src="@/assets/img/icon/password.svg" alt="" class="icon" v-if="!form[1].focus">
          <img src="@/assets/img/icon/password_after.svg" alt="" class="icon" v-if="form[1].focus">
        </div>
        <input type="password" class="input_password" placeholder="密码" v-model="password" @focus="focus(1)" @blur="unFocus(1)">
      </div>
    </div>
    <div id="input4" class="input">
      <button class="login" @click="submit()">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
    </div>
    <div id="input5" class="input">
      <span class="jump" @click="toRegist()">还没有账号？</span>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  props: ["status"],
  data() {
    return {
      username: "",
      password: "",
      form: [
        {
          focus: false
        },
        {
          focus: false
        }
      ]
    };
  },
  computed: {
    ...mapGetters(["userstatus"])
  },
  methods: {
    ...mapActions(["login"]),
    focus(i) {
      this.form[i].focus = true;
    },
    unFocus(i) {
      this.form[i].focus = false;
    },
    submit() {
      var user = {
        username: this.username,
        password: this.password
      };
      this.login(user);
      this.loginSuccess();
    },
    loginSuccess() {
      if (this.userstatus == 200) {
        console.log("登录成功");
        this.$router.push({ name: "home" });
      }
    },
    toRegist() {
      this.$emit("turn", "regist");
    }
  }
};
</script>
<style scoped>
.box_login {
  width: 80%;
  max-width: 320px;  
  height: 50%;
  min-height: 320px;
  max-height: 360px; 
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
  color: #05c1ff;
}

.border {
  width: 75%;
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
  box-shadow: 1px 1px 5px 0 #999;
}
.login:active {
  box-shadow: -1px -1px 5px 0 #999 inset;
}

</style>
