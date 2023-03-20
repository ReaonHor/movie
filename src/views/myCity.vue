<template>
  <div>
    <div class="fixed">
      <div class="header">
        <van-nav-bar title="当前城市" @click-left="handleLeft">
          <template #left>
            <van-icon name="arrow-left" size="22" color="black" />
          </template>
        </van-nav-bar>
      </div>
      <div class="search">
        <van-search v-model="value" clearable show-action placeholder="输入城市或者拼音" @input="input" />
      </div>
    </div>
    <div class="cheng"></div>
    <div class="searchlist" v-show="searchcities.length">
      <ul>
        <li v-for="data in searchcities" :key="data.cityId" @click="chooseCity(data)">{{data.name}}</li>
      </ul>
    </div>
    <div class="citylist" v-show="!searchcities.length">
      <van-index-bar :index-list="computedlist" @select="handleLetter">
        <div v-for="data in cityList" :key="data.type">
          <van-index-anchor :index="data.type" />
          <van-cell :title="item.name" v-for="item in data.list" :key="item.cityId" @click="chooseCity(item)" />
        </div>
      </van-index-bar>
    </div>
  </div>
</template>
<script>
import http from '@/util/http'
import Vue from 'vue'
import { IndexBar, IndexAnchor, Toast, NavBar } from 'vant'
import { mapMutations } from 'vuex'
Vue.use(NavBar)
Vue.use(IndexBar)
Vue.use(IndexAnchor)
export default {
  computed: {
    computedlist () {
      return this.cityList.map(item => item.type)
    }
  },
  data () {
    return {
      cityList: [],
      searchcities: [],
      value: '',
      truecities: []
    }
  },
  mounted () {
    this.$store.commit('tabBarHide')
    http.http({
      url: '/gateway?k=8635017',
      headers: {
        'X-Host': 'mall.film-ticket.city.list'
      }
    }
    ).then((res) => {
      this.truecities = res.data.data.cities
      this.cityList = this.renderCity(res.data.data.cities)
    })
  },
  destroyed () {
    this.$store.commit('tabBarShow')
  },
  methods: {
    ...mapMutations(['clearCinema', 'chooseCityName', 'chooseCityId']),
    chooseCity (item) {
      this.clearCinema()
      this.chooseCityName(item.name)
      this.chooseCityId(item.cityId)
      // this.$store.commit('clearCinema')
      // this.$store.commit('chooseCityName', item.name)
      // this.$store.commit('chooseCityId', item.cityId)
      this.$router.back()
    },
    input () {
      if (this.value) {
        this.searchcities = this.truecities.filter(item =>
          item.pinyin.toUpperCase().includes(this.value.toUpperCase()) || item.name.includes(this.value)
        )
      } else {
        this.searchcities = []
      }
    },
    handleLeft () {
      this.$router.back()
    },
    handleLetter (data) {
      Toast(data)
    },
    renderCity (list) {
      const cityList = []
      const letterList = []
      // 生成26个字母数组
      for (let i = 65; i < 91; i++) {
        letterList.push(String.fromCharCode(i))
      }
      // 将原数组过滤成一个新类型便于组件的数组
      letterList.forEach(letter => {
        const newlist = list.filter(item => {
          return item.pinyin.substring(0, 1).toUpperCase() === letter
        })
        newlist.length > 0 && cityList.push({
          type: letter,
          list: newlist
        })
      })
      return cityList
    }
  }
}
</script>
<style lang="scss">
.van-toast--html,
.van-toast--text {
  min-width: 2.5rem;
}
.van-toast {
  background-color: rgba(0, 0, 0, 0.6);
}
.fixed {
  width: 24.375rem;
  height: 6.25rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
.cheng {
  height: 6.25rem;
}

.searchlist {
  padding-left: 0.9375rem;
  height: 2.75rem;
  line-height: 2.75rem;
  color: #191a1b;
  border-bottom: 1px solid #f4f4f4;
  font-size: 13px;
}
</style>
<style lang="scss" scoped>
</style>
