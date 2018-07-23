<!-- orderList -->
<style lang="scss" scoped>
  @import '../assets/common/css/mixin.scss';
  .paymentLoading {
    position: fixed;
    @include flexbox(center,
      center,
      row,
      nowrap);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    img {
      background: rgba(0, 0, 0, .6);
      width: 3rem;
    }
  }

  .paymentContainer {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, .4);
    @include flexbox(center,
      center,
      row,
      nowrap);
    .content {
      width: 85%;
      background: #fff;
      border-radius: 10px;
      >button {
        width: 60%;
        margin: 20px auto;
        background: $red;
      }
      >a {
        margin: 5px 0;
        padding: 0 15px;
      }
      .title {
        @include flexbox(center,
          center,
          row,
          nowrap);
        position: relative;
        padding: 15px;
        border-bottom: 1px solid #eee;
        strong {
          font-size: 20px;
        }
        .closeIcon {
          display: block;
          background: url('../assets/jd/images/product-detail-sprites-mjs.png') no-repeat;
          width: 25px;
          height: 25px;
          background-position: -38px -19px;
          background-size: 150px;
          vertical-align: -8px;
          position: absolute;
          left: 10px;
        }
      }
      .paymentInfo {
        padding: 15px;
        border-bottom: 1px solid #eee;
        @include flexbox(flex-start,
          center,
          column,
          wrap);
        font-size: 20px;
        span {}
        strong {
          font-size: 40px;
          font-weight: 400;
          margin: 10px 0 0;
        }
      }
    }
  }

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
        background: url('../assets/jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background: url('../assets/jd/images/searchIcon.png') no-repeat;
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
        width: calc((100%/8));
        background: red;
        bottom: 0;
        height: 2px;
      }
      >span {
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
    .order-container {
      height: auto;
      ._v-container {
        // background: #fff;
      }
      .order-nomore-tip {
        margin-top: 50px;
        @include flexbox(space-between,
          center,
          column,
          wrap);
        i {
          display: block;
          width: 60px;
          height: 60px;
          background: url('../assets/jd/images/order.png') no-repeat;
          background-size: 100%;
        }
        span {
          font-size: 17px;
          font-weight: normal;
          padding: 30px 0;
          color: $gray;
        }
      }
      .all-order {
        background: #f5f5f5;
      }
      .order-list {
        background: #fff;
        margin-top: $margin;
        .order-item {
          margin-top: 10px;
          .order-top {
            padding: $padding;
            @include flexbox(space-between,
              center,
              row,
              nowrap);
            .left {
              text-align: left;
              img {
                width: 15px;
                height: 15px;
                vertical-align: bottom;
              }
              span {
                font-size: $subtitle;
                color: #333;
                margin-left: 5px;
              }
            }
            .right {
              .order-status {
                color: $red;
                font-size: $subtitle;
              }
            }
          }
          .order-product-list {
            @include flexbox(flex-start,
              flex-start,
              column,
              wrap);
            .order-product-item {
              padding: $padding;
              width: 100%;
              >div {
                @include flexbox(flex-start,
                  flex-start,
                  row,
                  nowrap);
                width: 100%;
                img {
                  max-width: 80px;
                  max-height: 80px;
                  border: 1px solid #eee;
                }
                .product-info {
                  margin-left: $margin;
                  .prod-price {
                    font-size: 14px;
                    strong {
                      font-size: 15px;
                      color: $red;
                    }
                    @include flexbox(space-between,
                      center,
                      row,
                      nowrap);
                  }
                  p {
                    @include textoverflow(3);
                    font-size: $subtitle;
                    margin: $margin 0;
                    color: #333;
                  }
                }
              }
            }
          }
          .order-sku {
            background: #fff;
            padding: 8px $padding;
            text-align: right;
            font-size: $subtitle;
            border-bottom: 1px solid #eee;
            color: #333;
            strong {
              font-size: 17px;
              color: $red;
            }
          }
          .order-btn-group {
            border-bottom: 4px solid #eee;
            @include flexbox(flex-end,
              center,
              row,
              nowrap);
            padding: 5px $padding;
            >span {
              padding: 5px 20px;
              color: $red;
              font-size: $subtitle;
              border: 1px solid $red;
              border-radius: 2px;
            }
          }
        }
      }
    }
  }

</style>

<template>
  <div class="my-order">
    <div class="my-header">
      <i class="back" @click="$router.go(-1)"></i>
      <strong>我的订单</strong>
      <i class="myMsg"></i>
    </div>
    <div class="topnav">
      <span @click.stop.prevent="switchTabs(0)" :class="{'active':active===0}">全部</span>
      <span @click.stop.prevent="switchTabs(1)" :class="{'active':active===1}">待付款</span>
      <span @click.stop.prevent="switchTabs(2)" :class="{'active':active===2}">待收货</span>
      <span @click.stop.prevent="switchTabs(3)" :class="{'active':active===3}">已完成</span>
      <span @click.stop.prevent="switchTabs(4)" :class="{'active':active===4}">已取消</span>
      <div id="loadingbar" :style="active===0 ? 'left:4%' : active===1 ?  'left:24%' : active===2 ?'left:44%' : active===3 ? 'left:64%' : 'left: 84%'"></div>
    </div>
    <div class="order-container">
      <load-more style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="params" :loadMoreIconVisible="false" ref="orderLoadmore">
        <span style="-webkit-transform: scale(.9)!important;transform: scale(.9)!important;position:  absolute;top: 45%;left: 45%;font-size:  12px;font-weight: normal;text-shadow:  none;box-shadow:  none;"
              slot="refresh-spinner">更新中...</span>
        <!-- 全部订单 -->
        <div class="all-order" v-if="orderList">
          <div class="order-list">
            <div class="order-item" v-for="(item,index) in orderList" :key="index">
              <div class="order-top">
                <div class="left">
                  <!--<img src="../assets/jd/images/applist (5).png" alt="">-->
                  <span>订单编号：{{item.order.orderSn}}</span>
                </div>
                <div class="right">
                  <div class="order-status">
                    <span v-if="item.order.orderStatus==0">待付款</span>
                    <span v-if="item.order.orderStatus==1">已付款</span>
                    <span v-if="item.order.orderStatus==2">已发货</span>
                    <span v-if="item.order.orderStatus === 3">已完成</span>
                    <span v-if="item.order.orderStatus === 4">已取消</span>
                  </div>
                </div>
              </div>
              <div class="order-product-list">
                <div class="order-product-item" v-for="(prod,prodindex) in item.orderGoods" :key="prodindex">
                  <div>
                    <img :src="prod.listPicUrl" alt="">
                    <div class="product-info">
                      <p class="prod-name">{{prod.goodsName}}</p>
                      <p class="prod-price">
                        <strong>&yen;{{prod.retailPrice * prod.number}}</strong>
                        <span>x {{prod.number}}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="order-sku">
                <div style="text-align: left"><span>下单时间:{{item.order.addTime}}</span></div>
                <span>共{{item.orderGoods.length}}件商品&nbsp;需支付：</span>
                <strong>&yen;&nbsp;{{item.order.orderPrice}}</strong>
              </div>
              <div class="order-btn-group">
                <span class="payment" v-if="item.order.orderStatus === 0 && item.order.payStatus === 0" @click="payment(item)">去支付</span>
                <span class="payment" v-if="item.order.orderStatus === 2"
                      @click="finishOrder(item)">确认收货</span>
                <span class="payment" v-if="item.order.orderStatus === 2" @click="shipInfo(item)">物流信息</span>
                <span class="payment" v-if="item.order.orderStatus === 0" @click="cancelOrder(item)">取消</span>
                <!--<span class="payment" v-if="item.comment_status === 0 && item.confirm_status === 1 && item.pay_status === 1 && item.finish_status === 1"-->
                      <!--@click="commitMessage(item)">去评论</span>-->
              </div>
            </div>
          </div>

        </div>
        <!-- 全部订单 -->

        <!-- 没有订单 -->
        <div class="order-nomore-tip" v-if="orderList==''">
          <i></i>
        </div>
        <!-- 没有订单 -->
      </load-more>
    </div>
  </div>
</template>

<script>
  import {
    getOrders,unifiedOrder,getOrderExpress,changeOrderStatus
  } from '../api/api';
  import wexinPay from './pay/wxPayComponent'
  import LoadMore from '../components/common/loadMore';
  import {
    Toast,MessageBox
  } from 'mint-ui'
  import {fmoney,formatDateTime} from '../api/global'
  export default {
    data() {
      return {
        commad: getOrders,
        visiblePopup: {
          paymentLoadingVisible: false,
          paymentContainerVisible: false
        },
        paymentPassword: null, //支付密码
        currentOrder: {}, //当前订单
        params: {
          pageSize: 10,
          pageIndex: 1,
          current:1,
          cancel_status: null,
          confirm_status: null,
          pay_status: null,
          finish_status: null,
          userId:JSON.parse(localStorage.getItem("user")).id
        },
        payParams:{
          userId:"",
          openid:"",
          totalFee:"1",
          body:"订单支付",
          tradeType:"JSAPI",
          money:undefined
        },
        orderList: [],
        active: null
      };
    },

    watch: {},

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      payment(item) {
        var _this=this
        MessageBox.confirm('', {
          message: '确认去支付？',
          title: '提示',
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        }).then(action => {
          if (action == 'confirm') {     //确认的回调
            _this.payParams.totalFee=item.order.orderPrice*100;
            _this.payParams.attach=JSON.stringify({orderType:"订单支付",orderNo:item.order.orderSn})
            _this.payParams.openid=JSON.parse(localStorage.getItem("user")).weixinOpenid;
            _this.payParams.userId=JSON.parse(localStorage.getItem("user")).id;
            unifiedOrder( _this.payParams).then(res=>{
              wexinPay(res.data.data,_this.onRefreshCallback(),_this.error())
              this.onRefreshCallback()
            })
          }
        }).catch(err => {
          if (err == 'cancel') {     //取消的回调
          }
        });
      },
      shipInfo(item){
        console.log(item)
        getOrderExpress({orderId:item.order.id}).then(res=>{
          MessageBox.confirm('', {
            message: '快递单号:'+res.data.data.logisticCode+'<br>快递公司:'+res.data.data.shipperName+"<br>发货时间:"+res.data.data.addTime,
            title: '物流信息',
            confirmButtonText: '确认',
            cancelButtonText: '取消'
          }).then(action => {
            if (action == 'confirm') {     //确认的回调
              // this.onRefreshCallback()
            }
          }).catch(err => {
            if (err == 'cancel') {     //取消的回调
            }
          });
        })
      },
      success(){},
      error(){},
      finishOrder(item) { //确认收货
        MessageBox.confirm('', {
          message: '确认收货？',
          title: '提示',
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        }).then(action => {
          if (action == 'confirm') {     //确认的回调
            let params={
              id:item.order.id,
              orderStatus:3
            }
          changeOrderStatus(params).then(res=>{
            this.onRefreshCallback()
          })
          }
        }).catch(err => {
          if (err == 'cancel') {     //取消的回调
          }
        });
      },
      commitMessage(item) { //评论
        this.$router.push(`/review/${item.OrdertNo}`)
      },
      cancelOrder(item) { //确认收货
        MessageBox.confirm('', {
          message: '确认取消？',
          title: '提示',
          confirmButtonText: '确认',
          cancelButtonText: '取消'
        }).then(action => {
          if (action == 'confirm') {     //确认的回调
          let params={
            id:item.order.id,
            orderStatus: 4
          }
          changeOrderStatus(params).then(res=>{
            this.onRefreshCallback()
        })
        }
      }).catch(err => {
          if (err == 'cancel') {     //取消的回调
        }
      });
      },
      async onRefreshCallback() { //下拉刷新
        this.params.pageSize = 10;
        this.params.pageIndex = 1;
        this.params.current = 1;
        this.orderList = [];
    this.params.asc= false;
    this.params.descs="id";
        this.$refs.orderLoadmore.onTopLoaded(this.$refs.orderLoadmore.uuid);
      },
      switchTabs(Id) {
        if (this.active === Number(Id)) return;
        this.active = Id;
        switch (Number(this.active)) {
          case 0: //全部订单
            this.params.shippingStatus = null;
            this.params.payStatus = null;
            this.params.orderStatus = null;
            break;
          case 1: //待付款
            this.params.orderStatus = 0;
            break;
          case 2: //待收货
            this.params.orderStatus = 2;
            break;
          case 3: //已完成
            this.params.orderStatus = 3;
            break;
          case 4: //已取消
            this.params.orderStatus = 4;
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      },
      payByWallet() {
        this.$store.dispatch('PayByWallet', {
          PaymentNo: this.currentOrder.OrdertNo,
          PaymentPassword: this.paymentPassword
        }).then(response => {
          if (response.Code === 0) {
            Toast({
              message: response.Message
            });
            this.visiblePopup.paymentContainerVisible = false;
            this.visiblePopup.paymentLoadingVisible = false;
            setTimeout(() => {
              this.onRefreshCallback();
            }, 1000)
          }
        })
      },
      async infiniteCallback(response) { //加载更多订单
        var _this=this
        console.log(response)
        if (response.data.data.records.length > 0) {
          response.data.data.records.map(i => {
            i.orderPrice = fmoney(i.orderPrice)
            i.order.addTime=formatDateTime(new Date(i.order.addTime*1000))
            _this.orderList.push(i)

          })
        }
      },
    },
    mounted: function () {
      if (this.$route.params.tab != null) return this.switchTabs(Number(this.$route.params.tab))
      this.switchTabs(0)
    }
  }

</script>
<style lang='scss' scoped>


</style>
