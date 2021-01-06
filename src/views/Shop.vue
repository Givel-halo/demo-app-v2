<template>
  <div class="shop">
    <div class="top">
      <router-link
        :to="{
          name: 'List',
        }"
      >
        <van-icon class="mid red" name="flower-o"
      /></router-link>
      <router-link
        :to="{
          name: 'Ss',
        }"
      >
        <span><van-icon class="sma" name="search" />羽绒服</span>
      </router-link>

      <van-icon class="mid" name="chat-o" />
    </div>
    <div class="midd"></div>
    <div class="categories">
      <div class="item" v-for="i in categories" :key="i._id">
        <router-link
          :to="{
            name: 'Search',
            query: {
              id: i._id,
              name: i.name,
            },
          }"
          ><img :src="i.coverImg" :alt="i.name" />
          <p>{{ i.name }}</p>
        </router-link>
      </div>
    </div>
    <div class="like">
      <h4><van-icon class="sma" name="like-o" />猜你喜欢</h4>
      <div class="product">
        <div class="i" v-for="i in list" :key="i.name">
          <router-link
            :to="{
              name: 'Detail',
              qurey: {
                id: i._id,
              },
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
    };
  },
  async created() {
    this.categories = await loadCategories().then((res) => res.data.categories);
    this.loadmore();
  },
  methods: {
    async loadmore() {
      const res = await loadProductAPI(this.page);
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
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: space-between;
  height: 100%;
}

.item {
  width: 33%;
  border-radius: 50%;
  height: 6rem;
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
.like {
  background: #eee;
  padding-bottom: 1rem;
}
.like h4 {
  /* line-height: 2rem; */
  text-align: center;
  height: 2rem;
  justify-content: center;
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  margin: 2rem 0;
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.product .i {
  width: 48%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;

  /* align-items: ; */
}
.product span {
  font-size: 0.6rem;
}
.product img {
  width: 100%;
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
.product button {
  width: 100%;
  height: 2rem;
  background: orange;
  border: 0;
  color: white;
}
.nn {
  height: 2.6rem;
}
</style>
