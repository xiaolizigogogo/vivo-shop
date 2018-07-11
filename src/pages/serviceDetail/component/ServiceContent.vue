<template>
  <div class="serviceContent">
      <div class="Reservations">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            选择预约项目
          </span>
          <router-link to="/price" tag="a">查看价格表</router-link>
        </div>
        <div class="ReservationsBottom">
          <div class="ReservationsMarks marks" @click="handleReservationsClick"  v-for="(item,index) in productTypes" :id="item.id" :name="item.name">{{item.name}}</div>
        </div>
      </div>
      <div class="Reservations ReservationNumber">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            选择预约人数
          </span>
        </div>
        <div class="ReservationsBottom">
          <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">1人</div>
          <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">2人</div>
          <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">3人</div>
          <div class="ReservationNumberMarks marks" @click="handleReservationNumberClick">多人</div>
        </div>
      </div>
      <div class="Reservations ReservationNumber">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            选择到店时间
          </span>
        </div>
        <div class="ReservationsBottom DatePickerBottom">
          <div id="datePicker" @click="handleDatePicker">
            <span class="chooseDateTop">选择预约日期</span>
            <span class="myDate">{{year}}-{{month}}-{{date}}</span>
          </div>
          <div class="smallLine"></div>
          <div id="datePicker" @click="handleSingleLinePicker">
            <span class="chooseDateTop">选择预约时间</span>
            <span class="myDate">{{time}}</span>
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
                  <input class="weui-input" type="text" placeholder="请输入预约姓名" v-model="submitForm.username"/>
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
import {addSubscribes} from '../../../api/api'
export default {
  data(){
    return {
      year: '',
      month: '',
      date: '',
      time: '9:00',
      productTypes:[],
      submitForm:{
        productId:undefined,
        subscribeTime:0,
        phoneNumber:'',
        username:'',
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
      userInfo:{

      },
      timeArray:[
        {
          label: '9:00',
          value: 9
        },
        {
          label: '10:00',
          value: 10
        },
        {
          label: '11:00',
          value: 11
        },
        {
          label: '12:00',
          value: 12,
        },
        {
          label: '13:00',
          value: 13,
        },
        {
          label: '14:00',
          value: 14,
        },
        {
          label: '15:00',
          value: 15,
        },
        {
          label: '16:00',
          value: 16,
        },{
          label: '17:00',
          value: 17,
        },{
          label: '18:00',
          value: 18,
        },{
          label: '19:00',
          value: 19,
        },{
          label: '20:00',
          value: 20,
        }
      ]
    }
  },
  props:{
    item:{

    },
    adminId:{
      type:String
    },
    unAvilTime:{
      type:Array
    }
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
    //初始化
    this.submitForm.adminId=this.item.id
  },
  created(){
    this.productTypes=JSON.parse(sessionStorage.getItem("productTypes"));
    this.timeArray.forEach(item=>{
      if(this.unAvilTime.includes(item.value)){
        item.disabled=true
      }
      const date=new Date()
      if(date.getHours()>=item.value){
        item.disabled=true
      }
    })
  }
  ,
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
      weui.datePicker({
        start: new Date(), // 从今天开始
        end: new Date(that.year+10,0,1),
        defaultValue: [that.year,that.month,that.date],
        onChange: function(result){

        },
        onConfirm: function(result){
            that.year = result[0].value;
            that.month = result[1].value;
            that.date = result[2].value;
            that.submitForm.subscribeDay=that.year+"-"+that.month+"-"+that.date
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
      if(this.submitForm.productId==undefined){
        alert("请选择服务项目")
        return
      }
      if(this.submitForm.subscribeDay==undefined){
        alert("请选择服务日期")
        return
      }
      if(this.submitForm.subscribeTime==undefined){
        alert("请选择服务时间")
        return
      }
      this.submitForm.userId=JSON.parse(localStorage.getItem("user")).id
      this.submitForm.openid=JSON.parse(localStorage.getItem("user")).weixinOpenid
      this.submitForm.adminId=this.adminId
      this.submitForm.adminName=this.item.nickname;
      this.submitForm.productUrl=this.item.avatar
      addSubscribes(this.submitForm).then(res=>{
        if(res.data.status==200){
          alert("预约成功")
        }
        else{
          alert(res.data.exception)
        }
      });
    }
  }
}
</script>
<style lang="stylus" scoped>
.Reservations
  min-height 3rem
  background-color #ffffff
  margin 2.5rem 0.3rem 0.3rem
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
.activeMarks
  background-color #98499C
  color #ffffff
.DatePickerBottom
  justify-content center
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
      font-size 0.6rem
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
</style>
