<template>
  <div class="pay">
    <div class="pay-address" @click="goaddress"  v-if="address">
      <div>
        <p class="main-address-per">收货人:<span>王先生</span></p>
        <p class="main-address-tel">15985698749</p>
      </div>
      <p>收货地址:<span>河南省郑州市中原区秦岭路8号院59号单元28层15号东户第三家</span></p>
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
    height:120vw;
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
import {unifiedOrder} from '../../api/api'
export default {
  name: "pay",
  data() {
    return {
      listIndex: 0,
      invoiceIndex: 0,
      pay: undefined,
      order:undefined,
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
      this.$router.push({path:"/address"})
    },
    addOrder() {
      var _this = this;
        var data = {
          orderSn:_this.order.orderSn
        };
      axios.post("/shop/orders/",data).then(function(res) {
        if(res,data.status==200){
          this.params.totalFee=res.data.data.order.orderPrice*100;
          this.params.openid=JSON.parse(sessionStorage.getItem("userInfo")).openId;
          this.params.attach=JSON.stringify({orderType:"TRADE_ORDER_PAY",orderNo:res.data.data.order.orderSn})
          this.pay();
        }
        else{
          alert("创建订单失败")
        }
      })
      },
    init(){
      var _this=this
      axios.get("/shop/orders/preOrder",{userId:125}).then(function(res) {
        _this.order=res.data.data.order
        _this.pay=res.data.data.orderGoods
      })
    },
    payConfirm () {
      if (this.pay) { //还未提交了订单,数据还未清空
        MessageBox.confirm(`确定支付${this.order.orderPrice}元`).then(action => {this.addOrder()},function (err) {});
      }else { //提交了订单,数据清空
        alert('请勿重复提交订单')
      }
    },
    pay(){
      let params=this.params
      // alert(JSON.stringify(params))
      unifiedOrder(params).then(res=>{
        // alert(JSON.stringify(res))
        wexinPay(res.data.data,this.success(),this.error())
      })
    },
  },
  created() {
    var id = this.$route.query.id;
    var value = this.$route.query.value;
    this.init()
    document.title = '结算'
    if(sessionStorage.getItem("address")!=undefined){
      this.address=JSON.parse(sessionStorage.getItem("address"))
    }
    },
  mounted(){


  }
};
</script>


