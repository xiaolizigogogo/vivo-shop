<template>
  <div class="pay">
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
              <p>¥ {{list.retailPrice}}</p>
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
    <h3 class="pay-allpay">
      商品总金额 : <i>￥</i><span>{{order.orderPrice}}</span><br>
      运费 : <i>￥</i><span>{{order.orderPrice}}</span><br>
      优惠 : <i>￥</i><span>{{order.orderPrice}}</span><br>
      赠送积分 : <i>￥</i><span>{{order.orderPrice}}</span><br>
      总需要支付 : <i>￥</i><span>{{order.orderPrice}}</span>
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

    .pay-address {
      background-color: #fff;
      border-bottom: 1 * 10vw/75 solid #dedede;
      padding: 30 * 10vw/75;

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
    background-color: #fff;
    height:60vw;
    overflow: auto;

    li {
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
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
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
        money:undefined
      },
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
      address:undefined
    };
  },
  components: {

  },
  methods: {
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
          _this.params.totalFee=res.data.data.order.orderPrice*100;
          // _this.params.openid=JSON.parse(localStorage.getItem("user")).weixinOpenid;
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
      preOrder({userId:this.params.userId}).then(function(res) {
        if(res.data.status==200) {
          _this.order = res.data.data.order
          _this.pay = res.data.data.orderGoods
        }
        else{
          _this.pay=[]
          alert(res.data.exception)
        }
        })
    },
    payConfirm () {
      if (this.pay) { //还未提交了订单,数据还未清空
        MessageBox.confirm(`确定支付${this.order.orderPrice}元`).then(action => {this.addOrder()},function (err) {});
      }else { //提交了订单,数据清空
        alert('请勿重复提交订单')
      }
    },
    payOrder(params){
      var _this=this
      unifiedOrder( _this.params).then(res=>{
        // alert(JSON.stringify(res))
        wexinPay(res.data.data,_this.success(),_this.error())
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
      alert(JSON.stringify(res.data.data))
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


