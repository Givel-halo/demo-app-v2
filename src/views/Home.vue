<template>
  <div class="home">
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
    <van-swipe class="my-swipe" loop :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="item in banners" :key="item.coverImg">
        <img class="swiper-img" :src="item.imageUrl" alt="轮播图" />
      </van-swipe-item>
    </van-swipe>
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
    <div class="nn"></div>
  </div>
</template>
<script>
import { loadCategories } from "../services/products";
import banners from "../data/banners.json";
export default {
  name: "Home",
  data() {
    return {
      categories: [],
      banners: []
    };
  },

  async created() {
    this.categories = await loadCategories().then(res => res.data.categories);
    this.banners = banners.banners;
  }
};
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-around;
  padding: 0.5rem 0;
  align-items: center;
  /* margin-bottom: 3rem; */
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
.my-swipe img {
  width: 100%;
  background: cornsilk;
}

.categories {
  margin-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-bottom: 1.2rem;
}
.item {
  width: 33%;
  border-radius: 50%;
  /* height: 8rem; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  font-size: 0.3rem;
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
.nn {
  height: 2.6rem;
}
</style>
