<template>
    <div class="serviceDetail">
       <SDetail-Header></SDetail-Header>
       <Bg-Header></Bg-Header>
       <Service-Content></Service-Content>
    </div>

</template>
<script>
import SDetailHeader from './component/SDetailHeader'
import BgHeader from './component/BgHeader'
import ServiceContent from './component/ServiceContent'
export default {
  name: "serviceDetail",
  data() {
    return {

    };
  },
  components: {
    SDetailHeader,
    BgHeader,
    ServiceContent
  },
  mounted:function(){
    
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>

</style>
