<template>
  <div id="app">
    <ele-header></ele-header>
    <ele-footerNav></ele-footerNav>
    <router-view></router-view>
  </div>
</template>

<script>
import eleHeader from "@/components/ele-header/ele-header"
import footerNav from "@/components/ele-footerNav/ele-footerNav"
export default {
  name: 'App',
  components:{
    "ele-header": eleHeader,
    "ele-footerNav":footerNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import url('/static/font_i4f3h1zfru/iconfont.css');
  #app
    width 100%
    height 100%
    overflow hidden
</style>