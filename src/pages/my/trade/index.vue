<template>
  <div class="mytrade">
    <div class="weui-tab">
    <div class="weui-navbar">
        <div class="weui-navbar__item weui-bar__item_on" @click="handleClick('0',$event)">
            在线充值
        </div>
        <div class="weui-navbar__item" @click="handleClick('1',$event)">
            交易记录
        </div>
    </div>
    <div class="weui-tab__panel">
        <div class="page"><Page1 /></div>
        <div class="page" style="display:none"><Page2 /></div>
    </div>
</div>
  </div>
</template>
<script>
import Page1 from './Page1'
import Page2 from './Page2'
import '../../../weui/weui.min.js'
  export default {
    name: "mytrade",
    mounted(){
      document.title = '在线买单'
    },
    methods:{
      handleClick(num,e){
        const target = e.currentTarget;
        let navBar = document.querySelectorAll('.weui-navbar__item')
        let page = document.querySelectorAll('.page')
        let len = navBar.length
        for(let i = 0; i < len; i++){
          navBar[i].setAttribute('class','weui-navbar__item')
          page[i].style.display = 'none'
        }
        page[num].style.display = 'block'
        target.setAttribute('class','weui-navbar__item weui-bar__item_on')
      }
    },
    components:{
      Page1,
      Page2
    }
  }
</script>
<!-- 引入组件库 -->

<style lang="stylus" scoped>
.weui-navbar__item
  font-size 0.4rem
</style>
