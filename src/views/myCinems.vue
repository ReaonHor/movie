<template>
  <div>
    <van-nav-bar title="影院" @click-left="handleLeft" @click-right="handleRight">
      <template #left>
        {{cityName}}
        <van-icon name="arrow-down" size="12" color="black" />
      </template>
      <template #right>
        <van-icon name="search" size="24" color="black" />
      </template>
    </van-nav-bar>
    <!-- <router-link to="/cinems/search" active-class="nav">搜索</router-link> -->
    <div class="cinemaslist" ref="cinemaslist" v-if="cinemasList.length" :style="{
      height:height
    }">
      <ul class="content">
        <li v-for="data in cinemasList" :key="data.cinemaId" class="cinemasitem">
          <div class="name"><span>{{data.name}}</span></div>
          <div class="address"><i>{{data.address}}</i></div>
          <div class="price"><i>￥</i><span>{{data.lowPrice/100}}</span><i> 起</i></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
// import http from '@/util/http'
import BetterScroll from 'better-scroll'
import { NavBar } from 'vant'
import { mapState, mapActions } from 'vuex'
Vue.use(NavBar)

export default {
  computed: {
    ...mapState(['cinemasList', 'cityName', 'cityId'])

  },
  data () {
    return {
      BS: null,
      height: '500px'
    }
  },
  methods: {
    ...mapActions(['getCinemaData']),
    handleLeft () {
      this.$router.push('/city')
    },
    handleRight () {
      this.$router.push('/cinems/search')
    }
  },
  mounted () {
    // 动态计算scroll的高度
    this.height = document.documentElement.clientHeight - document.querySelector('footer').offsetHeight - document.querySelector('.van-nav-bar').offsetHeight + 'px'
    if (this.cinemasList.length === 0) {
      this.getCinemaData().then(() => {
        this.$nextTick(() => {
          this.BS = new BetterScroll(this.$refs.cinemaslist, {
            scrollbar: {
              fade: true,
              click: true,
              observeDOM: true
            }
          })
        })
      })
    } else {
      this.BS = new BetterScroll(this.$refs.cinemaslist, {
        scrollbar: {
          fade: true,
          click: true,
          observeDOM: true

        }
      })
    }
  },
  updated () {

  }
}
</script>
<style lang="scss" scoped>
.cinemaslist {
  height: 46.5625rem;
  overflow: hidden;
  position: relative;
}
.cinemasitem {
  position: relative;
  padding: 0.9375rem;
  .name {
    color: #191a1b;
  }
  .address {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #797d82;
  }
  .price {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #ff5f16;
  }
  span {
    font-size: 15px;
  }
  i {
    font-style: normal;
    font-size: 12px;
  }
}
</style>
