<style lang="scss" scoped>
  /* banner */

  @import '../../../assets/common/css/mixin.scss';
  .floor-container {
    @include flexbox(space-between, center, row, nowrap);
    position: relative;
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      height: 1px;
      width: 100%;
      background: #f5f5f5;
    }
    >div {
      width: 50%;
    }
    .seckill-t {
      padding: 0 .2rem;
    }
    .f-c-l {
      position: relative;
      padding: .2rem 0;
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
    .f-c-l-prd {
      img {
        max-width: 60px;
        max-height: 60px;
        margin: 0 .2rem;
      }
      @include flexbox(center, center, row, nowrap);
    }
  }
  </style>
<template>
  <div >
    <!--v-if="index<2"-->
  <div class="floor-container" v-for="(item,index) in secondColumns"  >

    <div class="f-c-l">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.titleLeft}}</strong>
        <p class="seckill-summary">{{item.descLeft}}</p>
      </div>
      <div class="f-c-l-prd">
        <img @click="$router.push(`${item.targetUrlLeft}`)" v-lazy.jd="item.firstImgUrlLeft"
             alt="">
        <img @click="$router.push(`${item.targetUrlLeft}`)" v-lazy.jd="item.secondImgUrlLeft"
             alt="">
      </div>
    </div>
    <div class="f-c-r">
      <div class="seckill-t">
        <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{item.titleRight}}</strong>
        <p class="seckill-summary">{{item.descRight}}</p>
      </div>
      <div class="f-c-l-prd">
        <img @click="$router.push(`${item.targetUrlRight}`)" v-lazy.jd="item.firstImgUrlRight"
             alt="">
        <img @click="$router.push(`${item.targetUrlRight}`)" v-lazy.jd="item.secondImgUrlRight"
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
