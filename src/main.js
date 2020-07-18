import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import axios from "axios";
import { router } from "./router/index.js";
import VueRouter from "vue-router";

Vue.prototype.$axios = axios;
Vue.config.productionTip = false;
Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
