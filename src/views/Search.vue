<template>
  <div class="search">
    <div class="top">
      <van-icon @click="goback" class="mid" name="arrow-left" />
      <router-link
        :to="{
          name: 'Ss',
          query: {
            name: this.$route.query.name
          }
        }"
      >
        <span
          ><van-icon class="sma" name="search" />{{ $route.query.name }}</span
        >
      </router-link>
      <router-link :to="{ name: 'Cart' }">
        <van-icon class="mid" name="shopping-cart-o" />
      </router-link>
    </div>
    <div class="nav">
      <span :class="currentIndex == 0 ? 'active' : ''" @click="tz1">综合</span
      ><span :class="currentIndex == 1 ? 'active' : ''" @click="tz3">销量</span
      ><span :class="currentIndex == 2 ? 'active' : ''" @click="tz4">新品</span
      ><span :class="currentIndex == 3 ? 'active' : ''" @click="tz2">价格</span>
    </div>
    <div class="price" style="display:none">
      区间（元）
      <input type="text" class="min" /> - <input type="text" class="max" />
      <button class="coll" @click="px">确认</button>
    </div>
    <div class="product">
      <div class="i" v-for="i in list" :key="i.name">
        <router-link
          :to="{
            name: 'Detail',
            query: {
              id: i._id
            }
          }"
        >
          <img :src="i.coverImg" alt="i.name" />
          <p>{{ i.name }}</p>
          <p>
            <span>￥{{ i.price / 100 }}</span
            ><van-icon name="star-o" />
          </p>
        </router-link>
      </div>
    </div>
    <button @click="loadMore">加载更多</button>
    <div class="nn"></div>
  </div>
</template>

<script>
import { loadProductAPI } from "../services/products";
export default {
  name: "Search",
  data() {
    return {
      list: [],
      page: 1,
      currentIndex: 0
    };
  },

  async created() {
    this.loadMore();
  },

  methods: {
    tz3() {
      this.tz(), (this.currentIndex = 1);
    },
    tz4() {
      this.tz(), (this.currentIndex = 2);
    },
    tz1() {
      this.tz(), (this.currentIndex = 0);
      this.list = this.list.sort(this.compare("price"));
    },
    compare(attr) {
      return (a, b) => a[attr] - b[attr];
    },
    tz() {
      const pri = document.querySelector(".price");
      pri.style.display = "none";
    },
    async tz2() {
      this.currentIndex = 3;
      const pri = document.querySelector(".price");
      pri.style.display = "block";
    },
    goback() {
      this.$router.go(-1);
    },
    px() {
      this.tz();
      const min = parseInt(document.querySelector(".min").value);
      const max = parseInt(document.querySelector(".max").value);
      console.log(min);
      console.log(max);
      this.list = this.list.filter(
        item => item.price / 100 >= min && item.price / 100 <= max
      );
      console.log(this.list);
    },
    async loadMore() {
      const res = await loadProductAPI(
        this.page,
        this.$route.query.id,
        this.$route.query.name
      );
      // console.log(res);
      this.page++;
      this.list = [...this.list, ...res.data.products];
    }
  }
};
</script>
<style scoped>
.coll {
  background: #ff5777;
  color: white;
}
.nav .active {
  color: #ff5777;
}
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  align-items: center;
  margin-bottom: 0.4rem;
}
.top span {
  width: 15rem;
  background: #eee;
  display: flex;
  height: 1.7rem;
  align-items: center;
  font-size: 0.6rem;
}
.mid {
  font-size: 1.7rem;
}
.sma {
  font-size: 1rem;
  margin-right: 0.3rem;
}

.nav {
  border-top: 2px solid #eee;
  display: flex;
  padding: 0.8rem 0;
  background: white;
}
.nav span {
  display: inline-block;
  padding: 0 2rem;
  font-size: 0.9rem;
  color: #333;
  border-right: 1px solid #eee;
}
.price {
  padding: 0.7rem 0;
  color: #333;
  font-size: 0.9rem;
}
.price input {
  height: 2rem;
  width: 5.5rem;
  border: 1px solid #333;
  border-radius: 9%;
}
.price button {
  height: 2rem;
  width: 5rem;
  margin-left: 0.3rem;
  border: 0;
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product .i {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  /* align-items: ; */
}
.product span {
  font-size: 0.6rem;
}
.product img {
  width: 96%;
  height: 12.5rem;
  border-radius: 4%;
  /* height: 6rem; */
}
.product p:nth-of-type(2) {
  display: flex;
  width: 100%;
  height: 1.7rem;
  line-height: 1.7rem;
  justify-content: space-between;
  align-items: center;
}
.product span {
  font-size: 1rem;
  font-weight: 700;
}
.product p:nth-of-type(1) {
  font-size: 0.3rem;
  overflow: hidden;
  line-height: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.nn {
  height: 3.1rem;
}
</style>
