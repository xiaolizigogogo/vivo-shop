<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import rem from './rem/rem.js'
export default {
  name: 'app',
   data(){
    return{
      transitionName:'',
    }
  }
}
</script>
<style>
 @import 'styles/style.css';
 @import './fon/iconfont.css';
 @import './styles/weui.min.css';
 @import './assets/common/css/theme.scss';
 /*@import 'normalize';*/
 /*@import 'mint-ui/lib/style.css';*/
body{
  /* padding-bottom:1.56rem; */
  background: #F4F4F4;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
}
.mint-swipe-indicator{
  background: #000;
  border: 1px solid black
}
.mint-swipe-indicator.is-active{
  background: #ddd;
}
.mint-cell-title{
  font-size: 0.4rem;
}
.mint-cell-wrapper{
  padding: 0 0.3rem;
}
.mint-cell-allow-right::after {
  width: 0.3rem;
  height: 0.3rem;
}
  .fontSize04{
    font-size: 0.4rem;
  }
  .fontSize03{
    font-size: 0.3rem;
  }
  .colorRed{
    color: red;
  }
  .color98499C{
    color: #98499C;
  }
</style>
