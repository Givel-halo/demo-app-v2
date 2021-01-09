<template>
  <div class="user">
    <!-- 打开app -->
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
    <!-- 头像 -->
    <div class="head-box">
      <div class="profile-box">
        <div class="link">
          <div class="user-avatar-wrap">
            <router-link :to="{ name: 'Info' }">
              <div class="user-avatar">
                <img :src="userinfo.avatar" />
              </div>
              <img
                src="https://s10.mogucdn.com/mlcdn/c45406/190627_1i49i2a2cj6fll5bh25l07d53l008_72x72.png"
                class="user-level"
            /></router-link>
          </div>
          <div class="user-info">
            <p class="user-name">
              {{ userinfo.nickName }}
            </p>
            <a href="https://act.mogu.com/huiyuanzhongxin"
              ><div
                class="user-member"
                style='background-image: url("https://s10.mogucdn.com/mlcdn/c45406/191010_2il1l3i91gkd5c461j93e5ehfcgi5_1404x216.png");'
              ></div
            ></a>
          </div>
        </div>
      </div>
    </div>

    <div class="box" style="font-size: 50px;">
      <!---->
      <div class="box-bd">
        <a
          href="https://h5.mogu.com/brand-content/personal-homepage.html?uid=1bm2sm4&amp;acm=3.mce.1_10_1m5di.139413.0.aC6sfsl82Gpi7.pos_9900-m_516671-sd_119"
          data-href="https://h5.mogu.com/brand-content/personal-homepage.html?uid=1bm2sm4&amp;acm=3.mce.1_10_1m5di.139413.0.aC6sfsl82Gpi7.pos_9900-m_516671-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_7a9da7lh4a96lb1fl6b4gb854f3ji_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">我的主页</div></a
        ><a
          href="http://www.mogu.com/x/im?imver=1.2&amp;show_header=qq#recent&amp;acm=3.mce.1_10_1m5dk.139413.0.aC6sfsl82Gpi8.pos_9901-m_516672-sd_119"
          data-href="http://www.mogu.com/x/im?imver=1.2&amp;show_header=qq#recent&amp;acm=3.mce.1_10_1m5dk.139413.0.aC6sfsl82Gpi8.pos_9901-m_516672-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_6f41b17399aha0flla6chjb0lhk47_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">消息</div></a
        ><a
          href="http://h5.mogu.com/fav/list.html?type=goods&amp;acm=3.mce.1_10_1m5dm.139413.0.aC6sfsl82Gpi9.pos_9902-m_516673-sd_119"
          data-href="http://h5.mogu.com/fav/list.html?type=goods&amp;acm=3.mce.1_10_1m5dm.139413.0.aC6sfsl82Gpi9.pos_9902-m_516673-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_31g4a5ebc8bj2f85cj4li8df89aab_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">收藏</div></a
        ><a
          href="https://h5.mogu.com/brand-content/personal-follows.html?uid=1bm2sm4&amp;acm=3.mce.1_10_1m5do.139413.0.aC6sfsl82Gpia.pos_9903-m_516674-sd_119"
          data-href="https://h5.mogu.com/brand-content/personal-follows.html?uid=1bm2sm4&amp;acm=3.mce.1_10_1m5do.139413.0.aC6sfsl82Gpia.pos_9903-m_516674-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_0k9k5gh362a1kbk87hha8ff1bek69_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">关注</div></a
        >
      </div>
    </div>
    <div class="cart-section" style="font-size: 50px;">
      <router-link
        :to="{ name: 'Cart' }"
        class="section section-left cart-large"
        style='background: url("https://s10.mogucdn.com/mlcdn/c45406/190815_3637hh8ac09e50j7f07i7eealck4i_513x360.png") 0px 0px / 3.42em 2.4em no-repeat;'
        ><div class="cart-large-name">购物车</div>
        <div class="cart-large-desc">
          {{ cartlength }}件商品
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png"
            class="cart-large-arrow"
          /></div
      ></router-link>
      <div class="section section-right links">
        <a
          href="http://h5.mogu.com/coupon/coupon/index.html?acm=3.mce.1_10_1m5du.139413.0.aC6sfsl82Gpic.pos_9905-m_516677-sd_119"
          class="cart-item"
          ><div class="cart-item-name">卡券红包</div>
          <div class="cart-item-desc">
            1张店铺券<img
              src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png"
              class="cart-item-arrow"
            /></div></a
        ><a
          href="https://h5.mogu.com/insurance-shop/user-lite.html?acm=3.mce.1_10_1m5dy.139413.0.aC6sfsl82Gpid.pos_9906-m_516679-sd_119"
          class="cart-item"
          ><div class="cart-item-name">补贴保障</div>
          <div class="cart-item-desc">
            退货补运费<img
              src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png"
              class="cart-item-arrow"
            /></div></a
        ><a
          href="https://act.mogu.com/walleth5full?acm=3.mce.1_10_1m5e0.139413.0.aC6sfsl82Gpie.pos_9907-m_516680-sd_119"
          class="cart-item"
          ><div class="cart-item-name">我的钱包</div>
          <div class="cart-item-desc">
            白付美在这<img
              src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png"
              class="cart-item-arrow"
            /></div
        ></a>
      </div>
    </div>
    <div class="box" style="font-size: 50px;">
      <div class="box-hd">
        <div class="box-title">
          我的订单
        </div>
        <a
          href="http://h5.mogu.com/order/list.html?acm=3.mce.1_10_1m5ts.139515.0.qhlZ9sl82Gpe1.pos_9902-m_516964-sd_119"
          data-href="http://h5.mogu.com/order/list.html?acm=3.mce.1_10_1m5ts.139515.0.qhlZ9sl82Gpe1.pos_9902-m_516964-sd_119"
          class="box-tools"
        >
          全部
          <img
            src="https://s10.mogucdn.com/mlcdn/c45406/190819_82kf4j7kdldbf0654hf987dk24kj4_10x18.png"
            class="box-tools-arrow"
        /></a>
      </div>
      <div class="box-bd">
        <a
          href="https://h5.mogu.com/order/list.html?orderStatus=created&amp;acm=3.mce.1_10_1m5e2.139413.0.aC6sfsl82Gpjf.pos_9908-m_516681-sd_119"
          data-href="https://h5.mogu.com/order/list.html?orderStatus=created&amp;acm=3.mce.1_10_1m5e2.139413.0.aC6sfsl82Gpjf.pos_9908-m_516681-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_0ig16599k9l4f80g59cbkc6bcadid_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">待付款</div></a
        ><a
          href="https://h5.mogu.com/order/list.html?orderStatus=unshipped&amp;acm=3.mce.1_10_1m86q.139413.0.aC6sfsl82Gpjn.pos_9916-m_518493-sd_119"
          data-href="https://h5.mogu.com/order/list.html?orderStatus=unshipped&amp;acm=3.mce.1_10_1m86q.139413.0.aC6sfsl82Gpjn.pos_9916-m_518493-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_5j02c44liecec503kdldjbh72hca8_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">待发货</div></a
        ><a
          href="https://h5.mogu.com/order/list.html?orderStatus=unreceived&amp;acm=3.mce.1_10_1m5e6.139413.0.aC6sfsl82Gpjg.pos_9909-m_516683-sd_119"
          data-href="https://h5.mogu.com/order/list.html?orderStatus=unreceived&amp;acm=3.mce.1_10_1m5e6.139413.0.aC6sfsl82Gpjg.pos_9909-m_516683-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_56bd5eg3f4h47g2l1042436dc2950_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">待收货</div></a
        ><a
          href="https://h5.mogu.com/order/list.html?type=rateCenter&amp;acm=3.mce.1_10_1m5e8.139413.0.aC6sfsl82Gpjh.pos_9910-m_516684-sd_119"
          data-href="https://h5.mogu.com/order/list.html?type=rateCenter&amp;acm=3.mce.1_10_1m5e8.139413.0.aC6sfsl82Gpjh.pos_9910-m_516684-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_8af1b27cfaed15fllab4j3hffh7h8_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">评价</div></a
        ><a
          href="https://h5.mogu.com/order/list.html?orderStatus=refund_orders&amp;acm=3.mce.1_10_1m5ea.139413.0.aC6sfsl82Gpji.pos_9911-m_516685-sd_119"
          data-href="https://h5.mogu.com/order/list.html?orderStatus=refund_orders&amp;acm=3.mce.1_10_1m5ea.139413.0.aC6sfsl82Gpji.pos_9911-m_516685-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_18db4je44bd6ej8ajg0l1950ia5ih_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">退款售后</div></a
        >
      </div>
    </div>
    <div class="box" style="font-size: 50px;">
      <div class="box-hd">
        <div class="box-title">
          我的设置
        </div>
        <!---->
      </div>
      <div class="box-bd">
        <a
          href="https://act.mogu.com/qiandao?acm=3.mce.1_10_1m5ec.139413.0.aC6sfsl82Gpjj.pos_9912-m_516686-sd_119"
          data-href="https://act.mogu.com/qiandao?acm=3.mce.1_10_1m5ec.139413.0.aC6sfsl82Gpjj.pos_9912-m_516686-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_6f13a0l26fcfcgkhei88f8248024k_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">签到</div></a
        ><a
          href="https://h5.mogu.com/period/schedule.html?acm=3.mce.1_10_1m5ee.139413.0.aC6sfsl82Gpjk.pos_9913-m_516687-sd_119"
          data-href="https://h5.mogu.com/period/schedule.html?acm=3.mce.1_10_1m5ee.139413.0.aC6sfsl82Gpjk.pos_9913-m_516687-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_8444j6413ccf1b00hb923a7l491ad_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">大姨妈</div></a
        ><a
          href="https://www.mogu.com/x/im?imver=1.2&amp;show_header=qq#chat/b14ejg#23&amp;acm=3.mce.1_10_1m5eg.139413.0.aC6sfsl82Gpjl.pos_9914-m_516688-sd_119"
          data-href="https://www.mogu.com/x/im?imver=1.2&amp;show_header=qq#chat/b14ejg#23&amp;acm=3.mce.1_10_1m5eg.139413.0.aC6sfsl82Gpjl.pos_9914-m_516688-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_54cd4b12ef09174hf1jkblbi69i2c_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">客服</div></a
        ><a
          href="https://h5.mogu.com/mogu-star/index.html?x_fullscreen=true&amp;x_hide_navbar=true&amp;acm=3.mce.1_10_1m5ei.139413.0.aC6sfsl82Gpjm.pos_9915-m_516689-sd_119"
          data-href="https://h5.mogu.com/mogu-star/index.html?x_fullscreen=true&amp;x_hide_navbar=true&amp;acm=3.mce.1_10_1m5ei.139413.0.aC6sfsl82Gpjm.pos_9915-m_516689-sd_119"
          class="item"
          ><div class="img-wrap">
            <img
              src="https://s10.mogucdn.com/mlcdn/c45406/190815_10lcah52ick650jc36hgg2kafkj5f_75x75.png"
              class="img"
            />
            <!---->
          </div>
          <div class="title">达人中心</div></a
        >
      </div>
    </div>
    <!---->
    <van-button
      style="width:93%;margin:0rem auto"
      color="rgba(255,87,119)"
      block
      @click="tuichuclk"
      >退出登录</van-button
    >
    <div class="bottom"></div>
  </div>
</template>

<script>
import { removeToken } from "../utils/auth";
import { loadcart } from "../services/shop_cart";
import { loaduser } from "../services/user";
export default {
  name: "User",
  data() {
    return {
      cartlength: "",
      userinfo: {},
    };
  },
  async created() {
    //加载购物车数量
    const res = await loadcart();
    // console.log(res.data.length);
    this.cartlength = res.data.length;
    //加载用户信息
    const info = await loaduser();
    console.log(info.data);
    this.userinfo = info.data;
  },
  methods: {
    async tuichuclk() {
      this.$toast({
        message: "已退出登录",
        icon: "fail",
      });
      await removeToken();
      // console.log(res);
    },
  },
};
</script>

<style scoped>
/* 打开app */
@import "../assets/user.css";
.bottom {
  height: 3.3rem;
}
</style>
