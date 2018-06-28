<template>

    <div class="main" >
      <h2>服务</h2>

      <div class="main_box" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <v-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
        <ul>

          <li v-for="(todo) in list" :key="todo.id" @click="open(todo.id)">
            <div class="list">
              <div class="image">
                <img v-lazy="todo.listPicUrl" alt="图片">
              </div>
              <p class="name">{{todo.name}}</p>
              <p class="nametwo">{{todo.homeNametwo}}</p>
              <p class="Price">￥{{todo.retailPrice}}</p>
            </div>
          </li>
        </ul>
        </v-loadmore>
      </div>

    </div>


</template>

<script>
  import {mapState, mapMutations, mapGetters} from "vuex";
  import {getGoods} from '../../../api/api'
  import {Loadmore} from 'mint-ui';
  export default {
    name: "HomeProductContainer",
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
      }
    },

    props: {
      todos: Array
    },
    mounted: function () {
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
      open: function (id) {
        this.$router.push({path: "goodDetail", query: {id: id}});
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
</style>
