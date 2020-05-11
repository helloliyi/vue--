<template>
  <div class='recommend'>
    <!-- 轮播图 -->
    <div class="Carousel">
      <ele-swiper></ele-swiper>
    </div>
    <!-- 三个横向图标 -->
    <div class="policyDesList">
      <ul class="grow">
        <li class="policyItem" v-for="(item,index) in indexData.policyDescList" :key="index">
          <a href="##">
            <img :src="item.icon" alt="">
            <span>{{item.desc}}</span>
          </a>
        </li>
      </ul>
    </div>
    <!-- 十个图标 -->
    <div class="kingkongList">
      <div class="kingkongItem" v-for="(item) in indexData.kingKongModule.kingKongList" :key="item.L1Id">
        <img :src="item.picUrl" alt="">
        <span>{{item.text}}</span>
      </div>
    </div>
    <!-- 广告 -->
    <div class="advertising">
      <div class="newPresonal">
        <a href="##">
          <img src="https://yanxuan.nosdn.127.net/770f00c5d787d19d1acc8ae943362d07.jpg?quality=75&type=webp&imageView&thumbnail=750x0" alt="">
        </a>
      </div>
      <div class="advertisingbottom">
        <a class="first" style="margin-right:8px" href="##">
          <img src="https://yanxuan.nosdn.127.net/86ab049f572db7ca24b75fe2ec07bf9e.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
        </a>
        <a href="##">
          <img src="https://yanxuan.nosdn.127.net/51034fe872fc571cd666545ad8f15b79.png?quality=75&type=webp&imageView&thumbnail=375x0" alt="">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import swiper from "@/components/ele-swiper/ele-swiper"
export default {
  name: 'recommend',
  data(){
    return {}
  },
  props:['indexData'],
  components: {
    "ele-swiper": swiper
  },
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .recommend
    .policyDesList
      background #fff
      .grow
        display flex
        width 100%
        height 72px
        padding 0 .4rem
        box-sizing border-box
        flex-flow row nowrap
        align-items center
        zoom 1
        .policyItem
          -webkit-box-flex 1
          flex 1
          float left
          text-align center
          margin-right 0.08rem
          a
            display inline-block
            height 32px
            img 
              width 32px
              height 32px
              vertical-align: middle
              background-size 100% 100%
            span 
              font-size .32rem
              line-height .42667rem
              vertical-align: middle
              color #333
              margin-left .10667rem
    .kingkongList
      display flex
      width 100%
      height 372px
      flex-wrap wrap
      .kingkongItem
        width 20%
        display flex
        flex-direction column
        align-items center
        img
          width 110px
          height 110px
        span
          font-size 24px
          margin-top .13333rem
    .advertising
      width 100%
      height 466px
      background-color #eee
      .newPresonal
        width 100%
        height 240px
        a
          display inline-block
          width 100%
          height 100%
        img
          width 100%
          height 100%
      .advertisingbottom
        width 100%
        height 186px
        display flex
        align-items center
        padding 20px
        box-sizing border-box
        margin-top 20px
        margin-bottom 20px
        a
          width 351px
          height 186px
          display inline-block
          img 
            width 100%
            height 100%

</style>
