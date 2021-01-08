<template>
  <div class="login">
    <router-link class="box" :to="{ name: 'Login' }">
      <van-icon size="25" class="icontop" name="arrow-left" />
      <p class="zh">注册</p>
    </router-link>
    <input type="text" v-model="userName" placeholder="手机号/邮箱" />
    <input type="password" v-model="password" placeholder="密码" />
    <button @click="regHandle">注册</button>
    <div style="width:100%;">
      <router-link
        style="float: right;margin-top:1rem;padding-right:2.5rem;color:#666"
        :to="{ name: 'Login' }"
        >已有账号</router-link
      >
    </div>
  </div>
</template>

<script>
import { post } from "../utils/request";
import { setToken } from "../utils/auth";

export default {
  name: "Reg",
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    regHandle() {
      if (this.userName && this.password) {
        post("/api/v1/auth/reg", {
          userName: this.userName,
          password: this.password,
        }).then((res) => {
          if (res.code === "success") {
            setToken(res.token);
            // alert("注册成功");
            this.$router.push({
              name: "User",
            });
          } else {
            alert(res.message);
          }
        });
      } else {
        alert("请输入用户名和密码");
      }
    },
  },
};
</script>

<style scoped>
.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  height: 40rem;
}
.login .logo {
  width: 70%;
}
.login input {
  padding: 0.6rem 0rem;
  width: 80%;
  margin: 0.5rem;
  font-size: 1rem;
}
.login button {
  background-color: #ff5777;
  padding: 0.8rem 1.8rem;
  color: white;
  width: 80%;
  border: none;
  border-radius: 50px;
}
.zh {
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid #cecece;
  line-height: 3rem;
  margin-bottom: 3rem;
}
.box {
  width: 100%;
  box-sizing: border-box;
  height: 6rem;
  position: relative;
}
.login input {
  border: none;
  border-bottom: 1px solid #cecece;
  width: 85%;
  padding: 0.7rem;
  color: #999;
  font-size: 1.3rem;
}
.login .icontop {
  position: absolute;
  left: 1rem;
  top: 0.7rem;
  font-weight: normal;
}
</style>
