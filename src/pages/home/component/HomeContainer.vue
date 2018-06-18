<template>

    <div class="main" >
      <h2>产品&服务</h2>

      <div class="main_box" >
        <ul>

          <li v-for="(todo,index) in list" :key="list.id" @click="open(list.id)">
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
      </div>

    </div>


</template>

<script>
  import {mapState, mapMutations, mapGetters} from "vuex";
  import {getGoods} from '../../../api/api'

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
        items: []
      }
    },
    props: {
      todos: Array
    },
    mounted: function () {
      getGoods(this.params).then(res => {
        this.list = res.data.data.records
      })
      for (var i = 1; i <= 20; i++) {
        this.items.push(i + ' - keep walking, be 2 with you.')
      }
      this.top = 1
      this.bottom = 20
    },
    methods: {
      open: function (id) {
        this.$router.push({path: "goodDetail", query: {id: id}});
      },
      refresh(done) {
        setTimeout(() => {
          var start = this.top - 1
          for (var i = start; i > start - 10; i--) {
            this.items.splice(0, 0, i + ' - keep walking, be 2 with you.')
          }
          this.top = this.top - 10
          done()
        }, 1500)
      },
      infinite(done) {
        setTimeout(() => {
          var start = this.bottom + 1
          for (var i = start; i < start + 10; i++) {
            this.items.push(i + ' - keep walking, be 2 with you.')
          }
          this.bottom = this.bottom + 10
          done()
        }, 1500)
      }
    }
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
