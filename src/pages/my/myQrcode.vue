<template>
    <div>
      <img :src="user.qrcodeUrl">
    </div>
</template>

<script>
    export default {
        name: "my-qrcode.vue",
        data:{
            user:''
        },
        mounted(){
          this.user=JSON.parse(localStorage.getItem("user"))
          this.user.qrcodeUrl="https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket="+this.user.qrcodeUrl
        }
    }
</script>

<style scoped>

</style>
