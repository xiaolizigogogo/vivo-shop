<!-- orderList -->
<style lang="scss" scoped>
  @import '../../../assets/common/css/mixin.scss';

  .my-order {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
      @include flexbox(space-between,
        center,
        row,
        nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('../../../assets/jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('../../../assets/jd/images/searchIcon.png') no-repeat;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        background-position: -2.6rem 0;
      }
    }
    .topnav {
      display: flex;
      flex: 1;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      flex-wrap: nowrap;
      margin: 0;
      z-index: 111;
      position: relative;
      #loadingbar {
        position: absolute;
        transition: .4s;
        width: calc((100% / 8));
        background: red;
        bottom: 0;
        height: 2px;
      }
      > span {
        width: 33.33%;
        padding: 12px 0;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        background: #fff;
      }
      .active {
        color: red;
      }
    }
  }

</style>

<template>
  <div class="my-order">
    <div class="my-header">
      <i class="back" @click="$router.go(-1)"></i>
      <strong>预约大厅</strong>
      <i class="myMsg"></i>
    </div>
    <Home-Service  v-for="(item,index) in list" :key="index" :item="item" :productTypes="productTypes"/>
    <Home-Footer></Home-Footer>
  </div>
</template>

<script>
  import HomeFooter from '../../../pages/footer'
  import HomeService from '../../home/component/HomeService'
  import { getProductTypes,getUserInfoByOpenId, getGoods, getCategory, getWechatUserInfo, getWechatOAuth2UserInfo, getWechatOpenid,getAdPositionDetail,getJsTicket,unifiedOrder,getAdmins} from '../../../api/api'
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
      HomeFooter,
      HomeService
    },
    created(){
    },
    mounted:function(){
      document.title = '预约'
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
  @import '../../../fon/fontHome/iconfont.css'
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

