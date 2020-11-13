import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";


// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false;


// 消息提示的环境配置，是否为生产环境；
// development： 开发环境；production：生产环境
Vue.config.productionTip = process.env.NODE_ENV === 'production';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
