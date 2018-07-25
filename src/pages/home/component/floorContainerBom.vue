<template>
  <div class="floor-container-bom">
    <div class="f-c-b-prd-item" v-for="(item,index) in fisrtColumns">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.id}}</strong>
        <p class="seckill-summary">{{item.id}}</p>
      </div>
      <div class="product-img">
        <img @click="$router.push(`${item.id}`)" v-lazy.jd="item.fisrtImgUrl"
             alt="">
      </div>
    </div>
  </div>
</template>
<script>
    export default {
        name: "floorContainerBom",
      props:{
        fisrtColumns:{
          type:Array
        }
      }
    }
</script>

<style scoped>

</style>
