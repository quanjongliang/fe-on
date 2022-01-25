<template>
  <div class="map-location">
    <!-- <GMapMap
      :center="center"
      :zoom="10"
      map-type-id="terrain"
      style="width: 100vw; height: 100%"
    >
      <GMapCluster :zoomOnClick="true">
        <GMapMarker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center = m.position"
        />
      </GMapCluster>
    </GMapMap> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      center: { lat: 51.093048, lng: 6.84212 },
      markers: [
        {
          position: {
            lat: 51.093048,
            lng: 6.84212,
          },
        },
        {
          position: {
            lat: 51.198429,
            lng: 6.69529,
          },
        },
        {
          position: {
            lat: 51.165218,
            lng: 7.067116,
          },
        },
        {
          position: {
            lat: 51.09256,
            lng: 6.84074,
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
@mixin dashboard-box {
  color: var(--white);
  background-color: var(--weather-bg);
  border: 2px solid rgba(126, 123, 123, 0.5);
  border-radius: 20px;
}

.map-location {
  @include dashboard-box();
  height: 100%;
  width: 70%;
  > div {
    height: 100%;
    border-radius: 10px;
    border: 1px solid black;
  }
}
</style>
