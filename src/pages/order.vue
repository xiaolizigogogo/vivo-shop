<template>
  <div class="order" id="transition">
      <OrderHeader title="我的订单"></OrderHeader>
        <div class="orderMain">
            <div  class="order-box">
                <p  v-for="(c,index) in t"
                @click="btn(index)"
                >
                    <a :class="{active:index===nowIndex}">{{c.item}}</a>
                </p>
            </div>
            <div class="order-box2" >
               <div v-show="nowIndex===0">
                     <div v-for="(list,index) in orders" :key="index" class="orders">
                        <div class="_order">
                            <p class="left">
                                <i class="iconfont icon-qijiandian"></i>
                                {{shopName}}
                            </p>
                            <p class="right">{{orderStatus[list.orderStatus]}}</p>
                        </div>
                        <div class="order" >
                            <img :src="list.img">

                            <div class="order-div">
                                <h3>{{list.orderSn}}</h3>
                                <!-- <p class="order-div-color">颜色:黑</p> -->
                                <p class="order-div-price">￥{{list.orderPrice}}</p>
                            </div>
                            <div class="order-div-2">
                                × {{list.value}}
                            </div>
                        </div>
                        <div class="order-2">
                            <div class="order-2-box">
                                <p class="order-2-zero">共计<span>{{list.value}}</span>件商品</p>
                                <p class="order-2-one">总计：<span>￥{{list.actualPrice}}</span></p>
                                <p class="order-2-two">(含运费：¥{{list.freightPrice}}优惠：¥{{list.couponPrice}})</p>
                            </div>
                        </div>
                        <div class="order-3">
                             <a @click.stop="odetails(list)">查看详情</a>
                            <a @click.stop="odefault(index)">订单删除</a>
                        </div>
                    </div>
               </div>

               <div  v-show="nowIndex===1">
                   这里是第待付款
               </div>
            </div>
        </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import {getOrders} from '../api/api';
import OrderHeader from "../common/Header";
export default {
  name: "orders",
  data() {
    return {
      nowIndex: 0,
      t: [
        {
          item: "全部"
        },
        {
          item: "待付款"
        },
        {
          item: "待收货"
        },
        {
          item: "待评价"
        }
      ],
      orderStatus:{
        "0":"待支付"
      },
      orders:[],
      params:{
        current:1,
        size:10,
        userId:14
      }
    };
  },
  components: {
    OrderHeader
  },
  mounted:function(){
    getOrders(this.params).then(res=>{
        console.log(res)
        this.orders=res.data.data.records
  })
  },
  computed: {
    // orders() {
    //   return this.$store.state.orders;
    // }
    shopName(){
      return "官方旗舰店"
    }
  },
  methods: {
    ...mapMutations(["odefault"]),
    btn(num) {
      this.nowIndex = num;
    },
    odetails(list){
        this.$router.push({
            path: "OrderDetails",
            query:{
                id:list.id,
                text:list.text,
                ly:list.ly,
                listname:list.listname,
                value:list.value
            }
        })
        console.log(list)
    },
    refresh(done) {
      setTimeout(() => {
        var start = this.top - 1
        for (var i = start; i > start - 10; i--) {
          this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
        }
        this.top = this.top - 10
        done()
      }, 1500)
    },
    infinite(done) {
      setTimeout(() => {
        var start = this.bottom + 1
        for (var i = start; i < start + 10; i++) {
          this.items.push(i + ' - keep walking, be 2 with you.')
        }
        this.bottom = this.bottom + 10
        done()
      }, 1500)
    }
  }
};
</script>


<style lang="stylus" scoped>
.orderMain
    padding-top 1.3rem
.order-box
    height 1rem
    background white
    position fixed
    width 100%
    border-bottom 1px solid #f0f0f0
    .active
        color #199cfe
        border-bottom 2px solid #199cfe
    p
        width 25%
        height 100%
        line-height 1rem
        float left
        text-align center

        a
            width 50%
            height 100%
            font-size .36rem
            display block
            margin auto
.order-box2
    width 100%
    margin-top 1rem
.orders
    margin-top 10px
    ._order
        width 100%
        height 1.3rem
        line-height 1.3rem
        background #ffffff
        .left
            float left
            color #666
            margin-left .5rem
            font-size .35rem
            i
                font-size .4rem
                color #666
        .right
            float right
            color rgb(0, 172, 255)
            margin-right .3rem
            font-size .35rem
    .order
        width 100%
        height 3rem
        background white
        border-bottom 1px solid #f0f0f0
        border-top 1px solid #f0f0f0
        img
            float left
            margin .3rem
            height 2.5rem
        .order-div
            width 4rem
            margin .3rem
            line-height .7rem
            float left
            h3
                font-size .5rem
            .order-div-price
                color red
                font-size .4rem
        .order-div-2
            display inline-block
            float right
            margin .3rem .6rem
            font-size .4rem
    .order-2
        width 100%
        height 1.7rem
        background white
        .order-2-box
            width 50%
            float right
            text-align right
            margin .2rem .4rem
            .order-2-zero
                float left
                font-size .35rem
                margin-left .5rem
                span
                    color red
            .order-2-one
                font-size .35rem
                span
                    color red
            .order-2-two
                color #666
                padding-top .2rem
                font-size .35rem
    .order-3
        width 100%
        height 1.1rem
        background white
        a
            width 2.8rem
            height .7rem
            line-height .7rem
            border 1px solid red
            border-radius 3px
            text-align center
            display block
            float right
            margin-right .3rem
            margin-top .1rem
            border 1px solid #dcdcdc
            font-size .3rem

</style>

