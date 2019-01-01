<template>
  <div class="page">
  <div class="three1">
    <img class="three-img" :src="first"></img>
  </div>
  <div class="two">
    <div class="two1">
      <div style="margin: 10px;">
        <i-panel title="圆角输入框" i-class="font">
          <i-input i-class="input1 font" :value="name1" type="text" title="男方姓名:" placeholder="请输入您的姓名"
                   maxlength="10" bind:change="bindKeyInput"/>
        </i-panel>
        <!--index.wxml-->
        <!--<div class="weui-flex time-component">-->
          <!--&lt;!&ndash; icon &ndash;&gt;&lt;!&ndash; 开始时间 &ndash;&gt;-->
          <!--<div class="placeholder hd">出生日期：</div>-->
          <!--&lt;!&ndash; 日期选择 &ndash;&gt;-->
          <!--<div class="placeholder date">-->
            <!--<picker mode="multiSelector" :value="dateTime" bindcolumnchange="changeDateTimeColumn"-->
                    <!--:range="dateTimeArray">-->
              <!--<div class="tui-picker-detail">-->
                <!--{{dateTimeArray[0][dateTime[0]]}}-{{dateTimeArray[1][dateTime[1]]}}-{{day}}-->
              <!--</div>-->
            <!--</picker>-->
          <!--</div>-->
          <!--<div class='placeholder line'>|</div>-->
          <!--&lt;!&ndash; 时间选择 &ndash;&gt;-->
          <!--<div class="placeholder time">-->
            <!--<picker mode="time" :value="time" start="00:00" end="23:59" bindchange="bindTimeChange">-->
              <!--<div class="picker">{{time}}</div>-->
            <!--</picker>-->
          <!--</div>-->

        <!--</div>-->
      </div>
    </div>
  </div>
  <div class="two">
    <div class="two1">
      <!--<div style="margin: 10px;">-->
        <!--<i-panel title="圆角输入框" i-class="font">-->
          <!--<i-input i-class="input1 font" :value="name2" type="text" title="女方姓名:" placeholder="请输入您的姓名"-->
                   <!--maxlength="10" bind:change="bindKeyInput1"/>-->
        <!--</i-panel>-->
        <!--<div class="weui-flex time-component">-->
          <!--&lt;!&ndash; icon &ndash;&gt;&lt;!&ndash; 开始时间 &ndash;&gt;-->
          <!--<div class="placeholder hd">出生日期：</div>-->
          <!--&lt;!&ndash; 日期选择 &ndash;&gt;-->
          <!--<div class="placeholder date">-->
            <!--<picker mode="multiSelector" :value="dateTime1" bindcolumnchange="changeDateTimeColumn1"-->
                    <!--:range="dateTimeArray1">-->
              <!--<div class="tui-picker-detail">-->
                <!--{{dateTimeArray1[0][dateTime1[0]]}}-{{dateTimeArray1[1][dateTime1[1]]}}-{{day1}}-->
              <!--</div>-->
            <!--</picker>-->
          <!--</div>-->
          <!--<div class='placeholder line'>|</div>-->
          <!--&lt;!&ndash; 时间选择 &ndash;&gt;-->
          <!--<div class="placeholder time">-->
            <!--<picker mode="time" :value="time1" start="00:00" end="23:59" bindchange="bindTimeChange1">-->
              <!--<div class="picker">{{time1}}</div>-->
            <!--</picker>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    </div>
  </div>
  <div class="others-wrap">
    <ul class="m-img-list">
      <li class="img-item img-item-txt">已有{{count}}人参与测算</li>
    </ul>
    <!--<div id="orders" class="btn-txt">查看占卜记录</div>-->
  </div>
  <div class="four">
    <i-button i-class="four-btn" bind:click="handleClickCeSuan" type="warn" shape="circle">开始测算</i-button>
  </div>
  <div>
    <div class="others-wrap1">
      <ul class="m-img-list1">
        <li class="img-itemm img-item-txt">小测试，仅供娱乐</li>
      </ul>
    </div>
  </div>
  <div>
    <div class="m-panel m-panel2 m-command container1">
      <div class="title">用户反馈</div>
      <div class="wrap-users">
        <ul id="userlist " class="users-list  list" style="top: -13.7756px;" :animation="animationData">

          <li class="users-item">
            <div class="info">jai21**3@gmail.com 广西</div>
            <div class="txt">闺蜜说这个很准，自己看了后觉得很不错，推荐推荐！！</div>
          </li>
          <li class="users-item">
            <div class="info">s**146@gmail.com 云南</div>
            <div class="txt">看了之后想起他对我的种种，我也要参考下建议，对他更好</div>
          </li>
          <li class="users-item">
            <div class="info">ni***3gmail.com 广西</div>
            <div class="txt">自己测了，顺便帮哥们（两对认识很久）测了，决定我们两对 要一起结婚</div>
          </li>
          <li class="users-item">
            <div class="info">f***7@163.com 马来西亚</div>
            <div class="txt">这份结果使我对我们的爱情坚定不 移，等下就去买个爱情保险！！</div>
          </li>
          <li class="users-item">
            <div class="info">w***222gmail.com 台湾</div>
            <div class="txt">内容很丰富，很 多对未来的预测跟建议。</div>
          </li>
          <li class="users-item">
            <div class="info">4*hweg@gmail.com 广东</div>
            <div class="txt">不贵，性价比很高</div>
          </li>
          <li class="users-item">
            <div class="info">x***iw@sina.com 上海</div>
            <div class="txt">爱她就要爱她的一切，这里提到的包容很重要。</div>
          </li>
          <li class="users-item">
            <div class="info">he***su@163.com 香港</div>
            <div class="txt">感情内容我都认为不错。希望天下有情人终成眷属!</div>
          </li>
          <li class="users-item">
            <div class="info">y*1314@sina.com 新疆</div>
            <div class="txt">真的很准，我和他是经常争吵的，但是这个内 容也说我们很适合，只要注意多礼让就会永远在一起</div>
          </li>
          <li class="users-item">
            <div class="info">2***12gmail.com 台湾</div>
            <div class="txt">结果内容很好，也有很多建议，相信我们不会分开</div>
          </li>
          <li class="users-item">
            <div class="info">g***3@gmail.com 四川</div>
            <div class="txt">说我们婚后生活很幸福，期待！</div>
          </li>
          <li class="users-item">
            <div class="info">wwi***3@vip.sina.com 新疆</div>
            <div class="txt">爱她，所以想一直跟她在一起，哪怕再多困难</div>
          </li>
          <li class="users-item">
            <div class="info">sni***66@qq.com 海南</div>
            <div class="txt">激 动中！激动中！给他看了结果，居然直接跟我求婚了！！！</div>
          </li>
          <li class="users-item">
            <div class="info">ww***ww@sina.com 北京</div>
            <div class="txt">作为跟他到白头的参考跟证明</div>
          </li>
          <li class="users-item">
            <div class="info">t***3@sina.com 马来西亚</div>
            <div class="txt">给了 很多很多建议，相信我们会一直走下去。</div>
          </li>
          <li class="users-item">
            <div class="info">j**520@qq.com 云南</div>
            <div class="txt">希望以我的 能力保护她、爱护她、疼爱他。</div>
          </li>
          <li class="users-item">
            <div class="info">3***823@qq.com 四川</div>
            <div class="txt">本来跟她吵架了， 看了结果，使我坚定跟她在一起，等下就去哄她^-^</div>
          </li>
          <li class="users-item">
            <div class="info">y***0gmail.com 香港</div>
            <div class="txt">看的很准！能帮忙做“人生决定”的测试</div>
          </li>
          <li class="users-item">
            <div class="info">ws***23@163.com 广东</div>
            <div class="txt">看了内 容很高兴，虽然我们经常异地，但是我们的心无比的接近！</div>
          </li>
          <li class="users-item">
            <div class="info">g***hug@gmail.com 海南</div>
            <div class="txt">已经找到了对的人，要一直走下去</div>
          </li>
          <li class="users-item">
            <div class="info">jai21**3@gmail.com 广西</div>
            <div class="txt">闺蜜说这个很准，自己看了后觉得很不错，推荐推荐！！</div>
          </li>
          <li class="users-item">
            <div class="info">s**146@gmail.com 云南</div>
            <div class="txt">看了之后想起他对我的种种，我也要参考下建议，对他更好</div>
          </li>
          <li class="users-item">
            <div class="info">ni***3gmail.com 广西</div>
            <div class="txt">自己测了，顺便帮哥们（两对认识很久）测了，决定我们两对 要一起结婚</div>
          </li>
          <li class="users-item">
            <div class="info">f***7@163.com 马来西亚</div>
            <div class="txt">这份结果使我对我们的爱情坚定不 移，等下就去买个爱情保险！！</div>
          </li>
          <li class="users-item">
            <div class="info">w***222gmail.com 台湾</div>
            <div class="txt">内容很丰富，很 多对未来的预测跟建议。</div>
          </li>
          <li class="users-item">
            <div class="info">4*hweg@gmail.com 广东</div>
            <div class="txt">不贵，性价比很高</div>
          </li>
          <li class="users-item">
            <div class="info">x***iw@sina.com 上海</div>
            <div class="txt">爱她就要爱她的一切，这里提到的包容很重要。</div>
          </li>
          <li class="users-item">
            <div class="info">he***su@163.com 香港</div>
            <div class="txt">感情内容我都认为不错。希望天下有情人终成眷属!</div>
          </li>
          <li class="users-item">
            <div class="info">y*1314@sina.com 新疆</div>
            <div class="txt">真的很准，我和他是经常争吵的，但是这个内 容也说我们很适合，只要注意多礼让就会永远在一起</div>
          </li>
          <li class="users-item">
            <div class="info">2***12gmail.com 台湾</div>
            <div class="txt">结果内容很好，也有很多建议，相信我们不会分开</div>
          </li>
          <li class="users-item">
            <div class="info">g***3@gmail.com 四川</div>
            <div class="txt">说我们婚后生活很幸福，期待！</div>
          </li>
          <li class="users-item">
            <div class="info">wwi***3@vip.sina.com 新疆</div>
            <div class="txt">爱她，所以想一直跟她在一起，哪怕再多困难</div>
          </li>
          <li class="users-item">
            <div class="info">sni***66@qq.com 海南</div>
            <div class="txt">激 动中！激动中！给他看了结果，居然直接跟我求婚了！！！</div>
          </li>
          <li class="users-item">
            <div class="info">ww***ww@sina.com 北京</div>
            <div class="txt">作为跟他到白头的参考跟证明</div>
          </li>
          <li class="users-item">
            <div class="info">t***3@sina.com 马来西亚</div>
            <div class="txt">给了 很多很多建议，相信我们会一直走下去。</div>
          </li>
          <li class="users-item">
            <div class="info">j**520@qq.com 云南</div>
            <div class="txt">希望以我的 能力保护她、爱护她、疼爱他。</div>
          </li>
          <li class="users-item">
            <div class="info">3***823@qq.com 四川</div>
            <div class="txt">本来跟她吵架了， 看了结果，使我坚定跟她在一起，等下就去哄她^-^</div>
          </li>
          <li class="users-item">
            <div class="info">y***0gmail.com 香港</div>
            <div class="txt">看的很准！能帮忙做“人生决定”的测试</div>
          </li>
          <li class="users-item">
            <div class="info">ws***23@163.com 广东</div>
            <div class="txt">看了内 容很高兴，虽然我们经常异地，但是我们的心无比的接近！</div>
          </li>
          <li class="users-item">
            <div class="info">g***hug@gmail.com 海南</div>
            <div class="txt">已经找到了对的人，要一直走下去</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  </div>
</template>
<!--<div class="comment">-->
<!--&lt;!&ndash;<div>&ndash;&gt;-->
<!--&lt;!&ndash;<img class="three-img2" src="http://payobwhnt.bkt.clouddn.com/2019_zw_section_top.png"></img>&ndash;&gt;-->
<!--&lt;!&ndash;</div>&ndash;&gt;-->
<!--<div class="text-view">-->
<!--<text class="text">用户评论</text>-->
<!--</div>-->
<!--<div class="container1">-->

<!--<div class='list' animation="{{animationData}}">li>
<!--</div>-->
<!--</div>-->
<!--</div>-->
<script>

  import {mapState, mapMutations, mapGetters} from "vuex";
  import {getParamsMap} from '../../api/api'
  const date = new Date()
  const nowYear = date.getFullYear()
  const nowMonth = date.getMonth() + 1
  const nowDay = date.getDate()
  import {dateTimePicker} from '../../utils/dateTimePicker.js';
  export default {
    data() {
      return {
        nowIndex: 0,
        params: {
          current: 1,
          size: 10
        },
        address: [],
        total: 0,
        first:'',
        count:0,
        current:'男',
        current1:'简单牌型',
        name1:'',
        name2:'',
        array: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"],
        currentPick: "请选择",
        scrollTop:0,
        date: '2018-10-01',
        time: '12:00',
        dateTime: null,
        dateTimeArray: null,
        startYear: 1950,
        endYear: 2050,
        day: '',
        date1: '2018-10-01',
        time1: '12:00',
        dateTime1: null,
        dateTimeArray1: null,
        startYear1: 2000,
        endYear1: 2050,
        day1: ''
      }
    },
    components: {},
    computed: {},
    methods: {
      ...mapMutations(["laji"]),
    goAdd_address() {
      this.$router.push({
        path: "add_address"
      });
    },
    btn(list, index) {
      console.log(list)
      sessionStorage.setItem("address", JSON.stringify(list))
      this.$router.go(-1)
    }
  }
  ,
  created(){
    dateTimePicker(this.startYear,this.endYear)
    var count=new Date().getTime()/10000-1541422222222/10000;
    count=parseInt(count)
    getParamsMap({'paramType':'prod2'}).then(res=>{
      console.log(res)
    this.first=JSON.parse(res.data.data.xingmingpeidui_background_url.paramValue).first;
    this.count=count
  })
  },
  mounted:function f() {
    document.title = '管理收货地址'
  }()
  }
  ;

</script>
<style>@import '../../styles/weui.min.css';

page {
  width: 100%;
  height: 100%;
  background-color: RGB(243, 142, 156);
}
.page{
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background: #f4f4f4;
}
.one {
  background-color: RGB(243, 142, 156);
  width: 100%;
  height: 500 rpx;
}

.two {
  background-color: RGB(243, 142, 156);
  width: 100%;
}

.two1 {
  background-color: #FFFFFF;
  cursor: pointer;
  border-radius: 15px;
  border: 2px solid #bea59a;
  margin: 20 rpx;
}

.three {
  width: 100%;
  z-index: 10;
}

.three1 {
  width: 100%;
  z-index: 20;
}

.four {
  background-color: RGB(243, 142, 156);
}

.three-img {
  width: 100%;
  height: 350px;
}

.three-img1 {
  width: 100%;
  height: 450px;
}

.three-img2 {
  width: 100%;
  height: 20px;
  top: 0;
}

.three-img3 {
  width: 100%;
  height: 300px;

}

.three-img4 {
  width: 100%;
  height: 600px;
  margin-top: -5px;
}

.four-btn {
  border-radius: 18px !important;
}

.font {
  color: #8B8062 !important;
  font-weight: bold;
  font-size: 14px;
}

.picker {
  text-align: left;
}

.container1 {
  height: 400 rpx;
  margin: 20 rpx 20 rpx 20 rpx 20 rpx;
  overflow: hidden;
}

.user {
  font-size: 14px;
}

.detail {
  font-size: 14px;
}

.ulclass {
  border-top: 1px solid #330001;
  padding: 0.26667rem 5px 0.4rem;
  line-height: 0.96rem;
}

.list {
  overflow: hidden;
  position: relative;
}

.comment {
  background-color: RGB(255, 195, 3);
  border: 1px solid #330001;
  margin: 0.8rem 0.90667rem 0;
  box-shadow: inset 0 0 22.68 rpx 0 rgba(234, 238, 254, 0.3);
  border-radius: 3.78 rpx;
  -webkit-box-shadow: inset 0 0 22.68 rpx 0 rgba(203, 144, 216, 0.3);
  padding: 22.68 rpx 0 11.34 rpx 0;

}

.text-view {
  text-align: center;
  line-height: 1.54667rem;
  height: 1.54667rem;
}

.text {
  text-align: center;
  line-height: 1.54667rem;
  height: 1.54667rem;
}

/* index wxss */
.time-component {
/ / margin-top: 60 rpx;
  background-color: #fff;
  border-radius: 10 rpx;
}

.placeholder {
  text-align: center;
  height: 2.3em;
  line-height: 2.3em;
  font-size: 14px;
}

.icon {
  line-height: auto;
  width: 40 rpx;
}

.icon img {
  vertical-align: middle;
  width: 40 rpx;
  height: 40 rpx;
}

.hd {
  text-align: center;
/ / width: 120 rpx;
  margin-left: 30 rpx;
  font-weight: bold;
}

.date {
}

.line {
  z-index: 10;
}

.time {
  right: 0;
}
@charset "utf-8";
@media screen and (min-width: 640px) {
  html {
    font-size: 85px
  }
}

@media screen and (min-width: 414px) and (max-width: 639px) {
  html {
    font-size: 55.2px
  }
}

@media screen and (min-width: 375px) and (max-width: 413px) {
  html {
    font-size: 50px
  }
}

@media screen and (min-width: 320px) and (max-width: 374px) {
  html {
    font-size: 42.66px
  }
}

html, body {
  background: -moz-linear-gradient(left, #250d2d 0%, #70357d 27%, #984fa8 50%, #70357d 76%, #250d2d 100%);
  background: -webkit-linear-gradient(left, #250d2d 0%, #70357d 27%, #984fa8 50%, #70357d 76%, #250d2d 100%);
  background: linear-gradient(to right, #250d2d 0%, #70357d 27%, #984fa8 50%, #70357d 76%, #250d2d 100%);
}

.m-tarot {
  padding: 8.08 *37.8 rpx 0 0 0;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/bg_index.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-title1 {
  overflow: hidden;
  height: .66 *37.8 rpx;
  line-height: .66 *37.8 rpx;
  text-align: center;
  font-size: .26 *37.8 rpx;
  color: #fff;
}

.m-panel2 {
  position: relative;
  margin: 1 *37.8 rpx auto 0;
  width: 19 *37.8 rpx;
  color: #fff;
  border-radius: .1 *37.8 rpx;
/ / background-color: rgb(177, 104, 194, .5);
  -webkit-box-shadow: inset 0 0 .6 *37.8 rpx 0 rgba(203, 144, 216, .3);
  -moz-box-shadow: inset 0 0 .6 *37.8 rpx 0 rgba(203, 144, 216, .3);
  box-shadow: inset 0 0 .6 *37.8 rpx 0 rgba(203, 144, 216, .3);
  height: 400px;
  /*background-img: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner1.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner2.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner3.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner4.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner8.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner5.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner7.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c2corner6.png);
  background-size: .88*37.8rpx .87*37.8rpx, .83*37.8rpx .82*37.8rpx, .93*37.8rpx .92*37.8rpx, .9*37.8rpx .96*37.8rpx, .79*37.8rpx .34*37.8rpx, .4*37.8rpx .89*37.8rpx, .79*37.8rpx .35*37.8rpx, .31*37.8rpx .71*37.8rpx;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%, 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x, repeat-y, repeat-y, repeat-x;*/
}

.m-panel .title {
  position: absolute;
  z-index: 1;
  top: -0.01 rpx;
  left: 50%;
  width: 5.99 *37.8 rpx;
  height: .9 *37.8 rpx;
  margin: 0 0 0 -2.99 *37.8 rpx;
  font-size: .7 *37.8 rpx;
  font-weight: bold;
  line-height: .9 *37.8 rpx;
  color: #f9e0ff;
  text-align: center;
/ / background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/bg_title2.png) 0 0 no-repeat;
  background-size: 100%;
}

/* 填写资料 */
.m-info {
  position: relative;
  width: 6.9 *37.8 rpx;
  padding: 1.2 *37.8 rpx 0 .4 *37.8 rpx 0;
  margin: .4 *37.8 rpx auto 0;
  border-radius: .1 *37.8 rpx;
  background-color: rgb(202, 168, 216);
  background-img: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner1.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner2.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner3.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner4.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner8.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner5.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner7.png), url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/c1corner6.png);
  background-size: 1.28 *37.8 rpx 1.27 *37.8 rpx, 1.01 *37.8 rpx 1.07 *37.8 rpx, .98 *37.8 rpx 1.03 *37.8 rpx, .89 *37.8 rpx .87 *37.8 rpx, .46 *37.8 rpx .71 *37.8 rpx, .83 *37.8 rpx .92 *37.8 rpx, .82 *37.8 rpx .42 *37.8 rpx, .37 *37.8 rpx .79 *37.8 rpx;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%, 0 0, 0 0, 100% 0, 0 100%;
  background-repeat: no-repeat, no-repeat, no-repeat, no-repeat, repeat-x, repeat-y, repeat-y, repeat-x;
}

.m-info .title1 {
  position: absolute;
  z-index: 1;
  top: -.3 *37.8 rpx;
  left: 50%;
  width: 4.67 *37.8 rpx;
  height: 1.09 *37.8 rpx;
  margin: 0 0 0 -2.33 *37.8 rpx;
  line-height: 1.09 *37.8 rpx;
  font-size: .36 *37.8 rpx;
  font-weight: bold;
  text-align: center;
  color: #fff;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/bg_title1.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-info .sub-title {
  margin: 0 .3 *37.8 rpx .26 *37.8 rpx;
  padding: 0 0 0 .58 *37.8 rpx;
  font-size: .3 *37.8 rpx;
  font-weight: bold;
  color: #a054b1;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/icon_eye.png) 0 50% no-repeat;
  background-size: .38 *37.8 rpx .24 *37.8 rpx;
}

.m-info .cards-list .card {
  float: left;
  margin: 0 0 0 .2 *37.8 rpx;
  width: 1.42 *37.8 rpx;
  height: 2.02 *37.8 rpx;
  transition: all .2s linear;
  -webkit-transition: all .2s linear;
}

.m-info .cards-list .card:first-child {
  margin: 0 0 0 .3 *37.8 rpx;
}

.m-info .cards-list .card0 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/card0.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-info .cards-list .card1 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/card1.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-info .cards-list .card2 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/card2.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-info .cards-list .card3 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/card3.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-info .cards-list .active-panel {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: .1 *37.8 rpx;
}

.m-info .cards-list .active {
  -webkit-box-shadow: 0 0 .35 *37.8 rpx .2 *37.8 rpx rgb(254, 224, 255);
  -moz-box-shadow: 0 0 .35 *37.8 rpx .2 *37.8 rpx rgb(254, 224, 255);
  box-shadow: 0 0 .35 *37.8 rpx .2 *37.8 rpx rgb(254, 224, 255);
  border-radius: .1 *37.8 rpx;
}

.m-info .cards-list .active .active-panel {
  border: 2px solid #f83bff;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/icon_coner.png) 100% 100% no-repeat;
  background-size: .51 *37.8 rpx .51 *37.8 rpx;
}

.m-info .input-line {
  position: relative;
  height: .7 *37.8 rpx;
  line-height: .7 *37.8 rpx;
  font-size: .3 *37.8 rpx;
  color: #9b40b0;
}

.m-info .input-line1 {
  margin: .52 *37.8 rpx 0 0 .3 *37.8 rpx;
}

.m-info .input-line2 {
  margin: .32 *37.8 rpx 0 0 .3 *37.8 rpx;
}

.m-info .input-line .txt {
  float: left;
  margin: 0 .46 *37.8 rpx 0 0;
}

.m-info .radios-wrap {
  position: relative;
  float: left;
  width: 2.7 *37.8 rpx;
  height: .7 *37.8 rpx;
  margin: 0 .3 *37.8 rpx 0 0;
  text-align: center;
  line-height: .7 *37.8 rpx;
  color: #9744a9;
  font-size: .3 *37.8 rpx;
  border-radius: .7 *37.8 rpx;
  background-color: #dab5e2;
}

.m-info .radios-wrap .radio-btn {
  position: absolute;
  z-index: 1;
  width: 1.35 *37.8 rpx;
  height: .7 *37.8 rpx;
  line-height: .68 *37.8 rpx;
  border: 1px solid #9744a9;
  box-sizing: border-box;
}

.m-info .radios-wrap .radio-left {
  top: 0;
  left: 0;
  border-top-left-radius: .7 *37.8 rpx;
  border-bottom-left-radius: .7 *37.8 rpx;
}

.m-info .radios-wrap .radio-right {
  top: 0;
  right: 0;
  border-top-right-radius: .7 *37.8 rpx;
  border-bottom-right-radius: .7 *37.8 rpx;
}

.m-info .radios-wrap .active {
  color: #fff;
  background-color: #9744a9;
}

.m-info .btn {
  width: 6.3 *37.8 rpx;
  height: .9 *37.8 rpx;
  margin: .46 *37.8 rpx auto 0;
  line-height: .9 *37.8 rpx;
  text-align: center;
  color: #fff;
  font-size: .36 *37.8 rpx;
  font-weight: bold;
  background-color: #9744a9;
  border-radius: .1 *37.8 rpx;
}

/* 情感烦恼 */
.m-circles {
  position: relative;
}

.m-circles .circle-wrap {
  float: left;
  margin: 0 0 0 .18 *37.8 rpx;
}

.m-circles .circle-wrap:first-child {
  margin: 0 0 0 .2 *37.8 rpx;
}

.m-circles .circle {
  position: relative;
  width: 1.44 *37.8 rpx;
  height: 1.44 *37.8 rpx;
  border-radius: 50%;
  border: 1px dashed rgba(206, 192, 209, .5);
  color: #fff;
  text-align: center;
}

.m-circles .circle .desc {
  position: absolute;
  z-index: 1;
  top: 50%;
  left: 50%;
  width: 1.24 *37.8 rpx;
  height: 1.24 *37.8 rpx;
  background-color: #a84bbc;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid #cec0d1;
}

.m-circles .circle .txt1 {
  font-size: .32 *37.8 rpx;
  line-height: 1.22 *37.8 rpx;
  font-weight: bold;
}

.m-circles .txt2 {
  margin: .1 *37.8 rpx 0 0 0;
  text-align: center;
  font-size: .24 *37.8 rpx;
  font-weight: bold;
}

.m-problem {
  padding: 1.2 *37.8 rpx 0 .8 *37.8 rpx 0;
}

.m-problem .panel {
  width: 5.95 *37.8 rpx;
  margin: .66 *37.8 rpx auto 0;
  padding: 2.4 *37.8 rpx 0 0 0;
  text-align: center;
  line-height: 1.5;
  color: #fff;
  font-size: .26 *37.8 rpx;
  font-weight: bold;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/cards.png) 0 0 no-repeat;
  background-size: 5.95 *37.8 rpx 2.52 *37.8 rpx;
}

.m-problem .panel .hl {
  font-size: .28 *37.8 rpx;
  font-weight: bold;
  color: #5d086f;
}

/* 塔罗步骤 */
.m-steps {
  padding: .6 *37.8 rpx 0 1 *37.8 rpx 0;
}

.m-steps .steps {
  position: relative;
  height: 2 *37.8 rpx;
  margin: .5 *37.8 rpx 0 0 0;
}

.m-steps .steps .step {
  position: absolute;
  z-index: 1;
  width: 1.53 *37.8 rpx;
  padding: 1.82 *37.8 rpx 0 0 0;
  font-size: .3 *37.8 rpx;
  text-align: center;
}

.m-steps .steps .step1 {
  top: 0;
  left: .3 *37.8 rpx;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/step1.png) 0 0 no-repeat;
  background-size: 1.53 *37.8 rpx 1.53 *37.8 rpx;
}

.m-steps .steps .step1:after,
.m-steps .steps .step2:after {
  content: "";
  position: absolute;
  z-index: 2;
  top: .7 *37.8 rpx;
  right: -.55 *37.8 rpx;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: .1 *37.8 rpx 0 .1 *37.8 rpx .17 *37.8 rpx;
  border-color: transparent transparent transparent #fff;
}

.m-steps .steps .step2 {
  top: 0;
  left: 50%;
  margin: 0 0 0 -.76 *37.8 rpx;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/step2.png) 0 0 no-repeat;
  background-size: 1.53 *37.8 rpx 1.53 *37.8 rpx;
}

.m-steps .steps .step3 {
  top: 0;
  right: .3 *37.8 rpx;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/step3.png) 0 0 no-repeat;
  background-size: 1.53 *37.8 rpx 1.53 *37.8 rpx;
}

/* 用户反馈 */
.m-command {
  padding: .6 *37.8 rpx 0 .3 *37.8 rpx 0;
}

.m-command .wrap-users {
  position: relative;
/ / width: 17 * 37.8 rpx;
  margin: .26 *37.8 rpx;
  height: 20 *37.8 rpx;
  overflow: hidden;
  border-top: 1px solid rgba(255, 255, 255, .2);
}

.m-command .users-list {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: auto;
}

.m-command .users-list .users-item {
  border-bottom: 1px solid rgba(255, 255, 255, .2);
}

.m-command .users-item .info {
/ / padding: .18 * 37.8 rpx .25 * 37.8 rpx .16 * 37.8 rpx;
  color: #fff;
  font-size: .7 *37.8 rpx;
  font-weight: bold;
}

.m-command .users-item .txt {
  padding: 0 .25 *37.8 rpx .3 *37.8 rpx;
  color: #fff;
  font-size: .7 *37.8 rpx;
}

.others-wrap {
  height: 3 *37.8 rpx;
  padding: 0.3 *37.8 rpx;
}

.others-wrap1 {
/ / height: 3 * 37.8 rpx;
  padding: 0.3 *37.8 rpx;
}

.btn-txt {
  font-size: .7 *37.8 rpx;
  color: #9b4eaf;
  text-align: center;
  text-decoration: underline;
  float: right;
  margin-top: .5 *37.8 rpx;
  margin-right: .5 *37.8 rpx;

}

.m-img-list .img-itemm {
  width: 1.7 *37.8 rpx;
  height: 2 *37.8 rpx;
  margin: 1 1 1 .04 *37.8 rpx;
  line-height: 2 *37.8 rpx;
  vertical-align: top;
  color: #f5f5f5;
  font-size: .7 *37.8 rpx;
  display: inline-block;
}

.m-img-list1 {
  height: 2 *37.8 rpx;
  margin-left: .5 *37.8 rpx;
  text-align: center;
  float: right;
}

.m-img-list1 .img-itemm {
  width: auto;
  height: 2 *37.8 rpx;
  margin: 1 1 1 .04 *37.8 rpx;
  line-height: 2 *37.8 rpx;
  vertical-align: top;
  color: #f0f0f0;
  font-size: .4 *37.8 rpx;
  display: inline-block;
}

.m-img-list {
  height: 2 *37.8 rpx;
  margin-left: .5 *37.8 rpx;
  text-align: center;
  float: left;
}

.m-img-list .img-item {
  width: 1.7 *37.8 rpx;
  height: 2 *37.8 rpx;
  margin: 1 1 1 .04 *37.8 rpx;
  line-height: 2 *37.8 rpx;
  vertical-align: top;
  color: #9744a9;
  font-size: .7 *37.8 rpx;
  display: inline-block;
}

.m-img-list .img-item1 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdkloveplan/index/user_head1.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-img-list .img-item2 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdkloveplan/index/user_head2.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-img-list .img-item3 {
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdkloveplan/index/user_head3.png) 0 0 no-repeat;
  background-size: 100%;
}

.m-img-list .img-item-txt {
  width: auto;
  height: .38 *37.8 rpx;
  margin: 0 0 0 .1 *37.8 rpx;
}

.m-footer {
  /*height: .6*37.8rpx;*/
  /*line-height: .6*37.8rpx;*/
  padding: .36 *37.8 rpx 0 1.5 *37.8 rpx 0;
  font-size: .24 *37.8 rpx;
  color: #fff;
  text-align: center;
  /*background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot/index/bg_bottom.png) 0 100% no-repeat;
  background-size: 100%;*/
}

.m-btn-float {
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 1.22 *37.8 rpx;
  background-color: rgba(0, 0, 0, .5);
  display: none;
}

.m-btn-float .btn {
  margin: .16 *37.8 rpx .3 *37.8 rpx 0 .3 *37.8 rpx;
  height: .9 *37.8 rpx;
  line-height: .9 *37.8 rpx;
  background-color: #9f3fab;
  text-align: center;
  color: #fff;
  font-size: .42 *37.8 rpx;
  font-weight: bold;
  border-radius: .1 *37.8 rpx;
}

.m-fltbtn-order {
  position: fixed;
  z-index: 11;
  right: .2 *37.8 rpx;
  bottom: .2 *37.8 rpx;
  box-sizing: border-box;
  width: 2.26 *37.8 rpx;
  height: .8 *37.8 rpx;
  border-radius: .8 *37.8 rpx;
  padding: 0 0 0 .8 *37.8 rpx;
  line-height: .8 *37.8 rpx;
  color: #fff;
  font-size: .3 *37.8 rpx;
  background: rgba(0, 0, 0, .7) url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot2/index/orders.png) .3 *37.8 rpx 50% no-repeat;
  background-size: .35 *37.8 rpx .36 *37.8 rpx;
}

/* 订单按钮 */
.m-orders {
  position: fixed;
  left: 0;
  bottom: 1.64 *37.8 rpx;
  width: .93 *37.8 rpx;
  height: .74 *37.8 rpx;
  overflow: hidden;
  z-index: 31;
}

.m-orders .btn {
  width: .93 *37.8 rpx;
  height: .74 *37.8 rpx;
  transform: translateX(-1 *37.8 rpx);
  -webkit-transform: translateX(-1 *37.8 rpx);
  transition: all .2s linear;
  -webkit-transition: all .2s linear;
  background: url(https://oj7h0vq33.qnssl.com/sdkpack/sdktarot3/index/orders.png) 0 0 no-repeat;
  background-size: 100% 100%;
}

.m-orders .btn-active {
  transform: translateX(0);
  -webkit-transform: translateX(0);
}

/*热门测算*/
.m-hotreckon {
  padding: .5 *37.8 rpx 0;
  margin: .24 *37.8 rpx auto 0;
  display: none;
}

.m-hotreckon .subhead {
  text-align: center;
  color: #fff;
  font-size: .3 *37.8 rpx;
  font-weight: bold;
  margin-bottom: .4 *37.8 rpx;
}

.m-hotreckon ul {
  width: 6.3 *37.8 rpx;
  margin: 0 auto;
  min-height: 1.8 *37.8 rpx;
}

.m-hotreckon li {
  float: left;
  width: 1.26 *37.8 rpx;
  padding-top: 1.46 *37.8 rpx;
}

.m-hotreckon .mar {
  margin-right: .42 *37.8 rpx;
}

.m-hotreckon .bazi {
  background: url(https://oj7h0vq33.qnssl.com/sdkonejob/bazi.png) center 0 no-repeat;
  -webkit-background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
  background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
}

.m-hotreckon .love {
  background: url(https://oj7h0vq33.qnssl.com/sdkonejob/lover.png) center 0 no-repeat;
  -webkit-background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
  background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
}

.m-hotreckon .zhiye {
  background: url(https://oj7h0vq33.qnssl.com/sdkonejob/zhiye.png) center 0 no-repeat;
  -webkit-background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
  background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
}

.m-hotreckon .caifu {
  background: url(https://oj7h0vq33.qnssl.com/sdkonejob/caifu.png) center 0 no-repeat;
  -webkit-background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
  background-size: 1.26 *37.8 rpx 1.26 *37.8 rpx;
}

.m-hotreckon li span {
  display: block;
  text-align: center;
  color: #fff;
  font-size: .26 *37.8 rpx;
}

::-webkit-input-placeholder {
  color: #dab5e2;
}

:-moz-placeholder {
  color: #dab5e2;
}

::-moz-placeholder {
  color: #dab5e2;
}

:-ms-input-placeholder {
  color: #dab5e2;
}
</style>
