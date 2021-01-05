<template>
  <div class="detail">
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
          <a class="launch-banner-open" href=""><span>前往查看</span></a>
        </div>
      </div>
    </div>
    <van-goods-action style="z-index:99;"
      ><van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon icon="star" text="收藏" color="#ff5000" />
      <van-goods-action-button
        color="#ffd4b1"
        type="primary"
        text="加入购物车"
      />
      <van-goods-action-button color="#ff5081" type="danger" text="立即购买" />
    </van-goods-action>
    <div class="con">
      <div class="con_top">
        <span class="iconleft"
          ><van-icon @click="backclk" name="arrow-left"
        /></span>
        <span class="iconright"
          ><van-icon @click="cartclk" name="shopping-cart-o"
        /></span>
      </div>
      <img :src="model.coverImg" alt="" />
      <div class="price">
        <span>￥{{ (model.price / 100).toFixed(2) }}</span>
      </div>
      <div class="title-wrap">
        <div class="title-and-tag ellipsis-2">
          <span class="title">{{ model.name }}</span>
        </div>
        <a
          id="logger-module-pickforme"
          data-acm="3.mce.1_10_1nh28.143035.0.euZfJslcNkwvL.pos_0-m_547572-sd_119"
          href="https://h5.mogu.com/pickforme/launch/index.html?itemId=1mvbmqi&amp;acm=3.mce.1_10_1nh28.143035.0.euZfJslcNkwvL.pos_0-m_547572-sd_119"
          class="component__pickforme color-dim-tx flex f-ai-c"
          ><img
            mode="aspectFit"
            src="https://s10.mogucdn.com/mlcdn/c45406/191218_762ibk3def84blec68cbe4le770df_54x54.png"
            class="pickforme__icon"
            style="width: 1rem; height: 1rem;"
          />
          <span style="font-size:0.8rem">帮我选</span></a
        >
      </div>
      <div class="item">
        <span>免邮费</span>
      </div>
    </div>
    <div class="component-bfm-bar">
      <a
        class="meili-mgj-baifumei-bar"
        href="https://bfm.mogu.com/m?acm=3.mce.1_10_1ie30.29802.0.6hKmHslcNlXvn.pos_870-m_429002-sd_119"
      >
        <img
          class="left-icon"
          src="https://s10.mogucdn.com//p1/161130/idid_ifrdgzbzmq2dsyzymmzdambqmeyde_60x60.png"
        /><span class="left-text">开通白付美，0首付，可分期！</span>
        <span class="right">
          免费开通
          <i class="m-icon m-icon-arrow-right"></i>
        </span>
      </a>
    </div>
    <div class="p-content" v-html="model.content"></div>
    <div class="bott"></div>
  </div>
</template>

<script>
import { loadDetailById } from "../services/detail";
export default {
  name: "Detail",
  methods: {
    backclk() {
      window.history.go(-1);
    },
    cartclk() {
      this.$router.push({
        name: "Cart",
      });
    },
  },
  data() {
    return {
      model: {},
    };
  },
  async created() {
    this.model = (await loadDetailById(this.$route.query.id)).data;
  },
};
</script>

<style>
.detail .bott {
  height: 3rem;
}
.meili-mgj-baifumei-bar {
  display: block;
  box-sizing: content-box;
  height: 3rem;
  line-height: 3rem;
  padding: 0 1rem;
  font-size: 0.8rem;
  background: #fff;
  border-top: 0.6rem solid #eaeaea;
  border-bottom: 0.6rem solid #eaeaea;
  text-decoration: none;
  margin: 0.4rem auto;
}
.meili-mgj-baifumei-bar .left-icon {
  vertical-align: -0.3rem;
  width: 1.5rem;
  margin-right: 0.4rem;
}
.meili-mgj-baifumei-bar .left-text {
  color: #333;
}
.meili-mgj-baifumei-bar .right {
  float: right;
  color: #999;
}
.title-wrap {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.ellipsis-2 {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.title-and-tag {
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -moz-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  margin: 0 0.4rem;
}
.title {
  font-size: 0.8rem;
  line-height: 0.42rem;
}
.component__pickforme {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: #f8f8f8;
  color: #999;
  padding: 0 0.6rem 0 0.6rem;
  font-size: 0.6rem;
  height: 1.5rem;
  border-top-left-radius: 1.5rem;
  border-bottom-left-radius: 1.5rem;
}
.component__pickforme .pickforme__icon {
  margin-right: 0.3rem;
}
.detail .item {
  width: 100%;
  text-align: left;
  padding: 0.4rem 0.3rem;
}
.detail .item span {
  display: inline-block;
  width: 100%;
  text-align: left;
  font-size: 0.6rem;
  color: #8e8e92;
}
.detail .con {
  padding: 0.8rem;
}
.detail .con,
.p-content {
  width: 95%;
  margin: 0 auto;
  overflow: hidden;
  background: #fff;
}
.detail .con_top {
  position: absolute;
  top: 4rem;
  left: 0;
  z-index: 11;
  width: 100%;
  padding: 0 1.5rem;
  overflow: hidden;
}
.detail .con_top span {
  display: inline-block;
  width: 2.8rem;
  height: 2.8rem;
  line-height: 3.3rem;
  padding-left: 0.3rem;
  border-radius: 50%;
  color: #fff;
  background: rgba(0, 0, 0, 0.4);
  font-size: 1.8rem;
  font-weight: 900;
}
.detail .con_top span:nth-of-type(2) {
  float: right;
}

.detail img {
  width: 100%;
}
.detail .price span {
  font-size: 2rem;
}
/* -----------顶部app */
.launch-banner .launch-banner-wrapper {
  height: 0;
  transition: height 0.5s ease-in;
}
.launch-banner .launch-banner {
  z-index: 999;
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  overflow: hidden;
  background: #fff;
  border-bottom: 1px solid #c5c5c5;
}
.launch-banner .launch-banner-content {
  flex-grow: 1;
  margin-left: 0.3em;
  margin-top: 0.17em;
}
.launch-banner .launch-banner-logo {
  float: left;
  width: 0.6em;
  height: 0.6em;
  background: url(https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png)
    center center no-repeat;
  background-size: contain;
}
.launch-banner .launch-banner-desc {
  float: left;
  margin-left: 0.22em;
}
.launch-banner .launch-banner-desc .main-title {
  width: 100%;
  color: #000;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.26em;
}
.launch-banner .sub-title-wrapper {
  margin-top: 0.06em;
  display: flex;
  align-items: center;
  line-height: normal;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
}
.launch-banner .launch-banner-open span {
  font-size: 0.24em;
  display: block;
}
.launch-banner .star {
  width: 0.18em;
  height: 0.17em;
  margin-right: 0.08em;
}
.launch-banner .launch-banner-desc .star-last {
  margin-right: 0.2em;
}
.launch-banner .launch-banner-desc .sub-title {
  color: #8e8e92;
  font-size: 0.2em;
}
.launch-banner .launch-banner-open {
  margin-top: 0.17em;
  margin-right: 0.3em;
  width: 1.5em;
  height: 0.5em;
  line-height: 0.5em;
  color: #fff;
  text-align: center;
  text-decoration: none;
  background-color: #f46;
  border-radius: 0.06em;
}
</style>
