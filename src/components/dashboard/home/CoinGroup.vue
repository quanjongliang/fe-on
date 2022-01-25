<template>
  <div class="coin-group">
    <div class="list-item">
      <div class="list-container">
        <div class="item" v-for="(l, i) in list" :key="i">{{ l }} Coin</div>
      </div>
    </div>
    <div class="button-next">
      <v-icon name="md-navigatenext-sharp" scale="2" />
    </div>
    <div class="text"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const list = [100, 200, 300, 400, 500];
    return { list };
  },
});
</script>

<style lang="scss" scoped>
@mixin dashboard-box {
  color: var(--white);
  background-color: var(--weather-bg);
  border: 2px solid rgba(126, 123, 123, 0.5);
  width: 220px;
  margin-right: 20px;
  box-sizing: border-box;
  border-radius: 20px;
}

.coin-group {
  height: 100%;
  position: relative;
  .list-item {
    overflow: hidden;
    height: 100%;
    width: 95%;

    .list-container {
      overflow-y: hidden;
      display: flex;
      width: 100vw;
      height: 100%;
    }
    .item {
      @include dashboard-box;
    }
  }
  .button-next {
    position: absolute;
    transform: translate(0, -50%);
    right: 0;
    top: 50%;
    border-radius: 50px;
    background-color: var(--weather-bg);
    border: 2px solid rgba(126, 123, 123, 0.5);
    z-index: 2;
  }
  // .text {
  //   height: 100%;
  //   transform: translate(0, -50%);
  //   top: 50%;
  //   width: 25px;
  //   position: absolute;
  //   background-color: rgb(65, 40, 53);
  //   right: 19px;
  //   z-index: 1;
  // }
}
</style>
