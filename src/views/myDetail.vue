<template>
  <div v-if="filmInfo" class="detail">
    <div class="header">
      <div class="back" @click="handleback"><img src="data:image/png;base64,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" alt=""></div>
      <div class="title" v-scroll="100">{{filmInfo.name}}</div>
    </div>
    <div class="bgimg" :style="{
      backgroundImage:'url('+filmInfo.poster+')'
    }
    "></div>
    <div class="film-detail">
      <div class="filmname"><span>{{filmInfo.name}}</span></div>
      <div>{{filmInfo.category}}</div>
      <div class="time">{{filmInfo.premiereAt | dataFilter}} 上映</div>
      <div>{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
      <div :class="isHidden?'hiddentext':'text'" :style="{height:trueheight+'px'}" ref="element">{{filmInfo.synopsis}}</div>
      <div class="toggle" @click="isHidden = !isHidden"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAICAYAAADwdn+XAAAAAXNSR0IArs4c6QAAAQlJREFUKBWNkT1Lw1AUht8TIlJExKlj/4WQFNIacWyHCoLQ1cXdj59g7e7i6CA4OAhOpbdNIKn2X3Ts1NGhocdzbgmk1NJmuCHnvM+Tc+8lEyVfDBzDxdVZtTrBDk8/SSrI8EbAzBH4EAwPc/qJ4/RkG28zklVGWefoYL8BQg/gcsYYmmjU2iQx8feFZjSrjLIyBTBgdjlKn8V4TUQszfsw8LtFkYnTW/lrh5lJoBeq+TenRJkV5EEzHN2B+LEY0t6KnOkhrHtPObMi0KKOCV68iqS03JoacC6T/QLUDmveRw7re02gRT2o+QKfdq9aAE33HDSDwB/bz8Lyr0D7y6uid5t1+XLTFf8Bk+NpPwQfd0oAAAAASUVORK5CYII=" :class="isHidden?'':'mypic'"></div>
    </div>
    <div class="actorsimg">
      <div class="title-bar">演职人员</div>
      <detail-swiper :perview="3.5" name="actor">
        <detail-swiper-item v-for="(data,index) in filmInfo.actors" :key="index">
          <div class="avataritem">
            <div class="avatar"><img :src="data.avatarAddress"></div>
            <div><span>{{data.name}}</span></div>
            <div><span>{{data.role}}</span></div>
          </div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div class="actorsimg">
      <div class="title-bar">剧照</div>
      <detail-swiper :perview="2.5" name="juzhao">
        <detail-swiper-item v-for="(data,index) in filmInfo.photos" :key="index">
          <div class="juzhao" @click="handlepreview(index)"><img :src="data"></div>
        </detail-swiper-item>
      </detail-swiper>
    </div>
    <div class="buy">
      <span>选座购票</span>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { ImagePreview } from 'vant'
import http from '@/util/http'
import moment from 'moment'
import detailSwiper from '@/components/detail/detailSwiper.vue'
import detailSwiperItem from '@/components/detail/detailSwiperItem'
import Vue from 'vue'

moment.locale('zh-cn')
Vue.filter('dataFilter', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.filter('mywidth', (data) => {
  return moment(data * 1000).format('YYYY-MM-DD')
})
Vue.directive('scroll', {
  inserted (el, binding) {
    el.style.opacity = 0
    window.onscroll = () => {
      if (document.documentElement.scrollTop || document.body.scrollTop > binding.value) {
        el.style.opacity = 1
      } else {
        el.style.opacity = 0
      }
    }
  },
  unbind () {
    window.onscroll = null
  }
})
// 获取路由传过来的id值，向服务器发起请求获取信息然后渲染页面
export default {
  methods: {
    handleback () {
      this.$router.back()
    },
    handlepreview (index) {
      ImagePreview({
        images: this.filmInfo.photos,
        startPosition: index

      })
    }
  },
  data () {
    return {
      filmInfo: null,
      isHidden: true,
      trueheight: 0
    }
  },
  created () {
    // 匹配当前路由
    http.http({
      url: `/gateway?filmId=${this.$route.params.id}&k=6165256`,
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      this.filmInfo = res.data.data.film
      this.$nextTick(() => {
        this.trueheight = Math.ceil(this.filmInfo.synopsis.length / 27) * 19.5
      })
    })
  },
  mounted () {
    this.$store.commit('tabBarHide')
  },
  destroyed () {
    this.$store.commit('tabBarShow')
  },
  components: {
    detailSwiper,
    detailSwiperItem
  }
}
</script>

<style lang="scss" scoped>
.detail {
  background-color: #f4f4f4;
  .header {
    .back {
      position: fixed;
      top: 0.5rem;
      left: 0;
      z-index: 10;
      img {
        width: 1.875rem;
        height: 1.875rem;
      }
    }
    .title {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 2.75rem;
      background-color: #fff;
      font-size: 17px;
      text-align: center;
      line-height: 2.75rem;
      transition: all 0.3s;
    }
  }

  .bgimg {
    width: 100%;
    height: 13.125rem;
    background-position: center;
    background-size: cover;
  }
  .film-detail {
    background-color: #ffffff;
    padding: 0.75rem 0.9375rem 0.9375rem;
    font-size: 0.8125rem;
    color: #797d82;
    div {
      margin: 5px 0 0;
    }
    .filmname {
      font-size: 1.125rem;
      color: #191a1b;
    }
    .hiddentext {
      height: 38px !important;
      margin-top: 0.75rem;
      overflow: hidden;
      line-height: 19px;
      font-size: 13px;
      transition: height 0.4s;
    }
    .text {
      margin-top: 0.75rem;
      line-height: 19px;
      font-size: 13px;
      transition: height 0.4s ease;
    }
    .toggle {
      height: 1rem;
      text-align: center;
      img {
        width: 0.625rem;
      }
    }
    .mypic {
      transform: rotateX(180deg);
    }
  }
  .actorsimg {
    background-color: #ffffff;
    margin: 0.9375rem 0;
    height: 11.875rem;
    .title-bar {
      height: 3.3125rem;
      padding: 0.9375rem;
      font-size: 1rem;
    }
    .juzhao {
      img {
        width: 8.75rem;
        max-height: 5rem;
      }
    }
    .avataritem {
      .avatar {
        width: 5.3125rem;
        height: 95px;
        overflow: hidden;
        img {
          width: 5.3125rem;
        }
      }
      div {
        text-align: center;
        font-size: 12px;
      }
    }
  }
}
.buy {
  position: fixed;
  left: 0px;
  bottom: 0px;
  height: 3.125rem;
  width: 100%;
  background-color: #ff5f16;
  text-align: center;
  line-height: 3.125rem;
  color: #fff;
  font-size: 16px;
  z-index: 10;
}
</style>
