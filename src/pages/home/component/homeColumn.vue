<template>
  <!-- 特色推荐 -->
  <div class="floor">
    <div class="floor-title">
      <img src="../../../assets/jd/images/appmenu (2).jpg" alt="">
    </div>
   <floorContainer :secondColumns="secondColumns"></floorContainer>
    <floorContainerBom :fisrtColumns="fisrtColumns"></floorContainerBom>
  </div>
  <!-- 特色推荐 -->

</template>
<script>
  import floorContainer from './floorContainer';
  import floorContainerBom from './floorContainerBom';
export default {
  name:"homeColumn",
  date(){
    return {}
  },
  created(){},
  mounted(){

  },
  methods:{

  },
  props:{
    info:{
      type:Object
    },
    secondColumns:{
      type:Array
    },
    fisrtColumns:{
      type:Array
    }
  },
  components:{
    floorContainer,
    floorContainerBom
  }
}
</script>
