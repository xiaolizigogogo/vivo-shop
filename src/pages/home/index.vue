<!-- index -->
<style lang="scss" >
  /* banner */

  @import '../../assets/common/css/mixin.scss';

.jd{
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

  /* banner */

  .appTabscenter {
    border-radius: .2rem .2rem 0 0;
    overflow: hidden;
    position: relative;
    //top: -.2rem;
    left: 0;
    background: #f8f8f8;
    z-index: 200;
    width: 100%;
    padding-bottom: .25rem;
    .mint-swipe {
      /*padding: .266667rem 0;*/
      overflow: initial !important;
      height: 2.0rem;
    }
    .tableTabs {
      @include flexbox(center, center, row, wrap);
      width: 100%;
      height: 100%;
      .table-tabs-item {
        width: 25%;
        margin: .133333rem 0;
        @include flexbox(center, center, column, wrap);
        flex: initial;
        cursor: pointer;
        p {
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          display: box;
          color: #666666;
          box-orient: vertical;
          font-size:10px
        }
        img {
          width: 33px;
          height: 33px;
        }
      }
    }
  }
  .banner2 {
    height: 5.85rem !important;
    img {
      min-width: 100%;
      max-width: 100%;
      max-height: 100%;
    }
  }
  .floor {
    position: relative;
    background: #fff;
    top: -.1rem;
    overflow: hidden;
    clear: both;
    .container-bg {
      width: 100%;
      overflow: hidden;
      clear: both;
      img {
        width: 100%;
        height: auto;
      }
    }
    .activity_list {
      position: absolute;
      bottom: .2rem;
      padding: 0 8px;
      @include flexbox(space-between, center, row, wrap);
      >div {
        width: 50%;
      }
      img {
        width: 100%;
        height: auto;
      }
      .right_item {
        @include flexbox(space-between, center, column, wrap);
        flex: initial;
        .r_i_cell {
          height: 50%;
          width: 100%;
        }
      }
    }
  }

  .jd-express-news {
    position: relative;
    overflow: hidden;
    top: -.1rem;
    background: #fff;
    clear: both;
    .jd-kuaibao {
      .jd-news-icon {
        width: 1.95rem;
        height: .45rem;
      }
      >div {
        padding-left: .1rem;
        li {
          @include textoverflow(1);
        }
      }
      >span {
        font-size: 12PX;
        width: 1.5rem;
        text-align: right;
        color: #181818;
        position: relative;
        &:before {
          content: '';
          position: absolute;
          left: 0;
          background: #ececec;
          height: 100%;
          width: 1px;
        }
      }
      @include flexbox(space-between, center, row, nowrap);
      padding: 0.2rem .5rem;
    }
  }

  /* 京东秒杀 */

  .seckill-t {
    padding: .1rem 0;
    font-size: .3rem;
    strong {
      font-weight: normal !important;
      font-size: .4rem;
    }
    .seckill-summary {
      color: #999;
      font-size: 13px;
      padding: .1rem 0;
      -webkit-text-fill-color: initial;
    }
    .seckill-time {
      color: #666;
      -webkit-text-fill-color: initial;
      >span {
        color: #fff;
        background: #000;
        border-radius: .1rem;
        padding: 0 .03rem;
      }
    }
    .seckill-now {
      color: #333;
      font-size: 15px;
      -webkit-text-fill-color: initial;
      font-weight: normal !important;
    }
  }

  .seckill-floor {
    position: relative;
    overflow: hidden;
    clear: both;
    top: .05rem;
    img {
      max-width: 100%;
      max-height: 80px;
    }
    .jd-f-b-r-item,
    .jd-f-b-item,
    .jd-f-b-pd-item {
      min-height: 134px;
      overflow: hidden;
    }
    .jd-flex-box {
      background: #fff;
      padding: 10px 0;
      @include flexbox(space-between, flex-start, row, nowrap);
      >div {
        width: 50%;
      }
      .jd-f-b-l {
        @include flexbox(center, space-between, column, wrap);
        flex: initial;
        position: relative;
        >div {
          padding: 0 .2rem;
        }
        &:after {
          content: '';
          position: absolute;
          right: 1px;
          height: 100%;
          width: 1px;
          background: #f5f5f5;
        }
        .jd-f-b-pd-item {
          @include flexbox(space-between, center, row, nowrap);
          .seckill-p-item {
            width: 50%;
            .seckill-t {
              @include flexbox(center, center, column, wrap);
            }
          }
        }
        .jd-f-b-item {
          @include flexbox(center, center, column, wrap);
          border-bottom: 1px solid #F5F5F5;
          .seckill-t {
            @include flexbox(space-between, center, row, nowrap);
          }
          .seckill-prd {
            @include flexbox(space-between, center, row, nowrap);
            .prd-item {
              @include flexbox(center, center, column, wrap);
              >strong {
                color: #f23030;
                font-size: 14px;
                line-height: 1;
              }
              >del {
                color: #999;
                font-size: 12px;
                padding: .03rem 0 .08rem;
              }
            }
          }
        }
      }
      .jd-f-b-r {
        @include flexbox(center, center, column, wrap);
        flex: initial;
        .jd-f-b-r-item {
          @include flexbox(center, flex-start, column, wrap);
          padding: 0 .2rem;
          border-bottom: 1px solid #F5F5F5;
          .seckill-pd-r {
            img {
              width: 50%;
            }
          }
          .seckill-t {
            .seckill-summary {
              color: #999;
              font-size: 13px;
              -webkit-text-fill-color: initial;
            }
            @include flexbox(center, flex-start, column, wrap);
          }
          .seckill-pd-r {
            @include flexbox(space-between, center, row, nowrap);
          }
        }
      }
    }
  }

  /* 京东秒杀 */

  /* 爱生活 */

  .floor {
    .floor-title {
      background: #f5f5f5;
      text-align: center;
      img {
        height: 35px;
      }
    }
    .floor-container-bom {
      @include flexbox(center, center, row, nowrap);
      .f-c-b-prd-item {
        width: 25%;
        position: relative;
        padding: .2rem;
        img {
          max-width: 60px;
        }
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 1px;
          height: 100%;
          width: 1px;
          background: #f5f5f5;
        }
      }
    }
    .floor-container {
      @include flexbox(space-between, center, row, nowrap);
      position: relative;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 1px;
        width: 100%;
        background: #f5f5f5;
      }
      >div {
        width: 50%;
      }
      .seckill-t {
        padding: 0 .2rem;
      }
      .f-c-l {
        position: relative;
        padding: .2rem 0;
        &:after {
          content: '';
          position: absolute;
          top: 0;
          right: 1px;
          height: 100%;
          width: 1px;
          background: #f5f5f5;
        }
      }
      .f-c-l-prd {
        img {
          max-width: 60px;
          max-height: 60px;
          margin: 0 .2rem;
        }
        @include flexbox(center, center, row, nowrap);
      }
    }
  }

  /* 爱生活 */

  /* 推荐 */

  .recommend {
    background: #f0f2f5;
    .gray-text {
      margin: .3rem 0;
      @include flexbox(center, center, row, nowrap);
      .gray-layout {
        font-size: 14px;
        color: #999;
        .gray-text-img {
          img {
            width: 18px;
            height: 18px;
          }
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
      }
    }
    .find-recommend-product {
      @include flexbox(space-between, center, row, wrap);
      overflow: hidden;
      clear: both;
      .recommend-item {
        background: #fff;
        width: 4.935rem;
        margin-bottom: .15rem;
        .item-posre {
          img {
            max-height: 185px;
            width: 100%;
          }
        }
        .item-product-text {
          padding: .1rem 0 0 .1rem;
          height: 1rem;
          font-size: 14px;
          line-height: 1.3;
          @include textoverflow(2);
        }
        .item-product-info {
          color: #f23030;
          padding: .2rem .1rem;
          font-size: 16px;
          span {
            font-size: 12px;
            margin-right: .1rem;
          }
        }
        .item-product-praise {
          padding: 0 0 .2rem .1rem;
          font-size: 12px;
          color: #999;
        }
      }
    }
  }

  /* 推荐 */

</style>
<style lang="scss">
  #jd {
    min-height: 100vh;
    padding-bottom: 1.35rem;
    .appTabscenter {
      .mint-swipe{
        padding:0
      }
      .mint-swipe-indicators {
        transform: translate(-50%, 150%);
        .mint-swipe-indicator {
          width: .15rem;
          height: .15rem;
          background: rgba(0, 0, 0, .3) !important;
          opacity: 1 !important;
          &.is-active {
            background: #fff !important;
          }
        }
      }
    }
    .banner {
      .mint-swipe-indicators {
        transform: translate(-50%, -50%);
        .mint-swipe-indicator {
          width: .2rem;
          background: #fff;
          height: .048667rem;
          opacity: 0.6;
          &.is-active {
            background: transparent;
            border: .036rem solid #fff;
            width: .16rem !important;
            opacity: 1 !important;
            height: .16rem !important;
            border-radius: 50%;
            vertical-align: bottom;
          }
        }
      }
    }

  }

</style>
<template>
  <div id="jd" class="jd">
    <!-- 搜索栏 -->
    <load-more @translate-change="translateChange" style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="recommendParam"
      :loadMoreIconVisible="false" ref="recommendLoadmore" v-if="cmsData">
      <!-- <scroller class="cmsScroll" refreshLayerColor="#999" refreshText="下拉刷新..." :snapping="true" :onRefresh="onRefreshCallback" ref="cmsScroll" width="100%" height="100%"> -->
      <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
        slot="refresh-spinner">更新中...</span>
      <!-- banner -->
      <mt-swipe :stopPropagation="true" :prevent="true" :auto="5000" class="banner2">
        <mt-swipe-item v-for="(item,index) in swiper" :key="index">
          <img :src="item.imageUrl" :alt="item.name">
        </mt-swipe-item>
      </mt-swipe>
      <!-- banner -->
      <!-- tabBanner -->
      <homeMenu :items="homeMenus"></homeMenu>
      <MapPositioning>
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
      </MapPositioning>
      <!-- 底部资讯 -->
      <homeActiviti v-for="(item,index) in homeActivitis" :item="item"></homeActiviti>
      <!-- 底部资讯 -->
      <!-- 特色推荐 -->
      <homeColumn v-for="(info,index) in columns" :secondColumns="secondColumnMap[info.id]" :fisrtColumns="fisrtColumnMap[info.id]" :info="info"></homeColumn>
      <!-- 为您推荐 -->
      <div class="floor recommend" style="top:0rem;">
        <div class="gray-text">
          <span class="gray-layout">
            <span class="gray-text-img">
              <img src="../../assets/jd/images/recommend.png" alt="">
            </span>为您推荐
          </span>
        </div>
        <ul class="find-recommend-product">
          <li class="recommend-item" @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in recommendData" :key="index">
            <div class="item-posre">
              <img v-lazy.jd="item.image_url[0].url" alt="">
            </div>
            <p class="item-product-text">{{item.productName}}</p>
            <p class="item-product-info">
              <span>&yen;</span>{{item.price}}</p>
            <p class="item-product-praise">好评率100%</p>
          </li>
        </ul>
      </div>
    </load-more>
    <!-- 为您推荐 -->
    <!--<FooterView/>-->
    <BackHead/>
    <Home-Footer></Home-Footer>
  </div>
</template>
<script>
  import HomeFooter from '../../pages/footer'
  import FooterView from '../../components/footer/footerView';
  import BackHead from '../../components/common/backHead';
  import axios from 'axios';
  import homeActiviti from './component/homeActiviti';
  import homeMenu from './component/homeMenu';
  import MapPositioning from './component/MapPositioning'
  import wx from 'weixin-js-sdk'
  import {
    showBack
  } from '../../utils/mixin';
  import {
    getRecommend,
    getArticle,
    getHomeColumn,
    getGoodsCategoryList,
    getUserInfoByOpenId,
    getWechatOpenid,
    getAdPositionDetail,
    getJsTicket,
    getHomeMenus,
    getHomeActivitis
  } from '../../api/api';
  import marquee from '../../components/common/marquee/marquee';
  import marqueeItem from '../../components/common/marquee/marquee-item';
  import SearchBar from '../../components/common/searchBar';
  import LoadMore from '../../components/common/loadMore';
  import homeColumn from './component/homeColumn';

  import {
    Swipe,
    SwipeItem,
    Lazyload,
  } from 'mint-ui';
  import {
    mapGetters,
    mapMutations
  } from 'vuex';
  export default {
    data() {
      return {
        Status: false,
        commad: getRecommend,
        recommendParam: {
          Type: 'recommend',
          pageSize: 10,
          pageIndex: 1
        },
        recommendData: [],
        cmsData: null,
        searchBarVisilbe: true,
        swiper:[],
        columns:[],
        fisrtColumnMap:{},
        secondColumnMap:{},
        homeMenus:[],
        homeActivitis:[]
      };
    },
    created(){
      getHomeColumn({enable:1,asc:true,ascs:"orderBy",current:1,size:10}).then(res=>{
        console.log(res)
      this.columns=res.data.data.columns.records;
      this.fisrtColumnMap=res.data.data.fisrtColumnMap;
      this.secondColumnMap=res.data.data.secondColumnMap;
    });
      getHomeMenus({enable:1,asc:true,ascs:"orderBy",current:1,size:10}).then(res=>{
        this.homeMenus=res.data.data.records;
      });
      getHomeActivitis({enable:1,asc:true,ascs:"orderBy",current:1,size:10}).then(res=>{
        this.homeActivitis=res.data.data.records;
      });
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
        'openCard']
      wx.config(res.data.data);
      wx.ready(()=>{
      });
      wx.error(function(res){
        console.log('wx err',res);
        //可以更新签名
      });
    })
    },
    watch: {},
    components: {
      FooterView,
      BackHead,
      Swipe,
      SwipeItem,
      marquee,
      marqueeItem,
      SearchBar,
      LoadMore,
      HomeFooter,
      MapPositioning,
      homeColumn,
      homeActiviti,
      homeMenu
    },
    computed: {
    },
    methods: {
      translateChange(y){ //监听下拉的阈值
        this.searchBarVisilbe = y>8 ? false : true;
      },
      async onRefreshCallback() { //下拉刷新
        this.recommendParam.pageSize = 10;
        this.recommendParam.pageIndex = 1;
        this.updatedData();
        setTimeout(() => {
          this.$refs.recommendLoadmore.onTopLoaded(this.$refs.recommendLoadmore.uuid);
        }, 1000);
      },
      async infiniteCallback(response) { //加载更多
        if (response.Data.length > 0) {
          response.Data.map(i => {
            this.recommendData.push(i)
          })
        }
      },
      async updatedData() { //更新数据
        // let {
        //   Data
        // } = await this.$store.dispatch('GetIndexCmsData', {
        //   pageIndex: 1,
        //   pageSize: 100
        // });
        // this.cmsData = Data;

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
  initData() { //初始化数据
    axios.get("/static/index.json").then(res=> {
      this.cmsData = res.data.Data;
    });
    getAdPositionDetail({"adPositionId":1,"enabled":1}).then(res=>{
      this.swiper=res.data.data
  });
    // getHomeColumn({enable:1,asc:true,ascs:"orderBy",current:1,size:10}).then(res=>{
    //     console.log(res)
    //     this.columns=res.data.data.columns.records;
    //     this.fisrtColumnMap=res.data.data.fisrtColumnMap;
    //     this.secondColumnMap=res.data.data.secondColumnMap;
    //
    // });
        // if (!this.indexCmsData) {
        //   this.updatedData();
        // } else {
        //   this.cmsData = this.indexCmsData.Data;
        // }
  },
  goPath(i){
        this.$router.push(i)
  }
    },
    beforeDestroy() {},
    mounted: function () {
      this.initData();
      showBack(status => {
        this.Status = status;
      })
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
