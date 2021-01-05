<template>
  <div class="cart">
    <van-nav-bar
      :title="'购物车' + '(' + length + ')'"
      @click-left="onClickLeft"
      @click-right="onClickRight"
      class="top"
    >
      <template #left>
        <van-icon name="arrow-left" size="21" />
      </template>
      <template #right>
        编辑
        <van-icon
          style="margin-left:0.6rem;"
          name="chat-o"
          size="20"
          color="a6a6a6"
        ></van-icon>
      </template>
    </van-nav-bar>
    <div class="con">
      <div class="li" v-for="item in list" :key="item._id">
        <van-checkbox class="dan" v-model="checked" label-disabled>
          店铺
        </van-checkbox>
        <van-checkbox class="danleft" v-model="checked" label-disabled>
        </van-checkbox>
        <van-card
          :price="((item.product.price / 100) * 100) / 100"
          desc=""
          :title="item.product.name"
          :thumb="item.product.coverImg"
          @click-thumb="imgclk(item.product._id)"
          class="carts"
        >
          <template #footer>
            <van-stepper
              v-model="item.quantity"
              theme="round"
              button-size="22"
              disable-input
            />
          </template>
        </van-card>
      </div>
      <div class="bott"></div>
    </div>
    <van-submit-bar
      button-color="rgba(255,87,119)"
      label=" "
      :price="1111"
      button-text="结算"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选(0)</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
import { loadcart } from "../services/shop_cart";
export default {
  name: "Cart",
  async created() {
    const res = await loadcart();
    console.log(res.data);
    this.list = res.data;
    this.length = this.list.length;
  },
  data() {
    return {
      checked: false,
      length: "",
      list: [],
    };
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    onClickRight() {
      alert("编辑，变完成");
    },
    onSubmit() {
      alert("结算");
    },
    imgclk(id) {
      this.$router.push({
        name: "Detail",
        query: { id: id },
      });
    },
  },
};
</script>

<style scoped>
.top {
  background: rgba(250, 250, 250);
}
body {
  background: #efefef;
}
html,
body,
.cart {
  width: 100%;
  height: 100%;
}
.cart {
  display: flex;
  flex-direction: column;
}
.cart .con {
  flex: 1;
  height: 100%;
  background: #efefef;
  overflow: hidden;
}
.carts {
  background: #fff;
  margin: 0 auto;
  width: 95%;
  padding-left: 3.4rem;
}
.dan {
  background: #fff;
  margin: 0.6rem auto 0;
  width: 95%;
  padding: 1.5rem 1.5rem 0;
  font-weight: 600;
}
.bott {
  height: 3.6rem;
}
.li {
  position: relative;
}
.danleft {
  position: absolute;
  left: 2.1rem;
  top: 5rem;
  z-index: 999999;
}
</style>
