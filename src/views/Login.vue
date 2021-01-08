<template>
  <div class="loginwrap">
    <div class="beforelogin" v-show="!isshow">
      <p class="dl">登录</p>
      <a
        href="https://xui.ptlogin2.qq.com/cgi-bin/xlogin?appid=716027609&pt_3rd_aid=201293&daid=383&pt_skey_valid=0&style=35&s_url=http%3A%2F%2Fconnect.qq.com&refer_cgi=authorize&which=&scope=all&display=mobile&response_type=code&redirect_uri=https%3A%2F%2Fportal.mogu.com%2Fuser-process%2Ftransition.html%3Fthird%3Dqq%26platform%3Dwap%26ptp%3D32.LLePO.0.0.Jy6S0wJp&state=TASunuh0utkk89d&client_id=201293&redirect_url=https%3A%2F%2Fh5.mogu.com%2Fpersonal-v2%2Findex.html%3Facm%3D3.mce.1_10_1jiv0.127180.0.yA8Epslsxjccs.pos_873-m_455426-sd_119-mf_4537_1211941-idx_3-mfs_4-dm1_5000%26ptp%3D32._mf1_1239_4537.0.0.uIIdTRio"
        ><button>微信登录</button></a
      >
      <p class="g"></p>
      <p @click="isshow = !isshow" class="qt">账号密码登录</p>
    </div>
    <div class="login" v-show="isshow">
      <router-link class="box" :to="{ name: 'Home' }">
        <van-icon size="25" class="icontop" name="arrow-left" />
        <p class="zh">账号登录</p>
      </router-link>
      <input type="text" v-model="userName" placeholder="用户名/邮箱/手机号" />
      <input type="password" v-model="password" placeholder="密码" />
      <button @click="loginHandle">登录</button>
      <div style="width:100%;">
        <router-link
          style="float: right;margin-top:1rem;padding-right:2.5rem;color:#666"
          :to="{ name: 'Reg' }"
          >注册账号</router-link
        >
      </div>
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
      isshow: false,
    };
  },
  methods: {
    loginHandle() {
      post("/api/v1/auth/login", {
        userName: this.userName,
        password: this.password,
      }).then((res) => {
        console.log(res.data);
        if (res.data.code === "success") {
          setToken(res.data.token);
          alert("登录成功");
          this.$router.push({
            name: "User",
          });
        } else {
          alert(res.data.message);
        }
      });
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
.beforelogin {
  width: 100%;
  overflow: hidden;
  background: #fff;
  height: 40rem;
}
.beforelogin .dl {
  text-align: center;
  margin-top: 80px;
  font-size: 26px;
}
.beforelogin button {
  display: inline-block;
  height: 50px;
  width: 80%;
  background: rgb(33, 209, 33);
  border: none;
  border-radius: 25px;
  color: white;
  margin: 2rem 10%;
}
.beforelogin .g {
  height: 50px;
  width: 30px;
  border-bottom: 1px solid black;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 1.6rem;
}
.beforelogin .qt {
  margin-top: 2rem;
  text-align: center;
  color: black;
}
.beforelogin .wx {
  display: block;
  width: 20px;
  height: 20px;
}
</style>
