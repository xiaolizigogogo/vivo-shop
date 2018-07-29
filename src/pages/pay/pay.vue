<style lang="scss" scoped>
  @import '../../assets/common/css/mixin.scss';
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
      background: url('../../assets/jd/images/arrow-left.png') no-repeat;
      background-size: 100%;
    }
    strong {
      font-size: 18px;
      font-weight: normal;
      color: #333;
    }
    .myMsg {
      display: block;
      background: url('../../assets/jd/images/searchIcon.png') no-repeat;
      background-size: 600% 100%;
      height: .65rem;
      width: .65rem;
      background-position: -2.6rem 0;
    }
  }
  .buy_checkout {
    overflow: hidden;
    position: relative;
    background-color: #f7f7f7;
    margin-bottom: 15px;
    padding-top: 15px;
  }
  .buy_checkout li .content {
    position: relative;
    display: block;
    text-align: right;
    font-size: 12px;
    color: #666;
    padding: 13px 30px 13px 75px;
  }
  .buy_checkout li em {
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    color: #e93b3d;
  }
  .buy_checkout li strong {
    display: inline-block;
    font-weight: 400;
    position: absolute;
    left: 10px;
    top: 11px;
    font-size: 16px;
    color: #333;
  }
  .buy_checkout li a.content:after {
    content: "";
    display: inline-block;
    vertical-align: middle;
    margin-top: -2px;
    width: 6px;
    height: 10px;
    /*background-image: url(data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2…8c.4.4.6 1 .6 1.4 0 .5-.2 1-.6 1.4l-8 8c-.4.4-1 .6-1.4.6z%22/%3E%3C/svg%3E);*/
    background-repeat: no-repeat;
    background-size: 100%;
    position: absolute;
    right: 10px;
    top: 50%;
    margin-top: -5px;
  }
  .buy_checkout li {
    position: relative;
    overflow: hidden;
    background-color: #fff;
  }
</style>

<template>
  <div class="pay">
    <div class="my-header">
      <i class="back" @click="$router.go(-1)"></i>
      <strong>确认订单</strong>
      <i class="myMsg"></i>
    </div>
    <div class="pay-address" @click="goaddress"  v-if="address">
      <div>
        <p class="main-address-per">收货人:<span>{{submitForm.userName}}</span></p>
        <p class="main-address-tel">{{submitForm.mobile}}</p>
      </div>
      <p>收货地址:<span>{{submitForm.address}}</span></p>
    </div>
    <div @click="goaddress" class="pay-address" v-if="!address" >
      <p class="address-box">
        请选择收货地址
      </p>
    </div>

    <div class="pay-product">
      <ul v-if="!confirm">
        <li  v-for="(list,index) in pay" :key="index">
          <a>
            <img :src="list.listPicUrl" alt="">
            <div>
              <h2><span style="color:#ee7150">{{list.goodsName}}</span>× {{list.number}}</h2>
              <p>¥ {{list.marketPrice}}</p>
            </div>
          </a>
        </li>
      </ul>
      <!-- 支付成功后的提示 -->
      <div class="pay-confirm" v-else>
        支付成功!!!</br>
        当页面数据清空</br>
        购物车列表重新设置
      </div>
    </div>
    <div class="buy_checkout" id="buyDiscountArea">
      <ul>
        <li id="tabPromotionList" @click="handleSingleLinePicker">
          <a href="javascript:void(0);" class="content"> <strong>优惠券</strong>
            <em> &nbsp;{{couponInfo}}</em>
          </a>
        </li>
      </ul>
    </div>
    <h3 class="pay-allpay">
      商品总金额 : <i>￥</i><span>{{order.orderPrice}}</span><br>
      优惠 : <i>￥</i><span>{{order.couponPrice}}</span><br>
      赠送积分 : <i></i><span>{{order.actualPrice}}</span><br>
      总需要支付 : <i>￥</i><span>{{order.actualPrice}}</span>
    </h3>
    <footer class="pay-footer" ontouchstrat="" @click="payConfirm">
      <span>立即支付</span>
    </footer>


  </div>
</template>
  <style lang="less" scoped>
  @import "../../assets/fz.less";
  .pay {
    width: 100%;
    background-color: #f7f7f7;
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    .pay-address {
      background-color: #fff;
      border-bottom: 1 * 10vw/75 solid #dedede;
      padding: 6vw;

      > div {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        justify-content: space-between;

        p {
          color: #868686;
  .fz(font-size,32px);
  }
  }

  > p {
  .fz(font-size,28px);
  color: #868686;
  padding-top: 30 * 10vw/75;
  letter-spacing: 3 * 10vw/75;
  line-height: 45 * 10vw/75;
  }
  }
  .pay-product {

    /*height:60vw;*/
    /*overflow: auto;*/
    background-color: #f7f7f7;
    ul{
      padding-top: 2vw;
    }
    li {
      background-color: #fff;
      a {
        display: -webkit-flex;
        display: -ms-flex;
        display: flex;
        box-sizing: border-box;
        padding: 20 * 10vw/75 30 * 10vw/75;
        color: #4d4d4d;

  .fz(font-size,30px);
  border-bottom: 1 * 10vw/75 solid #dedede;

  > img {
    display: block;
    width: 2.5 * 10vw;
    height: 2.5 * 10vw;
  }

  > div {
    box-sizing: border-box;
    padding-left: 50 * 10vw/75;
    width: 70%;
    h2 {
      padding-top: 0.09 * 10vw;
      overflow: hidden;
      word-break: normal;
      /*white-space: nowrap;*/
      text-overflow: ellipsis;
    }

    p {
      text-align: right;
  .fz(font-size,24px);
  padding-top: 1.4 * 10vw;
  }
  }
  }
  }
  }

  .pay-allpay {
    text-align: right;
    margin-top: 6vw;
    padding: 4vw 5vw;
  .fz(font-size,32px);
  color: #999999;
  background-color: #fff;
  i,
  span {
    color: @cl;
  }
  }

  .pay-footer {
    /*position: fixed;*/
    bottom: 0;
    left: 0;
    width: 100%;
    padding-top: 4vw;
    padding-bottom: 4vw;
    span {
      display: block;
      width: 85%;
      background-color: #fd729c;
      border-radius: 1.3vw;
      color: #fff;
      font-size: 17px;
      padding: 4vw;
      margin: 0 auto;
      text-align: center;
      &:active {
        background-color: @cl;
      }
    }
  }

  .pay-confirm {
    padding: 20px 0;
    background-color: @cl;
    text-align: center;
    color: #fff;
    line-height: 30px;
  .fz(font-size,40);
  }
  }
</style>


<script>
import { Toast } from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
import axios from "axios";
import { MessageBox } from 'mint-ui';
import wexinPay from '../pay/wxPayComponent'
import {fmoney} from '../../api/global'
import {unifiedOrder,addOrder,preOrder,getJsTicket} from '../../api/api'
import wx from 'weixin-js-sdk'
export default {
  name: "pay",
  data() {
    return {
      listIndex: 0,
      invoiceIndex: 0,
      pay: [],
      order:{orderPrice:0},
      confirm:false,
      params:{
        userId:"",
        openid:"",
        totalFee:"1",
        body:"订单支付",
        tradeType:"JSAPI",
        money:undefined,
        couponId:undefined
      },
      couponInfo:"请选择",
      submitForm:{

      },
      lists: [
        {
          id: "1",
          name: "在线支付"
        },
        {
          id: "2",
          name: "花呗分期"
        },
        {
          id: "3",
          name: "货到付款"
        }
      ],
      text: "",
      ly: "",
      address:undefined,
      timeArray:[
        {
          label:'请选择',
          defaultLabel:'请选择',
          value:undefined
        },
      ],
      couponsArray:[
        {
          label:'请选择',
          defaultLabel:'请选择',
          value:undefined
        },
      ],
      coupons:[]
    };
  },
  components: {

  },
  methods: {
    handleSingleLinePicker(){
      let that = this
      weui.picker(this.couponsArray, {
        className: 'custom-classname',
        container: 'body',
        defaultValue: [0],
        onChange: function (result) {
        },
        onConfirm: function (result) {
          that.couponInfo = result[0].label
          that.params.couponId = result[0].value
          that.submitForm.couponId = result[0].value
          that.refresh()
        },
        id: 'singleLinePicker'
      });
    },
    btn(id, index) {
      this.listIndex = index;
    },
    invoiceClick(index) {
      this.invoiceIndex = index;
    },
    goaddress(){
      var _this = this;
        wx.openAddress({
          trigger: function (res) {
          },
          success: function (res) {
            _this.submitForm.userId=_this.params.userId
            _this.submitForm.openid=_this.params.openid
            _this.submitForm.userName=res.userName;
            _this.submitForm.mobile=res.telNumber;
            _this.submitForm.province=res.provinceName;
            _this.submitForm.city=res.cityName;
            _this.submitForm.country=res.countryName;
            _this.submitForm.district=res.detailInfo;
            _this.submitForm.address=res.provinceName+" "+res.cityName+" "+res.countryName+" "+res.detailInfo;
            _this.address=_this.submitForm.address;
          },
          cancel: function (res) {
            alert('用户取消拉出地址');
          },
          fail: function (res) {
            alert('拉出地址失败');
          }
        });
    },
    addOrder() {
      var _this = this;
      if(_this.submitForm.address==null){
        alert("请选择收获地址");
        return
      }
      addOrder(_this.submitForm).then(function(res) {
        if(res.data.status==200){
          _this.params.totalFee=res.data.data.order.actualPrice*100;
          _this.params.attach=JSON.stringify({orderType:"订单支付",orderNo:res.data.data.order.orderSn})
          _this.payOrder();
        }
        else{
          alert("创建订单失败")
        }
      })
      },
    init(){
      var _this=this
       _this.couponsArray=_this.timeArray;
      preOrder({userId:JSON.parse(localStorage.getItem("user")).id}).then(function(res) {
        if(res.data.status==200) {
          _this.order = res.data.data.order
          _this.order.orderPrice=fmoney(_this.order.orderPrice);
          _this.order.couponPrice=fmoney(_this.order.couponPrice);
          _this.order.actualPrice=fmoney(_this.order.actualPrice);
          _this.pay = res.data.data.orderGoods
          _this.coupons=res.data.data.coupons;
          _this.coupons.forEach(item=>{
            let info={
              label:"满¥"+item.minGoodsAmount+"减"+item.typeMoney+"元",
              value:item.id
            }
            _this.couponsArray.push(info)
          })
        }
        else{
          _this.pay=[]
          alert(res.data.exception)
        }
      })
    },
    refresh(){
      var _this=this
      preOrder({userId:JSON.parse(localStorage.getItem("user")).id,couponId: _this.params.couponId}).then(function(res) {
        if(res.data.status==200) {
          _this.order.orderPrice=fmoney(res.data.data.order.orderPrice);
          _this.order.couponPrice=fmoney(res.data.data.order.couponPrice);
          _this.order.actualPrice=fmoney(res.data.data.order.actualPrice);
        }
        else{
          _this.pay=[]
          alert(res.data.exception)
        }
      })
    },
    payConfirm () {
      if (this.pay) { //还未提交了订单,数据还未清空
        MessageBox.confirm(`确定支付${this.order.actualPrice}元`).then(action => {this.addOrder()},function (err) {});
      }else { //提交了订单,数据清空
        alert('请勿重复提交订单')
      }
    },
    payOrder(params){
      var _this=this
      unifiedOrder( _this.params).then(res=>{
        wexinPay(res.data.data,_this.success(),_this.error())
        this.$router.push({path:"/order"})
      })
    },
    success(){},
    error(){},
  },
  created() {
    var id = this.$route.query.id;
    var value = this.$route.query.value;
    this.init()
    document.title = '结算'
    if(sessionStorage.getItem("address")!=undefined){
      this.address=JSON.parse(sessionStorage.getItem("address"))
    }
    this.params.openid=JSON.parse(localStorage.getItem("user")).weixinOpenid;
    this.params.userId=JSON.parse(localStorage.getItem("user")).id;
    getJsTicket({url:window.signLink}).then(res => {
      res.data.data.jsApiList = ['checkJsApi','editAddress']
      wx.config(res.data.data);
      wx.ready(() => {
      });
      wx.error(function (res) {
        alert('wx err', res);
        //可以更新签名
      });
    })
    },
  mounted(){


  }
};
</script>


