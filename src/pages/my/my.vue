<template>
    <div class="my">
        <My-Container :user="this.user"></My-Container>
        <v-footer></v-footer>
    </div>
</template>

<script>
import footer from '../../pages/footer'
import MyContainer from './component/MyContainer'
import {getWechatOpenid,getWechatUserInfo} from '../../api/api'
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
        }
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
    const  code=this.$route.query.code
    if(code){
      getWechatOpenid({"code":code,"lang":"zh_CN"}).then(res=>{
        alert("获取token成功:"+JSON.stringify(res.data.data))
        sessionStorage.setItem("token",JSON.stringify(res.data.data))
        getWechatUserInfo({"openid":res.data.data.openId,"lang":"zh_CN"}).then(res=>{
          alert("获取用户信息成功:"+JSON.stringify(res.data.data))
          sessionStorage.setItem("userInfo",JSON.stringify(res.data.data))
          this.user = res.data.data
        })
      })

    }
  }
}
</script>


<style scoped>
   .myHeader{
        height: 1.3rem;
        line-height: 1.3rem;
        font-size: 0.35rem;
        padding-left: 0.3rem;
        background: white;
        font-size: 0.41rem;
   }

   .myMain{
       height: 100%;
       background: white;
       margin-top: 10px;
       width: 100%;

   }
    .MyBox{
        width: 100%;
        height: 110px;
        background: white;
    }
    .myOrder,.myCollection{
        height: 50%;
    }
   .Main, .Order{
       height: 100%;
       /* background: red; */
       margin-left: 10px;
       border-bottom: 1px solid #cccccc;
   }
   .myMain img{
       display: block;
       width: 60px;
       height: 60px;
       padding: 7px;
       float: left;
   }
    .myMain p{
        line-height: 75px;
    }

   .Order i , .Order p{
       display: block;
       line-height: 55px;
       float: left;
       padding-left: 10px;
   }
</style>
