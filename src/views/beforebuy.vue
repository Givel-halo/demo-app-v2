<template>
  <div class="bb">
    <div class="top">
      <van-icon @click="goback" class="mid" name="arrow-left" />
      <span>确认订单</span>
      <router-link :to="{ name: 'Cart' }">
        <van-icon class="mid" name="shopping-cart-o" />
      </router-link>
    </div>
    <div class="middle">
      <div class="m1">
        <p>
          <span><van-icon class="mid" name="shop-o" />柿子园</span
          ><span><van-icon class="mid red" name="chat-o" />联系店铺</span>
        </p>
        <div class="address">
          <van-icon class="mid" name="location-o" /><van-icon
            class="mid"
            name="arrow"
          />
        </div>
      </div>
      <div class="m2">
        <p>
          <span class="s1"
            ><span class="s11">快递运费</span>
            <span class="s12">全国包邮</span> </span
          ><span class="s2">￥0.00</span>
        </p>
        <p>
          <span class="s1"
            ><span class="s11">意外换新</span>
            <span class="s12">衣服出现意外破损可换新</span> </span
          ><input class="i1" type="checkbox" />
        </p>
        <p>
          <span class="s1">退货补运费</span
          ><span class="s3">退货预计补贴9.00<van-icon name="arrow"/></span>
        </p>
        <p>
          <span class="s1">延误必赔</span
          ><span class="s3">商家赠送<van-icon name="arrow"/></span>
        </p>
        <p>
          <span class="s1">订单备注</span
          ><input
            class="i2"
            type="text"
            placeholder="有什么想对商家说的可以写在这里哦"
          />
        </p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    goback() {
      this.$route.go(-1);
    }
  }
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  width: 100%;
  align-items: center;
}
.red {
  color: red;
}
.top span {
  text-align: center;
  height: 1.7rem;
  display: inline-block;
  width: 15rem;
  background: #fff;
  font-size: 1.2rem;
}
.mid {
  font-size: 1.7rem;
}
.sma {
  font-size: 1rem;
  margin-right: 0.3rem;
}
.middle {
  padding-top: 1rem;
  margin: auto;
  width: 90%;
}
.m1 p {
  display: flex;
  justify-content: space-between;
}
.m1 p span {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 6rem;
}
.address {
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.m2 p {
  display: flex;
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 1rem;
  align-items: center;
  color: #333;
  justify-content: space-between;
}
.s12 {
  margin-left: 1.2rem;
  color: #999;
}
button {
  height: 0.8rem;
  width: 0.8rem;
  border-radius: 50%;
}
.i1 {
  border-radius: 50%;
  height: 0.7rem;
  width: 0.7rem;
}
.i2 {
  width: 70%;
  height: 1.7rem;
  background: #eee;
  border: 0;
  font-size: 0.8rem;
}
</style>