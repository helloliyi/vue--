<template>
  <div class='swiper-container' ref="swiperContainer">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/3249a36b2600f5025e87b2eebae264f0.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/f064e1d5529f47d1dba561bc15dc2c14.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="http://yanxuan-miaobi.nos-jd.163yun.com/3829051_1_5_wap_ac032a0fccc1195727761846263f20ba.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/1f43a04ef03625a78b743910ddbd6fe7.png?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
      <div class="swiper-slide">
        <img src="https://yanxuan.nosdn.127.net/bdf62c937dfdf6090b1fc611b9081ce8.jpg?type=webp&imageView&quality=75&thumbnail=750x0" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper"
export default {
  name: 'Swiper',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){
    this.renderSwiper()
  },
  methods: {
    renderSwiper() {
      this.$nextTick(() => {
        new Swiper(this.$refs.swiperContainer, {
          loop: true, // 循环模式选项
          pagination: {
          el: '.swiper-pagination',
          clickable:true,
          }
        })
      })
    }
  }
}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper-container
    width 100%
    height 296px
    .swiper-wrapper
      width 100%
      height 100%
      .swiper-slide
        width 100%
        height 100%
        img 
          width 100%
          height 100%
</style>
