<template>
  <div class="appTabscenter">
    <mt-swipe :speed="200" :continuous="false" :stopPropagation="false" :prevent="false" :auto="0">
      <mt-swipe-item>
        <ul class="tableTabs">
          <li class="table-tabs-item">
            <i>
              <img src="../../../assets/jd/images/applist (1).png" alt="">
            </i>
            <p>关于我们</p>
          </li>
          <li class="table-tabs-item" >
            <i>
              <img src="../../../assets/jd/images/applist (2).png" alt="" @click="$router.push('/subscribe')" >
            </i>
            <p>立即预约</p>
          </li>

          <li class="table-tabs-item">
            <i>
              <img src="../../../assets/jd/images/applist (8).png" alt="" @click="$router.push('/coupon')">
            </i>
            <p>领券</p>
          </li>
          <li class="table-tabs-item">
            <i>
              <img src="../../../assets/jd/images/applist (6).png" alt="" @click="$router.push('/mytrade')">
            </i>
            <p>充值</p>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "home-menu"
    }
</script>

<style scoped>

</style>
