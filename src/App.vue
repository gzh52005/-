<template>
  <div id="app">
    <router-view />
    <van-tabbar v-model="active" route style="height:53px">
      <van-tabbar-item
        style="background:#eee"
        v-for="item in menu"
        :key="item.name"
        :name="item.name"
        :to="item.path"
        :icon="item.name === active ? item.icon2 : item.icon1"
        >{{ item.text }}</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Tabbar,
  TabbarItem,
  NavBar,
  Image as VanImage,
  Button,
  Icon,
} from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(VanImage);
Vue.use(Button);
Vue.use(Icon);
Vue.use(NavBar);

export default {
  data() {
    return {
      active: "leader",
      // change:true,
      menu: [
        {
          name: "leader",
          text: "首页",
          path: "/leader",
          icon1: "wap-home-o",
          icon2: "wap-home",
        },
        {
          name: "found",
          text: "发现",
          path: "/found",
          icon1: "browsing-history-o",
          icon2: "browsing-history",
        },
        {
          name: "news",
          text: "消息",
          path: "/news",
          icon1: "chat-o",
          icon2: "chat",
        },
        {
          name: "mine",
          text: "我的",
          path: "/mine",
          icon1: "manager-o",
          icon2: "manager",
        },
      ],
    };
  },

  components: {},

  methods: {},
};
</script>
<style lang="scss">
@import "./assets/sass/reset.scss";
@import "./assets/sass/home.scss";


</style>
