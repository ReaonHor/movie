import Vue from 'vue'
import VueRouter from 'vue-router'
import myFilms from '@/views/myFilms'
// import myCerter from '@/views/myCerter'
import myCinems from '@/views/myCinems'
import myNow from '@/views/films/myNow'
import myCom from '@/views/films/myCom'
import mySearch from '@/views/mySearch'
import myDetail from '@/views/myDetail'
import myLogin from '@/views/myLogin'
import myCity from '@/views/myCity'

Vue.use(VueRouter) // 注册路由组件

// 路由配置表
const routes = [
  {
    path: '/films',
    component: myFilms,
    // 嵌套路由
    children: [
      {
        path: '/films/nowplay',
        component: myNow
      },
      {
        path: '/films/coming',
        component: myCom
      },
      {
        path: '/films',
        redirect: '/films/nowplay'
      }
    ]
  },
  // 动态路由
  {
    name: 'hor', // 命名路由
    path: '/detail/:id',
    component: myDetail
  },
  //
  {
    path: '/certer',
    component: () => import('@/views/myCerter.vue') // 路由懒加载
    // meta: {
    //   ishorrequire: true
    // }
    // 路由独享拦截
    //   beforeEnter: (to, from, next) => {}
  },
  //
  {
    path: '/cinems/search',
    component: mySearch
  },
  {
    path: '/city',
    component: myCity
  },
  {
    path: '/cinems',
    component: myCinems
  },
  {
    path: '/login',
    component: myLogin
  },

  // 以上没有则走下面的路径
  {
    path: '*',
    redirect: '/films'
  }
]

// history 模式需要注意的事，还需要后台配置的支持，因为我们的应用是个单页面客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问路径时，就会以为是后端的路径返回404，后端需要配置
const router = new VueRouter({
  mode: 'hash',
  routes
})

// 全局拦截
// router.beforeEach((to, from, next) => {
//   if (to.meta.ishorrequire) {
//     // 判断是否有token字段
//     if (localStorage.getItem('token')) {
//       // 判断是否合法
//       next()
//     } else {
//       next({
//         path: '/login',
//         query: { redirect: to.fullPath } // 跳转到login且带着参数
//       })
//     }
//   } else {
//     next()
//   }
// })

export default router
