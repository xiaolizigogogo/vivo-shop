<template>
  <!-- 京东快报 -->
  <div class="jd-express-news">
  <div class="jd-kuaibao">
  <router-link to="/new">
  <img class="jd-news-icon" src="../../../assets/jd/images/jd-news-tit.png" alt="">
  </router-link>
  <marquee>
  <marquee-item v-for="(item,index) in cmsData.life" :key="index" @click.native="$router.push(`/articleDetail/${item.id}`)">{{item.article_title}}</marquee-item>
  </marquee>
  <span>更多</span>
  </div>
  </div>
  <!-- 京东快报 -->
</template>

<script>
    export default {
        name: "home-news"
    }
</script>

<style scoped>

</style>
