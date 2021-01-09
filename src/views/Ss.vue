<template>
  <div class="ss">
    <div class="top">
      <van-icon @click="goback" class="mid" name="arrow-left" />
      <input
        type="text"
        v-model.trim="txt"
        @click="changeborder"
        @keyup.enter="add"
      />
      <van-icon class="mid" name="search" @click="add" />
    </div>
    <div class="history">
      <div class="h1">
        <p>
          <span> <van-icon class="sma" name="search" />历史搜索</span
          ><van-icon class="sma" name="delete-o" @click="del" />
        </p>
        <div class="con">
          <span v-for="i in res" :key="i" style="float:left">
            <router-link :to="{ name: 'Search', query: { name: i } }"
              ><span style="border:1px solid #cecece;display:block;">{{
                i
              }}</span></router-link
            ></span
          >
        </div>
      </div>
      <div class="h2">
        <p>
          <span><van-icon class="red" name="star-o" />热门搜索</span>
        </p>
        <div class="categories">
          <div class="item " v-for="(i, index) in categories" :key="i._id">
            <router-link
              :to="{
                name: 'Search',
                query: {
                  id: i._id,
                  name: i.name,
                  index,
                },
              }"
            >
              <span
                style="border:1px solid #cecece;padding:0.3rem 0.4rem;font-size:0.9rem;color:#666"
                :class="index == 3 ? 'active' : ''"
                >{{ i.name }}</span
              >
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
      res: JSON.parse(localStorage.getItem("list")),
    };
  },
  async created() {
    if (localStorage.getItem("list")) {
      this.list = JSON.parse(localStorage.getItem("list"));
    }
    this.categories = await loadCategories().then((res) => res.data.categories);
  },
  watch: {
    $route() {
      this.del();
    },
  },
  methods: {
    changeborder() {
      const oinput = document.querySelector("input");
      oinput.style.border = "1px solid #f57777";
    },

    goback() {
      this.$router.go(-1);
    },
    add() {
      if (this.txt.length > 0) {
        if (this.list.indexOf(this.txt) == -1) {
          this.list.push(this.txt);
        }
        localStorage.setItem("list", JSON.stringify(this.list));
        this.$router.push({
          name: "Search",
          query: {
            name: this.txt,
          },
        });
      } else {
        alert("请输入查找商品信息");
      }
    },

    del() {
      if (localStorage.getItem("list")) {
        alert("确定删除吗");
        localStorage.removeItem("list");
        window.location.reload();
      } else {
        alert("历史记录消失了呢");
      }
    },
  },
};
</script>

<style scoped>
.h2 .item .active {
  color: #ff5577;
}
.red {
  color: red;
}
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
  border-radius: 3rem;
  height: 1.7rem;
  align-items: center;
  font-size: 0.7rem;
  padding-left: 0.6rem;
}
.mid {
  font-size: 1.7rem;
  color: #999;
}
.sma {
  font-size: 1.3rem;
  display: inline-block;
}
.h1 {
  border-top: 1px solid #cecece;
  border-bottom: 1px solid #cecece;
  padding: 0.6rem;
}
.h2 {
  padding: 0.6rem;
}
.history p span {
  font-size: 1.2rem;
  color: #999;
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
  padding: 0.3rem;
  font-size: 0.9rem;
  height: 1.8rem;
}
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  font-size: 1rem;
}
</style>
