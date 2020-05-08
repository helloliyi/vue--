<template>
  <div class='home'>
    <!-- 头部 -->
    <div class="homeHeader">
      <img src="./images/logo.png" alt="">
      <div class="soso">
        <i class="iconfont icon-Group-"></i>
        <span>搜索商品,共25536种商品</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
    <!-- 头部导航 -->
    <div class="homeNav" ref="homeNav" v-if="indexData.kingKongModule">
      <div>
        <div class="navItem" :class="{active:navIndex === 0}" @click="changeIndex(0)">推荐</div>
        <div class="navItem"
          v-for="(item,index) in indexData.kingKongModule.kingKongList"
          :key="index"
          @click="changeIndex((index+1))"
          :class="{active:navIndex ===index+1}"
        >
          {{item.text}}
        </div>
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="Carousel">
      <div class="swiper-container">
        <div class="swiper-wrapper">

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import http from "../../http"
export default {
  name: 'home',
  data(){
    return {
      indexData:{},
      navIndex:0
    }
  },
  components: {},
  created(){},
  async mounted(){
    let navData = await http.seller.getnavs()
    console.log(navData);
    this.indexData = navData
    this.$nextTick(() => {
      new BScroll(this.$refs.homeNav,{scrollX:true,click:true})
    })
  },
  methods: {
    changeIndex(navIndex){
      this.navIndex = navIndex
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .home
    width 100%
    height 100%
    .homeHeader
      padding .21333rem .4rem
      background: #fff;
      display flex
      align-items center
      height 88px
      width 100%
      background pink 
      .logo
        width 138px
        height 40px
      .soso
        margin-left 15px
        width 442px
        height 56px
        display flex
        align-items center
        justify-content center
        flex-flow row nowrap
        font-size .37333rem
        background-color #ededed
        border-radius .10667rem
        .iconfont
          font-size 32px
          color #666
        span 
          color #666
          margin-left 40px
      .login
        width 74px
        height 40px
        border 2px solid #dd1a21
        text-align center
        line-height 40px
        border-radius 5px
        color #dd1a21
        margin-left .21333rem
    .homeNav
      width 100%
      height 80px
      overflow hidden
      white-space nowrap
      & > div
        display inline-block
        overflow hidden
        .navItem
          position relative
          display inline-block
          white-space nowrap
          height 80px
          width 140px
          text-align center
          line-height 80px
          margin 0 10px
          font-size 28px
          &.active:after
            content ''
            position absolute
            bottom 0
            left 0
            width 100%
            height 4px
            background-color #BB2C08

  .text 
    xxxxxxxxxxxxxxx
</style>
