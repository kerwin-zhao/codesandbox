import Vue from "vue";
import Router from "vue-router";
import Login from "./components/Login.vue";

Vue.use(Router);

export default new Router({
  routers: [
    {
      path: "Login",
      component: Login
    }
  ]
});
