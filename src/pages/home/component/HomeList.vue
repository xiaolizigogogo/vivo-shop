<template>
   <div class="HomeList">
    <ul>
        <li><div @click="btn"><img src="/static/img/logo.jpg" alt="关于我们"></div></li>
        <li><div  @click="btn"><img src="/static/img/logo.jpg" alt="预约服务"></div></li>
        <li><div @click="btn"><img src="/static/img/logo.jpg" alt="特色产品"></div></li>
        <li><div @click="btn"><img src="/static/img/logo.jpg" alt="更多期待"></div></li>
    </ul>
    </div>
</template>

<style lang="stylus" scoped>
//rem
.HomeList
    width 100%;
    height 2rem;
    background white;
    border-bottom 1px solid #f4f4f4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    li
        width: 25%;
        height 100%;
        float: left;
        margin: auto;
        div
            width: 1.58rem;
            height: 1.59rem;
            margin: auto;
        img
            display: block;
            width: 100%;
            height: 100%
</style>

<script>
export default {
  methods: {
      xuangou:function(){
      this.$router.push({path:"choose"})
    },
    parts:function(){
      this.$router.push({path:"parts"})
    },
    btn:function(){
      // MessageBox('提示', 'Vue的第一个项目能给个star么？Thank you');
    }
  },
}
</script>

