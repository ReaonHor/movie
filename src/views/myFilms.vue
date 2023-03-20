<template>
  <div>
    <film-swiper :key="datalist.length" class="filmswiper">
      <film-swiper-item v-for="data in datalist" :key="data" class="item">
        <img :src="data" />
      </film-swiper-item>
    </film-swiper>
    <film-header class="filmheader"></film-header>
    <router-view></router-view>
  </div>
</template>
<script>
import filmSwiper from '../components/films/filmSwiper.vue'
import filmSwiperItem from '@/components/films/filmSwiperitem.vue'
import filmHeader from '@/components/films/filmHeader.vue'

export default {
  data () {
    return {
      datalist: []
    }
  },
  components: {
    filmSwiper,
    filmSwiperItem,
    filmHeader
  },
  mounted () {
    setTimeout(() => {
      this.datalist = [
        'https://picx.zhimg.com/80/d0e626d38ee2815366fef250410334f6_720w.webp?source=1940ef5c',
        'https://picx.zhimg.com/80/0e81eefa2da8abbf9617041e0a948d3a_720w.webp?source=1940ef5c',
        'https://picx.zhimg.com/80/11638afc33de49d6db91f63701f3511e_720w.webp?source=1940ef5c',
        'https://pic1.zhimg.com/80/9f86738c575c0088979283a94409a1dc_720w.webp?source=1940ef5c'
      ]
    }, 1000)
  }
}
</script>

<style lang="scss" scoped>
.filmswiper {
  overflow: hidden;
  .item {
    img {
      height: 12.0625rem;
    }
  }
}
</style>
