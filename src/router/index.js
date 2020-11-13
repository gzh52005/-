import Vue from "vue";
import VueRouter from "vue-router";
// import store from '../store'

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
  },
  {
    path:"/found",
    name:"Found",
    component: () => import("../views/Found.vue"),
  },
  {
    path:"/news",
    name:"News",
    component: () => import("../views/News.vue"),
  },
  {
    path:"/mine",
    name:"Mine",
    component: () => import("../views/Mine.vue"),
  },
  {
    path:"/search",
    name:"Search",
    component: () => import("../views/Search.vue"),
  },
];

const router = new VueRouter({
  routes,
  mode: "hash",
});

export default router;
