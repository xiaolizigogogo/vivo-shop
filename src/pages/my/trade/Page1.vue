<template>
  <div class="Page1">
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell inputCell">
        <div class="box topLabel">
          <label class="weui-label">充值金额(最少1元)</label>
        </div>
        <div class="box">
          <input
            class="weui-input"
            v-model="params.money"
            type="number"
            pattern="[0-9]+"
            placeholder="请输入与店家确认的金额"
          >
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_select-after">
          <div class="weui-cell__hd">
            <label for class="weui-label">选择会员卡</label>
          </div>
          <div class="weui-cell__bd">
            <select class="weui-select" v-model="selectCard">
              <option disabled value="">请选择</option>
              <option v-for="item in cardOptions" v-bind:key="item.id" v-bind:value="item">{{ item.cardName }}</option>
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
import wexinPay from "../../pay/wxPayComponent";
import { unifiedOrder,getCardList } from "../../../api/api";
export default {
  name: "Page1",
  data() {
    return {
      params: {
        openid: "",
        totalFee: "1",
        body: "在线充值",
        tradeType: "JSAPI",  
        money: undefined,
      },
      selectCard:{},
      cardOptions: [
        ]
    };
  },
  created(){
    this.params.openid = JSON.parse(
        localStorage.getItem("user")
      ).weixinOpenid;
    let params={};
    params.current=1;
    params.size=10;
    params.openid=this.params.openid;
    getCardList(params).then(res=>{
        console.log(res)
        this.cardOptions=res.data.data.records;
    })
  },
  methods: {
    pay() {
      this.params.totalFee = this.params.money * 100;
      this.params.attach = JSON.stringify({ orderType: "在线充值",cardId:this.selectCard.id,cardName:this.selectCard.cardName });
      let params = this.params;
      unifiedOrder(params).then(res => {
        wexinPay(res.data.data, this.success(), this.error());
      });
    },
    success() {},
    error() {}
  }
};
</script>
<!-- 引入组件库 -->

<style lang="stylus" scoped>
.weui-cells {
  margin-top: 0;

  .inputCell {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 0.3rem;

    .topLabel {
      margin: 1rem 0 0.3rem;
    }

    .box {
      width: 100%;

      .weui-input {
        text-align: right;
        padding-right: 0.3rem;
        border: 1px solid #98499C;
        width: 100%;
        height: 1.5rem;
      }
    }
  }
}

.weui-label {
  color: #9D9D9D;
  font-size: 0.3rem;
}

.weui-select {
  display: flex;
  justify-content: flex-end;
  font-size: 0.4rem;
  direction: rtl;
}

.weui-btn-area {
  margin: 0.3rem;

  .weui-btn {
    height: 1.2rem;
    background-color: #98499C;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.5rem;
  }
}
</style>
