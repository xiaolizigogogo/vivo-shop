<template>
  <div class="Home">
    <mt-loadmore :top-method="loadTop" :auto-fill="false" ref="loadmore"  @top-status-change="handleTopChange" @load="loaded" id="loadmores">
      <Home-Swipe></Home-Swipe>
      <Map-Positioning></Map-Positioning>
      <Home-List></Home-List>
      <Home-Service  v-for="(item,index) in list" :key="index" :item="item"/>
      <!-- <HomeProductContainer :todos="todos"></HomeProductContainer>
      <Home-Container :todos="todos"></Home-Container> -->
      <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
    </mt-loadmore>
      <Home-Footer></Home-Footer>
      <mt-button @click.native="openLocation" type="primary" size="large" class="bottom">提交预约</mt-button>
    <mt-button @click.native="turnPage" type="primary" size="large" class="bottom">试验</mt-button>
    <mt-button @click.native="testPay" type="primary" size="large" class="bottom">测试支付</mt-button>
    
  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import HomeSwipe from './component/HomeSwipe';
import HomeList from './component/HomeList';
// import HomeContainer from './component/HomeContainer'
import HomeFooter from '../../pages/footer'
// import HomeProductContainer from './component/HomeProductContainer'
import MapPositioning from './component/MapPositioning'
import HomeService from './component/HomeService'
import axios from 'axios';
import wx from 'weixin-js-sdk'
import {  getGoods, getCategory, getWechatUserInfo, getWechatOAuth2UserInfo, getWechatOpenid,getAdPositionDetail,getJsTicket,unifiedOrder,getAdmins} from '../../api/api'
import wexinPay from '../pay/wxPayComponent'
export default {
  name:"Home",
  data(){
    return{
      list:[],
      openid:'oUP2Z1VjX-BxzTDNEjVnoT_NTkus',
      code:'',
      lang:'zc_CN',
      latitude:38.95223,
      longitude:121.5255,
      params: {
        current:1,
        size:10,
        enable:true,
      },
      topStatus: '',
    }
  },
  components:{
    HomeSwipe,
    HomeList,
    // HomeContainer,
    HomeFooter,
    // HomeProductContainer,
    MapPositioning,
    HomeService
  },
  created(){
    getJsTicket({url:window.location.href}).then(res=>{
      res.data.data.debug=true;
      res.data.data.jsApiList=['onMenuShareTimeline',
        'onMenuShareAppMessage',
        'onMenuShareQQ',
        'onMenuShareWeibo',
        'onMenuShareQZone',
        'startRecord',
        'stopRecord',
        'onVoiceRecordEnd',
        'playVoice',
        'pauseVoice',
        'stopVoice',
        'onVoicePlayEnd',
        'uploadVoice',
        'downloadVoice',
        'chooseImage',
        'previewImage',
        'uploadImage',
        'downloadImage',
        'translateVoice',
        'getNetworkType',
        'openLocation',
        'getLocation',
        'hideOptionMenu',
        'showOptionMenu',
        'hideMenuItems',
        'showMenuItems',
        'hideAllNonBaseMenuItem',
        'showAllNonBaseMenuItem',
        'closeWindow',
        'scanQRCode',
        'chooseWXPay',
        'openProductSpecificView',
        'addCard',
        'chooseCard',
        'openCard']
      wx.config(res.data.data);
      wx.ready(()=>{
    //  wx.getLocation({
    //   type: 'gcj02', // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
    //   success: function (res) {
    //     console.log(res)
    //      this.latitude = res.latitude; // 纬度，浮点数，范围为90 ~ -90
    //     this.longitude = res.longitude; // 经度，浮点数，范围为180 ~ -180。
    //     var speed = res.speed; // 速度，以米/每秒计
    //     var accuracy = res.accuracy; // 位置精度
    //   }
    // });
  });
    wx.error(function(res){
      console.log('wx err',res);
      //可以更新签名
    });
    })
  },
  mounted:function(){
    document.title = '斯卡莱SPA美甲'
    this.getData()
    const  code=this.$route.query.code
    if(code){
      getWechatOpenid({"code":code,"lang":"zh_CN"}).then(res=>{
        sessionStorage.setItem("token",JSON.stringify(res.data.data))
      })
      getWechatUserInfo({"openid":this.openid,"lang":"zh_CN"}).then(res=>{
        sessionStorage.setItem("userInfo",JSON.stringify(res.data.data))
      })
    }
    getCategory({"parentId":0}).then(res=>{
    })
    getAdPositionDetail({"adPositionId":1,"enabled":1}).then(res=>{
    })
    getAdmins(this.params).then((res) => {
       this.list=res.data.data.records
    })
  },
  methods:{
    loaded () {

          let myScroll = new IScroll('#loadmores', { 
            mouseWheel: true,
            scrollbars: true });

        
      },
    handleTopChange(status) {
        this.topStatus = status;
      },
    loadTop(){
      getAdmins(this.params).then((res) => {
       this.list=res.data.data.records
      }).then(res=>{
        this.$refs.loadmore.onTopLoaded();
      })
    },
    getData:function(){
      // var _this=this
      // axios.get("/static/ceshi.json").then(function(res){
      //   console.log(res)
      //   _this.todos=res.data.data.home
      // })
    },openLocation:function () {
      wx.openLocation({
        latitude: this.latitude, // 纬度，浮点数，范围为90 ~ -90
        longitude: this.longitude, // 经度，浮点数，范围为180 ~ -180。
        name: 'TIT 创意园', // 位置名
        address: '广州市海珠区新港中路 397 号', // 地址详情说明
        scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://weixin.qq.com' // 在查看位置界面底部显示的超链接,可点击跳转
      })
    },
    turnPage(){
      this.$router.push({name:'serviceDetail'})
    },
    testPay(){
      let params={
        "openid":"obWT-0giZxiX-k1MNWMt2kXics5k",
        "totalFee":"1",
        "body":"66666666",
        "tradeType":"JSAPI"
      }
      unifiedOrder(params).then(res=>{
        wexinPay(res.data.data,this.getData(),this.getData())
      })
    }
  }
}
</script>

<style lang="stylus" scoped>
  .Home{
    border-bottom: 10px;
    margin-bottom: 1.75rem;
  }
  .Homeheader i{
    font-size: 0.55rem;
  }
   .Homeheader{
     position: fixed;
     width: 100%;
     top: 0;
     z-index: 1;
     height: 1.3rem;
     line-height: 1.3rem;
     font-size: 0.35rem;
     padding-left: 0.3rem;
     background: white;
   }
   .swipe{
     height: 6.5rem;
     margin-top: 1px;
   }
   .swipe img{
      width: 100%;
      height: 6.5rem;
  }

    .official{
      width: 100%;
      height: 0.8rem;
      background: white;
      margin-top: 1.33rem;
    }
.mint-loadmore-top
  span 
    font-size 0.5rem
</style>

