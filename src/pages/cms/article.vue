<!-- article -->
<style scoped lang="scss">
  @import '../../assets/common/css/mixin.scss';
  .acticle-icon {
    @include flexbox(center, center, row, nowrap);
    font-size: 16px;
  }
.guanyuwomen{
  width: 100%;
}
  .Navfixed {
    position: fixed !important;
    z-index: 999 !important;
    top: 0 !important;
    width: 100%;
    &.topnav {
      margin: 0px;
    }
    background: rgba(255, 255, 255, .5) !important;
    >span {
      padding: 15px 0 !important;
    }
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    .my-header {
      padding: $padding;
      background: #fff;
      position: relative;
      z-index: 1;
      @include flexbox(space-between,
        center,
        row,
        nowrap);
      border-bottom: 1px solid #eee;
      .back {
        display: block;
        width: .65rem;
        height: .65rem;
        background: url('../../assets/jd/images/arrow-left.png') no-repeat;
        background-size: 100%;
      }
      strong {
        font-size: 18px;
        font-weight: normal;
        color: #333;
      }
      .myMsg {
        display: block;
        background-size: 600% 100%;
        height: .65rem;
        width: .65rem;
        background-position: -2.6rem 0;
      }
    }
  }

  .topnav {
    display: flex;
    flex: 1;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    margin: 0px 60px 0;
    position: relative;
    z-index: 100;
    #loadingbar {
      position: absolute;
      transition: .4s;
      width: calc((100%/3));
      background: red;
      bottom: 0;
      height: 2px;
    }
    >span {
      width: 33.33%;
      padding: 10px 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      background: #fff;
    }
    .active {
      color: red;
    }
  }

  .article-container {
    .video-item {
      padding: $padding;
      background: #fff;
      margin-top: 10px;
      @include flexbox(space-between, flex-start, column, wrap);
      .title {
        font-size: 20px;
        @include textoverflow(2);
      }
      .video-container {
        width: 100%;
        margin: $margin 0;
        img {
          width: 100%;
          min-height: 2.5rem;
        }
        .playerIcon {}
      }
      .videoInfo {
        .subTitle {
          font-size: 14px;
          color: #999;
        }
      }
    }
    .article-item {
      padding: $padding;
      background: #fff;
      margin-top: 10px;
      @include flexbox(space-between, center, row, nowrap);
      .left {
        width: 60%;
        height: 2rem;
        @include flexbox(space-between, flex-start, column, wrap);
        .title {
          font-size: 20px;
          @include textoverflow(3);
        }
        .subTitle {
          font-size: 14px;
          color: #999;
        }
      }
      .right {
        width: 40%;
        text-align: right;
        img {
          max-width: 100%;
          height: 2.5rem;
        }
      }
    }
  }

</style>
<style lang="scss">
  #articleContainer {
    background: #f5f5f5;
    .searchRusult {
      background: #fff;
    }
  }

</style>
<template>
  <div id="articleContainer">
    <div class="content">
      <!--<div class="my-header">-->
        <!--<i class="back" @click="$router.go(-1)"></i>-->
        <!--<strong>产品展示</strong>-->
        <!--<i class="myMsg"></i>-->
      <!--</div>-->
      <div style="border-bottom:1px solid #eee;background:#fff;">
        <div class="topnav" :class="Status? 'Navfixed': ''">
          <span @click.stop.prevent="switchTabs('tab-container1')" :class="{'active':active==='tab-container1'}">产品展示</span>
          <span @click.stop.prevent="switchTabs('tab-container2')" :class="{'active':active==='tab-container2'}">案例介绍</span>
          <span @click.stop.prevent="switchTabs('tab-container3')" :class="{'active':active==='tab-container3'}">关于我们</span>
          <!--<span @click.stop.prevent="switchTabs('tab-container4')" :class="{'active':active==='tab-container4'}">数码</span>-->
          <div id="loadingbar" :style="active==='tab-container1' ? 'left:0%' : active==='tab-container2' ?  'left:33%' : active==='tab-container3' ?'left:66%' : 'left:75%'"></div>
        </div>
      </div>
      <load-more style="width:100%;" @loadMore="infiniteCallback" :commad="commad" :param="params"
        :loadMoreIconVisible="false" ref="articleLoadmore">
        <mt-tab-container v-model="active" :swipeable="true">
          <mt-tab-container-item id="tab-container1">
            <div class="article-container" v-if="articleData!=''">
              <div class="data-item" v-for="(item,index) in articleData" v-if="item.type==='product'" :key="index" @click="$router.push(`/articleDetail/${item.id}`)">
                <div class="video-item" v-if="item.type==='product'">
                  <p class="title">{{item.article_title}}</p>
                  <div class="video-container">
                    <img v-lazy="item.image_url[0].url" alt="">
                    <i class="playerIcon"></i>
                  </div>
                  <div class="videoInfo">
                    <span class="subTitle">{{item.summary}}</span>
                  </div>
                </div>
                <div class="article-item" v-else>
                  <div class="left">
                    <p class="title">{{item.article_title}}</p>
                    <span class="subTitle">{{item.summary}}</span>
                  </div>
                  <div class="right">
                    <img v-lazy="item.image_url[0].url" alt="">
                  </div>
                </div>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container2">
            <div class="article-container" v-if="articleData!=''">
              <div class="data-item" v-for="(item,index) in articleData" v-if="item.type==='anli'" :key="index" @click="$router.push(`/articleDetail/${item.id}`)">
                <div class="article-item" >
                  <div class="left">
                    <p class="title">{{item.article_title}}</p>
                    <span class="subTitle">{{item.summary}}</span>
                  </div>
                  <div class="right">
                    <img v-lazy="item.image_url[0].url" alt="">
                  </div>
                </div>
              </div>
            </div>
          </mt-tab-container-item>
          <mt-tab-container-item id="tab-container3">
            <div class="article-container" v-if="articleData!=''">
                <img class="guanyuwomen" src="http://payobwhnt.bkt.clouddn.com/7d35272a52364158879f211204532fe8.jpeg">
            </div>
          </mt-tab-container-item>
          <!--<mt-tab-container-item id="tab-container4">-->
            <!--<div class="article-container" v-if="articleData!=''">-->
              <!--<div class="data-item" v-for="(item,index) in articleData" :key="index" @click="$router.push(`/articleDetail/${item.id}`)">-->
                <!--<div class="article-item" >-->
                  <!--<div class="left">-->
                    <!--<p class="title">{{item.article_title}}</p>-->
                    <!--<span class="subTitle">{{item.summary}}</span>-->
                  <!--</div>-->
                  <!--<div class="right">-->
                    <!--<img v-lazy="item.image_url[0].url" alt="">-->
                  <!--</div>-->
                <!--</div>-->
              <!--</div>-->
            <!--</div>-->
          <!--</mt-tab-container-item>-->
        </mt-tab-container>
      </load-more>
    </div>
  </div>
</template>

<script>
  import LoadMore from '../../components/common/loadMore';
  import {
    showBack
  } from '@/utils/mixin';
  import {
    TabContainer,
    TabContainerItem
  } from 'mint-ui';
  import {
    getArticleList,
  } from '../../api/api';
  export default {
    data() {
      return {
        active: null,
        Status: false,
        commad: getArticleList,
        params: {
          Type: null,
          pageSize: 10,
          pageIndex: 1
        },
        articleData: [],
      };
    },

    watch: {
      active:function(val){
        this.switchTabs(val)
      }
    },

    components: {
      LoadMore
    },

    computed: {},

    methods: {
      async onRefreshCallback() { //下拉加载
        this.params.pageSize = 10;
        this.params.pageIndex = 1;
        this.articleData = [];
        this.$refs.articleLoadmore.onTopLoaded(this.$refs.articleLoadmore.uuid);
      },
      async infiniteCallback(response) { //加载更多
        if (this.articleData == 0) {
          response.data.data.records.map(i => {
            this.articleData.push(i)
          })
        }
      },
      switchTabs(Id) {0
        this.active = Id;
        switch (String(this.active)) {
          case 'tab-container1': //精选
            this.params.Type = null;
            break;
          case 'tab-container2': //生活
            this.params.Type = 'life';
            break;
          case 'tab-container3': //视频
            this.params.Type = 'video';
            break;
          case 'tab-container4': //数码
            this.params.Type = 'digital';
            break;
          default: //其他
            throw new Error('未知TabId')
            break
        }
        this.onRefreshCallback();
      }
    },

    mounted: function () {
      showBack(status => {
        this.Status = status;
      })
      this.active = 'tab-container1'
    }
  }

</script>
<style lang='scss' scoped>


</style>
