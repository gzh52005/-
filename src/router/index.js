import Vue from "vue";
import VueRouter from "vue-router";

import path from '../components/path.vue'

Vue.use(VueRouter);

const routes = [{
  path: '/path',
  component: path
}];

const router = new VueRouter({
  routes,
  mode: "hash"
});

export default router;