<template>
  <div>
    <form action="/">
      <van-search v-model="value" clearable show-action placeholder="请输入电影院名" @search="onSearch" @cancel="onCancel" @input="input" />
    </form>
    <cinemas-list :newList="searchList"></cinemas-list>
  </div>
</template>
<script>
import Vue from 'vue'
import { Search } from 'vant'
import cinemasList from '@/components/cinemas/cinemasList.vue'
Vue.use(Search)
export default {
  data () {
    return {
      value: '',
      searchList: []
    }
  },
  methods: {
    input () {
      if (this.value) {
        this.searchList = this.$store.state.cinemasList.filter(item =>
          item.name.toUpperCase().includes(this.value.toUpperCase()) ||
          item.address.toUpperCase().includes(this.value.toUpperCase()))
      } else {
        this.searchList = []
      }
    },
    onCancel () {
      this.$router.back()
    },
    onSearch () {
    }

  },
  mounted () {
    this.$store.commit('tabBarHide')
    this.$store.state.cinemasList.length || this.$store.dispatch('getCinemaData')
  },
  destroyed () {
    this.$store.commit('tabBarShow')
  },
  components: {
    cinemasList
  }
}
</script>
