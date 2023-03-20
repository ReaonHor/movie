import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/util/http'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      reducer: (state) => {
        return {
          cityId: state.cityId,
          cityName: state.cityName
        }
      }
    })
  ],
  // 公共状态
  state: {
    cityId: '310100',
    cityName: '上海',
    cinemasList: [],
    tabBarShow: true
  },
  // 统一管理，被devtool记录管理
  // 只能支持同步
  mutations: {
    // 管理保存公共状态，（分散在各个组件内的状态，统一管理）默认保存在内存中，刷新页面就丢失了
    chooseCityName(state, cityName) {
      state.cityName = cityName
    },
    chooseCityId(state, cityId) {
      state.cityId = cityId
    },
    cinemaData(state, data) {
      state.cinemasList = data
    },
    clearCinema(state) {
      state.cinemasList = []
    },
    tabBarHide(state) {
      state.tabBarShow = false
    },
    tabBarShow(state) {
      state.tabBarShow = true
    }
  },
  // vue 项目应用
  // 1.非父子的通信
  // 2.后端数据的缓存快照，减少重复数据请求，减轻服务器的压力，提高用户体验
  actions: {
    getCinemaData(store) {
      return http
        .http({
          url: `/gateway?cityId=${store.state.cityId}&ticketFlag=1&k=9694673`,
          headers: {
            'X-Host': 'mall.film-ticket.cinema.list'
          }
        })
        .then((res) => {
          store.commit('cinemaData', res.data.data.cinemas)
        })
    }
  }
})
