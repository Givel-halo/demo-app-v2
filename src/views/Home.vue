<template>
  <div class="home">
    <div class="top">
      <router-link
        :to="{
          name: 'List',
        }"
      >
        <van-icon class="mid red" name="flower-o"
      /></router-link>
      <router-link
        :to="{
          name: 'Ss',
        }"
      >
        <span><van-icon class="sma" name="search" />羽绒服</span>
      </router-link>

      <van-icon class="mid" name="chat-o" />
    </div>
    <van-swipe class="my-swipe" loop :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.coverImg">
        <img class="swiper-img" :src="item.imageUrl" alt="轮播图" />
      </van-swipe-item>
    </van-swipe>
    <div class="categories">
      <div class="item" v-for="i in categories" :key="i._id">
        <router-link
          :to="{
            name: 'Search',
            query: {
              id: i._id,
              name: i.name,
            },
          }"
          ><img :src="i.coverImg" :alt="i.name" />
          <p>{{ i.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="bai"><p class="ming">欣儿star</p></div>
    <a
      href="https://h5.mogu.com/live-mona/live.html?roomId=12008833&actorId=11fa7h8&acm=3.ms.0_14_1eas6y.0.80055-105614-105617-68958.lZKmdslhv656G.sd_117-xid_26-t_lZKmdslhv656G-xm_1eas6y-lc_73-cxk_100028-x_11fa7h8-trf_10-rp_6_2_1-dm1_1000&ptp=32.aabyWb.0.0.T0nqvAVe"
      ><div class="box2">
        <div class="tx"></div>
        <p class="zb">直播中|8.8w</p>
        <p class="pp">你们要的过年服王炸福利</p>
        <div class="sbox">
          <p class="ppp">￥499</p>
        </div>
        <div class="ssbox">
          <p class="ppp">￥179</p>
        </div>
        <div class="sssbox">
          <p class="ppp">￥27.9</p>
        </div>
      </div></a
    >
    <div class="bai"><p class="ming">欣儿star</p></div>
    <a
      href="https://h5.mogu.com/live-mona/live.html?roomId=12008778&actorId=18ruank&acm=3.ms.0_14_1eas3w.0.80055-105614-105617-68958.6esDlslhuPD1M.sd_117-xid_26-t_6esDlslhuPD1M-xm_1eas3w-lc_73-cxk_100028-x_18ruank-trf_10-dm1_1000&ptp=32.aabyWb.0.0.lsXvndHD"
      ><div class="box">
        <div class="tx"></div>
        <p class="zb">直播中|8.8w</p>
        <p class="pp">你们要的过年服王炸福利</p>
        <div class="sbox">
          <p class="ppp">￥499</p>
        </div>

        <div class="ssbox">
          <p class="ppp">￥179</p>
        </div>
        <div class="sssbox">
          <p class="ppp">￥27.9</p>
        </div>
      </div></a
    >
    <div class="bai"><p class="ming">欣儿star</p></div>
    <a
      href="https://h5.mogu.com/live-mona/live.html?roomId=12008811&actorId=1bhgc9s&acm=3.ms.0_14_1eas5q.0.80055-105614-105617-68958.5t8eLslhvgvns.sd_117-xid_26-t_5t8eLslhvgvns-xm_1eas5q-lc_73-cxk_100028-x_1bhgc9s-trf_10-dm1_1000&ptp=32.aabyWb.0.0.LqBlpgun"
      ><div class="box3">
        <div class="tx"></div>
        <p class="zb">直播中|8.8w</p>
        <p class="pp">你们要的过年服王炸福利</p>
        <div class="sbox">
          <p class="ppp">￥499</p>
        </div>
        <div class="ssbox">
          <p class="ppp">￥179</p>
        </div>
        <div class="sssbox">
          <p class="ppp">￥27.9</p>
        </div>
      </div></a
    >
    <div class="nn"></div>
  </div>
</template>
<script>
import { loadCategories } from "../services/products";
import banners from "../data/banners.json";
export default {
  name: "Home",
  data() {
    return {
      categories: [],
      banners: [],
    };
  },

  async created() {
    this.categories = await loadCategories().then((res) => res.data.categories);
    this.banners = banners.banners;
  },
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  align-items: center;
  /* margin-bottom: 3rem; */
}
.top span {
  width: 15rem;
  background: #eeeeee1f;
  display: flex;
  height: 1.7rem;
  align-items: center;
  font-size: 0.8rem;
  border: 1px solid #cecece;
  border-radius: 3rem;
  padding-left: 0.5rem;
}
.mid {
  font-size: 1.7rem;
}
.sma {
  font-size: 1rem;
  margin-right: 0.3rem;
  padding-left: 0.4rem;
}
.red {
  color: red;
}
.my-swipe img {
  width: 100%;
  background: cornsilk;
}

.categories {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0.5rem;
}
.item {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  border: 1px solid #cecece;
  text-align: center;
  margin: 0.2rem 0;
  border-radius: 10%;
  background: rgb(231, 250, 250);
}
.item p {
  width: 100%;
  text-align: center;
}
.item img {
  width: 86%;
  /* background: oldlace; */
  border-radius: 50%;
}
.nn {
  height: 2.6rem;
}

/* ---------------------- */
.box {
  width: 92%;
  height: 15rem;
  background-repeat: no-repeat;
  background-image: url("https://s11.mogucdn.com/mlcdn/c45406/180827_3eagg7kg2cha6bb5iag9egaj7jg70_1618x1080.jpg_750x500.jpg");
  background-size: 100% auto;
  border-radius: 0.5rem;
  margin-left: 0.9rem;
  margin-top: 0.4rem;
}
.box2 {
  width: 92%;
  height: 15rem;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/190529_0hc3bk18fible6a0ljbbj0hghb2d5_1404x800.jpg_750x500.jpg");
  background-size: 100% auto;
  border-radius: 0.5rem;
  margin-left: 0.9rem;
  margin-top: 0.4rem;
}
.box3 {
  width: 92%;
  height: 15rem;
  background-repeat: no-repeat;
  background-image: url("https://s11.mogucdn.com/mlcdn/c45406/180821_7b93lgj58ie38hbhk225l2k4h13fb_1404x800.jpg_750x500.jpg");
  background-size: 100% auto;
  margin-left: 0.9rem;
  margin-top: 0.4rem;
}

.zb {
  position: relative;
  width: 6rem;
  top: 3rem;
  left: 1rem;
  color: white;
  font-size: 14px;
  background: black;
  opacity: 0.5;
  border-radius: 0.1rem;
}
.pp {
  position: relative;
  top: 3rem;
  left: 1rem;
  color: white;
  font-size: 14px;
}
.sbox {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-image: url("https://s11.mogucdn.com/mlcdn/c45406/210105_8chi46jedfjd8hfdl4ceg2kckbd4g_800x800.jpg_100x100.jpg");
  background-size: 100% auto;
  margin-left: 2rem;
  margin-top: 4rem;
}
.ssbox {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/201202_8eie633e367715391ei584be8ekg6_720x960.jpg_100x100.jpg");
  background-size: 100% auto;
  margin-left: 6rem;
  margin-top: -3rem;
}
.sssbox {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/191105_055582e28ki8h066430i4ddbdi16l_640x1000.jpg_100x100.jpg");
  background-size: 100% auto;
  margin-left: 10rem;
  margin-top: -3rem;
}
.ppp {
  color: white;
  position: relative;
  bottom: -1.5rem;
}
.tx {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/200726_5858akd2lcb66e8ffh308b343fkeg_400x400.jpg_100x100.jpg");
  background-size: 100% auto;
  border-radius: 50%;
  position: relative;
  top: -2rem;
}
.bai {
  height: 1rem;
  width: 100%;
  padding: 1rem;
  padding-left: 5rem;
  color: rgb(123, 123, 123);
}
</style>
