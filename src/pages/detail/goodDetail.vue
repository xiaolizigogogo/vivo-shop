<template>
<div class="goodDetail" id="transitionName">
      <div class="goodDetailList">
            <ul style="background: white;">
                <li v-for="(goodDetail,index) in goodDetails" :key="index">
                    <div class="goodDetaiSwipe">
                        <mt-swipe :auto="4000">
                            <mt-swipe-item v-for="list in goodDetail.gallerys">
                                <img :src="list.imgUrl" alt="图片">
                            </mt-swipe-item>
                        </mt-swipe>
                    </div>
                    <div class="goodDetailMain">
                        <div class="gooDetailNumber">商品编号：{{goodDetail.info.id}}</div>
                        <div class="goodDetailName">{{goodDetail.info.name}}</div>
                        <div style="text-align: justify;font-size: 0.348rem;">
                            <span style="margin-left:-.2rem;color:#FF4B3D;">【{{goodDetail.info.promotionDesc}}】</span>
                            {{goodDetail.info.goodsBrief}}
                        </div>
                        <div class="goodDetailColor">{{goodDetail.color}}</div>
                        <div class="goodDetailPaid">￥{{goodDetail.info.retailPrice}}</div>
                    </div>

                    <div class="goodDetailValue">
                        <div class="_Value">购买数量：</div>
                        <div>
                            <div class="_cartNumber" style="margin-left: 1rem;">
                                <a href="javascript:;" @click="jian(index)" class="goodDetailReduce">-</a>
                                <input type="text"   v-model="goodDetail.homeValue" readonly="readonly"/>
                                <a href="javascript:;" @click="jia(index)" class="goodDetailAdd">+</a>
                            </div>
                        </div>
                    </div>

                    <Detail-Layer></Detail-Layer>

                    <div class="goodDetailBox">
                        <mt-navbar v-model="selected" >
                            <mt-tab-item id="tab-container1">图文详情</mt-tab-item>
                            <mt-tab-item id="tab-container2">参数</mt-tab-item>
                        </mt-navbar>


                        <mt-tab-container v-model="selected" swipeable>
                            <mt-tab-container-item id="tab-container2">
                               <div class="goodDetailParam">
                                   <ul>
                                       <li class="goodDetailLi" v-for="(item, index) in goodDetail.attributes" :key="index">
                                           <span class="paramKey fontSize04">{{item.name}}</span>
                                           <span class="paramValue fontSize03">{{item.value}}</span>
                                       </li>
                                   </ul>
                                </div>
                            </mt-tab-container-item>

                            <mt-tab-container-item id="tab-container1">
                                <div class="peizhi" v-html="goodDetail.info.goodsDesc"></div>
                            </mt-tab-container-item>
                        </mt-tab-container>

                    </div>


                    <div class="goodDetailFooter">
                        <div class="left">
                            <div class="cart">
                                <div class="cartlength">{{cartlength}}</div>
                                <img src="http://p6563v2ck.bkt.clouddn.com/%E8%B4%AD%E7%89%A9%E8%BD%A6.png" >
                                <span>购物车</span>
                            </div>
                            <div class="collection" >
                                <div class="collection-box" @click="addCollection(goodDetail)"  v-show="!$store.state.ces">
                                    <i class="iconfont icon-collection"></i>
                                    <span>收藏</span>
                                </div>
                                <div class="collection-box" @click="addCollection(goodDetail)"  v-show="$store.state.ces">
                                    <i class="iconfont icon-shoucangxuanzhong1" style="color:red"></i>
                                    <span style="color:red">取消</span>
                                </div>
                            </div>
                            <div class="shop">
                                <img src="http://p6563v2ck.bkt.clouddn.com/%E5%BA%97%E9%93%BA_2.png" >
                                <!-- <i class="iconfont icon-xuanzekuangxuanzhong" v-show="!$store.state.collection"></i>
                                <i class="iconfont icon-xuanzekuangxuanzhong" v-show="$store.state.collection" style="color:red"></i> -->
                                <span>店铺</span>
                            </div>
                        </div>
                        <div class="rigth">
                            <div class="add">
                                <a href="javascript:void(0);" @click="add(goodDetail)">加入购物车</a>
                            </div>
                            <!--<div class="purchase">-->
                                <!--<a href="javascript:void(0);" @click="pay(goodDetail.info.id,goodDetail.homeValue)">提交订单</a>-->
                            <!--</div>-->
                        </div>

                    </div>

                </li>
            </ul>
      </div>
  </div>
</template>

<script >
import { Toast,MessageBox,Navbar,TabItem,TabContainer,TabContainerItem } from "mint-ui";
import { mapGetters, mapMutations } from "vuex";
import DetailLayer from "./component/DetailLayer";
import {getGoodDetail} from '../../api/api'
import axios from "axios";
export default {
  name: "goodDetail",
  data() {
    return {
      active: "1",
      goodDetailHeader: "商品详情",
      selected: "tab-container1",
      goodDetails: [],
      cartlength: 0,
      id: 0,
      goods: {},
      gallery: [],
      attribute: [],
      issueList: [],
      comment: [],
      brand: {},
      specificationList: [],
      productList: [],
      relatedGoods: [],
      cartGoodsCount: 0,
      userHasCollect: 0,
      number: 1,
      checkedSpecText: '请选择规格数量',
      openAttr: false,
      noCollectImage: "/static/images/icon_collect.png",
      hasCollectImage: "/static/images/icon_collect_checked.png",
      collectBackImage: "/static/images/icon_collect.png"
    };
  },
  components: {
    DetailLayer
  },
  computed: {
    paid: function() {
      var paid = 0;
      for (var i in this.goodDetails) {
        paid += this.goodDetails[i].value * this.goodDetails[i].price;
      }
      return paid;
    }
  },
  computed: {
    ...mapGetters(
        ["this.$store.state.carts"],
        ["this.$store.state.todos"],
        ["this.$store.state.collection"],
        ["this.$store.state.ces"]
    )
  },
  mounted() {
  this.init();
  },
  created() {

  },

  methods: {
    addCollection(index) {
      this.$store.state.ces=!this.$store.state.ces
       var data={
           id:index.id,
           img:index.homeImg,
           name:index.homeName,
           price:index.homePrice
       }
        this.$store.dispatch("setGoods",data)
    },
    // 点击按钮时，首先判断该商品是否在购物车已存在，如果存在则不再加入
    add: function(index) {
      console.log(index)

        var data = {
          goodsId:index.info.id,
          productId:index.info.id,
          userId:JSON.parse(localStorage.getItem("user")).id,
          number:1,
          checked:true,
          listPicUrl:index.info.listPicUrl,
          marketPrice:index.info.retailPrice,
          retailPrice:index.info.retailPrice,
          goodsSpecifitionIds:"1",
          goodsSpecifitionNameValue:"1",
          sessionId:"1"
        };
        axios.post("/shop/carts",data).then(res=>{
              if(res.data.status==200){
        Toast({
          message: "加入购物车成功！",
          iconClass: "iconfont icon-goumaichenggong-copy",
          duration: 950
        });
        this.init();
              }
        });

    },
    jia: function(index) {
      this.goodDetails[index].homeValue++;

    },
    jian: function(index) {
      if (this.goodDetails[index].homeValue == 1) {
        this.goodDetails[index].homeValue = 1;
      } else {
        this.goodDetails[index].homeValue--;
      }
    },
    //返回上一级
    fanhui: function() {
      this.$router.go(-1);
    },
    pay: function(id,value) {
        console.log(id,value)
        this.$router.push({
            path:"/pay",
            query:{
                id:id,
                value:value
            }
        })
        // Toast({
        //     message: `成功支付了${this.paid}元`,
        //     iconClass: "iconfont icon-goumaichenggong",
        //     duration: 750
        // });
      // alert(`成功支付了${this.paid}元`)
    //   var data = {
    //     id: this.goodDetails[index].id,
    //     name: this.goodDetails[index].homeName,
    //     price: this.goodDetails[index].homePrice,
    //     image: this.goodDetails[index].homeImg,
    //     value: this.goodDetails[index].homeValue,
        // order: this.goodDetails[index].order,
        // color: this.goodDetails[index].color,
        // number: this.goodDetails[index].number
    //   };
    //   this.$store.commit("addorder", data);
    // }
    },
    init(){
      var id = this.$route.params.id;
      getGoodDetail({"goodsId":id}).then(res=>{
        this.goodDetails.push({...res.data.data, homeValue: 1})
      console.log(res)
      })

    }
  }
};
</script>

<style lang="stylus">
.peizhi {

    margin-top: 0.1rem;
    div{
        margin-bottom .5rem;
        margin-top .5rem;
    }
    h3 {
        height: 2rem;
        line-height: 2.3rem;
        font-size: 0.5rem;
        border-bottom: 1px solid #ccc;
    }
    span {
        font-size: 0.38rem;
        color: #888;
        margin-top: .3rem;
        display: block;
    }
    p {
        width: 100%;
        color: #888;
        img {
            width: 100%;
        }
    }
}

.cartlength {
    width: 15px;
    height: 15px;
    position: absolute;
    top: 1px;
    left: 30px;
    background: #f81301;
    border-radius: 50%;
    text-align: center;
    line-height: 15px;
    color: white;
}

.goodDetailList {
    margin-bottom: 1rem;
}

.goodDetailHeader {
    width: 100%;
    z-index: 1;
    height: 1.3rem;
    line-height: 1.3rem;
    font-size: 12px;
    background: white;
    position: fixed;
    box-shadow: 0 0 10px #cecece;
    text-align: center;
    font-size: 0.41rem;
}

.goodDetailHeader i {
    display: block;
    float: left;
    height: 50px;
    padding-left: 0.3rem;
    font-size: 0.71rem;
    color: black;
}

.goodDetaiSwipe {
    height: 8rem;
    background: white;
}

.goodDetaiSwipe img {
    width: 100%;
    height: 7rem;
    display: block;
    margin: auto;
}

.goodDetailMain {
    /* height: 1.8rem; */
    background: white;
    border-bottom: 1px solid #cecece;
    // border-top: 1px solid #cecece;
    padding: 0.4rem;
    margin-top: -15px;
}

// .goodDetailBox {
// height: 1px;
// }
.goodDetailName {
    color: black;
    font-weight: 400;
    font-size: 0.5rem;
    line-height 1rem
}

.goodDetailPaid {
    color: #f81200;
    font-size: 0.7rem;
    margin-top: 0.1rem;
}

.goodDetailFooter {
    position: fixed;
    width: 100%;
    bottom: 0rem;
    height: 1.2rem;
    background: #F6F4F7;
    border-top: 1px solid #efefef;

    .left {
        width: 45%;
        float: left;
        position: relative;
        font-size: .35rem;
        .cart {
            width: 33%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            float: right;
            position: relative;

            img {
                width: 0.76rem;
                height: 0.7rem;
                display: block;
                margin: auto;
            }

            span {
                text-align: center;
                color: #767676;
            }
        }

        .shop {
            width: 33%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            float: right;

            img {
                width: 0.76rem;
                height: 0.7rem;
                display: block;
                margin: auto;
            }

            span {
                display: block;
                text-align: center;
                color: #767676;
            }
        }

        .collection {
            width: 33%;
            height: 100%;
            display: flex;
            justify-content: center;
            flex-direction: column;
            float: right;
            border-left: 1px solid #ccc;
            border-right: 1px solid #ccc;
            color: #767676;

            .collection-box {
                text-align: center;
                display: flex;
                justify-content: center;
                flex-direction: column;
            }

            i {
                width: 0.76rem;
                height: 0.7rem;
                line-height: 0.7rem;
                display: block;
                margin: auto;
                font-size: 0.6rem;
            }

            span {
                text-align: center;
            }
        }
    }

    .rigth {
        width: 55%;
        float: right;

        .add {
            a {
                display: block;
                width: 100%;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align: center;
                background: #FF9800;
                color: white;
                font-size: 0.35rem;
                float: left;
            }
        }

        .purchase {
            a {
                float: left;
                display: block;
                width: 50%;
                height: 1.2rem;
                line-height: 1.2rem;
                text-align: center;
                color: white;
                font-size: 0.35rem;
                background: #E3211E;
            }
        }
    }
}

.gooDetailNumber {
    display: none;
}

.add a {
}

.purchase a {
}

.goodDetailParam {
    margin-top: 4px;
    margin-bottom: 6px;
}

table td {
    font-size: 0.31rem;
    text-align: center;
    color: #000;
}

.goodDetailValue {
    height: 2rem;
    border-bottom: 1px solid #cecece;
    padding: 0.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.goodDetailAdd {
    width: 1rem;
    height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    border-radius: 0 10px 10px 0;
    border-left: none;
    text-align: center;
    font-size: 0.6rem;
    color: black;
}

.goodDetailReduce {
    width: 1rem;
    height: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    float: left;
    border: 1px solid #b2b2b2;
    border-radius: 10px 0 0 10px;
    border-right: none;
    text-align: center;
    font-size: 0.6rem;
    color: black;
}

._cartNumber input {
    width: 1rem;
    height: 0.8rem;
    float: left;
    border: 1px solid #b2b2b2;
    text-align: center;
    color: black;
    font-size: 0.4rem;
}

._Value {
    float: left;
    margin-top: 0.2rem;
    font-size 0.35rem
}

.goodDetailColor {
    display: none;
}
.goodDetailLi{
    display: flex;
    align-items: center;
    height: 1.5rem;
    border-top: 2px solid #F4F4F4;
    .paramKey{
        width: 3rem;
        padding-left: 0.3rem;

    }
    .paramValue{
        flex: 1;
    }
}

</style>
