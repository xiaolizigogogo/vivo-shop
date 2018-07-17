<template>
  <div class="home-swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(list,index) in swiper" :key="index">
            <img :src="list.imageUrl">
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
  import {getAdPositionDetail} from '../../../api/api'
export default {
  name:"HomeSwipe",
  data(){
    return{
      swiper:[
        {
          imageUrl:"/static/img/home1.jpg"
        },
        {
          imageUrl:"/static/img/home2.jpg"
        },
        {
          imageUrl:"/static/img/home3.jpg"
        }
      ]
    }
  },
  mounted(){
    /**
     * 获取轮播图
     * */
    getAdPositionDetail({"adPositionId":1,"enabled":1}).then(res=>{
      this.swiper=res.data.data
    })
  }
}
</script>


<style lang="stylus" scoped>
    .home-swiper
        height 6.5rem;
        img
            width 100%;
            height 6.5rem
</style>
