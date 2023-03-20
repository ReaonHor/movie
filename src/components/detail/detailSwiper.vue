<template>
  <div class="actorsswiper">
    <div class="swiper" :class="name">
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
  props: {
    perview: {
      type: Number,
      default: 2
    },
    name: {
      type: String,
      default: ''
    }
  },
  mounted () {
    new Swiper(`.${this.name}`, {
      slidesPerView: this.perview,
      spaceBetween: 15,
      freeMode: true
    })
  }
}
</script>
<style lang="scss" scoped>
.actorsswiper {
  padding: 0 0.9375rem;
}
</style>
