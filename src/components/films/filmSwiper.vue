<template>
  <div class="lunbo">
    <div class="swiper">
      <div class="swiper-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'
export default {
  mounted () {
    new Swiper('.swiper', {
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true, // 循环模式选项
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
.lunbo {
  position: fixed;
  left: 0;
  top: 0;
  width: 24.375rem;
  height: 12.0625rem;
  z-index: 10;
}
</style>
