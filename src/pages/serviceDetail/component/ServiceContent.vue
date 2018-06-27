<template>
  <div class="serviceContent">
      <div id="Reservations">
        <div class="ReservationsTop">
          <span class="ReservationsTopLeft">
            选择预约项目
          </span>
          <router-link to="/price" tag="a">查看价格表</router-link>
        </div>
        <div class="ReservationsBottom">
          <div class="marks" @click="handleClick">皮肤管理</div>
          <div class="marks" @click="handleClick">半永久</div>
          <div class="marks" @click="handleClick">纹绣</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(e){
      const target = e.currentTarget;
      let marks = document.querySelectorAll('.marks')
      let len = marks.length
      for(let i = 0; i < len; i++){
        marks[i].setAttribute('class','marks')
      }
      target.setAttribute('class','marks activeMarks')
    }
  }
}
</script>
<style lang="stylus" scoped>
#Reservations
  height 3rem
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
    height 1.8rem
    display flex
    justify-content flex-start
    align-items center
    flex-wrap wrap
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
      background-color #4C246A
      opacity 0.8
      color #ffffff
</style>