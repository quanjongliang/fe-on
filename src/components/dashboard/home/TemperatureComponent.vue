<template>
  <div class="temperature_component">
    <div class="container">
      <div class="date-time">{{ formatDate(props.time) }}</div>
      <div class="current-temp">
        <span class="current-temp__value">{{ props.currentTemp }}</span>
        <span class="current-temp__unit">{{ props.unitTemp }}</span>
      </div>
      <div class="min-max-temp">
        <div class="min-max-temp__min">
          <v-icon name="fa-long-arrow-alt-down" fill=" white" />
          <span>{{ props.minTemp }}{{ props.unitTemp }}</span>
        </div>
        <div class="min-max-temp__max">
          <v-icon name="fa-long-arrow-alt-up" fill=" white" />
          <span>{{ props.maxTemp }}{{ props.unitTemp }}</span>
        </div>
      </div>
      <div class="icon-weather">
        <img :src="props.icon" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { DAY_OF_WEEK, getDayOfWeek } from "@/core";
import { defineComponent } from "@vue/runtime-core";
import moment from "moment";
export default defineComponent({
  props: {
    currentTemp: {
      type: Number,
      required: true,
    },
    unitTemp: {
      type: String,
      require: true,
    },
    time: {
      type: Date,
      require: true,
    },
    location: { type: String, require: true },
    maxTemp: {
      type: Number,
      required: true,
    },
    minTemp: {
      type: Number,
      required: true,
    },
    icon: {
      type: String,
      require: true,
    },
  },
  setup(props) {
    return { props };
  },

  methods: {
    formatDate(date: Date | undefined): string {
      return (
        `${getDayOfWeek(date?.getDay())} ${moment(date).format(
          ", DD MMMM YYYY"
        )}` || ""
      );
    },
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
.temperature_component {
  font-family: "Ubuntu Condensed", sans-serif;
  @include dashboard-box;
  width: 25%;
  height: 100%;
  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    .date-time {
      font-size: 12px;
    }
    .current-temp {
      // color: var(--temp-color);
      &__value {
        font-size: 40px;
      }
      &__unit {
        font-size: 24px;
      }
    }
    .location {
      font-size: 24px;
    }
    .min-max-temp {
      display: flex;
      justify-content: space-evenly;
    }
    .icon-weather {
      > img {
        width: 84px;
      }
    }
  }
}
</style>
