<template>
  <div class="time-outside">
    <div class="container">
      <div class="time-title">
        <div class="time-select">
          <div class="option-time" @click="setOption()">
            <v-icon name="bi-x-diamond-fill" /> TIME OUTSIDE
            <v-icon
              name="fa-chevron-down"
              :flip="selectOption.open ? 'vertical' : 'horizontal'"
            />
          </div>
          <div class="head-select-opt" v-if="selectOption.open">
            <div
              class="head-select-opt__opt"
              v-for="(opt, i) in option"
              :key="i"
              @click="setOption(i)"
            >
              {{ opt.name }}
            </div>
          </div>
        </div>

        <div class="time-choose">
          <div
            :class="activeChoose.day && 'active'"
            @click="clickActive('day')"
          >
            1D
          </div>
          <div
            :class="activeChoose.week && 'active'"
            @click="clickActive('week')"
          >
            1W
          </div>
          <div
            :class="activeChoose.month && 'active'"
            @click="clickActive('month')"
          >
            1M
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { OptionAble } from "@/interfaces";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const activeChoose = reactive<OptionAble>({
      day: true,
      week: false,
      month: false,
    });

    const selectOption = reactive({
      open: false,
      option: "default",
    });

    const option = [
      {
        name: "Option 1",
        value: "opt1",
      },
      {
        name: "Option 2",
        value: "opt2",
      },
      {
        name: "Option 3",
        value: "opt3",
      },
    ];

    const setOption = (index?: number) => {
      if (index) {
        selectOption.option = option[index].value;
      }
      selectOption.open = !selectOption.open;
    };

    const clickActive = (input: string) => {
      Object.entries(activeChoose).forEach(([key, value]) => {
        activeChoose[key] = key === input ? true : false;
      });
    };
    return { activeChoose, clickActive, selectOption, setOption, option };
  },
});
</script>

<style lang="scss">
@mixin select-option {
  border-radius: 10px;
  background-color: var(--select-bg);
  padding: 10px 15px;
}

@mixin box-style {
  background-color: var(--weather-bg);
  border: 2px solid rgba(126, 123, 123, 0.5);
  box-sizing: border-box;
}
@mixin dashboard-box {
  @include box-style;
  width: 220px;
  border-radius: 20px;
  color: var(--white);
  height: 100%;

  width: 100%;
}

.time-outside {
  @include dashboard-box();
  .container {
    font-weight: 600;
    padding: 20px;
    .time-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .time-select {
        position: relative;
        cursor: pointer;
        .option-time {
          @include select-option;
        }
        .head-select-opt {
          position: absolute;
          width: 100%;
          > div {
            @include select-option;
            text-align: start;
            margin: 5px 0;
            &:hover {
              background-color: var(--select-bg-hover);
            }
          }
        }
      }
      .time-choose {
        display: flex;
        justify-content: space-between;
        > div {
          @include box-style;
          padding: 10px;
          margin-right: 10px;
          background-color: #1a111d;
          border-radius: 10px;
          color: var(--white-inactive);
        }
        .active {
          color: var(--white);
        }
      }
    }
  }
}
</style>
