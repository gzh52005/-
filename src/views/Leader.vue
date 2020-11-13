<template>
  <div class="leader">
    <!-- 头部图片 -->
    <van-swipe class="my-swipe" :autoplay="3000">
      <van-swipe-item>
        <van-image
          src="https://pavo.elongstatic.com/i/AH750_320/GRZuYy1W6c.webp"
      /></van-swipe-item>
    </van-swipe>
    <!-- 搜索景点 -->
    <div class="search-wrap">
      <ul class="search_con">
        <van-cell>
          <div class="van-cell__title">广州</div>
          <template #right-icon>
            <div class="search_place" @click="openDialog()">
              <van-icon name="location-o" class="search-icon" size="16" />
              <span class="custom-title">我的附近</span>
            </div>
          </template>
        </van-cell>
        <ul class="calendar_list" :value="date" @click="show = true">
          <li class="calendar_check">
            <span>今天入住</span>
            <em>11月12日</em>
          </li>
          <li class="calendar_check">
            <span>明天离开</span>
            <em>11月13日</em>
          </li>
          <li class="calendar_check total_day">
            <span>共1晚</span>
          </li>
          <van-calendar v-model="show" type="range" @confirm="onConfirm" />
        </ul>
        <van-cell>
          <span class="search_scene">搜索景点/地标/特色</span>
        </van-cell>
        <van-button color="#ffd85d" block round>民宿搜索</van-button>
        <div class="my_order">
          <li class="add_line"><van-icon name="like-o" /> 我的收藏</li>
          <li><van-icon name="orders-o" /> 我的订单</li>
        </div>
      </ul>
    </div>
    <!-- 查询导航 -->
    <van-grid :column-num="4" :border="false">
      <van-grid-item
        v-for="item in navList"
        :key="item.iconurl"
        :border="false"
      >
        <van-image :src="item.iconurl" />
        <p class="tit_list">{{ item.PromotionCardTitle }}</p>
      </van-grid-item>
    </van-grid>
    <!-- 广告位 -->
    <ul class="ad-wrap">
      <li v-for="(item,index) in adList" :key="index">
        <van-image :src="item.adImgurl" />
      </li> 
    </ul>
  </div>
</template>

<script>
import Vue from "vue";
import {
  Swipe,
  SwipeItem,
  Cell,
  CellGroup,
  Dialog,
  Calendar,
  Grid,
  GridItem,
} from "vant";
import axios from "axios";
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Dialog);
Vue.use(Calendar);
Vue.use(Grid);
Vue.use(GridItem);

export default {
  name: "Leader",
  data() {
    return {
      active: 0,
      dataList: "",
      date: "",
      show: false,
      navList:[],
      adList:[],
    };
  },
  components: {},
  methods: {

    //ajax返回请求数据处理
    async getdataList() {
      const { data } = await this.$request("/cha");
      const dataList = data[0][0];
      // const navList = dataList.promotionCardList;
      this.navList = dataList.promotionCardList; //用this修改值,与上面data数据进行绑定；
      this.adList = dataList.adImg
      console.log("navList=", dataList);
      console.log("this.adList=", this.adList);
    },

    //点击我的附近弹窗
    openDialog() {
      Dialog.confirm({
        title: "提示",
        message: "定位失败，您可以手动选择城市",
      })
        .then(() => {
          // on confirm
          this.$router.push("/search");
        })
        .catch(() => {
          // on cancel
        });
    },
    //点击弹出日历
    formatDate(date) {
      return `${date.getMonth() + 1}/${date.getDate()}`;
    },
    onConfirm(date) {
      const [start, end] = date;
      this.show = false;
      this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
    },

    //点击跳转
    goback(path) {
      this.$router.push(path);
    },
  },
  async created() {
    // const { data } = await this.$request("/cha");
    // this.shouyeList = data[0][0];
    // const dataList = data[0][0];
    // this.shouyeList = dataList;
    // console.log("dataList=", dataList.promotionCardList[4].PromotionCardTitle);

    //获取导航列表的数据
    // const navList = dataList.promotionCardList;
    // console.log("navList=",navList);
    this.getdataList();
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/sass/reset.scss";
@import "../assets/sass/leader.scss";
.leader {
  height: 100%;
  margin: 0 0 vw(106);
}
//轮播图
.my-swipe {
  width: 100%;
  height: vw(320);
  background: #999;
  .van-swipe-item .van-image {
    width: 100%;
    height: 100%;
  }
}
//搜索
.search-wrap {
  padding: 0 vw(20);
  width: 100%;
  height: vw(544.12);
  position: relative;
  .search_con {
    width: vw(710.4);
    background: #fff;
    height: vw(544.12);
    border-radius: vw(6);
    position: absolute;
    top: vw(-40);
    box-shadow: 0px 0px 5px 2px #eee;
    padding: vw(24) vw(16) 0;
    .van-cell,
    .calendar_list {
      border-radius: vw(5);
      background: #f9f9f9;
      padding: 0 vw(15);
    }
    .van-cell {
      height: vw(96);
      background: #f9f9f9;
      margin-bottom: vw(13);
      .van-cell__title {
        font-size: vw(36);
        font-weight: bold;
        line-height: vw(96);
      }
      .search_place {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        font-size: vw(24);
        .custom-title {
          line-height: vw(36);
        }
      }
      .search_scene {
        color: #999;
        line-height: vw(96);
      }
    }
    .calendar_list {
      width: 100%;
      height: vw(116);
      margin: vw(13) 0;
      display: flex;
      .calendar_check {
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-right: vw(150);
        > span {
          font-size: vw(24);
          color: #999;
        }
        > em {
          font-weight: bold;
        }
      }
      .total_day {
        margin: 0;
        width: vw(66);
        position: relative;
        > span {
          position: absolute;
          bottom: vw(24);
        }
      }
    }
    .van-button {
      font-size: vw(36);
      font-weight: bold;
      .van-button__content .van-button__text {
        color: #2d382a;
      }
    }
    .my_order {
      width: 100%;
      height: vw(88);
      display: flex;
      align-items: center;
      > li {
        width: 50%;
        height: vw(64);
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: vw(24);
        color: #999;
        .van-icon {
          margin-right: vw(5);
        }
      }
      .add_line {
        border-right: 1px solid #efefff;
      }
    }
  }
}
</style>
