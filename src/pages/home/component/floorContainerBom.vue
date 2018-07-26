<style lang="scss" scoped>
  /* banner */

  @import '../../../assets/common/css/mixin.scss';
  .floor-container-bom {
    @include flexbox(center, center, row, nowrap);
    .f-c-b-prd-item {
      width: 25%;
      position: relative;
      padding: .2rem;
      img {
        max-width: 60px;
      }
      &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 1px;
        height: 100%;
        width: 1px;
        background: #f5f5f5;
      }
    }
  }
</style>
<template>
  <div class="floor-container-bom">
    <div class="f-c-b-prd-item" v-for="(item,index) in fisrtColumns"  v-if="index<4">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.titleLeft}}</strong>
        <p class="seckill-summary">{{item.descLeft}}</p>
      </div>
      <div class="product-img">
        <img @click="$router.push(`${item.targetUrlLeft}`)" v-lazy.jd="item.firstImgUrlLeft"
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
