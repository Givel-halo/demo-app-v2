<template>
  <div class="search">
    <div class="top">
<<<<<<< HEAD
      <router-link
        :to="{
          name: 'List',
        }"
      >
        <van-icon class="mid" name="arrow-left" />
      </router-link>
=======
      <van-icon @click="goback" class="mid" name="arrow-left" />
>>>>>>> 1c0ceea0a5f4e49c1d516aadc7492083c2efe89a
      <router-link
        :to="{
          name: 'Ss',
          query: {
            name: this.$route.query.name,
          },
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
      <span>综合</span><span>销量</span><span>新品</span><span>价格</span>
    </div>
    <div class="product">
      <div class="i" v-for="i in list" :key="i.name">
        <router-link
          :to="{
            name: 'Detail',
            query: {
<<<<<<< HEAD
              id: i._id,
            },
=======
              id: i._id
            }
>>>>>>> 1c0ceea0a5f4e49c1d516aadc7492083c2efe89a
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
    };
  },

  async created() {
    this.loadMore();
  },
  methods: {
    goback() {
      this.$router.go(-1);
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
    },
  },
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  align-items: center;
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
.red {
  color: red;
}
.nav {
  margin-top: 0.7rem;
  display: flex;
  justify-content: space-around;
  height: 2.3rem;
  font-size: 1rem;
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.product .i {
  width: 48%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  /* align-items: ; */
}
.product span {
  font-size: 0.6rem;
}
.product img {
  width: 100%;
  height: 8rem;
  /* height: 6rem; */
}
.product p:nth-of-type(2) {
  display: flex;
  width: 100%;
  height: 1.7rem;
  line-height: 1.7rem;
  justify-content: space-between;
}
.product span {
  font-size: 0.9rem;
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
