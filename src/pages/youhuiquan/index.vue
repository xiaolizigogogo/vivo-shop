<template>
  <div id="app" class="app">
    <div class="dialog-componet">
      <div class="modal-mask" style="display: none;">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
              <!---->
            </div>
            <div class="modal-body">
              <!---->
              <h4 class="content" style="display: none;"></h4>
              <h5 class="sub-content" style="display: none;"></h5>
            </div>
            <div class="modal-footer">
              <button class="modal-default-button btn-cancel" style="display: none;">取消</button>
              <button class="modal-default-button btn-ok">确定</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div data-v-90eb8484 class="coupon-active-page view" style>
      <div data-v-90eb8484 class="loading mask" style="display: none;">
        <div></div>
      </div>
      <div
        data-v-90eb8484
        class="main-view flex-container"
        style="background-color: rgb(227, 237, 247);"
      >
        <div data-v-90eb8484 class="banner-container home-swiper">
          <mt-swipe :auto="4000">
            <mt-swipe-item v-for="(list,index) in swiper" :key="index">
              <img :src="list.imageUrl">
            </mt-swipe-item>
          </mt-swipe>
        </div>
        <div data-v-90eb8484 class="package-container bg-image">
          <div data-v-90eb8484 class="bottom-con">
            <div data-v-90eb8484>
              <h4 class="desc">斯卡莱价值398元小气泡深层清洁体验券</h4>
              <input
                type="tel"
                placeholder="请输入领取手机号"
                maxlength="11"
                class="form-input text-center"
                v-modal="phone"
              >
              <button type="button" class="btn btn-submit" @click="submit()">领取体验券</button>
            </div>
            <!---->
          </div>
          <p data-v-90eb8484 class="activity-rule" style="color: rgba(0, 0, 0, 0.4);">- 服务流程 -</p>
          <div data-v-90eb8484 class="rule-detail" style="color: rgba(0, 0, 0, 0.4);">
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">1.卸妆-洁面；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">2.离子喷雾；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">3.黑头导出液；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">4.韩国小气泡；&nbsp;</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">5.一次LED灯照光；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">6.全程60分钟；</span>
            </p>
            <p>
              <br>
            </p>
          </div>
          <p data-v-90eb8484 class="activity-rule" style="color: rgba(0, 0, 0, 0.4);">- 活动规则 -</p>
          <div data-v-90eb8484 class="rule-detail" style="color: rgba(0, 0, 0, 0.4);">
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">1.本券新老用户均可领取，每个用户（手机号）限领1次；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">2.本券仅限在领券地区使用；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">3.领取后的体验券会直接充值到对应的账户（手机号）中；</span>
            </p>
            <p style="white-space: normal;">
              <span
                style="font-family: arial, helvetica, sans-serif;"
              >4.每次只能使用一张体验券，不叠加，不找零，不退换；&nbsp;</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">5.提前2个小时预约 电话：0411-82353576；</span>
            </p>
            <p style="white-space: normal;">
              <span style="font-family: arial, helvetica, sans-serif;">6.有效期内仍需遵守服务区规则和信用分规则；</span>
            </p>
            <p style="white-space: normal;">
              <span
                style="font-family: arial, helvetica, sans-serif;"
              >7.本活动由斯卡莱护肤专家组织，对活动规则有任何疑问，请联系斯卡莱护肤专家。</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import wx from "weixin-js-sdk";
import { Toast,MessageBox } from "mint-ui";
import {
  getProductTypes,
  getUserInfoByOpenId,
  getGoods,
  getCategory,
  getWechatUserInfo,
  getWechatOAuth2UserInfo,
  getWechatOpenid,
  getAdPositionDetail,
  getJsTicket,
  unifiedOrder,
  getAdmins,
  getWxCardExt
} from "../../api/api";
export default {
  data() {
    return {
      swiper: [
        {
          imageUrl:
            "http://image.yodemon.top//sikalai/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190113223854.jpg"
        },
        {
          imageUrl: "/static/img/home1.jpg"
        },
        {
          imageUrl: "/static/img/home2.jpg"
        }
      ],
      phone: ""
    };
  },
  created() {
    if (window.signLink == undefined || window.signLink == "") {
      window.signLink = window.location.href;
      const code = this.$route.query.code;
      if (code) {
        getWechatOpenid({ code: code, lang: "zh_CN" }).then(res => {
          sessionStorage.setItem("token", JSON.stringify(res.data.data));
          this.openid = res.data.data.openId;
          getUserInfoByOpenId({ openid: this.openid }).then(res => {
            sessionStorage.setItem("user", JSON.stringify(res.data.data));
          });
        });
      }
    }
    getJsTicket({ url: window.signLink }).then(res => {
      res.data.data.jsApiList = [
        "onMenuShareTimeline",
        "onMenuShareAppMessage",
        "onMenuShareQQ",
        "onMenuShareWeibo",
        "onMenuShareQZone",
        "startRecord",
        "stopRecord",
        "onVoiceRecordEnd",
        "playVoice",
        "pauseVoice",
        "stopVoice",
        "onVoicePlayEnd",
        "uploadVoice",
        "downloadVoice",
        "chooseImage",
        "previewImage",
        "uploadImage",
        "downloadImage",
        "translateVoice",
        "getNetworkType",
        "openLocation",
        "getLocation",
        "hideOptionMenu",
        "showOptionMenu",
        "hideMenuItems",
        "showMenuItems",
        "hideAllNonBaseMenuItem",
        "showAllNonBaseMenuItem",
        "closeWindow",
        "scanQRCode",
        "chooseWXPay",
        "openProductSpecificView",
        "addCard",
        "chooseCard",
        "openCard",
        "updateAppMessageShareData"
      ];
      wx.config(res.data.data);
      wx.ready(() => {
      
        wx.onMenuShareAppMessage({
          title: "送你斯卡莱美容免费体验券，速领", // 分享标题
          desc: "点击领取398元美容免费体验券", // 分享描述
          link:
            "http://sikalai.szfre.cn/youhuiquan", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            "http://image.yodemon.top//sikalai/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190113223854.jpg", // 分享图标
          type: "link", // 分享类型,music、video或link，不填默认为link
          dataUrl: "", // 如果type是music或video，则要提供数据链接，默认为空
          success: function() {
            // 用户点击了分享后执行的回调函数
          }
        });
        wx.onMenuShareTimeline({
          title: "送你斯卡莱美容免费体验券，速领", // 分享标题
          link:
            "http://sikalai.szfre.cn/youhuiquan", // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
          imgUrl:
            "http://image.yodemon.top//sikalai/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20190113223854.jpg", // 分享图标
          success: function() {
            // 用户点击了分享后执行的回调函数
          }
        });
      });
      wx.error(function(res) {
        console.log("wx err", res);
        //可以更新签名
      });
    });
  },
  methods: {
    submit() {
      /**
       * 如果未授权先授权
       */
      if (sessionStorage.getItem("user") == null) {
        //http://image.yodemon.top/sikalai/%E6%96%AF%E5%8D%A1%E8%8E%B1%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg
        window.location.href =
          "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxe0320d47d0ff807f&redirect_uri=http://sikalai.szfre.cn/youhuiquan&response_type=code&scope=snsapi_userinfo&state=#wechat_redirect";
      } else {
        /**
         * 已授权则去查询该openid是否关注
         */
        getUserInfoByOpenId({ openid: this.openid }).then(res => {
          let user = res.data.data;
          if (user.subscribe == 0) {
            MessageBox.confirm("", {
              width: 200,
              height: 200,
              message: "关注后即可领券，还有更多优惠！",
              title: "关注公众号",
              showModal: true,
              confirmButtonText: "立即去关注"
            }).then(actions => {
              if (actions == "confirm") {
                //确认的回调
                wx.previewImage({
                  current:
                    "http://image.yodemon.top/sikalai/%E6%96%AF%E5%8D%A1%E8%8E%B1%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg", // 当前显示图片的http链接
                  urls: [
                    "http://image.yodemon.top/sikalai/%E6%96%AF%E5%8D%A1%E8%8E%B1%E4%BA%8C%E7%BB%B4%E7%A0%81.jpg"
                  ] // 需要预览的图片http链接列表
                });
              }
            });
          } else {
            if(phone==''){
            Toast({
              message: '请输入手机号！'
            });
            }
            getWxCardExt({ cardId: "pbWT-0rqFHE3NrAt_njQQ4YwJ9Vk" }).then(
              res => {
                console.log(res);
                wx.addCard({
                  cardList: [
                    {
                      cardId: "pbWT-0rqFHE3NrAt_njQQ4YwJ9Vk",
                      cardExt: JSON.stringify({
                        timestamp: res.data.data.timestamp,
                        nonce_str: res.data.data.nonceStr,
                        signature: res.data.data.signature
                      })
                    }
                  ], // 需要添加的卡券列表
                  success: function(res) {
                    var cardList = res.cardList; // 添加的卡券列表信息
                    console.log(res);
                  }
                });
              }
            );
          }
        });
      }
    }
  }
};
</script>

<style>
.center[data-v-90eb8484] {
  margin-left: auto;
  margin-right: auto;
}
.central[data-v-90eb8484] {
  width: auto;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.screen-max[data-v-90eb8484] {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.z-max[data-v-90eb8484] {
  z-index: 2147483584;
}
.absolute[data-v-90eb8484] {
  position: absolute;
}
.relative[data-v-90eb8484] {
  position: relative;
}
.fixed[data-v-90eb8484] {
  position: fixed;
}
.static[data-v-90eb8484] {
  position: static;
}
.sticky[data-v-90eb8484] {
  position: -webkit-sticky;
  position: sticky;
}
.float-left[data-v-90eb8484] {
  float: left;
}
.float-right[data-v-90eb8484] {
  float: right;
}
.float-none[data-v-90eb8484] {
  float: none;
}
.clear-left[data-v-90eb8484] {
  clear: left;
}
.clear-right[data-v-90eb8484] {
  clear: right;
}
.both[data-v-90eb8484] {
  clear: both;
}
.none[data-v-90eb8484] {
  display: none;
}
.block[data-v-90eb8484] {
  display: block;
}
.inline[data-v-90eb8484] {
  display: inline;
}
.inline-block[data-v-90eb8484] {
  display: inline-block;
}
.table[data-v-90eb8484] {
  display: table;
}
.table-cell[data-v-90eb8484] {
  display: table-cell;
}
.table-col[data-v-90eb8484] {
  display: table-column;
}
.table-row[data-v-90eb8484] {
  display: table-row;
}
.show[data-v-90eb8484] {
  display: block;
}
.hide[data-v-90eb8484] {
  display: none;
}
.over-hide[data-v-90eb8484] {
  overflow: hidden;
}
.over-show[data-v-90eb8484] {
  overflow: visible;
}
.over-auto[data-v-90eb8484] {
  overflow: auto;
}
.over-scroll[data-v-90eb8484] {
  overflow: scroll;
}
.scroll[data-v-90eb8484] {
  overflow: scroll;
}
.scroll-x[data-v-90eb8484] {
  overflow-x: auto;
  overflow-y: hidden;
}
.scroll-y[data-v-90eb8484] {
  overflow-x: hidden;
  overflow-y: auto;
}
.font-smooth[data-v-90eb8484] {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-left[data-v-90eb8484] {
  text-align: left;
}
.text-right[data-v-90eb8484] {
  text-align: right;
}
.text-center[data-v-90eb8484] {
  text-align: center;
}
.start[data-v-90eb8484] {
  text-align: start;
}
.end[data-v-90eb8484] {
  text-align: end;
}
.justify[data-v-90eb8484] {
  text-align: justify;
}
.normal[data-v-90eb8484] {
  font-weight: normal;
  font-style: normal;
}
.bold[data-v-90eb8484] {
  font-weight: bold;
}
.italic[data-v-90eb8484] {
  font-style: italic;
}
.oblique[data-v-90eb8484] {
  font-style: oblique;
}
.v-top[data-v-90eb8484] {
  vertical-align: top;
}
.v-middle[data-v-90eb8484] {
  vertical-align: middle;
}
.v-bottom[data-v-90eb8484] {
  vertical-align: bottom;
}
.v-base[data-v-90eb8484] {
  vertical-align: baseline;
}
.v-text[data-v-90eb8484] {
  vertical-align: text-top;
}
.text-keep[data-v-90eb8484] {
  word-wrap: normal;
  word-break: keep-all;
  white-space: nowrap;
}
.text-break[data-v-90eb8484] {
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}
.border-none[data-v-90eb8484] {
  border: none;
}
.hand[data-v-90eb8484] {
  cursor: pointer;
}
.move[data-v-90eb8484] {
  cursor: move;
}
.wait[data-v-90eb8484] {
  cursor: wait;
}
.help[data-v-90eb8484] {
  cursor: help;
}
.crosshair[data-v-90eb8484] {
  cursor: crosshair;
}
.hand-top[data-v-90eb8484] {
  cursor: n-resize;
}
.hand-left[data-v-90eb8484] {
  cursor: w-resize;
}
.hand-right[data-v-90eb8484] {
  cursor: e-resize;
}
.hand-bottom[data-v-90eb8484] {
  cursor: s-resize;
}
.hand-top-left[data-v-90eb8484],
.hand-left-top[data-v-90eb8484] {
  cursor: nw-resize;
}
.hand-top-right[data-v-90eb8484],
.hand-right-top[data-v-90eb8484] {
  cursor: ne-resize;
}
.hand-bottom-left[data-v-90eb8484],
.hand-left-bottom[data-v-90eb8484] {
  cursor: sw-resize;
}
.hand-bottom-right[data-v-90eb8484],
.hand-right-bottom[data-v-90eb8484] {
  cursor: se-resize;
}
.screen-top[data-v-90eb8484],
.screen-left[data-v-90eb8484],
.screen-right[data-v-90eb8484],
.screen-bottom[data-v-90eb8484] {
  position: fixed;
}
.screen-top[data-v-90eb8484],
.screen-bottom[data-v-90eb8484] {
  left: 0;
  right: 0;
}
.screen-left[data-v-90eb8484],
.screen-right[data-v-90eb8484] {
  top: 0;
  bottom: 0;
}
.screen-top[data-v-90eb8484] {
  top: 0;
}
.screen-bottom[data-v-90eb8484] {
  bottom: 0;
}
.screen-left[data-v-90eb8484] {
  left: 0;
}
.screen-right[data-v-90eb8484] {
  right: 0;
}
.caret-base[data-v-90eb8484] {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  content: "";
}
.drop[data-v-90eb8484] {
  position: relative;
}
.drop > dd[data-v-90eb8484] {
  position: absolute;
  display: none;
}
.drop:hover > dd[data-v-90eb8484] {
  display: block;
}
.drop-up[data-v-90eb8484],
.drop-down[data-v-90eb8484],
.drop-left[data-v-90eb8484],
.drop-right[data-v-90eb8484] {
  position: relative;
}
.drop-up > dd[data-v-90eb8484],
.drop-down > dd[data-v-90eb8484],
.drop-left > dd[data-v-90eb8484],
.drop-right > dd[data-v-90eb8484] {
  position: absolute;
  display: none;
}
.drop-up:hover > dd[data-v-90eb8484],
.drop-down:hover > dd[data-v-90eb8484],
.drop-left:hover > dd[data-v-90eb8484],
.drop-right:hover > dd[data-v-90eb8484] {
  display: block;
}
.drop-up > dd[data-v-90eb8484] {
  bottom: 100%;
}
.drop-down > dd[data-v-90eb8484] {
  top: 100%;
}
.drop-left > dd[data-v-90eb8484] {
  rigth: 100%;
}
.drop-right > dd[data-v-90eb8484] {
  left: 100%;
}
.no-shadow[data-v-90eb8484] {
  box-shadow: none;
}
.no-select[data-v-90eb8484] {
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.list-inline > li[data-v-90eb8484] {
  display: inline-block;
}
.clearfix[data-v-90eb8484]:before,
.clearfix[data-v-90eb8484]:after {
  visibility: hidden;
  display: table;
  content: " ";
}
.clearfix[data-v-90eb8484]:after {
  clear: both;
}
.coupon-active-page .main-view[data-v-90eb8484] {
  min-height: 100%;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  background-color: #47332e;
}
.coupon-active-page .main-view .banner-container[data-v-90eb8484] {
  position: relative;
}
.coupon-active-page .main-view .banner-container .banner[data-v-90eb8484] {
  display: block;
  width: 100%;
}
.coupon-active-page .main-view .banner-container .banner-bg[data-v-90eb8484] {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 0.36rem;
  width: 100%;
}
.coupon-active-page .main-view .package-container[data-v-90eb8484] {
  display: block;
  z-index: 1;
}
.coupon-active-page .main-view .package-container .bottom-con[data-v-90eb8484] {
  width: 9.55rem;
  padding: 0.7rem 0.3rem;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 0.06rem;
  margin: 0 auto 0;
}
.coupon-active-page
  .main-view
  .package-container
  .activity-rule[data-v-90eb8484] {
  font-size: 0.6rem;
  color: #a48f88;
  padding-top: 0.7rem;
  margin-bottom: 0.5rem;
  text-align: center;
}
.coupon-active-page
  .main-view
  .package-container
  .rule-detail[data-v-90eb8484] {
  font-size: 0.4rem;
  color: #b7a199;
  letter-spacing: 0;
  text-align: left;
  width: 100%;
  padding: 0 0.5rem 0.45rem;
  overflow: hidden;
}
.coupon-active-page .footer[data-v-90eb8484] {
  width: 100%;
  height: 105px;
  padding: 30px 0;
}
.coupon-active-page .footer img[data-v-90eb8484] {
  display: block;
  margin: auto;
  width: 130px;
}
.coupon-active-page .footer p[data-v-90eb8484] {
  text-align: center;
  margin: 5px auto;
  font-size: 12px;
}
.coupon-active-page .footer p a[data-v-90eb8484] {
  color: #646471;
  text-decoration: none;
}
.btn[disabled][data-v-90eb8484] {
  border: none !important;
  background-color: transparent !important;
}

.center {
  margin-left: auto;
  margin-right: auto;
}
.central {
  width: auto;
  height: auto;
  position: fixed;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.screen-max {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.z-max {
  z-index: 2147483584;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.fixed {
  position: fixed;
}
.static {
  position: static;
}
.sticky {
  position: -webkit-sticky;
  position: sticky;
}
.float-left {
  float: left;
}
.float-right {
  float: right;
}
.float-none {
  float: none;
}
.clear-left {
  clear: left;
}
.clear-right {
  clear: right;
}
.both {
  clear: both;
}
.none {
  display: none;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.inline-block {
  display: inline-block;
}
.table {
  display: table;
}
.table-cell {
  display: table-cell;
}
.table-col {
  display: table-column;
}
.table-row {
  display: table-row;
}
.show {
  display: block;
}
.hide {
  display: none;
}
.over-hide {
  overflow: hidden;
}
.over-show {
  overflow: visible;
}
.over-auto {
  overflow: auto;
}
.over-scroll {
  overflow: scroll;
}
.scroll {
  overflow: scroll;
}
.scroll-x {
  overflow-x: auto;
  overflow-y: hidden;
}
.scroll-y {
  overflow-x: hidden;
  overflow-y: auto;
}
.font-smooth {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.text-left {
  text-align: left;
}
.text-right {
  text-align: right;
}
.text-center {
  text-align: center;
}
.start {
  text-align: start;
}
.end {
  text-align: end;
}
.justify {
  text-align: justify;
}
.normal {
  font-weight: normal;
  font-style: normal;
}
.bold {
  font-weight: bold;
}
.italic {
  font-style: italic;
}
.oblique {
  font-style: oblique;
}
.v-top {
  vertical-align: top;
}
.v-middle {
  vertical-align: middle;
}
.v-bottom {
  vertical-align: bottom;
}
.v-base {
  vertical-align: baseline;
}
.v-text {
  vertical-align: text-top;
}
.text-keep {
  word-wrap: normal;
  word-break: keep-all;
  white-space: nowrap;
}
.text-break {
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}
.border-none {
  border: none;
}
.hand {
  cursor: pointer;
}
.move {
  cursor: move;
}
.wait {
  cursor: wait;
}
.help {
  cursor: help;
}
.crosshair {
  cursor: crosshair;
}
.hand-top {
  cursor: n-resize;
}
.hand-left {
  cursor: w-resize;
}
.hand-right {
  cursor: e-resize;
}
.hand-bottom {
  cursor: s-resize;
}
.hand-top-left,
.hand-left-top {
  cursor: nw-resize;
}
.hand-top-right,
.hand-right-top {
  cursor: ne-resize;
}
.hand-bottom-left,
.hand-left-bottom {
  cursor: sw-resize;
}
.hand-bottom-right,
.hand-right-bottom {
  cursor: se-resize;
}
.screen-top,
.screen-left,
.screen-right,
.screen-bottom {
  position: fixed;
}
.screen-top,
.screen-bottom {
  left: 0;
  right: 0;
}
.screen-left,
.screen-right {
  top: 0;
  bottom: 0;
}
.screen-top {
  top: 0;
}
.screen-bottom {
  bottom: 0;
}
.screen-left {
  left: 0;
}
.screen-right {
  right: 0;
}
.caret-base {
  display: inline-block;
  vertical-align: middle;
  width: 0;
  height: 0;
  content: "";
}
.drop {
  position: relative;
}
.drop > dd {
  position: absolute;
  display: none;
}
.drop:hover > dd {
  display: block;
}
.drop-up,
.drop-down,
.drop-left,
.drop-right {
  position: relative;
}
.drop-up > dd,
.drop-down > dd,
.drop-left > dd,
.drop-right > dd {
  position: absolute;
  display: none;
}
.drop-up:hover > dd,
.drop-down:hover > dd,
.drop-left:hover > dd,
.drop-right:hover > dd {
  display: block;
}
.drop-up > dd {
  bottom: 100%;
}
.drop-down > dd {
  top: 100%;
}
.drop-left > dd {
  rigth: 100%;
}
.drop-right > dd {
  left: 100%;
}
.no-shadow {
  box-shadow: none;
}
.no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -o-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.list-inline > li {
  display: inline-block;
}
.clearfix:before,
.clearfix:after {
  visibility: hidden;
  display: table;
  content: " ";
}
.clearfix:after {
  clear: both;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.animated.infinite {
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
}
.animated.hinge {
  -webkit-animation-duration: 2s;
  animation-duration: 2s;
}
.animated.flipOutX,
.animated.flipOutY,
.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: 0.75s;
  animation-duration: 0.75s;
}
@-webkit-keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
@keyframes bounceIn {
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  0% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }
  20% {
    -webkit-transform: scale3d(1.1, 1.1, 1.1);
    transform: scale3d(1.1, 1.1, 1.1);
  }
  40% {
    -webkit-transform: scale3d(0.9, 0.9, 0.9);
    transform: scale3d(0.9, 0.9, 0.9);
  }
  60% {
    opacity: 1;
    -webkit-transform: scale3d(1.03, 1.03, 1.03);
    transform: scale3d(1.03, 1.03, 1.03);
  }
  80% {
    -webkit-transform: scale3d(0.97, 0.97, 0.97);
    transform: scale3d(0.97, 0.97, 0.97);
  }
  to {
    opacity: 1;
    -webkit-transform: scale3d(1, 1, 1);
    transform: scale3d(1, 1, 1);
  }
}
.bounceIn {
  -webkit-animation-name: bounceIn;
  animation-name: bounceIn;
}
@-webkit-keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
  to {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}
@-webkit-keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
@keyframes slideInRight {
  from {
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }
  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}
.slideInRight {
  -webkit-animation-duration: 0.4s !important;
  animation-duration: 0.4s !important;
  -webkit-animation-name: slideInRight;
  animation-name: slideInRight;
}

html,
body,
#app,
.view {
  height: 100%;
}
html ::-webkit-input-placeholder,
body ::-webkit-input-placeholder,
#app ::-webkit-input-placeholder,
.view ::-webkit-input-placeholder {
  color: #b2b2b2;
}
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  text-align: center;
  margin: 0;
  font-weight: 300;
}
h1 {
  font-size: 22px;
}
h2 {
  font-size: 20px;
}
h3 {
  font-size: 18px;
}
h4 {
  font-size: 16px;
}
h5 {
  font-size: 14px;
}
h6 {
  font-size: 12px;
}
a {
  text-decoration: none;
}
p {
  margin: 0;
}
.btn {
  padding: 10px 12px;
  font-size: 14px;
  font-weight: normal;
  line-height: 1.42857143;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -ms-touch-action: manipulation;
  touch-action: manipulation;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-image: none;
  border: none;
  border-radius: 2px;
  text-transform: none;
  overflow: visible;
  width: 200px;
}
.btn.btn-block {
  width: 100%;
}
.btn.btn-default {
  background-color: transparent;
  color: #646471;
  border: 1px solid #646471;
}
.btn.btn-primary {
  background-color: #418ce2;
  color: #fff;
  border: 1px solid #418ce2;
}
.btn.btn-warning {
  background-color: #ffde31;
  color: #3c3c46;
  border: 1px solid #ffde31;
}
.btn.btn-danger {
  background-color: #f04e4f;
  color: #fff;
  border: 1px solid #f04e4f;
}
.btn.btn-disabled {
  background-color: #eeeeee;
  color: #fff;
  border: 1px solid #eeeeee;
}
button[disabled],
html input[disabled] {
  cursor: default;
}
.btn.focus,
.btn:focus,
.btn:hover {
  text-decoration: none;
}
.btn.active,
.btn:active {
  background-image: none;
  outline: 0;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn {
  cursor: not-allowed;
  pointer-events: none;
  opacity: 0.65;
  filter: alpha(opacity=65);
  box-shadow: none;
}
.btn.disabled,
.btn[disabled],
fieldset[disabled] .btn,
.btn.disabled:hover,
.btn[disabled]:hover,
fieldset[disabled] .btn:hover,
.btn.disabled:focus,
.btn[disabled]:focus,
fieldset[disabled] .btn:focus,
.btn.disabled.focus,
.btn[disabled].focus,
fieldset[disabled] .btn.focus,
.btn.disabled:active,
.btn[disabled]:active,
fieldset[disabled] .btn:active,
.btn.disabled.active,
.btn[disabled].active,
fieldset[disabled] .btn.active {
  background-color: #e4e4e5 !important;
  border: 1px solid #e4e4e5 !important;
  color: #808080 !important;
}
.text-center {
  text-align: center !important;
}
.text-left {
  text-align: left !important;
}
.text-right {
  text-align: right !important;
}
.text-blue {
  color: #418ce2;
}
html {
  width: 100%;
  height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  overflow-x: hidden;
}
body {
  padding: 0;
  margin: 0;
  width: 100%;
  font-family: "Helvetica Neue", Helvetica, Arial, Sans-serif;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: #646471;
  background-color: #f2f2f5;
  font-size: 14px;
}
.pull-right {
  float: right !important;
}
.pull-left {
  float: left !important;
}
textarea,
input,
button {
  outline: none;
}
.clearfix:before,
.clearfix:after {
  content: "";
  display: table;
}
.clearfix:after {
  clear: both;
}
.input-with-button {
  width: 100%;
  height: 50px;
  border: 1px solid #418ce2;
  border-radius: 4px;
  position: relative;
}
.input-with-button.disabled {
  border: 1px solid #f2f2f5;
}
.input-with-button input {
  width: 100%;
  height: 100%;
  line-height: 28px;
  border: none;
  background-color: transparent;
  font-size: 16px;
  padding: 10px 95px 10px 15px;
}
.input-with-button .btn {
  height: 48px;
  line-height: 48px;
  padding: 0;
  font-size: 16px;
  border: none;
  border-radius: 0 2px 2px 0;
  width: 80px;
  position: absolute;
  top: 0;
  right: 0;
}
.arrow-down {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #646471;
  border-right: 1px solid #646471;
  -webkit-transform: rotate(135deg);
  -ms-transform: rotate(135deg);
  transform: rotate(135deg);
}
.arrow-up {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #646471;
  border-right: 1px solid #646471;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.arrow-right {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #646471;
  border-right: 1px solid #646471;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
.arrow-left {
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #646471;
  border-right: 1px solid #646471;
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.arrow-blue {
  border-top-color: #418ce2;
  border-right-color: #418ce2;
}
.arrow-white {
  border-top-color: #fff;
  border-right-color: #fff;
}
.arrow-light {
  border-top-color: #b2b2b2;
  border-right-color: #b2b2b2;
}
.bg-image {
  background: transparent center / cover no-repeat;
  background-size: cover;
}
.icon {
  display: inline-block;
  background: transparent center / contain no-repeat;
  background-size: contain;
}
.icon-tick {
  content: " ";
  display: inline-block;
  height: 10px;
  width: 20px;
  border-left: 2px solid #666;
  border-bottom: 2px solid #666;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
}
.with-arrow {
  position: relative;
}
.with-arrow:after {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-top: 1px solid #646471;
  border-right: 1px solid #646471;
  border-top-color: #b2b2b2;
  border-right-color: #b2b2b2;
  position: absolute;
  right: 2px;
  top: 50%;
  -webkit-transform: translateY(-100%) rotate(45deg);
  -ms-transform: translateY(-100%) rotate(45deg);
  transform: translateY(-100%) rotate(45deg);
}
.page {
  min-height: 100%;
}
.fill {
  width: 100%;
  height: 100%;
}
.fill-w {
  width: 100%;
}
.fill-h {
  height: 100%;
}
.template {
  display: none;
}
.list-more {
  line-height: 20px;
  padding: 20px;
  display: block;
  text-align: center;
  vertical-align: middle;
  color: #418ce2;
  font-size: 12px;
}
.text-bold {
  font-weight: bold;
}
.text-danger {
  color: #f04e4f !important;
}
.text-light {
  color: #b2b2b2;
}
.flex-container {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
.flex-container > * {
  display: block;
}
.panel {
  background-color: #fff;
}
.tick {
  width: 20px;
  height: 20px;
  border-radius: 100%;
  border: 1px solid #ccc;
}
.tick.selected {
  background-color: #df3031;
  border: none;
  position: relative;
}
.tick.selected:after {
  content: " ";
  display: inline-block;
  height: 4px;
  width: 8px;
  border-left: 2px solid white;
  border-bottom: 2px solid white;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  top: 6px;
  left: 5px;
}
.with-line {
  border-bottom: 1px solid #eeeeee;
}
.mint-indicator-wrapper,
.mint-indicator-mask {
  z-index: 100000001;
}
.app {
  height: 100%;
  overflow-y: hidden;
}
.view {
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.desc {
  font-size: 0.48rem;
  line-height: 1;
  color: #323d49;
  letter-spacing: 0;
  margin: 0.15rem 0 0.5rem;
  font-weight: bold;
}
.form-input {
  width: 96%;
  display: inherit;
  margin: 0 auto;
  line-height: 1;
  height: 1.2rem;
  font-size: 0.4rem;
  border-radius: 0.06rem;
  color: #333;
  letter-spacing: 0;
  margin-bottom: 0.4rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}
.btn-submit {
  width: 96%;
  display: inherit;
  margin: 0 auto;
  height: 1.2rem;
  line-height: 1;
  background: #0078ff;
  border-radius: 0.12rem;
  font-size: 0.4rem;
  color: #ffffff;
  letter-spacing: 0;
}
.home-swiper {
  height: 6.5rem;
}
img {
  width: 100%;
  height: 6.5rem;
}
</style>
