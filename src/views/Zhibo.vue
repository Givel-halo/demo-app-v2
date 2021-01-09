<template>
  <div class="zhibo">
    <div class="nav">
      <div id="launchBanner" class=" launch-banner" style="font-size: 50px;">
        <div class="launch-banner-wrapper" style="height: 0.94em;">
          <div class="launch-banner" style="height: 0.94em;">
            <div class="launch-banner-content">
              <i class="launch-banner-logo"></i>
              <div class="launch-banner-desc">
                <div class="main-title">蘑菇街 总有高手帮你挑</div>
                <div class="sub-title-wrapper">
                  <img
                    class="star"
                    src="https://s10.mogucdn.com/mlcdn/c45406/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"
                  /><img
                    class="star"
                    src="https://s10.mogucdn.com/mlcdn/c45406/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"
                  /><img
                    class="star"
                    src="https://s10.mogucdn.com/mlcdn/c45406/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"
                  /><img
                    class="star"
                    src="https://s10.mogucdn.com/mlcdn/c45406/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"
                  /><img
                    class="star star-last"
                    src="https://s10.mogucdn.com/mlcdn/c45406/190219_78e4hi0k9ld1cjhcea8b8a69bajjl_18x17.png"
                  />
                  <span class="sub-title">超过2亿用户已下载</span>
                </div>
              </div>
            </div>
            <a class="launch-banner-open" href=""><span>打开APP</span></a>
          </div>
        </div>
      </div>
      <van-tabs v-model="active">
        <van-tab class="qwe" title="关注"
          ><van-empty description="宝宝还没有关注的主播开播哦"
        /></van-tab>
        <van-tab class="qwe" title="热门">
          <div class="one">
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
            <div class="bai"><p class="ming">项鲁鲁</p></div>
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
            <div class="bai"><p class="ming">慕Mu宝</p></div>
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
        <van-tab class="qwe" title="穿搭">
          <div class="bai"><p class="ming">慕Mu宝</p></div>
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
          ></van-tab
        ><!--to="Shop"-->
        <van-tab class="qwe" title="美妆">
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
          <div class="bai"><p class="ming">项鲁鲁</p></div>
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
    <div class="bott"></div>
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
@import "../assets/user.css";
@import "../assets/zhibo.css";
.bott {
  height: 4rem;
}
</style>
