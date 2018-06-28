<template>
  <div class="Page1">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell inputCell">
          <div class="box topLabel"><label class="weui-label">消费金额(最少1元)</label></div>
          <div class="box">
              <input class="weui-input" v-model="params.money" type="number" pattern="[0-9]+" placeholder="请输入与店家确认的金额"/>
          </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">支付方式</label>
            </div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="select1">
                    <option selected="" value="1">微信</option>
                    <option value="2">支付宝</option>
                    <option value="3">银联</option>
                </select>
            </div>
        </div>
        <div class="weui-cell weui-cell_select-after">
            <div class="weui-cell__hd">
                <label for="" class="weui-label">抵用卷</label>
            </div>
            <div class="weui-cell__bd">
                <select class="weui-select" name="select2">
                    <option value="1">暂无</option>
                </select>
            </div>
        </div>
      </div>
      <div class="weui-btn-area">
          <a class="weui-btn" href="javascript:" id="showTooltips" @click="pay">确定支付</a>
      </div>
    </div>
  </div>
</template>
<script>
  import wexinPay from '../../pay/wxPayComponent'
  export default {
    name: "Page1",
    data(){
      return {
         params:{
          "openid":"obWT-0giZxiX-k1MNWMt2kXics5k",
          "totalFee":"1",
          "body":"66666666",
          "tradeType":"JSAPI",
           money:undefined
        }
      }
    },
    methods:{
      pay(){
        wexinPay();
      }
    }

  }
</script>
<!-- 引入组件库 -->

<style lang="stylus" scoped>
.weui-cells
  margin-top 0
  .inputCell
    display flex
    flex-direction column
    align-items flex-start
    margin-bottom 0.3rem
    .topLabel
      margin 1rem 0 0.3rem
    .box
      width 100%
      .weui-input
        text-align right
        padding-right 0.3rem
        border 1px solid #98499C
        width 100%
        height 1.5rem
.weui-label
  color #9D9D9D
  font-size 0.3rem
.weui-select
  display flex
  justify-content flex-end
  font-size 0.4rem
  direction: rtl
.weui-btn-area
  margin 0.3rem
  .weui-btn
    height 1.2rem
    background-color #98499C
    display flex
    justify-content center
    align-items center
    font-size 0.5rem
</style>
