<template>
  <div class="Info">
    <p style="text-align:center;font-size:1.2rem;line-height:2rem">
      修改用户信息
    </p>
    <van-nav-bar
      title=""
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="con">
      <hr />
      <van-cell-group>
        <van-field
          v-model="user.nickName"
          clearable
          label="昵称"
          left-icon="user-circle-o"
          placeholder="请输入昵称"
        />
      </van-cell-group>
      <hr />
      上传头像： <van-uploader v-model="fileList" multiple :max-count="1" />
      <hr />
      <van-button type="primary" color="#ff5777" block @click="aa">保存</van-button>
    </div>
  </div>
</template>

<script>
import { loaduser, updateuser } from "../services/user";
import axios from "axios";
export default {
  name: "Info",
  //url修改前图片信息 user用户信息
  data() {
    return {
      fileList: [{ url: "", isImage: true }],
      user: { nickName: "", avatar: "" },
    };
  },
  //显示用户信息
  async created() {
    const res = await loaduser();
    console.log(res);
    this.user = res.data;
    //浏览之前用户修改前的图片
    this.fileList[0].url = this.user.avatar;
  },
  methods: {
    onClickLeft() {
      this.$router.push({ name: "User" });
    },
    //修改昵称  修改图片
    async aa() {
      // console.log(this.fileList[0].file);
      if (this.fileList[0].file) {
        const formData = new FormData();
        formData.append("file", this.fileList[0].file);
        const res = await axios
          .post(
            "https://api.cat-shop.penkuoer.com/api/v1/common/file_upload",
            formData
          )
          .then((res) => res.data);
        console.log(res.info);
        this.user.avatar = "https://api.cat-shop.penkuoer.com" + res.info;
        // console.log(this.user.avatar);
        alert("保存成功");
      } else {
        alert("图片信息未修改");
      }
      await updateuser(this.user.nickName, this.user.avatar);
    },
  },
};
</script>

<style></style>
