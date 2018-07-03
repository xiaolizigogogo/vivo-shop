<template>
    <div class="my">
        <My-Container  :name="name" :header_url="header_url" :coupons="coupons" :encourage="encourage" :integration="integration"></My-Container>
        <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '../../pages/footer'
import MyContainer from './component/MyContainer'
import {getWechatOpenid,getWechatUserInfo,getUserInfoByOpenId} from '../../api/api'
import {fmoney} from '../../api/global'
export default {
  name:"my",
  data(){
      return{
        // lists:[]
        myName:"Chen Zi",
        user:{
          name:"游客",
          header_url:'https://yanxuan.nosdn.127.net/14938092956370380.jpg',
          coupons:'10',
          encourage:'10',
          integration:'10'
        },
        name:"游客",
        header_url:'https://yanxuan.nosdn.127.net/14938092956370380.jpg',
        coupons:'10',
        encourage:'10',
        integration:'10',
        openid:''
      }
  },
  create(){
  },
  components:{
      MyContainer,
      "v-footer":footer
  },
  methods:{
      order:function(){
         this.$router.push('/order')
      },
      author:function(){
          this.$router.push('/author')
      }
  },
  mounted(){
    document.title = '我的'
    if(window.signLink==undefined||window.signLink==''){
      window.signLink=window.location.href
      const  code=this.$route.query.code
      if(code){
        getWechatOpenid({"code":code,"lang":"zh_CN"}).then(res=>{
          localStorage.setItem("token",res.data.data.accesstoken)
          this.openid=res.data.data.openId;
          getUserInfoByOpenId({"openid":this.openid}).then(res=>{
            localStorage.setItem("user",JSON.stringify(res.data.data))
            const user=JSON.parse( localStorage.getItem("user"));
            this.name=user.nickname;
            this.header_url=user.avatar
            this.coupons=fmoney(user.restMoney,2)
            this.encourage=fmoney(user.purchaseMoney,2)
            this.integration=fmoney(user.rechargeMoney,2)
          })
        })
      }
    }
    else{
      const user=JSON.parse( localStorage.getItem("user"));
      this.name=user.nickname;
      this.header_url=user.avatar
      this.coupons=fmoney(user.restMoney,2)
      this.encourage=fmoney(user.purchaseMoney,2)
      this.integration=fmoney(user.rechargeMoney,2)
    }
  }
}
</script>


<style scoped>
.my{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
