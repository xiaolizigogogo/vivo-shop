<template>
    <div>
        <div class="address">
            <div class="address-box">
                <label for="">收货人：</label>
                <input type="text" v-model="submitForm.userName" placeholder="收货人姓名">
            </div>

             <div class="address-box">
                <label for="">手机号码：</label>
                <input type="text" v-model="submitForm.telNumber" placeholder="收货人的手机号码">
            </div>

             <div class="address-box">
                <label for="">选择地区：</label>
                <input type="text" v-model="submitForm.address" placeholder="请选择收货地址" @click="add">
            </div>

             <div class="address-box">
                <label for="">详细地址：</label>
                <input type="text" v-model="submitForm.detailInfo" placeholder="详细街道地址">
            </div>
        </div>

        <div class="footer">
            <a @click="submit">保存地址</a>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { Toast } from "mint-ui";
import {getJsTicket,addAddress} from '../api/api'
import wx from 'weixin-js-sdk'
export default {
  name: "add_address",
  data() {
    return {
      name: "",
      phone: "",
      zone: "",
      detail: "",
      submitForm:{
        userName:'',
        telNumber:'',
        nationalCode:0,
        postalCode:0,
        provinceName:'',
        cityName:'',
        countryName:'',
        detailInfo:'',
        address:''
      }
    };
  },
  components: {

  },
  created(){
    getJsTicket({url:window.signLink}).then(res => {

      res.data.data.debug = true
      res.data.data.jsApiList = ['checkJsApi','editAddress']
      alert(JSON.stringify(res.data.data))

      wx.config(res.data.data);
      wx.ready(() => {

      });
      wx.error(function (res) {
        console.log('wx err', res);
        //可以更新签名
      });
    })},
  methods: {
    btn() {
      if (
        this.submitForm.userName == "" ||
        this.submitForm.telNumber == "" ||
        this.submitForm.address == "" ||
        this.submitForm.detailInfo == ""
      ) {
        Toast({
          message: "信息请填写完整",
          duration: 950
        });
      } else {
        var data = {
          name: this.name,
          phone: this.phone,
          zone: this.zone,
          detail: this.detail
        };
        this.$router.back();
      }
    },
    add(){
      wx.openAddress({
        success: function (res) {
            this.submitForm.userName=res.userName;
          this.submitForm.telNumber=res.telNumber;
          this.submitForm.nationalCode=res.nationalCode;
          this.submitForm.postalCode=res.postalCode;
          this.submitForm.provinceName=res.provinceName;
          this.submitForm.cityName=res.cityName;
          this.submitForm.countryName=res.countryName;
          this.submitForm.detailInfo=res.detailInfo;
            this.submitForm.address=this.submitForm.provinceName+" "+this.submitForm.cityName+" "+this.submitForm.countryName
          alert(this.submitForm)
        }
      });
    },
    submit(){
      if (
        this.submitForm.userName == "" ||
        this.submitForm.telNumber == "" ||
        this.submitForm.address == "" ||
        this.submitForm.detailInfo == ""
      ) {
        Toast({
          message: "信息请填写完整",
          duration: 950
        });
      }
      else{
        addAddress(this.submitForm).then(res=>{
          alert(JSON.stringify(res.data))
      })
      }

    }
  },
  mounted(){
    document.title = '新增地址'
  }
};
</script>

<style lang="stylus" scoped>
.address {

    .address-box {
        width: 100%;
        height: 1.5rem;
        line-height: 1.5rem;
        background: #fff;

        label {
            width: 30%;
            height: 100%;
            padding-left: 0.58rem;
            font-size: 0.4rem;
            display: block;
            float: left;
        }

        input {
            width: 70%;
            font-size: 0.4rem;
        }
    }
}

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 1.3rem;
    border-top: 1px solid #e0e0e0;
    background: #ffffff;

    a {
        float: none;
        display: block;
        margin: 0.18rem auto;
        text-align: center;
        width: 95%;
        height: 0.9rem;
        line-height: 0.9rem;
        border-radius: 20px;
        font-size: 0.28rem;
        color: #fff;
        background-color: #00acff;
    }
}
</style>
