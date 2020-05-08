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
        <i class="iconfont icon-sousuo"></i>
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
    width 100%
    height 98px
    display flex
    background pink
    & >.item
      flex 1
      display flex
      justify-content center
      a
        display flex
        flex-direction column
        span 
          font-size .32rem
          display block
          margin-top 20px
        i
          width 40px
          height 40px
          font-size 40px
          line-height 80px

</style>
