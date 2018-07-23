import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import cart from '@/pages/cart/cart'
import my from '@/pages/my/my'
import goodDetail from '@/pages/detail/goodDetail'
import order from '@/pages/order'
import author from '@/pages/author'
import choose from '@/pages/choose'
import news from '@/pages/news/news'
import newsDetail from '@/pages/news/newsDetail'
import parts from '@/pages/parts'
import change from '@/pages/detail/Change'
import success from '../common/success'
import MyCollection from '@/pages/my/MyCollection'
import classify from "@/pages/classify/classify"
import OrderDetails from "@/pages/OrderDetails"
import pay from "@/pages/pay/pay"
import address from "@/pages/address"
import add_address from "@/pages/add_address"
import subscribe from "@/pages/subscribe/subscribe"
import mysubscribe from "@/pages/my/subscribe"
import subscribeDetail from "@/pages/subscribe/subscribeDetail"
import mytrade from "@/pages/my/trade/index"
import trade from "@/pages/my/trade/Page2"
import serviceDetail from '@/pages/serviceDetail/serviceDetail'
import HomeContainer from '@/pages/home/component/HomeContainer'
import article from '@/pages/cms/article'
import product from '@/pages/detail/product'
import index from '@/pages/home/index'
import coupon from '@/pages/coupon/index'
import store from '../vuex'
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'index', component: index },
    { path: '/Home', name: 'Home', component: Home },
    { path: '/cart', name: 'cart', component: cart },
    { path: '/my', name: 'my', component: my },
    { path: '/subscribeDetail', name: 'subscribeDetail', component: subscribeDetail },
    {
      path: '/mysubscribe',
      name:'mysubscribe',
      component: mysubscribe
    },
    {
      path: '/mytrade',
      name:'mytrade',
      component: mytrade
    },
    {
      path: '/trade',
      name:'trade',
      component: trade
    },
    {
      path: '/article',
      name:'article',
      component: article
    },
    {
      path: '/subscribe',
      name:'subscribe',
      component: subscribe
    },
    {
      path: '/index',
      name:'index',
      component: index
    },
    {
      path: '/goodDetail/:id',
      name: 'goodDetail',
      component: goodDetail,
      meta:{index:0}
    },
    {
      path: '/order',
      name: 'order',
      component: order,
      children:[
       {
        path: '/order/OrderDetails',
        name: '/order/OrderDetails',
        component: OrderDetails,
       }
      ]
    },
    { path: '/author', name: 'author', component: author },
    { path: '/choose', name: 'choose', component: choose },
    { path: '/newsDetail', name: 'newsDetail', component: newsDetail },
    { path: '/news', name: 'news', component: news },
    { path: '/parts', name: 'parts', component: parts },
    { path: '/change', name: 'change', component: change },
    { path: '/success',name:'success',component:success},
    { path: '/MyCollection',name:'MyCollection',component:MyCollection},
    { path: '/classify',name:'classify',component:classify},
    { path: '/OrderDetails',name:'OrderDetails',component:OrderDetails},
    {
      path: '/pay',
      name:'pay',
      component:pay
    },
    {
      path: '/address',
      name:'address',
      component:address
    },
    {
      path: '/add_address',
      name:'add_address',
      component:add_address
    },
    {
      path: '/serviceDetail',
      name:'serviceDetail',
      component:serviceDetail
    },
    {
      path: '/homeContainer/',
      name:'HomeContainer',
      component:HomeContainer
    },
    {
      path: '/product/:id',
      name:'product',
      component:product
    },
    {
      path: '/coupon',
      name:'coupon',
      component:coupon
    },
  ],
  //路由切换页面始终回到最顶部
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }

})
router.beforeEach((to, from, next) => {
  // if(!store.state.user && to.path != '/author'){
  //   // 第一次进入项目
  //   holdno.cookie.set('beforeLoginUrl', to.fullPath) // 保存用户进入的url
  //   next('/author')
  //   return false
  // }
  // window.location = window.location;
  // 记录进入app时的url
  if (typeof window.entryUrl === 'undefined' || window.entryUrl === '') {
  window.entryUrl = location.href.split('#')[0]
  }
  // 进行签名的时候  Android 不用使用之前的链接， ios 需要
  let signLink =  /(Android)/i.test(navigator.userAgent) ? location.href.split('#')[0] : window.entryUrl;
  next()
})
export default router
