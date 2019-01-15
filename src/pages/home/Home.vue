<template>
  <div class="Home">
      <Home-Swipe></Home-Swipe>
      <Map-Positioning>
        <div class="all" @click="openLocation">
           <div>
               <h6>斯卡莱日式美甲美睫<span></span></h6>
               <p><i class="iconfont icon-diliweizhi iconfontLittle"></i>辽宁省大连市中山区人民路43号新世界名泷1008</p>
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
      <Home-Footer></Home-Footer>

  </div>
</template>

<script>
import HomeSwipe from './component/HomeSwipe';
import HomeList from './component/HomeList';
import HomeFooter from '../../pages/footer'
import MapPositioning from './component/MapPositioning'
import HomeService from './component/HomeService'
import wx from 'weixin-js-sdk'
import { getProductTypes,getUserInfoByOpenId, getGoods, getCategory, getWechatUserInfo, getWechatOAuth2UserInfo, getWechatOpenid,getAdPositionDetail,getJsTicket,unifiedOrder,getAdmins} from '../../api/api'
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
    HomeFooter,
    MapPositioning,
    HomeService
  },
  created(){
    debugger
    if(window.signLink==undefined||window.signLink==''){
      window.signLink=window.location.href
      const  code=this.$route.query.code
      if(!code){
        alert("请从公众号入口进入")
        getUserInfoByOpenId({"openid":"obWT-0giZxiX-k1MNWMt2kXics5k"}).then(res=>{
          localStorage.setItem("user",JSON.stringify(res.data.data))
        })
        return
      }
      getWechatOpenid({"code":code,"lang":"zh_CN"}).then(res=>{
        localStorage.setItem("token",JSON.stringify(res.data.data))
        this.openid=res.data.data.openId;
        getUserInfoByOpenId({"openid":this.openid}).then(res=>{
          localStorage.setItem("user",JSON.stringify(res.data.data))
        })
      })
    }
    getJsTicket({url:window.signLink}).then(res=>{
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
        'openCard',
        'updateAppMessageShareData']
      wx.config(res.data.data);
      wx.ready(()=>{
  });
    wx.error(function(res){
      console.log('wx err',res);
      //可以更新签名
    });
    })
  },
  mounted:function(){
    document.title = '斯卡莱SPA美甲'
    /**
     * 获取产品信息
     */
    getProductTypes({current:1,size:10,enable:1,asc:true,ascs:"orderBy"}).then(res=>{
      this.productTypes=res.data.data.records
      sessionStorage.setItem("productTypes",JSON.stringify(this.productTypes))
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
    openLocation:function () {
      wx.openLocation({
        latitude: this.latitude, // 纬度，浮点数，范围为90 ~ -90
        longitude: this.longitude, // 经度，浮点数，范围为180 ~ -180。
        name: '斯卡莱日式美甲美睫', // 位置名
        address: '辽宁省大连市中山区人民路43号新世界名泷1008', // 地址详情说明
        scale: 14, // 地图缩放级别,整形值,范围从1~28。默认为最大
        infoUrl: 'http://weixin.qq.com' // 在查看位置界面底部显示的超链接,可点击跳转
      })
    },
    turnPage(){
      this.$router.push({name:'serviceDetail'})
    },
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

