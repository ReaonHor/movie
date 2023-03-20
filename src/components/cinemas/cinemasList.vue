<template>
  <div>
    <ul>
      <li v-for="data in newList" :key="data.cinemaId" class="cinemasitem">
        <div class="name"><span>{{data.name}}</span></div>
        <div class="address"><i>{{data.address}}</i></div>
        <div class="price"><i>￥</i><span>{{data.lowPrice/100}}</span><i>起</i></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    newList: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.cinemasitem {
  position: relative;
  padding: 0.9375rem;
  .name {
    color: #191a1b;
  }
  .address {
    max-width: 80%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: #797d82;
  }
  .price {
    position: absolute;
    top: 15px;
    right: 15px;
    color: #ff5f16;
  }
  span {
    font-size: 15px;
  }
  i {
    font-style: normal;
    font-size: 12px;
  }
}
</style>
