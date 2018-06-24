<template>
  <div class="cart">
    <mt-header title="预约中心" class="mint-header">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div>
      <mt-datetime-picker
        ref="picker"
        type="date"
        v-model="params.subscribeDayValue" :startDate="startDate"  year-format="{value} 年"
        month-format="{value} 月"
        date-format="{value} 日"  value-format="yyyyMMddHHmmss"  @confirm="handleDateConfirm" >
      </mt-datetime-picker>
      <mt-popup
        v-model="popupVisible"
        position="bottom" class="mint-datetime" >
        <div class="picker-toolbar"><span class="mint-datetime-action mint-datetime-cancel" @click="cancelPopup">取消</span> <span class="mint-datetime-action mint-datetime-confirm" @click="confirmPopup">确定</span></div>
        <mt-picker :slots="slots" @change="onProductValuesChange" v-model="createParams.productId"></mt-picker>
      </mt-popup>

      <mt-popup
        v-model="timeVisible"
        position="bottom" class="mint-datetime" >
        <div class="picker-toolbar"><span class="mint-datetime-action mint-datetime-cancel" @click="cancelTime">取消</span> <span class="mint-datetime-action mint-datetime-confirm" @click="confirmTime">确定</span></div>
        <mt-picker :slots="timeSlots" @change="onTimeValuesChange" v-model="value" value-key="key"></mt-picker>
      </mt-popup>
      <mt-field label="用户名" placeholder="请输入用户名" v-model="createParams.username"></mt-field>
      <mt-field label="手机号" placeholder="请输入手机号" type="tel" v-model="createParams.phone"></mt-field>
      <mt-field label="日期" placeholder="选择日期"  v-model="params.subscribeDay" @click.native="openPicker"></mt-field>
      <mt-field label="时间" placeholder="时间"  v-model="createParams.subscribeTimeValue" @click.native="openTime"></mt-field>
      <mt-field label="服务项目" placeholder="选择服务"  v-model="createParams.productId" @click.native="openPopup"></mt-field>
      <mt-button @click.native="handleCreate" type="primary" size="large" class="bottom">提交预约</mt-button>
    </div>
  </div>
</template>
<script>
  import {Toast} from "mint-ui";
  import {mapState, mapMutations, mapGetters} from "vuex";
  import CartHeader from '../../common/header'
  import {getCarts,getAdminAilviliableInfo,addSubscribes} from '../../api/api'
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
        params: {
          current:1,
          size:10,
          adminId:1,
          subscribeDay:'2018-06-22',
        },
        createParams:{
          productId:10,
          subscribeTime:'',
          phone:'',
          username:'',
          subscribeTimeValue:'',
          userId:14,
          adminId:1,
          subscribeDayValue:'',
          subscribeDay:'2018-06-22',
        },
        carts: [],
        id:undefined,
        popupVisible:false,
        slots: [
          {
            flex: 1,
            values: ['美容','美甲'],
            className: 'slot1',
            textAlign: 'right'
          }, {
            divider: true,
            content: '-',
            className: 'slot2'
          }, {
            flex: 1,
            values: ['30分钟', '40分钟', '60分钟'],
            className: 'slot3',
            textAlign: 'left'
          }
        ],
        timeSlots: [
          {
            flex: 1,
            values: [],
            className: 'slot1',
            textAlign: 'center'
          }
        ],
        timeDefault:[],
        unAvilTime:[],
        startDate:'',
        timeVisible:false,
        value:'',
        product:[],
        userInfo:''
      };
    },
    components: {
      CartHeader, HomeFooter, 'v-loadmore': Loadmore
    },
    created: function () {
      this.startDate=new Date()
      this.params.adminId=this.$route.query.id;
      for(let i=1;i<=24;i++){
        if(i<10){
          var item="0"+i+":00";
        }
        else{
          var item=i+":00";
        }
        this.timeDefault.push({key:item,value:i+''})
      }

    },
    computed: {
  }
  ,
  mounted()
  {
    this.initTimeSlot();
    this.loadPageList();  //初次访问查询列表
  }
  ,
  methods: {
    onProductValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
      this.value = values[0];
      this.value2=values[1];
    },
    onTimeValuesChange(picker, values) {
      if(values[0]){
        this.createParams.subscribeTimeValue=values[0].key
        this.createParams.subscribeTime = values[0].value
      }
    },
    handleTopChange: function (status) {
      this.topStatus = status;
    }
  ,
    loadPageList:function (flag) {
      // 查询数据
      getAdminAilviliableInfo(this.params).then(res=>{
        this.unAvilTime=res.data.data.unailviliableTime
        this.initTimeSlot();
      })
    }
  ,
    openPicker() {
      this.$refs.picker.open();
    },
    openPopup() {
      this.popupVisible=true;
    },
    cancelPopup(){
      this.popupVisible=false;
    },
    confirmPopup(){
      this.popupVisible=false;
    },
    openTime(){
      this.timeVisible=true;
    },
    cancelTime(){
      this.timeVisible=false;
    },
    confirmTime(){
      this.timeVisible=false;
    },
    initTimeSlot(){
      this.timeSlots[0].values=[];
      this.timeDefault.forEach(item=>{
        if(!this.unAvilTime.includes(item.value)){
          this.timeSlots[0].values.push(item)
        }
      })
    },
    handleDateConfirm(){
      this.params.subscribeDay=formatDate(this.params.subscribeDayValue)
    },
    handleCreate(){

      addSubscribes(this.createParams).then(res=>{

      })
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
  .bottom{
    bottom: 0;
    position: fixed;
  }
</style>
