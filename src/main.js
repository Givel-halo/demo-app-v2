import Vue from "vue";
import "animate.css/animate.css";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import Vant from "vant";
import "vant/lib/index.css";

const $eventBus = new Vue();
Vue.prototype.$eventBus = $eventBus;
Vue.config.productionTip = false;

Vue.use(Vant);

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
