<template>
  <div class="Home">
      <Home-Swipe></Home-Swipe>
      <Map-Positioning>
        <div class="all" @click="openLocation">
           <div>
               <h6>斯卡莱SPA美甲<span>1945km</span></h6>
               <p><i class="iconfont icon-diliweizhi iconfontLittle"></i>广东省佛山市禅城区福宁路213号</p>
           </div>
           <div>
               <h5><i class="iconfont icon-diliweizhi iconfontBig"></i></h5>
               <p>导航到店</p>
           </div>
       </div>
      </Map-Positioning>
      <Home-List></Home-List>
      <Home-Service  v-for="(item,index) in list" :key="index" :item="item" :productTypes="productTypes"/>
      <div style="height:1.75rem"></div>
      <!-- <HomeProductContainer :todos="todos"></HomeProductContainer>
      <Home-Container :todos="todos"></Home-Container> -->
      <Home-Footer></Home-Footer>
      <!-- <mt-button @click.native="openLocation" type="primary" size="large" class="bottom">提交预约</mt-button>
    <mt-button @click.native="turnPage" type="primary" size="large" class="bottom">试验</mt-button>
    <mt-button @click.native="testPay" type="primary" size="large" class="bottom">测试支付</mt-button> -->

  </div>
</template>

<script>
import { mapState,mapMutations,mapGetters  } from 'vuex';
import { Swipe, SwipeItem } from 'mint-ui';
import { MessageBox } from 'mint-ui';
import HomeSwipe from './component/HomeSwipe';
import HomeList from './component/HomeList';
import HomeFooter from '../../pages/footer'
import MapPositioning from './component/MapPositioning'
import HomeService from './component/HomeService'
import axios from 'axios';
import wx from 'weixin-js-sdk'
import { getProductTypes, getGoods, getCategory, getWechatUserInfo, getWechatOAuth2UserInfo, getWechatOpenid,getAdPositionDetail,getJsTicket,unifiedOrder,getAdmins} from '../../api/api'
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
        pageSize:10,
        pageNumber:1,
        status:0,
        type:0
      },
      topStatus: '',
      productTypes:[]
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
    /**
     * 获取用户信息
     */
    if(code){
      getWechatOpenid({"code":code,"lang":"zh_CN"}).then(res=>{
        sessionStorage.setItem("token",JSON.stringify(res.data.data))
      })
      getWechatUserInfo({"openid":this.openid,"lang":"zh_CN"}).then(res=>{
        sessionStorage.setItem("userInfo",JSON.stringify(res.data.data))
      })
    }
    /**
     * 获取产品信息
     */
    getProductTypes({current:1,size:5}).then(res=>{
      this.productTypes=res.data.data.records
      sessionStorage.setItem("productTypes",JSON.stringify(this.productTypes))
    })
    /**
     * 获取轮播图
     * */
    getAdPositionDetail({"adPositionId":1,"enabled":1}).then(res=>{
    })
    /**
     * 获取员工
     */
    getAdmins(this.params).then((res) => {
       this.list=res.data.data.content
    })
  },
  methods:{
    handleTopChange(status) {
        this.topStatus = status;
      },
    loadTop(){
      getAdmins(this.params).then((res) => {
       this.list=res.data.data.content
      }).then(res=>{
        this.$refs.loadmore.onTopLoaded();
      })
    },
    getData:function(){

    },
    openLocation:function () {
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
    position: absolute
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
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
@import '../../fon/fontHome/iconfont.css'
h6
    font-size 0.4rem;
    font-weight bold;
h5
    text-align center;
    line-height 0.6rem;
span
    display inline-block;
    font-size 0.2rem;
    font-weight 400;
    color #909399;
    padding 0.1rem;
p
    font-size 0.2rem;
    color #909399;
    line-height 0.5rem;
.iconfontLittle
    font-size 0.2rem;
.iconfontBig
    font-size 0.5rem;
    color #67C23A;
.all
    display flex;
    justify-content space-between;
    padding 0 0.3rem;
</style>

