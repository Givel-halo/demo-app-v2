<template>
  <div class="ss">
    <div class="top">
      <router-link
        :to="{
          name: 'List'
        }"
      >
        <van-icon class="mid" name="arrow-left"
      /></router-link>

      <input type="text" v-model="txt" @keyup.enter="add" />
      <!-- <router-link :to="{ name: 'Search', query: { name: this.txt } }"> -->
      <van-icon class="mid" name="search" @click="add" />
      <!-- </router-link> -->
    </div>
    <div class="history">
      <div class="h1">
        <p>
          <span> <van-icon class="sma" name="search" />历史搜索</span
          ><van-icon class="sma" name="delete-o" @click="del" />
        </p>
        <div class="con">
          <span v-for="i in res" :key="i">{{ i }}</span>
        </div>
      </div>
      <div class="h2">
        <p>
          <span><van-icon name="star-o" />热门搜索</span>
        </p>
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
            >
              <span>{{ i.name }}</span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// console.log(this.res);

import { loadCategories } from "../services/products";
export default {
  data() {
    return {
      txt: this.$route.query.name,
      list: [],
      categories: [],
      res: JSON.parse(localStorage.getItem("list"))
    };
  },
  async created() {
    if (localStorage.getItem("list")) {
      this.list = JSON.parse(localStorage.getItem("list"));
    }

    this.categories = await loadCategories().then(res => res.data.categories);
  },
  methods: {
    add() {
      if (this.list.indexOf(this.txt) == -1) {
        this.list.push(this.txt);
      }
      localStorage.setItem("list", JSON.stringify(this.list));
      this.$router.push({
        name: "Search",
        query: {
          name: this.txt
        }
      });
    },

    del() {
      localStorage.removeItem("list");
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
.top input {
  width: 15rem;
  border: 1px solid;
  display: flex;
  border-radius: 5%;
  height: 1.7rem;
  align-items: center;
  font-size: 0.7rem;
}
.mid {
  font-size: 1.7rem;
}
.sma {
  font-size: 1.3rem;
  display: inline-block;
}
.history {
  margin-top: 1rem;
}
.h1 {
  border-top: 1px solid;
  border-bottom: 1px solid;
}
.history p {
  display: flex;
  width: 90%;
  margin: auto;
  font-size: 0.9rem;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}
p span {
  display: flex;
  align-items: center;
}
.con {
  height: 7rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.con span {
  width: 2.3rem;
  font-size: 0.6rem;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1rem;
}
</style>