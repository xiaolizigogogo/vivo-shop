<template>
    <div class="serviceDetail">
       <Bg-Header :item="item"></Bg-Header>
       <Service-Content :item="item" :unAvilTime="unAvilTime" :adminId="item.id"></Service-Content>
    </div>

</template>
<script>
import BgHeader from './component/BgHeader'
import ServiceContent from './component/ServiceContent'
import {getAdminAilviliableInfo} from '../../api/api'
export default {
  name: "serviceDetail",
  data() {
    return {
      item:{

      },
      unAvilTime:[]
    };
  },
  components: {
    BgHeader,
    ServiceContent
  },
  mounted:function(){
   const id= this.$route.query.id;
    getAdminAilviliableInfo({adminId:id}).then(res=>{
      this.item=res.data.data.userInfo
      this.unAvilTime=res.data.data.unailviliableTime
    })
    // this.item=JSON.parse(localStorage.getItem("subscribeAdmin"))
    // console.log(this.item)
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>

</style>
