<template>
  <div>
    <!-- 头部轮播图 -->
    <div class="banner">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item
          ><img
            src="https://m.elongstatic.com/promotions/wireless/uploadImages/images/160402731349303.jpg"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            src="https://m.elongstatic.com/promotions/wireless/uploadImages/images/160402731349303.jpg"
            alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>

    <!-- 第二栏 -->
    <div class="site">
      <!-- 地址 -->
      <div class="one">
        <div class="one-left">
          <i><van-icon name="hotel-o"/></i>
          <em>北京</em>
        </div>
        <div class="one-right">
          <i><van-icon name="arrow"/></i>
          <em><van-icon name="location" class="van_1" />附近</em>
        </div>
      </div>

      <!-- 日期 -->
      <div class="two">
        <div class="two-left">
          <i><van-icon name="calendar-o"/></i>
          <div class="two_data">
            <em>入住</em>
            <span>11月11日今天</span>
          </div>
        </div>
        <div class="two-con">
          <i>—</i>
        </div>
        <div class="two-right">
          <div class="two_data2">
            <em>离店</em>
            <span>11月12日明天</span>
          </div>
          <p>
            <i>1晚</i>
            <em><van-icon name="arrow" class="van_2"/></em>
          </p>
        </div>
      </div>

      <!-- 酒店位置 -->
      <div class="three">
        <div class="three-left">
          <i><van-icon name="user-o"/></i>
          <p>酒店名称/位置不限</p>
        </div>
        <div class="three-right">
          <i><van-icon name="arrow"/></i>
        </div>
      </div>

      <!-- 价格星级位置 -->
      <div class="four">
        <div class="four-left">
          <i><van-icon name="refund-o"/></i>
          <p>价格星级不限</p>
        </div>
        <div class="four-right">
          <i><van-icon name="arrow"/></i>
        </div>
      </div>

      <!-- 点击搜索 -->
      <div class="search">
        <p>
          <i><van-icon name="search"/></i>
          <em>搜索</em>
        </p>
      </div>
    </div>

    <!-- 第三栏 -->
    <div class="null"></div>

    <!-- 第四栏  种类 -->
    <div class="kind">
      <li>
        <i class="img1" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>机票</em>
      </li>
      <li>
        <i class="img2" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>附近</em>
      </li>
      <li>
        <i class="img3" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>海外</em>
      </li>
      <li>
        <i class="img4" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>火车票</em>
      </li>
      <li>
        <i class="img5" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>汽车票</em>
      </li>
      <li>
        <i class="img6" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>民宿</em>
      </li>
      <li>
        <i class="img7" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>钟点房</em>
      </li>
      <li>
        <i class="img8" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>门票</em>
      </li>
      <li>
        <i class="img9" :style="{ backgroundImage: `url(${img})` }"></i>
        <em>特惠</em>
      </li>
    </div>

    <!-- 第六栏 空 -->
    <div class="null_two"></div>

    <!-- 第七栏 -->
    <div class="mess">
      <div class="mess-left">
        <i><van-icon name="user-circle-o"/></i>
        <em>账户</em>
      </div>
      <div class="mess-con">
        <i><van-icon name="orders-o"/></i>
        <em>订单</em>
      </div>
      <div class="mess-right">
        <i><van-icon name="phone-o"/></i>
        <em>电话</em>
      </div>
    </div>
    <!-- 第八栏 -->
    <div class="null_three"></div>

    <!-- 第九栏 -->
    <div class="img">
      <img
        src="https://m.elongstatic.com/static/webapp/hotel/2016/03/v2/img/search_app.jpg"
        alt=""
      />
    </div>

    <!-- 最后一栏 -->

    <div class="link">
      <i>2009-2020艺龙网信息技术(北京)有限公司</i>
      <em>《艺龙旅行网服务条款》</em>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/img/tt.png")
    };
  },

  components: {},

  methods: {}
};
</script>

<style scoped>
@import "../../assets/sass/reset.scss";
@import "../../assets/sass/home.scss";
</style>