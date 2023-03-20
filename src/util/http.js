import axios from 'axios'
import { Toast } from 'vant'
// 对于数据请求封装第一种方案
function httpForlist() {
  return axios({
    url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=3098000',
    headers: {
      'X-Client-Info':
        '{"a":"3000","ch":"1002","v":"5.2.1","e":"16673048124588837548326913","bc":"110100"}',
      'X-Host': 'mall.film-ticket.film.list'
    }
  })
}
// function httpFordetail(params) {
//   return axios({
//     url: `https://m.maizuo.com/gateway?filmId=${params}&k=6165256`,
//     headers: {
//       'X-Client-Info':
//         '{"a":"3000","ch":"1002","v":"5.2.1","e":"16673048124588837548326913","bc":"110100"}',
//       'X-Host': 'mall.film-ticket.film.info'
//     }
//   })
// }
// export default {
//   httpFordetail,
//   httpForlist
// }

// 对于数据请求第二种方案
const http = axios.create({
  baseURL: 'https://m.maizuo.com',
  timeout: 10000,
  headers: {
    'X-Client-Info':
      '{"a":"3000","ch":"1002","v":"5.2.1","e":"16673048124588837548326913","bc":"110100"}'
  }
})

// Add a request interceptor
http.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    // 比发起请求早
    // 对于首页不进行toast
    if (config.headers['X-Host'] === 'mall.film-ticket.film.list') {
      return config
    } else {
      Toast.loading({
        duration: 0,
        message: '加载中...',
        forbidClick: true
      })
      return config
    }
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)
// 对于请求后端数据或者说得到数据之前之后所进行的异步操作
// Add a response interceptor
http.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    // 会比.then更早
    Toast.clear()
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    Toast.clear()
    return Promise.reject(error)
  }
)
export default {
  http,
  httpForlist
}
