<template>
  <div id="app" class="container">
    <div class="content">
      <router-view />
    </div>
    <van-tabbar v-model="active" active-color="red" inactive-color="#999">
      <van-tabbar-item style="font-size:1rem" :to="{ name: 'Home' }"
        >首页</van-tabbar-item
      >
      <van-tabbar-item style="font-size:1rem" :to="{ name: 'Shop' }"
        >商城</van-tabbar-item
      >
      <van-tabbar-item style="font-size:1rem" :to="{ name: 'Zhibo' }"
        >直播</van-tabbar-item
      >
      <van-tabbar-item style="font-size:1rem" :to="{ name: 'User' }"
        >我</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0, //vant图标变量的值
    };
  },
};
</script>

<style scoped></style>
