<template>
  <footer>
    <ul>
      <!-- 声明式导航 -->
      <li>
        <router-link to="/films" active-class="nav">
          <van-icon name="video" size="26px" />
          <span>电影</span>
        </router-link>
      </li>
      <li>
        <router-link to="/cinems" active-class="nav">
          <van-icon name="live" size="26px" />
          <span>影院</span>
        </router-link>
      </li>
      <li>
        <router-link to="/certer" active-class="nav">
          <van-icon name="manager" size="26px" />
          <span>中心</span>
        </router-link>
      </li>
    </ul>
  </footer>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
footer {
  position: fixed;
  width: 100%;
  height: 3.125rem;
  border-top: 1px solid #d2d6dc;
  bottom: 0;
  left: 0;
  ul {
    display: flex;
    height: 100%;
    li {
      flex: 1;
      a {
        height: 3.125rem;
        position: relative;
        padding: 0 1.875rem;
        font-size: 0.6875rem;
        display: block;
        text-align: center;
        line-height: 3.75rem;
        background-color: #ffffff;
        color: #797da2;
        span {
          position: absolute;
          top: 0.8125rem;
          left: 3.375rem;
        }
      }
      .nav {
        color: #ff5f16;
      }
    }
  }
}
</style>
