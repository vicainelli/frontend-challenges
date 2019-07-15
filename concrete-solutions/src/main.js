import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Axios from "axios";

// * Axios default settings
Axios.defaults.baseURL = `https://api.github.com/`;

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
