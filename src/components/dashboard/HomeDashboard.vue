<template>
  <div class="home-dashboard">
    <div class="container">
      <div class="home-header"><head-bar-home-vue /></div>
      <div class="home-view">
        <div class="home-view-left">
          <div class="home-view-left__top">
            <temperature-component-vue
              :unit-temp="tempData.UNIT"
              :current-temp="tempData.CURRENT_TEMP"
              :max-temp="tempData.MAX_TEMP"
              :min-temp="tempData.MIN_TEMP"
              :time="tempData.DATE"
              :location="tempData.LOCATION"
              :icon="tempData.ICON"
            />
            <map-location-vue />
          </div>
          <div class="home-view-left__center">
            <outing-overview-vue />
          </div>
          <div class="home-view-left__bottom">
            <coin-group />
          </div>
        </div>
        <div class="home-view-right">
          <div class="home-view-right__top"><time-outside /></div>
          <div class="home-view-right__center"><gang-and-score /></div>
          <div class="home-view-right__bottom">Right Bottom</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { WEATHER_DATA } from "@/core/data";
import { defineComponent } from "@vue/runtime-core";
import { reactive } from "vue";
import HeadBarHomeVue from "./home/HeadBarHome.vue";
import TemperatureComponentVue from "./home/TemperatureComponent.vue";
import OutingOverviewVue from "./home/OutingOverview.vue";
import MapLocationVue from "./home/MapLocation.vue";
import CoinGroup from "./home/CoinGroup.vue";
import TimeOutside from "./home/TimeOutside.vue";
import GangAndScore from "./home/GangAndScore.vue";

export default defineComponent({
  components: {
    HeadBarHomeVue,
    TemperatureComponentVue,
    OutingOverviewVue,
    MapLocationVue,
    CoinGroup,
    TimeOutside,
    GangAndScore,
  },
  setup() {
    const tempData = reactive(WEATHER_DATA);
    return { tempData };
  },
});
</script>

<style lang="scss" scoped>
@mixin space_evenly {
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}
.home-dashboard {
  background-color: var(--bg-home);
  height: 100vh;
  width: calc(100vw - 120px);
  .container {
    padding: 20px;
    .home-header {
      margin-bottom: 40px;
    }
    .home-view {
      display: flex;
      height: calc(100vh - 107px);
      justify-content: space-between;
      &-left {
        @include space_evenly();
        &__top {
          height: 35%;
          display: flex;
          justify-content: space-between;
        }
        &__center {
          height: 35%;
        }
        &__bottom {
          height: 15%;
        }
      }
      &-right {
        @include space_evenly();
        &__top {
          height: 35%;
        }
        &__center {
          height: 30%;
        }
        &__bottom {
          height: 20%;
        }
      }
    }
  }
}
</style>
