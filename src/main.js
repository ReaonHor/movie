import Vue from 'vue' // es6导入方式
import App from './App.vue'
import router from './router'
import store from './store'

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
