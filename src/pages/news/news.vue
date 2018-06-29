<template>
  <div >
    <News-Container :NewsContainer="NewsContainer"></News-Container>
    <News-Footer></News-Footer>
        
  </div>
</template>

<script>
import axios from 'axios';
import NewsContainer from '../../pages/news/component/NewsContainer'
import NewsFooter from '../../pages/footer'
export default {
    name:"information",
    components:{
        NewsContainer,
        NewsFooter
    },
    data(){
        return{
            NewsContainer:[]
        }
    },
    created(){
        var _this=this;
        axios.get("/static/ceshi.json").then(function(res) {
           _this.NewsContainer=res.data.data.news
        })
       
    },
    mounted(){
        document.title = '资讯动态'
    },
    methods: {
         open:function(id){
            this.$router.push({path:"newsDetail",query:{id:id}})
        },
    }

  
}
</script>


<style lang="stylus" scoped>
</style>
