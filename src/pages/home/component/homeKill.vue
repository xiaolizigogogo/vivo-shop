<template>

  <!-- 京东秒杀 -->
  <div class="seckill-floor">
  <div class="jd-flex-box">
  <div class="jd-f-b-l">
  <div class="jd-f-b-item">
  <div class="seckill-t">
  <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{cmsData.jd_kill.content}}</strong>
  <strong class="seckill-now">{{cmsData.jd_kill.summary}}</strong>
  <div class="seckill-time">
  <span class="sec-hou">01:</span>
  <span class="sec-min">38:</span>
  <span class="sec-sen">29</span>
  </div>
  </div>
  <div class="seckill-prd">
  <div class="prd-item" @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in cmsData.jd_kill.product_list"
  :key="index" v-if="index<3">
  <img v-lazy.jd="item.image_url[0].url" :alt="item.image_url[0].name">
  <strong>&yen;{{item.price}}</strong>
  <del>&yen;{{item.price}}</del>
  </div>
  </div>
  </div>
  <div class="jd-f-b-pd-item">
  <div class="seckill-p-item" @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in cmsData.shop_kill.product_list"
  :key="index" v-if="index<2">
  <div class="seckill-t">
  <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(255, 42, 42), rgb(241, 57, 210));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{cmsData.shop_kill.summary}}</strong>
  <p class="seckill-summary">{{cmsData.shop_kill.content}}</p>
  <img v-lazy.jd="item.image_url[0].url" alt="">
  </div>
  </div>
  </div>
  </div>
  <div class="jd-f-b-r">
  <div class="jd-f-b-r-item">
  <div class="seckill-t">
  <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(0, 194, 171), rgb(62, 148, 255));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{cmsData.jd_goods_watch.content}}</strong>
  <p class="seckill-summary">{{cmsData.jd_goods_watch.summary}}</p>
  </div>
  <div class="seckill-pd-r">
  <img v-lazy.jd="item.image_url[index].url" alt="" @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in cmsData.jd_goods_watch.product_list"
  :key="index" v-if="index<2">
  </div>
  </div>
  <div class="jd-f-b-r-item">
  <div class="seckill-t">
  <strong class="seckill-title" style="background-image: -webkit-linear-gradient(left, rgb(254, 133, 55), rgb(240, 43, 43));-webkit-background-clip: text;-webkit-text-fill-color: transparent;">{{cmsData.jd_hmzj.content}}</strong>
  <p class="seckill-summary">{{cmsData.jd_hmzj.summary}}</p>
  </div>
  <div class="seckill-pd-r">
  <img @click="$router.push(`/product/${item.productNo}`)" v-for="(item,index) in cmsData.jd_hmzj.product_list" :key="index"
  v-if="index<2" v-lazy.jd="item.image_url[0].url" alt="">
  </div>
  </div>
  </div>
  </div>
  </div>
  <!-- 京东秒杀 -->

</template>

<script>
    export default {
        name: "home-kill"
    }
</script>

<style scoped>

</style>
