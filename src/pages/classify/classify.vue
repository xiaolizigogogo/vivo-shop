<template>
<div>
  <div class="calssify-con" >
        <div class="calssify-left" ref="wrapper">
            <ul class="calssify-left-ul" >
                <li v-for="(list,index) in left" :key="index" @click="qiehuan(index)" :class="{active:index===classifyIndex}">
                    {{list.name}}
                </li>
            </ul>
        </div>
        <div class="calssify-rigth" ref="wrapper2">
            <ul class="calssify-left-ul">
                <li v-for="(list,index) in right" :key="index" @click="goDetails(list.id)">
                     <img :src="list.wapBannerUrl">
                    <span>{{list.name}}</span>
                </li>
            </ul>
        </div>
    </div>
<v-footer></v-footer>
</div>

</template>

<script>
import footer from "../../pages/footer";
import axios from "axios";
import { mapGetters } from "vuex";
import {getCategory,getGoods} from '../../api/api'
export default {
  data() {
    return {
      left: [],
      right: [],
      list: [],
      ce: [],
      key2: "",
      classifyIndex: 0,
      params:{
        current:1,
        size:10,
        categoryId:0,
        parentId:0
      }
    };
  },
  components: {
    "v-footer": footer
  },
  //    mounted(){
  //       this.$nextTick(() => {
  //         this.scroll = new BScroll(this.$refs.wrapper, {})
  //         this.scroll = new BScroll(this.$refs.wrapper2, {})
  //       })
  //   },
  computed: {
    ...mapGetters(["this.$store.state.sindex"])
  },
  created() {
  document.title = '分类'
    var _this = this;
    getCategory(this.params).then(res=>{
      _this.left = res.data.data;
      this.params.parentId=this.left[0].id;
      getCategory(this.params).then(res=>{
        _this.right = res.data.data;
      })
    })
  },
  methods: {
    qiehuan(index) {
      var _this = this;
      this.params.parentId=this.left[index].id;
      getCategory(this.params).then(res=>{
        _this.right = res.data.data;
      })
      _this.classifyIndex = index;

    },
    goDetails(id) {
      this.$router.push({
        path: `/homeContainer/`,query:{id:id}
      });
    }
  }
};
</script>

<style lang="stylus" scoped>
.active {
    border-left: 2px solid;
    background: #ffffff;
    color: #199cfe;
}

.calssify-con {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;

    .calssify-left {
        flex: 0 0 2.9rem;
        width: 4rem;
        height: 100%;
        background: #f6f6f6;
        // border-right: 10px solid #f6f6f6;
        margin-bottom: 1.51rem;
        font-size 0.35rem

        li {
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
        }
    }

    .calssify-rigth {
        flex: 1;
        background: white;
        margin-bottom: 1rem;
        overflow auto
        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                display: flex;
                flex-direction: column;
                text-align: center;
                width: 33%;
                margin-top: 0.3rem;
                font-size: 0.34rem;
                float: left;

                img {
                    width: 1.98rem;
                    display: block;
                    margin: auto;
                }

                span {
                    color: #999;
                    line-height: 0.9rem;
                    font-size: 0.34rem;
                }
            }
        }
    }
}
</style>
