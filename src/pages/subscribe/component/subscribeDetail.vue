<template>
  <div class="cart">
    <mt-header title="预约中心" class="mint-header">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  <!--<div class="main-body cartMain" :style="{'-webkit-overflow-scrolling': scrollMode}">-->
    <!--<v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">-->
      <!--<ul class="list" v-for="(cart,index) in carts">-->
        <!--<li  class="cartList">-->
          <!--<mt-cell :title="cart.username" to="/news"-->
                   <!--is-link-->
                   <!--value="立即预约">-->
            <!--<img slot="icon" :src="cart.avatar" width="80" height="80">-->
          <!--</mt-cell>-->
        <!--</li>-->
      <!--</ul>-->
    <!--</v-loadmore>-->
  <!--</div>-->
    <div>
      <mt-actionsheet
        :actions="actions"
        v-model="sheetVisible">
      </mt-actionsheet>
      <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="pickerValue" :startDate="startDate"  year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"  value-format="yyyyMMddHHmmss"  @confirm="handleConfirm" >
      </mt-datetime-picker>
      <mt-popup
        v-model="popupVisible"
        position="bottom" class="mint-datetime" >
        <div class="picker-toolbar"><span class="mint-datetime-action mint-datetime-cancel">取消</span> <span class="mint-datetime-action mint-datetime-confirm">确定</span></div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
      </mt-popup>

      <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="phone"></mt-field>
      <mt-field label="日期" placeholder="请输入手机号"  v-model="pickerValue"></mt-field>
      <mt-button @click.native="openPicker">点击触发 openPicker</mt-button>
      <mt-button @click.native="openPopup">点击触发 openPopup</mt-button>
      <mt-button @click.native="openAction">点击触发 openAction</mt-button>
    </div>
  </div>
</template>
<script>
  import {Toast} from "mint-ui";
  import {mapState, mapMutations, mapGetters} from "vuex";
  import CartHeader from '../../common/header'
  import {getCarts} from '../../api/api'
  import HomeFooter from '../../pages/footer'
  import {addCart, updateCart, deleteCart, addOrder,getAdmins} from '../../api/api'
  import BScroll from 'better-scroll'
  import {Loadmore} from 'mint-ui';
  import { DatetimePicker } from 'mint-ui';
  import {formatDate} from '../../api/global'
  export default {
    name: "subscribeDetail",
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
        params: {
          current:1,
          size:10,
        },
        carts: [],
        ids: [],
        searchCondition: {  //分页属性
          pageNo: "1",
          pageSize: "10"
        },
        pageList: [],
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: "auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        id:undefined,
        actions:[
          {name:1,
            method:this.itemClick(1)
          }
        ],
        sheetVisible:false,
        phone:'',
        username:'',
        pickerValue:'',
        startDate:'',
        popupVisible:false,
        slots: [
          {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['2015-01', '2015-02', '2015-03', '2015-04', '2015-05', '2015-06'],
            className: 'slot3',
            textAlign: 'left'
          }
        ]
      };
    },
    components: {
      CartHeader, HomeFooter, 'v-loadmore': Loadmore
    },
    created: function () {
      this.id=this.$route.query.id;
      console.log(this.id);
      this.startDate=new Date()
      this.pickerValue=formatDate(new Date())


    },

    computed: {
      ...mapGetters(["this.$store.state.carts"]),
    sum: function () {
      var sum = 0;
      this.carts.forEach(cart => {
        if(cart.checked
    )
      {
        sum += cart.marketPrice * cart.number;
      }
    })
      ;
      return sum;
    },
    sumValue() {
      var sumValue = 0;
      this.carts.forEach(cart => {
        if(cart.checked
    )
      {
        sumValue += parseInt(cart.number);
      }
    })
      ;
      return sumValue;
    }
  }
  ,
  mounted()
  {
    this.loadPageList();  //初次访问查询列表

  }
  ,
  methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    },
    add(cart)
    {
      let item = this.carts[cart]
      item.number++
      console.log(item);
      updateCart(item)
    }
  ,
    handleConfirm(data) {
      let date = formatDate(data);
        this.pickerValue = date;
    },
    reduce(cart)
    {
      let item = this.carts[cart]
      item.number--
      console.log(item);
      updateCart(item)
    }
  ,
    shanchu(cart)
    {
      let item = this.carts[cart]
      console.log(item);
      this.carts.splice(cart, 1)
      deleteCart(item)
    }
  ,
    danxuan(cart)
    {
      console.log(cart);
      cart.checked = !cart.checked;
      updateCart(cart)
      if (!cart.checked) {
        this.qx = false;
      }
    }
  ,
    quanxuan()
    {
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
    }
  ,
    handleTopChange: function (status) {
      this.topStatus = status;
    }
  ,
    itemClick: function (data) {
      console.log('item click, msg : ' + data);
    }
  ,
    loadTop:function () { //组件提供的下拉触发方法
      //下拉加载
      this.loadPageList();
      this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
    }
  ,
    loadBottom:function () {
      // 上拉加载
      this.more();// 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
    }
  ,
    loadPageList:function (flag) {
      // 查询数据

    }
  ,
    more:function () {
      // 分页查询
      this.params.current++;
        this.loadPageList(true);
      ;
    }
  ,
    isHaveMore:function (isHaveMore) {
      // 是否还有下一页，如果没有就禁止上拉刷新
      this.allLoaded = true; //true是禁止上拉加载
      if (isHaveMore) {
        this.allLoaded = false;
      }
    },
    openPicker() {
      this.$refs.picker.open();
    },
    openAction() {
      this.sheetVisible=true;
    },
    openPopup() {
      this.popupVisible=true;
    }

  }
  }
  ;
</script>
<!-- 引入组件库 -->

<style>
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
  }

  #app {

    height: 100%;
    overflow: scroll;
  }

  .scroll-wrapper {
    margin: 0;
    padding: 0;
    list-style: none;

  }

  .scroll-wrapper li {
    line-height: 120px;
    font-size: 60px;
    text-align: center;
  }

  .select {
    float: left;
    margin-top: 1.5rem;
    padding-left: 0.5rem;
  }

  .select i {
    font-size: 0.53rem;
  }

  .checkAll {
    width: 24%;
    line-height: 1.18rem;
    float: left;
  }

  .checkAll i {
    font-size: 0.53rem;
    padding-left: .5rem;
  }

  .cart {
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
    height: 1.18rem;
    font-size: 0.35rem;
    background: white;
    bottom: 0;
    display: block;
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
    text-align: center;
    line-height: 1.18rem;
    font-size: 0.35rem;
  }

  .Settlement {
    width: 34%;
    height: 80%;
    background: #f81200;
    float: right;
    margin-top: .1rem;
    border-radius: 40px;
    margin-right: 0.3rem;
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
  .mint-header{
    background-color:#ff2697
  }
</style>
