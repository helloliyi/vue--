<template>
  <div class='home'>
    <!-- 打开app -->
    <div class="openApp">
      <i class="close"></i>
      <div class="open">
        <a href="##">
        <img src="https://yanxuan.nosdn.127.net/3137220cc522a8fbb0b7520637a61469.png?type=webp&imageView&thumbnail=750x0&quality=75" alt="">
        </a>
      </div>
    </div>
    <!-- 头部 -->
    <div class="header">
      <!-- 头部 -->
      <div class="headerTop">
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
      <div class="headerNav" ref="headerNav" v-if="indexData.kingKongModule">
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
    </div>
    
    <!-- 推荐 -->
    <ele-recommend :indexData = "indexData"></ele-recommend>

  </div>
</template>

<script>
import recommend from "@/components/ele-recommend/ele-recommend"
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
  components: {
    "ele-recommend":recommend
  },
  created(){},
  async mounted(){
    let navData = await http.seller.getnavs()
    this.indexData = navData
    this.$nextTick(() => {
      new BScroll(this.$refs.headerNav,{scrollX:true,click:true})
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
    .header
      width 100%
      height 148px
      .headerTop
        height 88px
        width 100%
        display flex
        align-items center
        padding 0 30px
        box-sizing border-box
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
      .headerNav
        width 100%
        height 60px
        overflow hidden
        white-space nowrap
        & > div
          display inline-block
          overflow hidden
          .navItem
            position relative
            display inline-block
            white-space nowrap
            height 60px
            width 140px
            text-align center
            line-height 60px
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
    .openApp
      width 100%
      height 104px
      //.close 
      .open
        width 100%
        height 100%
        a
          width 100%
          height 100%
          display inline-block
          img
            width 100%
            height 100%

        
  .text 
    xxxxxxxxxxxxxxx
</style>
