<template>
  <div class="zhibo">
    <div class="nav">
      <van-tabs v-model="active">
        <van-tab title="关注"
          ><van-empty description="宝宝还没有关注的主播开播哦"
        /></van-tab>
        <van-tab title="热门">
          <div class="one">
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
          </div> </van-tab
        ><!--to="List"-->
        <van-tab title="穿搭">
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
          ></van-tab
        ><!--to="Shop"-->
        <van-tab title="美妆">
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
          ></van-tab
        ><!--to="Login"-->
      </van-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: "Zhibo",
  data() {
    return {
      active: 2,
    };
  },
};
</script>

<style scoped>
.box {
  width: 95%;
  height: 15rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url("https://s11.mogucdn.com/mlcdn/c45406/180827_3eagg7kg2cha6bb5iag9egaj7jg70_1618x1080.jpg_750x500.jpg");
  background-size: 100% auto;
  border-radius: 0.5rem;
}
.box2 {
  width: 95%;
  height: 15rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/190529_0hc3bk18fible6a0ljbbj0hghb2d5_1404x800.jpg_750x500.jpg");
  background-size: 100% auto;
  border-radius: 0.5rem;
}
.box3 {
  width: 95%;
  height: 15rem;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-image: url("https://s11.mogucdn.com/mlcdn/c45406/180821_7b93lgj58ie38hbhk225l2k4h13fb_1404x800.jpg_750x500.jpg");
  background-size: 100% auto;
  border-radius: 0.5rem;
}

img {
  width: 100%;
  height: 50px;
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
  margin-top: -4rem;
}
.sssbox {
  width: 3rem;
  height: 3rem;
  background-repeat: no-repeat;
  background-image: url("https://s5.mogucdn.com/mlcdn/c45406/191105_055582e28ki8h066430i4ddbdi16l_640x1000.jpg_100x100.jpg");
  background-size: 100% auto;
  margin-left: 10rem;
  margin-top: -4rem;
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
}
</style>
