<template>
  <div>
    <div>
      用户名：<input type="text">
    </div>
    <div>
      密码： <input type="password">
    </div>
    <div>
      <button @click="handlelogin">登录</button>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    handlelogin () {
      setTimeout(() => {
        // 将用户名和密码发送给后端，后端允许通过且返回token值
        localStorage.setItem('token', '后端返回的token值')
        // this.$router.back() 返回

        // 1.获取query字段
        // 2.跳转到当前想要跳的页面去
        this.$router.push(this.$route.query.redirect)
      }, 500)
    }
  }
}
</script>
