<template>
<div>
    <div class="sl">
        <div v-for="(item,index) in shuju" :key="item+index">
            <div class="biaoti">
                <h1 class="h2" ref="s">{{item.Findex}}</h1>
                <van-cell is-link v-show="false"></van-cell>
                <div class=" anniu">
                    <div class="spanAniu" v-for="(an,idx) in item.list" :key="an+idx">
                        <span class="button1" @click="showPopup(an)">{{an.path}}</span>
                        <!--弹窗-->
                        <!--<div class="chaCaoMoBan">
                            <i class="i">{{an.path}}</i>
                            <div>
                                <li class="tan" v-for="(tc,index1) in an.childrenPath" :key="tc+index1">{{tc.AreaName}}</li>
                            </div>
                        </div>-->
                        <van-popup duration="0.3" class="pathLeft" overlay v-model="show" closeable close-icon-position="top-right" position="bottom" :style="{ height: '30%' }">
                            <div class="chacao">
                                <i class="i">{{chacao.path}}</i>
                                <div>
                                    <li v-for="(an,index) in chacao.childrenPath" :key="an+index" class="tan" ref="smallPath" @click="junp()">{{an.AreaName}}</li>
                                </div>
                            </div>
                        </van-popup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
//  <van-popup v-model="show" closeable position="bottom" :style="{ height: '30%' }" />
//                 <!-- 自定义图标 -->
//                 <van-popup v-model="show" closeable close-icon="close" position="bottom" :style="{ height: '30%' }" />
//                 <!-- 图标位置 -->
//                 <van-popup v-model="show" closeable close-icon-position="top-left" position="bottom" :style="{ height: '30%' }" />
import shuju from "./地址数据.js"
export default {
    data() {
        return {
            overlay: "false",
            show: false,
            shuju,
            chacao: ""
        };
    },

    methods: {
        showPopup(an) {
            this.show = true;
            // var script1 = document.createElement("div")
            // script1.innerHTML = "ddasd"
            // console.log(script1)
            // var t1 = document.querySelector(".van-popup--bottom")
            // console.log(t1)
            // t1.appendChild(script1)
            console.log("an", an)
            this.chacao = an
            console.log("插槽数据", this.chacao)
        },
        // 点击小地方跳转到首页
        junp() {
            var t = this.$refs.smallPath.innerHTML
            // console.log("拿到小地方的地址", this.$refs.smallPath.innerHTML)
            // console.log(this)
            var el = event.currentTarget
            console.log(el)
            var x = el.innerHTML
            console.log(x)
            this.$router.push({
                name: "home",
                query: {
                    path: x
                }
            })
        },

    },
    created() {
        console.log(shuju)
    },
    mounted() {
        // var t = document.querySelector(".chaCaoMoBan")
        // var w = document.querySelector(".chacao")
        // w.appendChild(t)
        // t.display = "none"
    }
};
// background: #f4f4f4;
</script>

<style>
.sl {
    position: absolute;
    top: 0px;
    width: 100vw;
    background: #f4f4f4;
}

.sl .van-overlay {
    background: rgba(70, 68, 68, 0);
}

.h2 {
    width: 100vw;
    height: 10vw;
    text-align: left;
    text-indent: 10vw;
    line-height: 10vw;
    float: left;
    background: #f4f4f4;
}

.anniu {}

.spanAniu {
    display: inline-block;
    width: 33.33vw;
    float: left;
    margin-top: 5vw;
}

.button1 {
    border-color: gray;
    border-radius: 6px;

}

.pathLeft {
    text-align: left;
}

.i {
    display: block;
    height: 15vw;
    line-height: 15vw;
    text-indent: 8vw;
    font-size: 900;
    font-weight: 900;
}

.tan {
    height: 8vw;
    text-indent: 12vw;
    line-height: 8vw;
}
</style>
