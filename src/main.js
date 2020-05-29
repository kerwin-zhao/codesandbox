import Vue from "vue";
import App from "./App.vue";
import router from "vue-router";

import "vue-router";

import "element-ui";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
