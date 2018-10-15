<template>
  <div class="serviceContent">
    <div class="Reservations">
      <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            选择预约项目
          </span>
        <!--<router-link to="/price" tag="a">查看价格表</router-link>-->
      </div>
      <div class="ReservationsBottom">
        <img src="http://payobwhnt.bkt.clouddn.com/chenxi123.jpg" style="width: 100% ;padding: 10px;"/>
      </div>
    </div>
	<div class="Reservations">
      <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            收费说明
          </span>
      </div>
      <div class="ReservationsBottom">
	        <div class=" marks1" >140元/个 问题</div>
            <div class=" marks1" >500元/30分钟 问答时间</div>
      </div>
    </div>
      <div class="Reservations ReservationNumber">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            <span style="color: #bd2c00">*</span>
           您的性别
          </span>
          <div class="ReservationsBottom" style="margin: 20px">
            <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">男</div>
            <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">女</div>
          </div>
        </div>
      </div>
      <div class="Reservations ReservationNumber">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            <span style="color: #bd2c00">*</span>
            您的星座
          </span>
          <div class="ReservationsBottom DatePickerBottom">
            <div id="datePicker" @click="handleDatePicker">
              <span class="myDate" style="font-size: 20px">{{xingzuo}}</span>
            </div>
          </div>
        </div>
      </div>
    <div class="Reservations ReservationNumber">
      <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            <span style="color: #bd2c00">*</span>
            您的问题
          </span>
      </div>
      <div class="ReservationsBottom">
        <div class="weui-cells weui-cells_form">
          <div class="weui-cell">
            <div class="weui-cell__bd">
              <input class="weui-input" type="text" placeholder="请详细描述您的问题" v-model="submitForm.productName"/>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div class="Reservations ReservationNumber">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            完善预约信息
          </span>
        </div>
        <div class="ReservationsBottom">
          <div class="weui-cells weui-cells_form">
            <div class="weui-cell">
              <div class="weui-cell__bd">
                  <input class="weui-input" type="text" placeholder="请输入预约姓名" v-model="submitForm.userName"/>
              </div>
            </div>
            <div class="weui-cell">
              <div class="weui-cell__bd">
                  <input class="weui-input" type="tel" pattern="[0-9]*" placeholder="请输入预约手机号码" v-model="submitForm.phoneNumber"/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="weui-btn-area">
          <a class="weui-btn" href="javascript:" id="showTooltips" @click="submit">确定预约</a>
      </div>
    <div class="Reservations ReservationNumber">
      <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            联系方式
          </span>
      </div>
      <div class="ReservationsBottom">
        <img src="http://payobwhnt.bkt.clouddn.com/chenxierweima1.jpg" style="margin: 10px;width: 100%;"/>
      </div>
    </div>
  </div>
</template>

<script>
const getDate = function(){
  let dateNow = new Date();
  let year = dateNow.getFullYear()
  let month = dateNow.getMonth() + 1
  let date = dateNow.getDate()
  return [year, month, date]
}
import {addSubscribes,getAdminAilviliableInfo,addchenxiSubscribes} from '../../../api/api'
export default {
  data(){
    return {
      year: '',
      month: '',
      date: '',
      time: '请选择',
      productTypes:[],
      submitForm:{
        productId:undefined,
        subscribeTime:0,
        phoneNumber:'',
        userName:'',
        subscribeTimeValue:'',
        userId:undefined,
        adminId:0,
        subscribeDayValue:'',
        subscribeDay:undefined,
        productName:undefined,
        userNumber:'',
        openid:'',
        productUrl:'',
        adminName:'',
      },
      array: ["白羊", "金牛", "双子", "巨蟹", "狮子", "处女", "天秤", "天蝎", "射手", "摩羯", "水瓶", "双鱼"],
      userInfo:{

      },
      timeArray:[
        {
          label:'请选择',
          defaultLabel:'请选择',
          value:0
        },
        {
          label: '10:00',
          defaultLabel:'10:00',
          value: 10
        },
        {
          label: '11:00',
          defaultLabel:'11:00',
          value: 11
        },
        {
          label: '12:00',
          defaultLabel: '12:00',
          value: 12,
        },
        {
          label: '13:00',
          defaultLabel: '13:00',
          value: 13,
        },
        {
          label: '14:00',
          defaultLabel: '14:00',
          value: 14,
        },
        {
          label: '15:00',
          defaultLabel: '15:00',
          value: 15,
        },
        {
          label: '16:00',
          defaultLabel: '16:00',
          value: 16,
        },{
          label: '17:00',
          defaultLabel: '17:00',
          value: 17,
        },{
          label: '18:00',
          defaultLabel: '18:00',
          value: 18,
        },{
          label: '19:00',
          defaultLabel: '19:00',
          value: 19,
        },{
          label: '20:00',
          defaultLabel: '20:00',
          value: 20,
        }
      ],
      unAvilTime:[],
      item:{},
      adminId:undefined,
      today:undefined,
      xingzuo:''
    }
  },
  props:{

  },
  mounted(){
    let arr = getDate()
    this.year = arr[0]
    if(arr[1] < 10){
      this.month = '0'+arr[1]
    }else{
      this.month = arr[1]
    }
    if(arr[2] < 10){
      this.date = '0'+ arr[2]
    }else{
      this.date = arr[2]
    }
    this.productTypes=JSON.parse(sessionStorage.getItem("productTypes"));
    this.submitForm.subscribeDay=this.year+"-"+this.month+"-"+this.date
    this.today=this.year+"-"+this.month+"-"+this.date
    this.xingzuo='白羊'
    //初始化
    this.init()
  },
  methods:{
    handleReservationsClick(e){
      console.log(e)
      const target = e.currentTarget;
      let ReservationsMarks = document.querySelectorAll('.ReservationsMarks')
      let len = ReservationsMarks.length
      for(let i = 0; i < len; i++){
        ReservationsMarks[i].setAttribute('class','ReservationsMarks marks')
      }
      console.log(this.submitForm)
      this.submitForm.productId=e.toElement.id
      this.submitForm.productName=e.toElement.textContent
      target.setAttribute('class','ReservationsMarks marks activeMarks')
    },
    handleReservationNumberClick(e){
      const target = e.currentTarget;
      let ReservationsMarks = document.querySelectorAll('.ReservationNumberMarks')
      let len = ReservationsMarks.length
      for(let i = 0; i < len; i++){
        ReservationsMarks[i].setAttribute('class','ReservationNumberMarks marks')
      }
      this.submitForm.userNumber=e.toElement.textContent
      target.setAttribute('class','ReservationNumberMarks marks activeMarks')
    },
    handleDatePicker(){
      let that = this
      weui.picker([{
          label: '白羊',
          value: '白羊'
        }, {
          label: '金牛',
          value: '金牛'
        }, {
          label: '双子',
          value: '双子'
        },{
          label: '巨蟹',
          value: '巨蟹'
        }, {
          label: '狮子',
          value: '狮子'
        }, {
        label: '处女',
        value: '处女'
      }, {
        label: '天秤',
        value: '天秤'
      }, {
        label: '天蝎',
        value: '天蝎'
      }, {
        label: '射手',
        value: '射手'
      }, {
        label: '摩羯',
        value: '摩羯'
      }, {
        label: '水瓶',
        value: '水瓶'
      }, {
        label: '双鱼',
        value: '双鱼'
      }], {
        defaultValue: [0],
        onChange: function(result){

        },
        onConfirm: function(result){
            that.submitForm.productUrl=result[0].value
            that.xingzuo=result[0].value
        },
        id: 'datePicker'
    });
    },
    handleSingleLinePicker(){
      let that = this
      weui.picker(this.timeArray, {
        className: 'custom-classname',
        container: 'body',
        defaultValue: [0],
        onChange: function (result) {
        },
        onConfirm: function (result) {
          that.time = result[0].label
          that.submitForm.subscribeTime = result[0].value
        },
        id: 'singleLinePicker'
      });
    },
    submit(){
      if(this.submitForm.userNumber==undefined){
        alert("请选择性别")
        return
      }
      if(this.submitForm.productUrl==undefined){
        alert("请选择星座")
        return
      }
      if(this.submitForm.productName==undefined){
        alert("请选择问题")
        return
      }
      addchenxiSubscribes(this.submitForm).then(res=>{
        if(res.data.status==200){
          alert("预约成功")
        }
        else{
          alert(res.data.exception)
        }
      });
    },
    init(){
    }
  }
}
</script>
<style lang="stylus" scoped>
 body {
   font-size: 15px!important
 }
.Reservations
  /*min-height 3rem*/
  background-color #ffffff
  margin .5rem 0.3rem 0.3rem
  box-shadow 5px 5px 20px #ccc
  .ReservationsTop
    border-bottom 1px solid #e9e9e9
    height 1.2rem
    display flex
    justify-content space-between
    align-items center
    .ReservationsTopLeft
      color #9D9D9D
      font-size 0.3rem
      padding-left 0.3rem
    a
      color #F74979
      font-size 0.3rem
      padding-right 0.3rem
  .ReservationsBottom
    min-height 1.8rem
    display flex
    justify-content flex-start
    align-items center
    flex-wrap wrap
.ReservationNumber
  margin-top 0.3rem
.marks
  margin-left 0.3rem
  width 2rem
  height 0.8rem
  border-radius 1rem
  border 1px solid #e9e9e9
  text-align center
  line-height 0.8rem
  font-size 0.35rem
.marks1
  margin-left 0.3rem
  width 4rem
  height 0.8rem
  border-radius 1rem
  border 1px solid #e9e9e9
  text-align center
  line-height 0.8rem
  font-size 0.35rem  
.activeMarks
  background-color #98499C
  color #ffffff
.DatePickerBottom
  justify-content center
  margin 40px
  #datePicker
    flex 1
    display flex
    flex-direction column
    justify-content center
    align-items center
    .chooseDateTop
      color #9D9D9D
      font-size 0.3rem
    .myDate
      font-size 0.35rem!important
  .smallLine
    width 0.05rem
    height 0.5rem
    border 0.025rem solid #e9e9e9
.weui-cells
  width 100%
  margin-top 0
  .weui-input
    font-size 0.4rem
    height 1.2rem
.weui-cell:before
  right 15px
.weui-btn-area
  margin 0.3rem
  .weui-btn
    height 1.2rem
    background-color #98499C
    display flex
    justify-content center
    align-items center
    font-size 0.5rem
.weui-picker__item
   font-size: 20px!important
</style>
