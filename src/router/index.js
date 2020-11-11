import Vue from "vue";
import VueRouter from "vue-router";

import path from "../components/path.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/path",
    component: path,
  },
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
  },
  {
    path:"/leader",
    name:"Leader",
    component: () => import("../views/Leader.vue"),
  }
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
