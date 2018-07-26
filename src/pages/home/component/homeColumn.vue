<style lang="scss" >
/* banner */

@import '../../../assets/common/css/mixin.scss';
  .floor {
  .floor-title {
    background: #f5f5f5;
    text-align: center;
  img {
    height: 35px;
  }
  }
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
  }
</style>
<template>
  <!-- 特色推荐 -->
  <div class="floor">
    <div class="floor-title">
      <img :src="info.titleImg" alt="">
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
