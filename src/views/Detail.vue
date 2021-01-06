<template>
  <div class="detail">
    <!-- 顶部app -->
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
    <!-- 底部加入购物车样式 -->
    <van-goods-action style="z-index:99;"
      ><van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon
        icon="star-o"
        text="收藏"
        v-show="shoucang"
        @click="shoucang = !shoucang"
      />
      <van-goods-action-icon
        icon="star"
        text="已收藏"
        v-show="!shoucang"
        @click="shoucang = !shoucang"
        color="#ff5000"
      />
      <van-goods-action-button
        color="#ffd4b1"
        type="primary"
        text="加入购物车"
        @click="show = !show"
      />
      <van-goods-action-button color="#ff5081" type="danger" text="立即购买" />
    </van-goods-action>
    <!-- 消息通知 -->
    <van-notify v-model="shownew" type="danger">
      <van-icon name="goods-collect-o" size="30" style="margin-right: 4px;" />
      <span>已加入购物车</span>
    </van-notify>
    <!-- 弹出加入购物车 -->
    <van-popup
      v-model="show"
      closeable
      position="bottom"
      :style="{ height: '70%' }"
    >
      <div class="cartcontent">
        <span class="botimg"><img :src="model.coverImg" alt="图片"/></span>
        <span class="botprice">￥{{ (model.price / 100).toFixed(2) }}</span
        ><br />
        <span class="botkucun">库存{{ model.quantity }}件</span>
        <span class="num"
          ><br />
          数量</span
        ><van-stepper
          style="padding-left:1.6rem;padding-bottom:12rem"
          v-model="value"
          min="1"
          :max="model.quantity"
        />
        <van-button type="primary" @click="toaddcart" color="#ff498b" block
          >确定</van-button
        >
      </div>
    </van-popup>
    <!-- 商品简介 -->
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
    <!-- 白富美 -->
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
    <!-- 接口商品详情 -->
    <div class="p-content" v-html="model.content"></div>
    <!-- 防止遮挡 -->
    <div class="bott"></div>
  </div>
</template>

<script>
import { addTocart } from "../services/shop_cart";
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
    async toaddcart() {
      const res = await addTocart(this.$route.query.id, this.value);
      console.log(res.data);
      this.shownew = true;
      this.show = false;
      setTimeout(() => {
        this.shownew = false;
        this.$router.push({
          name: "Cart",
        });
      }, 500);
    },
  },
  data() {
    return {
      model: {},
      show: false,
      value: "",
      shownew: false,
      shoucang: true,
    };
  },
  async created() {
    this.model = (await loadDetailById(this.$route.query.id)).data;
    console.log(this.model);
  },
};
</script>

<style>
@import "../assets/detail.css";
</style>
