<template>
  <div id="bottom">
    <ul class="bottom-ul">
      <router-link  to="/home" tag="li">
        <div class="index">
          <i class="iconfont icon-shouye_xuanzhong" style="color:#98499C" v-if="active ==='home'"></i>
          <i class="iconfont icon-shouye2" v-else></i>
          <span>首页</span>
        </div>

      </router-link>

      <router-link to="/cart" tag="li">
        <div class="index">
          <i class="iconfont icon-dongtaixuanzhong" style="color:#98499C" v-if="active ==='cart'"></i>
          <i class="iconfont icon-dongtai" v-else></i>
          <span>购物车</span>
        </div>

      </router-link>
      <router-link to="/classify" tag="li">
        <div class="index">
          <i class="iconfont icon-fenleixuanzhong" style="color:#98499C" v-if="active ==='subscribe'"></i>
          <i class="iconfont icon-fenlei-copy"  v-else></i>
          <span>分类</span>
        </div>
      </router-link>
       <router-link to="/my" tag="li">
        <div class="index">
          <i class="iconfont icon-wode-" style="color:#98499C" v-if="active ==='my'"></i>
          <i class="iconfont icon-wode"  v-else></i>
          <span>我的</span>
        </div>

      </router-link>

    </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        active:'home',
      }
    },
    mounted(){
      this.active = this.$route.path.slice(1);
    }
  }
</script>

<style lang="stylus" scoped>
  #bottom
    width: 100%;
    background: yellow;
    position: fixed;
    bottom: 0;
    color: #666
    background white
    z-index 1
    .bottom-ul
      display: flex;
      justify-content: center;
      align-items: center;
      li
        width 25%
        .index
          display: flex;
          justify-content: center;
          flex-direction: column;
          text-align center
          span
            font-size .3rem
          i
            font-size .55rem
      .router-link:hover,.router-link-active
        color: #98499C
</style>
