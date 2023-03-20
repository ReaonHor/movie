<template>
  <div id="box">
    <!-- 2声明式导航2 -->
    <!-- <router-link to="/films" custom v-slot="{navigate,isActive}">
      <li @click="navigate" :class="isActive?'nav':''">电影</li>
    </router-link> -->
    <transition name="hor" mode="out-in">
      <router-view></router-view>
    </transition>
    <tap-bar v-show="this.$store.state.tabBarShow" ref="tabBar"></tap-bar>
  </div>
</template>
<script>
import Vue from 'vue'
import tapBar from '@/components/tapBar.vue'
import vant, { Icon } from 'vant'
import 'vant/lib/index.css'
Vue.use(Icon)
Vue.use(vant)
// import axios from 'axios'
// 全局或者局部注册
// 注意src不能访问public目录的东西
// @:指向src绝对路径
Vue.directive('hello', {
  // 指令的生命周期函数
  // 第一次插入到父节点中触发
  inserted (el, binding) {
    console.log(el, binding)
    el.style.background = binding.value
  },
  updare (el, binding) {
    el.style.background = binding.value
  }
})
export default {
  components: {
    tapBar
  },
  data () {
    return {
      istrue: true,
      mytext: '',
      myname: 'HR',
      datalist: ['111', '222', '333']
    }
  },
  methods: {
    handleadd () {
      this.datalist.push(this.mytext)
    },
    handleevent () {
      this.istrue = !this.istrue
    }
  },
  computed: {

  },
  watch: {

  }
  // components: {
  //   navBar: navbar// 局部组件
  // }
}
</script>
<style>
/* 动画 */

.hor-enter-active {
  animation: hor 0.3s linear;
}

.hor-leave-active {
  animation: hor 0.3s reverse;
}
@keyframes hor {
  0% {
    opacity: 0;
    transform: translateY(7%);
  }
  50% {
    opacity: 0.9;
  }
  100% {
    opacity: 1;
    transform: translate(0px);
  }
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#box {
  width: 24.375rem;
}
a {
  text-decoration: none;
}
ul li {
  list-style: none;
}
</style>
