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
    <!-- 下拉刷新 -->
    <van-pull-refresh
      v-model="isLoading"
      success-text="刷新成功"
      @refresh="onRefresh"
    >
      <!-- 快捷导航 -->
      <!-- 开启 -->
      <van-button
        class="btnnav"
        v-show="btnnavshow"
        @click="btnone"
        round
        color="#4d4d4d"
      >
        <van-icon size="35" name="apps-o" />
      </van-button>
      <!-- 关闭 -->
      <van-button
        class="btnnav"
        v-show="!btnnavshow"
        @click="btntwo"
        round
        color="#ff5777"
      >
        <van-icon size="35" name="cross" />
      </van-button>
      <!-- 遮罩层 -->
      <van-overlay
        style="z-index:999"
        :show="!btnnavshow"
        @click="btnnavshow = false"
      >
        <div class="wrapper" @click.stop>
          <div class="block">
            <div class="nav_btn">
              <p>首页</p>
              <van-button round to="/">
                <van-icon size="22" color="#ababab" name="wap-home-o"
              /></van-button>
            </div>
            <div class="nav_btn">
              <p>购物车</p>
              <van-button round to="Cart">
                <van-icon size="22" color="#ababab" name="shopping-cart-o"
              /></van-button>
            </div>
            <div class="nav_btn">
              <p>搜索</p>
              <van-button round to="Search">
                <van-icon size="22" color="#ababab" name="search"
              /></van-button>
            </div>
            <div class="nav_btn">
              <p>查订单</p>
              <van-button round to="Cart">
                <van-icon size="22" color="#ababab" name="description"
              /></van-button>
            </div>
          </div>
        </div>
      </van-overlay>

      <!-- 收藏消息通知 -->
      <van-notify v-model="shownew" type="danger" style="background:#ff5777">
        <van-icon name="goods-collect-o" size="30" style="margin-right: 4px;" />
        <span>已收藏</span>
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
      <div class="p-content" v-html="model.content"></div></van-pull-refresh
    ><!-- 底部加入购物车样式 -->
    <van-goods-action style="z-index:99;"
      ><van-goods-action-icon icon="shop-o" text="店铺" />
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24" />
      <van-goods-action-icon
        icon="star-o"
        text="收藏"
        v-show="shoucang"
        @click="shoucangclk"
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
    //下拉加载成功
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
    btnone() {
      this.btnnavshow = !this.btnnavshow;
    },
    btntwo() {
      this.btnnavshow = !this.btnnavshow;
    },
    //收藏提示
    shoucangclk() {
      this.shoucang = !this.shoucang;
      this.shownew = true;
      setTimeout(() => {
        this.shownew = false;
      }, 1000);
    },
    // 返回上一页
    backclk() {
      window.history.go(-1);
    },
    // 右上角导航去购物车
    cartclk() {
      this.$router.push({
        name: "Cart",
      });
    },
    //加入购物车提示
    async toaddcart() {
      const res = await addTocart(this.$route.query.id, this.value);
      console.log(res.data);
      this.$toast({
        message: res.data.message,
        icon: "like",
      });
      this.show = false;
    },
  },
  data() {
    return {
      model: {},
      show: false, //购物车面板的隐藏
      value: "", //购物数量的model
      shownew: false, //弹出消息的通知show
      shoucang: true, //收藏图标
      btnnavshow: true, //快捷导航
      isLoading: false, //加载成功
    };
  },
  //获取id加载详情
  async created() {
    this.model = (await loadDetailById(this.$route.query.id)).data;
    console.log(this.model);
  },
};
</script>

<style scoped>
.detail .nav_btn {
  width: 100%;
  height: 4rem;
}
.detail .nav_btn p {
  display: inline-block;
  width: 3rem;
  color: #fff;
  font-size: 0.9rem;
  line-height: 3rem;
  margin: 0 0.4rem 0 0.8rem;
  text-align: center;
}
.detail .nav_btn button {
  width: 2.6rem;
  height: 2.6rem;
}
.detail .wrapper {
  display: flex;
  height: 100%;
}
.detail .btnnav {
  width: 3.5rem;
  height: 3.5rem;
  position: fixed;
  right: 1rem;
  bottom: 4rem;
  font-size: 0.8rem;
  display: inline-block;
  text-align: center;
  z-index: 2000;
}

.detail .btnnav span {
  display: flex;
  position: relative;
  white-space: nowrap;
}
.detail .block {
  width: 8rem;
  height: 15rem;
  position: absolute;
  right: 0.3rem;
  bottom: 8.5rem;
  transition: all 500ms;
}
@import "../assets/detail.css";
</style>
