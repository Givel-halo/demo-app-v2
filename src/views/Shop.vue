<template>
  <div class="shop">
    <div class="top">
      <router-link
        :to="{
          name: 'List'
        }"
      >
        <van-icon class="mid red" name="flower-o"
      /></router-link>
      <router-link
        :to="{
          name: 'Ss'
        }"
      >
        <span><van-icon class="sma" name="search" />羽绒服</span>
      </router-link>

      <van-icon class="mid" name="chat-o" />
    </div>
    <div class="midd">
      <div class="m1">
        <van-count-down class="it" :time="time" />
        <!-- <van-count-down :time="time" :change="onChange">
          <text class="it">{{ timeData.hours }}</text>
          <text class="it">{{ timeData.minutes }}</text>
          <text class="it">{{ timeData.seconds }}</text>
        </van-count-down> -->
      </div>
      <div
        class="m1"
        style='background-image: url("https://s10.mogucdn.com/mlcdn/c45406/190909_1i9ig5c4f0idfb2l83ejbfac9d4ke_248x248.jpg"); background-size: cover;'
      >
        <p class="title">好货精选</p>
      </div>
      <div
        class="m1"
        style='background-image: url("https://s10.mogucdn.com/mlcdn/c45406/190203_2bdhlkh0l7il4hlc2jfb98kg2232k_165x165.jpg"); background-size: cover;'
      >
        <p class="title">热销榜单</p>
      </div>
      <div class="m1">
        <p class="title">新品快抢</p>
      </div>
    </div>
    <div class="categories">
      <div class="item" v-for="i in categories" :key="i._id">
        <router-link
          :to="{
            name: 'Search',
            query: {
              id: i._id,
              name: i.name
            }
          }"
          ><img :src="i.coverImg" :alt="i.name" />
          <p>{{ i.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="like">
      <img
        class="tp"
        src="https://s10.mogucdn.com/mlcdn/c45406/190426_4hlfgkc2ceaea67422ag73077lfce_1611x166.png_1200x9999.v1c7E.81.webp"
        alt=""
      />

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

            <button>加入购物车</button>
          </router-link>
        </div>
      </div>
      <button @click="loadmore">加载更多</button>
    </div>
    <div class="nn"></div>
  </div>
</template>

<script>
import { loadCategories } from "../services/products";
import { loadProductAPI } from "../services/products";
export default {
  name: "Shop",
  data() {
    return {
      categories: [],
      list: [],
      page: 1,
      time: 30 * 60 * 60 * 1000
      // timeData: { hours: 3, minutes: 8, seconds: 9 }
    };
  },
  async created() {
    this.categories = await loadCategories().then(res => res.data.categories);
    this.loadmore();
  },
  methods: {
    async loadmore() {
      const res = await loadProductAPI(this.page);
      // console.log(res);
      this.page++;
      this.list = [...this.list, ...res.data.products];
    }
  }
};
</script>

<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  align-items: center;
  border-bottom: 1px solid #eee;
  margin-bottom: 0.5rem;
}
.top span {
  width: 15rem;
  background: #eee;
  display: flex;
  height: 1.9rem;
  align-items: center;
  font-size: 0.6rem;
}
.mid {
  font-size: 1.7rem;
}
.sma {
  font-size: 1rem;
  display: inline-block;
  margin-right: 0.3rem;
}
.red {
  color: red;
}
.midd {
  display: flex;
  width: 100%;
  justify-content: space-around;
}
.m1 {
  width: 22%;
  height: 5rem;
  border-radius: 9%;
  line-height: 5rem;
  text-align: center;
  background-image: url("https://s10.mogucdn.com/mlcdn/c45406/190910_57052df5hb286bifhl13ed65lajfc_248x248.png");
  background-size: cover;
}
.m1 p {
  margin-top: 35%;
  color: #ffff;
  font-size: 0.97rem;
}
.it {
  display: inline-block;
  color: #fff;
  font-size: 1rem;
  margin-top: 70%;
  text-align: center;
  background-color: black;
  border-radius: 2px;
}

.categories {
  display: flex;
  margin-top: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  height: 100%;
  padding-bottom: 1.2rem;
}

.item {
  width: 33%;
  border-radius: 50%;
  height: 8rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.3rem;
  /* margin-bottom: 6rem; */
}
.item p {
  width: 100%;
  text-align: center;
}
.item img {
  width: 86%;
  background: oldlace;
  border-radius: 50%;
}
.like {
  background: #eee;
  padding-bottom: 1rem;
}
.like .tp {
  width: 100%;
  height: 2.2rem;
}

.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product .i {
  width: 46%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  margin-bottom: 0.8rem;
}
.product span {
  font-size: 1rem;
  color: #333;
  font-weight: 700;
}
.product img {
  width: 95%;
  height: 13rem;
  border-radius: 1rem;
}
.product p:nth-of-type(2) {
  display: flex;
  width: 100%;
  height: 1.4rem;
  line-height: 1.4rem;
  justify-content: space-between;
}
.product span {
  font-size: 0.9rem;
}
.product p:nth-of-type(1) {
  font-size: 0.3rem;
  overflow: hidden;
  color: #666;
  line-height: 1.5rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.product button {
  width: 100%;
  height: 2rem;
  border-radius: 4%;
  background: #ff5777;
  border: 0;
  color: white;
}
.nn {
  height: 2.6rem;
}
</style>
