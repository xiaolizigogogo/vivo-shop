import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import store from './vuex/index'
import Navigation from 'vue-navigation'
import Vuelazyload from 'vue-lazyload'
import VueScroller from 'vue-scroller'
import BScroll from 'better-scroll'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import VueLazyLoad from 'vue-lazyload'
//引入axios文件
import axios from 'axios';
//引入vue-resource
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
Vue.use(VeeValidate);
Vue.use(VueScroller)
Vue.use(Navigation, {router, store})

Vue.use(VueLazyLoad,{
  loading:require("../static/img/qqq.png")
})

//引入UI组件

Vue.use(MintUI)

Vue.apis= ['onMenuShareTimelin',
  'onMenuShareAppMessag',
  'onMenuShareQ',
  'onMenuShareWeib',
  'onMenuShareQZon',
  'startRecor',
  'stopRecor',
  'onVoiceRecordEn',
  'playVoic',
  'pauseVoic',
  'stopVoic',
  'onVoicePlayEn',
  'uploadVoic',
  'downloadVoic',
  'chooseImag',
  'previewImag',
  'uploadImag',
  'downloadImag',
  'translateVoic',
  'getNetworkTyp',
  'openLocatio',
  'getLocatio',
  'hideOptionMen',
  'showOptionMen',
  'hideMenuItem',
  'showMenuItem',
  'hideAllNonBaseMenuIte',
  'showAllNonBaseMenuIte',
  'closeWindo',
  'scanQRCod',
  'chooseWXPa',
  'openProductSpecificVie',
  'addCar',
  'chooseCar',
  'openCard']

Vue.use(VueResource)
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  filters:{
    formatDate:function (val) {
      var value=new Date(val);
      var year=value.getFullYear();
      var month=padDate(value.getMonth()+1);
      var day=padDate(value.getDate());
      var hour=padDate(value.getHours());
      var minutes=padDate(value.getMinutes());
      var seconds=padDate(value.getSeconds());
      return year+'-'+month+'-'+day+' '+hour+':'+minutes+':'+seconds;
    }
  }
})
