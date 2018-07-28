<template>
  <div class="container">
    <div class="container-bj">
      <img :src="header_url">
      <span>{{name}}</span>
    </div>

    <div class="container-integral">
      <p>
        <span class="mainColor">{{coupons}}</span>
        <span>余额</span>
      </p>
      <p>
        <span class="mainColor">{{encourage}}</span>
        <span>累计消费</span>
      </p>
      <p>
        <span class="mainColor">{{integration}}</span>
        <span>累计充值</span>
      </p>
    </div>

    <router-link class="container-order" to="/order" tag="div">
      <div class="container-order-1">
        <p class="left">我的订单</p>
        <p class="right mainColor">全部订单 ></p>
      </div>
      <div class="container-order-2">
        <p class="myOrder" v-for="(list, index) in container" :key="index">
          <i :class="'iconfont ' + list.img"></i>
          <span>{{list.name}}</span>
        </p>
      </div>
    </router-link>
    <div class="box">

      <mt-cell
        title="我的交易"
        to="/trade"
        is-link>
        <i class="iconfont icon-collection" slot="icon"></i>
      </mt-cell>
      <mt-cell
        title="我的优惠券"
        to="/myCoupon"
        is-link
        >
        <i class="iconfont icon-shouhuodizhi" slot="icon"></i>
      </mt-cell>
      <mt-cell
        title="我的购物车"
        to="/cart"
        is-link
        >
        <i class="iconfont icon-gouwuche" slot="icon"></i>
      </mt-cell>
      <mt-cell
        title="在线充值"
        to="/mytrade"
        is-link
        >
        <i class="iconfont icon-zhifu" slot="icon"></i>
      </mt-cell>
      <mt-cell
        title="我的预约"
        to="/mysubscribe"
        is-link
        >
        <i class="iconfont icon-gouwuche" slot="icon"></i>
      </mt-cell>

    </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from "vuex";
import {getUserInfo} from '../../../api/api'
export default {
  name:"Mycontainer",
  data(){
      return{
          container:[
              {
                  img:"icon-daifukuan",
                  name:"待付款"
              },
               {
                  img:"icon-tubiaolunkuo-",
                  name:"待收货"
              },
               {
                  img:"icon-daipingjia",
                  name:"待评价"
              }, {
                  img:"icon-tuikuan",
                  name:"退货/退款"
              },
          ],

      }
  },
  props:{
    user: Object,
    name:{
      type: String
    },
    header_url:{
      type:String
    },
    coupons:{
      type:String
    },
    encourage:{
      type:String
    },
    integration:{
      type:String
    }
  },
  mounted:function(){

  },
    computed:{
  },
}
</script>


<style lang="stylus" scoped>
@import '../../../fon/fontMy/iconfont.css'
.box
    margin-top:0.3rem
    margin-bottom:1.45rem

.mainColor
    color #bb2727
    font-weight bold
.iconfont
    color #bb2727
    font-size 0.4rem
.mint-cell
    height 1rem
    display flex
    justify-content flex-start
    border-bottom 1px solid #bb2727
.container-order
    box-shadow 5px 5px 5px #ffffff
    height 3.5rem
    background white
    display block
    margin 0.3rem 0.3rem 0
    font-size 0.35rem
    .container-order-1
        border-bottom 1px solid #e9e9e9
        width 100%
        height 1.2rem
        .left
            float: left;
            display: block;
            line-height: 1.2rem;
            margin-left: .5rem;
            font-size: 0.4rem;

        .right
            float: right;
            line-height: 1.2rem;
            margin-right: .6rem;
            font-size: 0.4rem;


    .container-order-2
        width 100%
        height 2.3rem
        display flex
        justify-content center
        align-items flex-start

        .myOrder
            width 25%
            display flex
            flex-direction column
            align-items center

            .iconfont
                font-size 0.8rem

            span
                text-align center




.t{
    background-image url('/static/img/t.png');
}

.container {
    overflow hidden
    width: 100%;
    .container-bj {
        overflow hidden
        width: 100%;
        height: 5rem;
        background: url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1532780193223&di=27ba73eddb071381a8eff664d955e0ea&imgtype=0&src=http%3A%2F%2Fimgsrc.baidu.com%2Fimgad%2Fpic%2Fitem%2F0d338744ebf81a4c1a402fe4dc2a6059252da6a9.jpg');
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        img {
            width: 2.3rem;
            height: 2.3rem;
            border-radius: 50%;
        }

        span {
            color: #ffffff;
            font-size: 0.5rem;
        }

        p {
            font-size 0.35rem;
            color: #ffffff;
        }
    }
    .container-integral{
        box-shadow 5px 5px 5px #ffffff
        margin 0.3rem 0.3rem 0
        height 2rem
        background #ffffff
        display: flex;
        justify-content: center
        p{
            width 33%
            height 100%
            font-size .36rem
            line-height .6rem
            font-weight 500
            float left
            display flex
            flex-direction column
            text-align center
            justify-content: center;
        }
    }

    .container-con {
        margin-bottom 1.45rem
        .con {
            width: 100%;
            height: 1.41rem;
            background: #ffffff;
            border-bottom: 1px solid #f0f0f0;
            display: block;

            .con-left {
                float: left;
                line-height: 1.3rem;
                padding-left: 0.47rem;

                i {
                    font-size: 0.5rem;
                }

                span {
                    font-size: 0.37rem;
                    padding-left: 0.1rem;
                }
            }

            .con-rigth {
                float: right;
                line-height: 1.3rem;
                padding-right: 0.4rem;
            }
        }
    }
}
</style>
