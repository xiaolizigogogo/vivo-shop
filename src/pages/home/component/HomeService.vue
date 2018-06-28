<template>
    <div>
        <div class="HomeService">
            <div class="headPortrait">
                <img src="/static/img/headPortrait.jpg" alt="" class="headImg">
            </div>
            <div class="serviceTop">
                <div class="serviceTopLeft">
                    <h6>
                        小西
                    </h6>
                    <p>
                        总监
                    </p>
                </div>
                <div class="serviceTopRight">
                    <h5>
                        <span>￥</span>88
                    </h5>
                    <p>
                        预约特惠价
                    </p>
                </div>
            </div>
            <div class="serviceMiddle">
                <div class="serviceMiddleLeft">
                    <div class="marks">
                        <span>美甲</span>
                    </div>
                    <div class="marks">
                        <span>美容</span>
                    </div>
                    <div class="marks">
                        <span>纹绣</span>
                    </div>
                    <div class="marks">
                        <span>美睫</span>
                    </div>
                    <div class="marks">
                        <span>培训</span>
                    </div>
                </div>
                <div class="serviceMiddleRight">
                    <div>
                        <span>预约TA</span>
                    </div>
                </div>
            </div>
            <div class="serviceBottom">
                <span style="color:red">
                    好评率：100%
                </span>
                <span>
                    作品数：235
                </span>
                <span>
                    已被约：223
                </span>
            </div>
        </div>
    </div>
</template>

<style lang="stylus" scoped>
.HomeService
    min-height 4rem;
    margin 0.3rem;
    background white;
    position relative;
.serviceTop
    height 1.5rem;
    background #FEE2EA;
    position relative;
.headPortrait
    border-radius 50%;
    background white;
    width 1.6rem;
    height 1.6rem;
    border 1px solid #FEE2EA;
    position absolute;
    left 0.3rem;
    top 0.3rem;
    z-index 1;
    display flex;
    justify-content center;
    align-items center;
.headImg
    width 94%;
    border-radius 50%;
.serviceTopLeft
    margin-left 2.2rem;
    display flex;
    flex-direction column;
    justify-content center;
    height 1.5rem;
.serviceTopRight
    position absolute;
    top 0;
    right 0;
    height 1.5rem;
    display flex;
    flex-direction column;
    justify-content center;
    text-align center;
    margin-right 0.6rem;
.serviceMiddle
    display flex;
    min-height 1.5rem;
    padding 0.3rem;
.serviceMiddleLeft
    flex: 1;
    display flex;
    flex-wrap wrap;
.serviceMiddleRight
    display flex;
    min-height 1.6rem;
    justify-content center;
    align-items center;
    div
        width 2.5rem;
        height 0.8rem;
        border-radius 1rem;
        background-color  #98499C;
        display flex;
        justify-content center;
        text-align center;
        align-items center;
        span 
            color #fff;
            letter-spacing 0.08rem;
.marks
    width 1.2rem;
    height 0.6rem;
    border-radius 1rem;
    background-color  #eee;
    line-height 0.6rem;
    display flex;
    flex-direction column;
    justify-content center;
    text-align center;
    margin 0.2rem 0.1rem;
    span
        color #606266;
.serviceBottom
    display flex;
    justify-content space-between;
    padding 0 0.3rem 0.3rem;
    span
        color #909399;
h6
    font-size 0.4rem;
    font-weight bold;
    color #55276F;
h5
    font-size 0.5rem;
    color red;
    font-weight bold;
    line-height 0.5rem;
p
    font-size 0.3rem;
    color #55276F;
span
    font-size 0.3rem;
    color red;
    font-weight 400;
</style>

<script>
export default {

}
</script>

