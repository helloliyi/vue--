<template>
  <div class='footerNav'>
    <div class="item">
      <router-link to="/Home">
        <i class="iconfont icon-zhuye"></i>
        <span class="text">首页</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Sort">
        <i class="iconfont icon-Householdappliances"></i>
        <span class="text">分类</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Deserve">
        <i class="iconfont icon-inquiry-template"></i>
        <span class="text">值得买</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Cart">
        <i class="iconfont icon-cart-Empty"></i>
        <span class="text">购物车</span>
      </router-link>
    </div>
    <div class="item">
      <router-link to="/Personal">
        <i class="iconfont icon-bussiness-man"></i>
        <span class="text">个人</span>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footerNav',
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .footerNav
    position fixed
    left 0
    bottom 0
    display flex
    flex-wrap row wrap
    width 100%
    height 98px
    background-color #fff
    &>.item
      width 20%
      display flex
      align-items center
      a
        display inline-block
        display flex  
        flex-direction column
        align-items center
        flex 1
        span 
          font-size .32rem
          display block
          margin-top .09333rem
          font-size .32rem
          color #666
          line-height 1
        i
          width: .53333rem;
          height: .53333rem
          font-size 40px

          

</style>
