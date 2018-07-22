<template>
    <div class="coupon">
      <section class="coupon_sec">
        <div class="coupon_sec_body">
          <a href="javascript:;" class="coupon_default coupon_default_v2 bg_blue"
                                        map="[object Object]">
          <div class="coupon_default_inner"><!----> <!----> <img class="coupon_default_image"
                                                                 onerror="__reloadResource(this)"
                                                                 src="/static/img/logo.jpg"
                                                                 loaded="10">
            <p class="coupon_default_name"><span>{{item.name}}</span></p> <span class="coupon_default_price"><em>¥{{item.typeMoney}}</em>满{{item.minGoodsAmount}}可用
                </span>
            <div class="coupon_default_status coupon_default_status_add"><span
              class="coupon_default_status_icon status_off">{{item.status}}</span> <i>剩余{{item.minAmount}}张</i></div>
          </div>
        </a>
        </div>
      </section>
    </div>
</template>

<style lang="stylus" scoped>
</style>
<style>
  .coupon_sec {
    background-color: #fff;
    margin-bottom: 10px;
    overflow: hidden;
    position: relative;
  }
  .coupon_sec .coupon_default {
    margin: 0 0 10px;
  }
  .coupon_default.bg_blue {
    color: #7eacf4;
  }
  .coupon_default {
    display: block;
    position: relative;
    height: 114px;
    margin: 10px;
    z-index: 1;
  }
  a, a:visited {
    text-decoration: none;
    color: #333;
  }
  .coupon_default_inner {
    position: relative;
    z-index: 1;
    height: 114px;
    background-color: #fff;
    /*-webkit-mask-box-image-source: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAApBAMAAABXfK/HAAAABGdBT…2uUmPVqlWrVq1a1V5uScvQNCJNe5M0TU0r1jR4zbfB/oxuVMRWrAgOtD4AAAAASUVORK5CYII=);*/
    /*mask-border-source: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKoAAAApBAMAAABXfK/HAAAABGdBT…2uUmPVqlWrVq1a1V5uScvQNCJNe5M0TU0r1jR4zbfB/oxuVMRWrAgOtD4AAAAASUVORK5CYII=);*/
    -webkit-mask-box-image-width: 10px 85px 10px 0;
    mask-border-width: 10px 85px 10px 0;
    -webkit-mask-box-image-slice: 20 168 20 1 fill;
    mask-border-slice: 20 168 20 1 fill;
    border-radius: 5px;
  }
  .coupon_default_image {
    display: block;
    width: 75px;
    height: 75px;
    position: absolute;
    left: 10px;
    top: 20px;
    border-radius: 4px;
  }
  .coupon_default_price {
    font-size: 14px;
    position: absolute;
    left: 90px;
    right: 80px;
    bottom: 0;
    font-family: font_helvetica;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .coupon_default_name {
    font-size: 12px;
    color: #666;
    position: absolute;
    left: 90px;
    top: 10px;
    right: 80px;
  }
  .coupon_default_name span {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .coupon_default_status {
    display: block;
    width: 75px;
    text-align: center;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: currentColor;
    border-radius: 0 5px 5px 0;
  }
  .coupon_default.coupon_default_v2 .coupon_default_status.coupon_default_status_add .coupon_default_status_icon {
    top: 40%;
  }
  .coupon_default.coupon_default_v2 .coupon_default_status.coupon_default_status_add i {
    position: absolute;
    top: 84px;
    width: 100%;
    left: 0;
    color: #fff;
    font-size: 12px;
  }
  .coupon_default.coupon_default_v2 .coupon_default_status_icon.status_off {
    line-height: 32px;
  }
  em, i {
    font-style: normal;
  }
  .coupon_default.coupon_default_v2 .coupon_default_status_icon {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%,-50%);
    transform: translate(-50%,-50%);
    line-height: 15px;
    border: 2px solid #fff;
    color: #fff;
    margin: 0;
    width: 50px;
    height: 50px;
    padding: 9px 0;
    font-size: 12px;
    box-sizing: border-box;
  }
  .coupon_default.bg_blue {
    color: #7eacf4;
  }
  .coupon_default_price em {
    display: inline-block;
    vertical-align: -2px;
    margin-right: 6px;
    font-size: 30px;
  }
  .coupon_default_status_icon {
    display: block;
    font-size: 12px;
    color: rgba(0,0,0,.2);
    border: 2px solid currentColor;
    border-radius: 50%;
    width: 45px;
    height: 45px;
    line-height: 45px;
    text-align: center;
    margin: 10px auto;
  }
</style>
<script>
export default {
  data(){
    return {

    }
  },
  props:{
    item: Object,
    productTypes:{
      type:Array
    }
  },
  methods:{

  },
  mounted(){
    console.log('item',this.item)
  }
}
</script>

