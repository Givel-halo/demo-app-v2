<template>
  <div class="list">
    <div class="top">
      <van-icon class="mid red" name="chat-o" />
      <router-link
        :to="{
          name: 'Ss',
        }"
      >
        <span><van-icon class="sma" name="search" />羽绒服</span>
      </router-link>

      <van-icon class="mid" name="shopping-cart-o" />
    </div>
    <div class="contain">
      <div class="left">
        <p
          :class="currentIndex == index ? 'bg' : ''"
          v-for="(i, index) in categories"
          :key="i._id"
          @click="inside(i._id, index)"
        >
          <span :class="currentIndex == index ? 'bg1' : ''">{{ i.name }}</span>
        </p>
      </div>
      <div class="right">
        <div class="product">
          <div class="item" v-for="i in list" :key="i.name">
            <router-link
              :to="{
                name: 'Detail',
                query: {
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
      currentIndex: 0,
    };
  },
  async created() {
    this.categories = await loadCategories().then((res) => res.data.categories);
    this.list = await loadProductsAPI(this.id).then((res) => res.data.products);
  },
  watch: {
    $route() {
      this.inside(this.id);
    },
  },
  methods: {
    async inside(id, index) {
      this.currentIndex = index;
      this.id = id;
      this.list = await loadProductsAPI(this.id).then(
        (res) => res.data.products
      );
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

.left .bg {
  color: #ff5577;
  background: #ffff;
  /* border-left: 2px solid #ff5577; */
}
.bg1 {
  border-left: 4px solid #ff5577;
}
.contain {
  border-top: 1px solid #eee;
  padding-top: 0.2rem;
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
  width: 20%;
  line-height: 1.8rem;
  height: 100%;
  background: #eee;
  /* border: 1px solid; */
}
.left p {
  font-size: 0.9rem;
  height: 4rem;
  color: #666;
  text-align: center;
  width: 100%;
}
.left p span {
  margin-top: 25%;
  width: 100%;
  display: inline-block;
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
  width: 45%;
  padding: 0.2rem;
}
.item img {
  width: 94%;
  border-radius: 1rem;
}
.item p:nth-of-type(1) {
  overflow: hidden;
  font-size: 0.8rem;
  color: #333;
  line-height: 1.8rem;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.item p:nth-of-type(2) {
  display: flex;
  justify-content: space-between;
}
.item p:nth-of-type(2) span {
  color: #ff5577;
  font-size: 18px;
}
.nn {
  height: 2.6rem;
}
</style>
