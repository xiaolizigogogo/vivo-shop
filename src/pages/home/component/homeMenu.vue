<template>
  <div class="appTabscenter">
    <mt-swipe :speed="200" :continuous="false" :stopPropagation="false" :prevent="false" :auto="0">
      <mt-swipe-item>
        <ul class="tableTabs">
          <li class="table-tabs-item" v-for="(item,index) in items" @click="$router.push(`${item.targetUrl}`)">
            <i>
              <img :src="item.imageUrl" alt="">
            </i>
            <p>{{item.name}}</p>
          </li>
        </ul>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
    export default {
        name: "home-menu",
      props:{
          items:{
            type:Array
          }
      }
    }
</script>

<style scoped>

</style>
