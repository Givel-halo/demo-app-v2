<template>
  <div class="cartwarp">
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
      <!-- 下拉刷新 -->
      <van-pull-refresh
        v-model="isLoading"
        success-text="刷新成功"
        @refresh="onRefresh"
      >
        <!-- 购物车商品 -->
        <div class="cartone" v-show="length > 0">
          <div class="con">
            <div class="li" v-for="item in list" :key="item._id">
              <!-- 滑动范围 -->
              <van-swipe-cell>
                <van-checkbox class="dan" v-model="item.checked" label-disabled>
                  店铺
                </van-checkbox>
                <van-checkbox
                  class="danleft"
                  v-model="item.checked"
                  label-disabled
                />
                <!-- 商品 -->
                <van-card
                  :price="(item.product.price / 100).toFixed(2)"
                  desc=""
                  :title="item.product.name"
                  :thumb="item.product.coverImg"
                  @click-thumb="imgclk(item.product._id)"
                  class="carts"
                >
                  <!-- 按钮组加减 -->
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
                <!-- 滑动删除一个 -->
                <template #right>
                  <van-button
                    square
                    text="删除"
                    type="danger"
                    class="delete-button"
                    @click="delone(item._id)"
                  />
                </template>
              </van-swipe-cell>
            </div>
            <div class="bott"></div>
          </div>
        </div>
        <!-- 删除确认窗口 -->
        <van-dialog
          v-model="delshow"
          :beforeClose="beforeClose"
          style="z-index:99;"
          show-cancel-button
        >
          <p style="text-align:center;padding:1rem">确认删除商品吗</p>
        </van-dialog>
        <!-- 空购物车 -->
        <div class="carttwo" v-show="length <= 0">
          <van-empty
            description="您的购物车空空如也"
            style="background-size:100%"
            image="https://s10.mogucdn.com/mlcdn/c45406/180704_3ac3b297lghla2jjdhe23d5jfgddf_1500x1170.png"
          >
            <van-button class="bottom-button" to="Search">去逛逛</van-button>
          </van-empty>
        </div></van-pull-refresh
      >
      <!-- 结算 -->
      <div class="subbot" v-show="length > 0">
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
  </div>
</template>

<script>
import {
  loadcart,
  addTocart,
  delcartid,
  deloneid,
} from "../services/shop_cart";
export default {
  name: "Cart",
  async created() {
    this.maincart();
    // console.log(this.list);
  },
  watch: {
    async $route() {
      this.maincart();
    },
  },
  data() {
    return {
      length: "", //购物车商品数量
      list: [], //商品列表
      navshow: false, //结算删除的show
      isLoading: false, //下拉加载的成功
      delshow: false, //删除确认框的提示
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
    //计算价格
    sumprice() {
      return this.list
        .filter((item) => item.checked)
        .reduce(
          (pre, cur) => pre + (cur.quantity * cur.product.price) / 100,
          0
        );
    },
    //单选的长度
    checkedlength() {
      return this.list.filter((item) => item.checked).length;
    },
    //选中的重新赋值为list
    clg() {
      return this.list.filter((item) => item.checked == true);
    },
  },
  methods: {
    //删除单个
    async delone(id) {
      await deloneid(id);
      this.maincart();
    },
    //下拉加载成功
    async onRefresh() {
      await setTimeout(() => {
        this.isLoading = false;
      }, 1000);
      this.maincart(); //加载数据
      // window.location.reload();
    },
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
    //点击删除确认窗口弹出
    async delclk() {
      const arr = [];
      this.clg.forEach((item) => arr.push(item._id)); //单选选中的商品id数组
      //选中商品
      if (arr.length > 0) {
        this.delshow = true;
      } else {
        alert("没有选中商品");
      }
    },
    //确认取消事件
    async beforeClose(e, so) {
      if (e === "confirm") {
        const arr = [];
        this.clg.forEach((item) => arr.push(item._id)); //单选选中的商品id数组
        //选中商品
        if (arr.length > 0) {
          await delcartid(arr);
          this.list = this.list.filter((item) => item.checked == false);
          this.maincart();
        } else {
          alert("没有选中商品");
        }
        so(); //关闭确认窗口
      }
      if (e === "cancel") {
        so(); //关闭确认窗口
      }
    },
    //加载数据和加载数量
    async maincart() {
      const res = await loadcart();
      this.list = res.data;
      this.list = this.list.map((item) => ({ ...item, checked: false }));
      this.length = this.list.length;
    },
  },
};
</script>

<style scoped>
.delete-button {
  height: 100%;
}
.cart .carttwo {
  height: 38rem;
}
.cart .bottom-button {
  width: 7rem;
  height: 2.3rem;
  background: #ff5777;
  color: #fff;
  border-radius: 0.5rem;
}
.cart .top {
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
  background: #fff;
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
  z-index: 1;
}
.cart .subbot {
  width: 100%;
  height: 3rem;
  background: #fff;
  position: fixed;
  bottom: 0;
  z-index: 999;
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
