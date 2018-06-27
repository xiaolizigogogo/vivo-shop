<template>
  <div class="change">
      <div class="change-box">
        <div class="change-img" v-for="list in change">
          <img :src="list.changeImg"></div>
        </div>
      </div>
     
  </div>
</template>

<script>
import axios from "axios";
export default {
  name:"change",
  data(){
      return{
          change:[]
      }
  },
  mounted(){
      document.title = '手机以旧换新'
  },
  created(){
      var _this=this
      axios.get("/static/ceshi.json").then(function(res){
          _this.change=res.data.data.change
      })
  }
}
</script>


<style lang="stylus" scoped>
    .change-box
        padding-top 1.45rem
    .change-img
        width 100%
        height 17rem
        img 
            width 100%
            
</style>
