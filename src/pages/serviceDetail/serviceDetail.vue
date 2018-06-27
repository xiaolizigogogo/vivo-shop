<template>
    <div class="serviceDetail">
       <Bg-Header></Bg-Header>
       <Service-Content></Service-Content>
    </div>

</template>
<script>
import BgHeader from './component/BgHeader'
import ServiceContent from './component/ServiceContent'
export default {
  name: "serviceDetail",
  data() {
    return {

    };
  },
  components: {
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
