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
.my{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
