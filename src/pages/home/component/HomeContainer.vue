<template>

    <div class="main" >
      <div>
        <div class="weui-search-bar" id="search_bar">
          <form class="weui-search-bar__form">
              <div class="weui-search-bar__box">
                  <i class="weui-icon-search fontSize04"></i>
                  <input type="search" class="weui-search-bar__input fontSize04" id="search_input" placeholder="搜索" ref="searchValue" />
                  <a href="javascript:" class="weui-icon-clear fontSize04" id="search_clear" @click="handleClear"></a>
              </div>
              <label for="search_input" class="weui-search-bar__label" id="search_text" @click="handleClick" v-show="isShow">
                  <i class="weui-icon-search fontSize04"></i>
                  <span class="fontSize04">搜索</span>
              </label>
          </form>
          <a href="javascript:" id="search_cancel" @click="handleCancel" v-show="!isShow">取消</a>
        </div>
      </div>

      <div class="main_box" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <v-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <div class="weui-panel__bd" v-for="todo in list" :key="todo.id" @click="open(todo.id)">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">
                  <img class="weui-media-box__thumb" v-lazy="todo.listPicUrl" alt="图片">
              </div>
              <div class="weui-media-box__bd hasBorderBottom">
                  <h4 class="weui-media-box__title fontSize04" style="font-weight:bold"><span class="promotionDesc colorRed" v-if="todo.promotionDes">{{todo.promotionDesc}}</span><span class="color98499C">{{todo.name}}</span></h4>
                  <p class="weui-media-box__desc fontSize03">{{todo.goodsBrief}}</p>
                  <p class="weui-media-box__desc fontSize03">剩余&nbsp;<span class="colorRed">{{todo.goodsNumber}}</span>&nbsp;{{todo.goodsUnit}}</p>
                  <p class="weui-media-box__desc fontSize03 retailPrice colorRed isBottom">￥<span class="fontSize04">{{todo.retailPrice}}</span></p>
              </div>
          </a>
        </div>
        <div class="weui-panel__ft">
            <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
                <div class="weui-cell__bd">查看更多</div>
                <span class="weui-cell__ft"></span>
            </a>
        </div>
        </v-loadmore>
      </div>

    </div>


</template>

<script>
  import {mapState, mapMutations, mapGetters} from "vuex";
  import {getGoods} from '../../../api/api'
  import {Loadmore} from 'mint-ui';
  export default {
    name: "HomeContainer",
    data() {
      return {
        params: {
          current: 1,
          size: 20
        },
        noData: true,
        list: [],
        allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode: "touch", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
        items: [],
        isShow: true
      }
    },

    props: {
      todos: Array
    },
    mounted: function () {
      document.title = '商品列表'
      this.loadPageList();
      for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    components:{
      'v-loadmore': Loadmore
    },
    methods: {
      handleClear(){
        this.$refs.searchValue.value = '';
      },
      handleCancel(){
        this.isShow = true
      },
      handleClick(){
        this.isShow = false
      },
      open: function (id) {
        this.$router.push({path: `/product/${id}`});
      },
      loadTop:function () { //组件提供的下拉触发方法
        //下拉加载
        this.loadPageList();
        this.$refs.loadmore.onTopLoaded();// 固定方法，查询完要调用一次，用于重新定位
      }
      ,
      loadBottom:function () {
        // 上拉加载
        this.more();// 上拉触发的分页查询
        this.$refs.loadmore.onBottomLoaded();// 固定方法，查询完要调用一次，用于重新定位
      }
      ,
      loadPageList:function (flag) {
        this.params.categoryId=this.$route.query.id
        // 查询数据
        getGoods(this.params).then((res) => {
          if(flag){
            this.list.push(res.data.data.records)
          }
          else{
            this.list=res.data.data.records
        }
        // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
        if(this.params.current==res.data.data.pages){
          this.isHaveMore(false);
        }
        else{
          this.isHaveMore(true);
        }
        this.$nextTick(function () {
          // 原意是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
          // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
          // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
          this.scrollMode = "touch";
        });
      })
        ;
      }
      ,
      more:function () {
        // 分页查询
        this.params.current++;
        this.loadPageList(true);
        ;
      }
      ,
      isHaveMore:function (isHaveMore) {
        // 是否还有下一页，如果没有就禁止上拉刷新
        this.allLoaded = true; //true是禁止上拉加载
        if (isHaveMore) {
          this.allLoaded = false;
        }
      }
    },
  }
</script>

<style lang="stylus" scoped>
  .main {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .main h2 {
    display: block;
    height: 1.3rem;
    background: white;
    font-size: 0.35rem;
    line-height: 1.3rem;
    padding-left: 0.3rem;
  }

  .main_box {
    height: 339px;
  }

  .list {
    height: 4.7rem;
    background: white;
    float: left;
    width: 50%;
    border-right: 1px solid #f4f4f4;
    border-top: 1px solid #f4f4f4;
  }

  .list span {
    display: block;
    color: red;
    padding-left: 0.5rem;
    padding-top: 0.1rem;
  }

  .main_box ul {
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  ul li {
    list-style: none;
  }

  .Price {
    font-size: 0.33rem;
    color: red;
    margin: auto;
    text-align: center;
    font-size: 0.3rem;
  }

  .name {
    width: 80%;
    height: 0.5rem;
    line-height: 0.5rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin: auto;
    font-size: 0.29rem;
    font-weight: 800;
    text-align: center;
  }

  .nametwo {
    height: 0.48rem;
    font-size: 0.1rem;
    text-align: center;
  }

  .image {
    width: 100%;
    background: white;

    img {
      width: 2.5rem;
      height: 2.3rem;
      display: block;
      margin: auto;
      margin-top: .5rem;
      margin-bottom .2rem
    }
  }
  html, body {
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  .row {
    width: 100%;
    height: 50px;
    padding: 10px 0;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    color: #444;
    background-color: #fff;
  }
  .grey-bg {
    background-color: #eee;
  }
  .header {
    position: fixed;
    top: 0;
    left: 0;
    height: 44px;
    width: 100%;
    box-shadow: 0 2px 10px 0 rgba(0,0,0,0.1);
    background-color: #fff;
    z-index: 1000;
    color: #666;
  }
  .header > .title {
    font-size: 16px;
    line-height: 44px;
    text-align: center;
    margin: 0 auto;
  }
  .scroller {
    position: relative;
  }
  .weui-search-bar__label{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .weui-search-bar__box{
    padding-left: 1rem;
  }
  .weui-search-bar__input{
    height: 1rem;
  }
  #search_cancel{
    font-size: 0.4rem;
    text-align: center;
    color: #98499C;
    padding-left: 0.1rem;
  }
  .promotionDesc{
    border: 1px solid red;
    padding: 0 0.1rem;
    font-size: 0.3rem;
    margin-right: 0.1rem;
  }
  .weui-panel__bd{
    background-color: #ffffff;
  }
  .hasBorderBottom{
    border-bottom: 1px solid #f4f4f4;
  }
  .weui-media-box{
    padding: 0.3rem 0.3rem 0;
  }
  .weui-media-box__title,.weui-media-box__desc{
    padding: 0 0 0.2rem;
  }
  .isBottom{
    margin-bottom: 0.3rem;
    padding-bottom: 0;
  }
  .weui-media-box__hd{
    width: 2rem;
    height: 2.5rem;
    margin-right: 0.5rem;
  }
</style>
