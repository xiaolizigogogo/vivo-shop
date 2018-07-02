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
import serviceDetail from '@/pages/serviceDetail/serviceDetail'
import HomeContainer from '@/pages/home/component/HomeContainer'
import store from '../vuex'
Vue.use(Router)
const router =  new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
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
      path: '/subscribe',
      name:'subscribe',
      component: subscribe
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
      path: '/homeContainer/:id',
      name:'HomeContainer',
      component:HomeContainer
    },
  ],
  //路由切换页面始终回到最顶部
  // scrollBehavior(to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // }

})
router.beforeEach((to, from, next) => {

  setTimeout(function () {

    window.location = window.location;

  }, 500);

});
export default router
