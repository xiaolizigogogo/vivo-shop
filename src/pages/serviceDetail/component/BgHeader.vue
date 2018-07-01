<template>
  <div class="bgheader">
      <div class="bgWall">
         <div>
           <div class="beautifulHeader">
            <img :src="item.avatar" alt="beautiful">
          </div>
          <p class="headerName">-&nbsp;&nbsp;{{item.username}}&nbsp;&nbsp;-</p>
         </div>
       </div>
  </div>
</template>

<script>
export default {
  mounted(){
    document.title = '开始预约';
  },
  props:{
    item:{

    }
  }
}
</script>
<style lang="stylus" scoped>
.bgWall
    width 100%
    height 3rem
    background-image url('/static/img/bg2.jpg')
    background-position center 0
    background-repeat  no-repeat
    position relative
    .beautifulHeader
      position absolute
      left 50%
      bottom -1.2rem
      transform translateX(-50%)
      width 2.4rem
      height 2.4rem
      border-radius 50%
      background-color #fff
      display flex
      justify-content center
      align-items center
      img
        width 2.3rem
        height 2.3rem
        border-radius 50%
    .headerName
      position absolute
      left 50%
      bottom -2.2rem
      transform translateX(-50%)
      font-size 0.5rem
</style>
