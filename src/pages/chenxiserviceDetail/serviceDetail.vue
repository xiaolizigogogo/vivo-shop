<template>
    <div class="serviceDetail">
       <Bg-Header :item="item"></Bg-Header>
       <Service-Content></Service-Content>
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
  .serviceDetail {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
</style>
