<template>
  <div class="list">
    <div class="cheng"></div>
    <van-list v-model="loading" :finished="finished" finished-text="我是有底线的" @load="onLoad" :immediate-check="false">
      <van-cell v-for="data in datalist" :key="data.filmId" @click="handledetail(data.filmId)">
        <img :src="data.poster" />
        <div class="detail">
          <div><span class="title">{{data.name}}</span></div>
          <div><span class="labal">观众评分</span> <span class="grade">{{data.grade | grade}}</span></div>
          <div class="actors"><span class="labal">主演：{{data.actors | actorsFilter}}</span></div>
          <div><span class="labal">{{data.nation}} | {{data.runtime}}</span></div>
        </div>
        <div class="bug">预约</div>
      </van-cell>

    </van-list>

  </div>
</template>

<script>
// import axios from 'axios'
import Vue from 'vue'
import http from '@/util/http'
import { Loading, List } from 'vant'

Vue.use(List)
// import throttle from '@/util/throttle'
// import debouce from '@/util/debouce'
Vue.use(Loading)
Vue.filter('actorsFilter', (data) => {
  if (data === undefined) return '暂无主演'
  return data.map(item => item.name).join(' ')
})
Vue.filter('grade', (data) => {
  if (data === undefined) return '暂无评分'
  return data.map(item => item.name).join('')
})

export default {
  mounted () {
    http.http({
      url: `gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=2&k=825823`,
      headers: { 'X-Host': 'mall.film-ticket.film.list' }
    }).then(res => {
      this.total = res.data.data.total
      this.datalist = res.data.data.films
    })
  },
  computed: {

  },
  data () {
    return {
      datalist: [],
      isshow: true,
      current: 1,
      total: 0,
      list: [],
      loading: false,
      finished: false,
      refreshing: false
    }
  },
  methods: {
    onLoad () {
      this.current++
      http.http({
        url: `gateway?cityId=${this.$store.state.cityId}&pageNum=${this.current}&pageSize=10&type=2&k=825823`,
        headers: { 'X-Host': 'mall.film-ticket.film.list' }

      }).then(res => {
        this.datalist = [...this.datalist, ...res.data.data.films]
        this.loading = false
        if (this.datalist.length === this.total) {
          this.finished = true
        }
      })
    },
    onRefresh () {
    },
    handledetail (id) {
      // location.href = '#/detail'
      // 通过路径跳转
      this.$router.push(`/detail/${id}`)
      // 通过命名路由跳转
      // this.$route.push({
      //   name: 'hor',
      //   params: {
      //     id
      // }
      // })
    }
  }
}

</script>
<style lang="scss" scoped>
.list {
  .cheng {
    height: 15.25rem;
  }
  .van-list {
    height: 35.25rem;
    overflow: auto;
  }
}
.van-cell {
  position: relative;
  padding: 0.9375rem 0.9375rem 0.9375rem 0.9375rem;
  height: 7.75rem;
  img {
    float: left;
    width: 4.125rem;
    overflow: hidden;
  }
  .detail {
    float: left;
    display: flex;
    width: 14.0625rem;
    height: 5.5rem;
    line-height: 1.375rem;
    padding-left: 10px;
    flex-direction: column;
    overflow: hidden;
    div {
      flex: 1;
    }
    .actors {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    span {
      font-size: 1rem;
    }
    .labal {
      font-size: 0.8125rem;
      font-weight: 400;
      color: #797d82;
    }
    .grade {
      font-size: 14px;
      color: #ffb232;
    }
  }
  .bug {
    position: absolute;
    width: 48px;
    height: 24px;
    top: 1.625rem;
    right: 1.25rem;
    border: 1px solid #ff5f16;
    text-align: center;
    color: #ff5f16;
    line-height: 24px;
  }
}
</style>
