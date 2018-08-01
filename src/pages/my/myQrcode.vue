<template>
    <div class="myQrcode">
      <div class="container">
        <div class="container-bj">
          <img :src="user.avatar">

        </div>
        <div class="container-bj">
          <img :src="user.qrcodeUrl">
          <span>我的二维码</span>
        </div>
        <div class="container-bj">
          <span>分销规则</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "myqrcode",
        data() {
          return {
            user:''
          }
        },
        mounted(){
          this.user=JSON.parse(localStorage.getItem("user"))
          this.user.qrcodeUrl="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+this.user.qrcodeUrl
        }
    }
</script>

<style scoped>
  .myQrcode{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>


<style lang="stylus" scoped>
  @import '../../fon/fontMy/iconfont.css'
  .box
    margin-top:0.3rem
    margin-bottom:1.45rem

  .mainColor
    color #bb2727
    font-weight bold
  .iconfont
    color #bb2727
    font-size 0.4rem
  .mint-cell
    height 1rem
    display flex
    justify-content flex-start
    border-bottom 1px solid #bb2727
  .container-order
    box-shadow 5px 5px 5px #ffffff
    height 3.5rem
    background white
    display block
    margin 0.3rem 0.3rem 0
    font-size 0.35rem
    .container-order-1
      border-bottom 1px solid #e9e9e9
      width 100%
      height 1.2rem
      .left
        float: left;
        display: block;
        line-height: 1.2rem;
        margin-left: .5rem;
        font-size: 0.4rem;

      .right
        float: right;
        line-height: 1.2rem;
        margin-right: .6rem;
        font-size: 0.4rem;


    .container-order-2
      width 100%
      height 2.3rem
      display flex
      justify-content center
      align-items flex-start

      .myOrder
        width 25%
        display flex
        flex-direction column
        align-items center

        .iconfont
          font-size 0.8rem

        span
          text-align center




  .t{
    background-image url('/static/img/t.png');
  }

  .container {
    overflow hidden
    width: 100%;
    .container-bj {
      overflow hidden
      width: 100%;
      height: 5rem;
      background-size: 100% 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      img {
        width: 2.3rem;
        height: 2.3rem;
        border-radius: 50%;
      }

      span {
        color: #353535;
        font-size: 0.5rem;
      }

      p {
        font-size 0.35rem;
        color: #ffffff;
      }
    }
    .container-integral{
      box-shadow 5px 5px 5px #ffffff
      margin 0.3rem 0.3rem 0
      height 2rem
      background #ffffff
      display: flex;
      justify-content: center
      p{
        width 33%
        height 100%
        font-size .36rem
        line-height .6rem
        font-weight 500
        float left
        display flex
        flex-direction column
        text-align center
        justify-content: center;
      }
    }

    .container-con {
      margin-bottom 1.45rem
      .con {
        width: 100%;
        height: 1.41rem;
        background: #ffffff;
        border-bottom: 1px solid #f0f0f0;
        display: block;

        .con-left {
          float: left;
          line-height: 1.3rem;
          padding-left: 0.47rem;

          i {
            font-size: 0.5rem;
          }

          span {
            font-size: 0.37rem;
            padding-left: 0.1rem;
          }
        }

        .con-rigth {
          float: right;
          line-height: 1.3rem;
          padding-right: 0.4rem;
        }
      }
    }
  }
</style>
