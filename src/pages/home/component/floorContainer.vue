<template>
  <div class="floor-container" >
    <div v-for="(item,index) in secondColumns">
    <div class="f-c-l">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.id}}</strong>
        <p class="seckill-summary">{{item.id}}</p>
      </div>
      <div class="f-c-l-prd">
        <img @click="$router.push(`${item.id}`)" v-lazy.jd="item.fisrtImgUrl"
             alt="">
      </div>
    </div>
    <div class="f-c-r">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.id}}</strong>
        <p class="seckill-summary">{{item.id}}</p>
      </div>
      <div class="f-c-l-prd">
        <img @click="$router.push(`${item.id}`)" v-lazy.jd="item.fisrtImgUrl"
             alt="">
      </div>
    </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "floorContainer",
      props:{
        secondColumns:{
          type:Array,
        }
      }
    }
</script>

<style scoped>

</style>
