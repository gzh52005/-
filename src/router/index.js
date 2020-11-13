import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

//解决连续点击同个路由出bug
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import('../views/Login'),
    meta: {
      title: '登录页面'
    },
  },
  {
    path: "/reg",
    name: "reg",
    component: () => import('../views/Reg'),
    meta: {
      title: '注册页面'
    },
  },
  {
    path:"/accountandpassword",
    name:"accountandpassword",
    component:() => import('../views/AccountAndPassword'),
    meta:{
      title:'账户密码登录'
    }
  },
  {
    path:"/resetpsw",
    name:"resetpsw",
    component:() => import('../views/ResetPsw'),
    meta:{
      title:'重置密码'
    },
  }
];

const router = new VueRouter({
  routes
});

export default router;
