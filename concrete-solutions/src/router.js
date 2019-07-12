import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/pages/Home";
import User from "@/components/pages/User";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/users/:username",
      name: "user",
      component: User,
      props: true
    }
  ]
});
