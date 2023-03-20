<template>
  <div>
    <ul>
      <li>
        <router-link to="/films/nowplay" active-class="smallnav">正在上映</router-link>
      </li>
      <li>
        <router-link to="/films/coming" active-class="smallnav">即将上映</router-link>
      </li>
    </ul>
  </div>
</template>
<style lang="scss" scoped>
ul {
  position: fixed;
  left: 0;
  top: 12.0625rem;
  display: flex;
  width: 100%;
  height: 3.125rem;
  z-index: 10;
  li {
    flex: 1;
    a {
      font-size: 1.125rem;
      display: block;
      text-align: center;
      line-height: 3.125rem;
      background-color: #ffffff;
      color: #797da2;
    }
    .smallnav {
      color: #ff5f16;
      border-bottom: 2px solid #ff5f16;
    }
  }
}
</style>
