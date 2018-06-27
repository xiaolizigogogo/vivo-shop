<template>
  <div class="home-swiper">
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(list,index) in swiper" :key="index">
            <img :src="list.img">
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
export default {
  name:"HomeSwipe",
  data(){
    return{
      swiper:[
        {
          img:"/static/img/home1.jpg"
        },
        {
          img:"/static/img/home2.jpg"
        },
        {
          img:"/static/img/home3.jpg"
        }
      ]
    }
  },
  mounted(){

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
