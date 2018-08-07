<template>
    <div class="cart">
        <div class="cartMain">
             <ul>
                <li v-for="(cart, index) in carts" class="cartList" :key="index">
                     <!-- 购物车单选 -->
                     <div class="select" @click="danxuan(cart)" >
                        <i class="iconfont icon-xuanzekuangmoren"   v-show="!cart.checked"></i>
                        <i class="iconfont icon-xuanzekuangxuanzhong" v-show="cart.checked" style="color:#25b5fe"></i>
                    </div>
                    <!-- 购物车商品信息 -->
                     <div class="cartImage">
                        <img :src="cart.listPicUrl" >
                    </div>
                    <div class="cartInformation">
                        <div class="cartName">{{cart.goodsName}}
                            <a href="javascript:;" class="iconfont icon-huishouzhan7"  @click="shanchu(index)" ></a>
                        </div>
                        <p class="cartPrice">￥{{cart.retailPrice}}</p>
                    </div>
                    <!-- 购物车商品数量 -->
                    <div class="cartNumber">
                        <a href="javascript:;" @click="reduce(index)" class="add">-</a>
                        <input type="text"   v-model="cart.number" readonly="readonly"/>
                        <a href="javascript:;" @click="add(index)" class="reduce">+</a>
                    </div>
                </li>
            </ul>
        </div>
        <div class="cartImg" v-if="!carts.length">
            <img src="/static/img/gouwuche.png" alt="购物车图片">
            <h1>购物车是空的哦，快去购物吧</h1>
            <router-link :to="{name:'Home'}">逛一逛</router-link>
        </div>
        <div class="cartFooter"  v-if="carts.length>0">
            <div class="checkAll" @click="quanxuan()" >
                <i class="iconfont icon-xuanzekuangmoren" v-show="!qx"></i>
                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="qx" style="color:#25b5fe"></i>
                <span>全选</span>
            </div>
        </div>
      <v-footer :count="sumValue" :allpay="sum"/>
    </div>
</template>
<script>
  import Footer from './footer'
import { Toast } from "mint-ui";
import { mapState, mapMutations, mapGetters } from "vuex";
import {getCarts} from '../../api/api'
import HomeFooter from '../../pages/footer'
import {addCart,updateCart,deleteCart,addOrder} from '../../api/api'
export default {
  name: "cart",
  data() {
    return {
      qx: false,
      checkedGoodsList: [],
      checkedAddress: {},
      checkedCoupon: [],
      couponList: [],
      goodsTotalPrice: 0.00, //商品总价
      freightPrice: 0.00,    //快递费
      couponPrice: 0.00,     //优惠券的价格
      orderTotalPrice: 0.00,  //订单总价
      actualPrice: 0.00,     //实际需要支付的总价
      addressId: 1,
      couponId: 0,
      params:{

      },
      carts:[],
      ids:[]
    };
  },
  components: {
    HomeFooter,
    'v-footer':Footer
  },
  mounted:function(){
    this.params.userId=JSON.parse(localStorage.getItem("user")).id
    getCarts(this.params).then(res=>{
      this.carts=res.data.data
    })
    document.title = '购物车'
  },
  computed: {
    ...mapGetters(["this.$store.state.carts"]),
    sum: function() {
      var sum = 0;
      this.carts.forEach(cart => {
        if (cart.checked) {
          sum += cart.marketPrice * cart.number;
        }
      });
      return sum;
    },
    sumValue() {
      var sumValue = 0;
      this.carts.forEach(cart => {
        if (cart.checked) {
          sumValue += parseInt(cart.number);
        }
      });
      return sumValue;
    }
  },
  methods: {
    add(cart){
      let item=this.carts[cart]
      item.number++
      updateCart(item)
    },
    reduce(cart){
      let item=this.carts[cart]
      item.number--
      updateCart(item)
    },
    shanchu(cart){
      let item=this.carts[cart]
      this.carts.splice(cart,1)
      deleteCart(item)
    },
    danxuan(cart) {
      cart.checked = !cart.checked;
      updateCart(cart)
      if (!cart.checked) {
        this.qx = false;
      }
    },
    quanxuan() {
      this.qx = !this.qx;
      if (this.qx) {
        this.carts.forEach(cart => {
          cart.checked = true;
          updateCart(cart)
        })
      } else {
        this.carts.forEach(cart => {
          cart.checked = false;
          updateCart(cart)
        })
      }
    },
    settlement(){
      if (this.addressId <= 0) {
        alert('请选择收货地址');
        return false;
      }
      addOrder( { addressId: this.addressId, couponId: this.couponId ,userId:14}).then(res => {
        if (res) {
          const orderId = res.data.data.id;
          // pay.payOrder(parseInt(orderId)).then(res => {
          //   wx.redirectTo({
          //     url: '/pages/payResult/payResult?status=1&orderId=' + orderId
          //   });
          // }).catch(res => {
          //   wx.redirectTo({
          //     url: '/pages/payResult/payResult?status=0&orderId=' + orderId
          //   });
          // });
        } else {
          // util.showErrorToast('下单失败');
        }
      });
    }
  }
};
</script>

<style>
.select {
  float: left;
  padding-left: 0.5rem;
}
.select i {
  font-size: 0.53rem;
}
.checkAll {
  width: 24%;
  line-height: 1.18rem;
  float: left;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.checkAll i {
  font-size: 0.53rem;
  padding-left: .5rem;
}
.cart {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  top: 0;
  left: 0;
  background: #f4f4f4;
}
.cartheader {
  position: fixed;
  width: 100%;
  box-shadow: 0 0 10px #cecece;
  height: 1.3rem;
  line-height: 1.3rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  background: white;
  top: 0;
  font-size: 0.41rem;
}
.cartheader i {
  display: block;
  float: left;
  height: 50px;
  font-size: 0.71rem;
  color: black;
  width: 0.9rem;
}
.cartList {
  width: 100%;
  height: 4rem;
  background: white;
  margin-top: 0.04rem;
}
.cartMain {
  margin-bottom: 1.24rem;
}
.cartMain ul li {
  list-style: none;
}
.cartImage img {
  width: 2.6rem;
  height: 2.8rem;
}
.cartImage {
  float: left;
  padding: 0.5rem 0.3rem;
}
.cartInformation {
  width: 7.7rem;
  font-size: 0.35rem;
  padding-left: 0.3rem;
  padding-top: 0.6rem;
}
.cartPrice {
  color: red;
  margin-top: 0.2rem;
  font-size: 0.4rem;
}

.cartNumber {
  float: left;
  margin-top: 0.3rem;
}
.cartNumber .add,
.cartNumber .reduce {
  display: block;
  width: 0.75rem;
  height: 0.75rem;
  line-height: 0.75rem;
  border: 1px solid #dedede;
  float: left;
  color: #b2b2b2;
  text-align: center;
  font-size: 0.5rem;
}
.cartNumber input {
  width: 0.96rem;
  height: 0.76rem;
  float: left;
  text-align: center;
  border: 1px solid #dedede;
}
.cartNumber .add {
  border-right: none;
}
.cartNumber .reduce {
  border-left: none;
}
.cartFooter {
  position: fixed;
  width: 100%;
  height: 1.5rem;
  font-size: 0.35rem;
  background: white;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f4f4f4;
}
.cartImg img {
  width: 4.4rem;
  height: 5.2rem;
  display: block;
  margin: auto;
  padding-top: 1.5rem;
}
.cartImg a {
  display: block;
  text-align: center;
  margin: 0.8rem auto;
  width: 110px;
  height: 37px;
  line-height: 37px;
  border-radius: 4px;
  text-align: center;
  background: #e0524b;
  color: white;
  font-weight: 800;
  font-size: 0.5rem;
}
.cartName {
  width: 9.3rem;
  font-size: 0.36rem;
}
.cartName a {
  color: black;
  font-size: 0.57rem;
  float: right;
}
.cartImg h1 {
  margin-top: 0.5rem;
  text-align: center;
  color: #959595;
  font-size: 0.6rem;
}
._box {
  width: 63%;
  height: 100%;
  float: left;
}
.Total {
    float: left;
    width: 35%;
    font-size: 0.35rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.Settlement {
  width: 34%;
  background: #f81200;
  float: right;
  margin-top: .1rem;
  border-radius: 40px;
  margin-right: 0.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.Settlementtwo {
  width: 50%;
  height: 100%;
  background: #e3211e;
  float: right;
}
.Settlement a,
.Settlementtwo a {
  color: white;
  text-align: center;
  line-height: .98rem;
  display: block;
  font-size: 0.35rem;
}
</style>
