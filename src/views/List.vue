<template>
  <div class="list">
    <div class="top">
      <router-link
        :to="{
          name: 'List'
        }"
      >
        <van-icon class="mid red" name="chat-o"
      /></router-link>
      <router-link
        :to="{
          name: 'Ss'
        }"
      >
        <span><van-icon class="sma" name="search" />羽绒服</span>
      </router-link>

      <van-icon class="mid" name="shopping-cart-o" />
    </div>
    <div class="contain">
      <ul class="left">
        <li
          :class="currentIndex == index ? 'bg' : ''"
          v-for="(i, index) in categories"
          :key="i._id"
          @click="inside(i._id, index)"
        >
          {{ i.name }}
        </li>
      </ul>
      <div class="right">
        <div class="product">
          <div class="item" v-for="i in list" :key="i.name">
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
            </router-link>
          </div>
        </div>
      </div>
      <div class="nn"></div>
    </div>
  </div>
</template>

<script>
import { loadCategories } from "../services/products";
import { loadProductsAPI } from "../services/products";
export default {
  name: "List",
  data() {
    return {
      categories: [],
      list: [],
      id: "",
      currentIndex: 0
    };
  },
  async created() {
    this.categories = await loadCategories().then(res => res.data.categories);
    this.list = await loadProductsAPI(this.id).then(res => res.data.products);
  },
  watch: {
    $route() {
      this.inside(this.id);
    }
  },
  methods: {
    async inside(id, index) {
      this.currentIndex = index;
      this.id = id;
      this.list = await loadProductsAPI(this.id).then(res => res.data.products);
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

.bg {
  color: white;
  background: red;
}
.contain {
  display: flex;
  height: 580px;
  /* width: 100%; */
  overflow: auto;
  /* border: 1px solid red; */
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 25%;
  height: 100%;
  background: #eee;
  /* border: 1px solid; */
}
.left li {
  font-size: 1.2rem;
  line-height: 2.4rem;
  text-align: center;
  width: 100%;
}
.right {
  flex: 1;
  height: 100%;
  overflow: auto;
  /* border: 1px solid; */
  /* width: 17.6rem; */
}
.product {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
}
.item {
  width: 46%;
  height: 11rem;
}
.item img {
  width: 100%;
}
.item p {
  overflow: hidden;
  line-height: 2.6rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.nn {
  height: 2.6rem;
}
</style>
