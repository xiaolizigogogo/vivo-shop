<template>
    <div class="serviceDetail">
       <Bg-Header :item="item"></Bg-Header>
       <Service-Content :item="item"></Service-Content>
    </div>

</template>
<script>
import BgHeader from './component/BgHeader'
import ServiceContent from './component/ServiceContent'
export default {
  name: "serviceDetail",
  data() {
    return {
      item:{

      }
    };
  },
  components: {
    BgHeader,
    ServiceContent
  },
  mounted:function(){
    this.item=JSON.parse(localStorage.getItem("subscribeAdmin"))
  },
  computed: {

  },
  methods: {

  }
};
</script>

<style lang="stylus" scoped>

</style>
