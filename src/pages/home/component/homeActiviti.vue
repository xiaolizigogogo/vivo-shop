<template>
  <div class="floor">
    <div class="container-bg">
      <img :src="item.containerBgUrl" alt="" @click="$router.push(`${item.containerBgTargetUrl}`)">
    </div>
    <div class="activity_list">
      <div class="left_item">
        <img :src="item.leftItemUrl" alt="" @click="$router.push(`${item.leftItemTargetUrl}`)">
      </div>
      <div class="right_item">
        <div class="r_i_cell">
          <img :src="item.rightItemFirstUrl" alt="" @click="$router.push(`${item.rightItemFirstTargetUrl}`)">
        </div>
        <div class="r_i_cell">
          <img :src="item.rightItemSecondUrl" alt="" @click="$router.push(`${item.rightItemSecondTargetUrl}`)">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "home-activiti",
      props:{
          item:{
            type:Object
          }
      }
    }
</script>

<style scoped>

</style>
