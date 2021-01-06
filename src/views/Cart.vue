<template>
  <div class="cart">
    <!-- 顶部导航 -->
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
        {{ navshow ? "完成" : "编辑" }}
        <van-icon
          style="margin-left:0.6rem;"
          name="chat-o"
          size="20"
          color="a6a6a6"
          v-show="!navshow"
        ></van-icon>
      </template>
    </van-nav-bar>
    <!-- 购物车商品 -->
    <div class="con">
      <div class="li" v-for="item in list" :key="item._id">
        <van-checkbox class="dan" v-model="item.checked" label-disabled>
          店铺
        </van-checkbox>
        <van-checkbox class="danleft" v-model="item.checked" label-disabled />
        <van-card
          :price="(item.product.price / 100).toFixed(2)"
          desc=""
          :title="item.product.name"
          :thumb="item.product.coverImg"
          @click-thumb="imgclk(item.product._id)"
          class="carts"
        >
          <!-- 按钮组 -->
          <template #footer>
            <van-stepper
              v-model="item.quantity"
              button-size="22"
              disable-input
              @plus="plusclk(item.product._id, 1)"
              @minus="plusclk(item.product._id, -1)"
            />
          </template>
        </van-card>
      </div>
      <div class="bott"></div>
    </div>
    <div class="subbot">
      <span class="quan">
        <van-checkbox style="margin:-0.3rem" v-model="checkAll"
          >全选({{ checkedlength }})</van-checkbox
        >
      </span>
      <div class="right">
        <span class="subprice" v-show="!navshow">￥{{ sumprice }}</span>
        <van-button
          @click="overclk"
          round
          color="#ff5777"
          v-show="!navshow"
          style="width:6rem"
          >结算</van-button
        >
        <van-button
          @click="delclk"
          round
          color="#ff5777"
          v-show="navshow"
          style="width:8rem"
          >删除</van-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { loadcart, addTocart, delcartid } from "../services/shop_cart";
export default {
  name: "Cart",
  async created() {
    const res = await loadcart();
    this.list = res.data;
    this.list = this.list.map((item) => ({ ...item, checked: false }));
    console.log(this.list);
    this.length = this.list.length;
  },
  data() {
    return {
      length: "",
      list: [],
      navshow: false,
    };
  },
  computed: {
    // 全选反选
    checkAll: {
      set(v) {
        this.list.forEach((item) => (item.checked = v));
      },
      get() {
        return this.list.every((item) => item.checked);
      },
    },
    sumprice() {
      return this.list
        .filter((item) => item.checked)
        .reduce(
          (pre, cur) => pre + (cur.quantity * cur.product.price) / 100,
          0
        );
    },
    checkedlength() {
      return this.list.filter((item) => item.checked).length;
    },
    clg() {
      return this.list.filter((item) => item.checked == true);
    },
  },
  methods: {
    onClickLeft() {
      window.history.go(-1);
    },
    onClickRight() {
      this.navshow = !this.navshow;
    },
    imgclk(id) {
      this.$router.push({
        name: "Detail",
        query: { id: id },
      });
    },
    async plusclk(id, amount) {
      await addTocart(id, amount);
    },
    overclk() {
      alert("结算");
    },
    async delclk() {
      const arr = [];
      this.clg.forEach((item) => arr.push(item._id));
      console.log(arr);
      await delcartid(arr);

      this.list = this.list.filter((item) => item.checked == false);
      if (this.list.filter((item) => item.checked == true)) {
        console.log(this.list);
      }
      alert("删除");
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
  min-height: 35rem;
  background: #efefef;
  overflow: auto;
}
.carts {
  background: #fff;
  margin: 0 auto;
  width: 95%;
  padding-left: 3.4rem;
}
.cart .dan {
  background: #fff;
  margin: 0.6rem auto 0;
  width: 95%;
  padding: 1.5rem 1.5rem 0;
  font-weight: 600;
}
.cart .bott {
  height: 3.6rem;
}
.cart .li {
  position: relative;
}
.cart .danleft {
  position: absolute;
  left: 2.1rem;
  top: 5rem;
  z-index: 9999;
}
.cart .subbot {
  width: 100%;
  height: 3rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 99999;
  padding-left: 1rem;
}
.cart .subbot .quan {
  width: 6rem;
  margin: 0 0.5rem;
}
.cart .right {
  position: absolute;
  right: 0.5rem;
  top: 0;
}
.cart .subprice {
  display: block;
  padding-top: 0.6rem;
  margin-right: 1rem;
  float: left;
}
</style>
