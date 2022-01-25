<template>
  <div class="overview-component">
    <div class="container">
      <div class="overview-head">
        <div class="head-container">
          <div class="head-title">
            <p>Outing Overview ( All members)</p>
          </div>
          <div class="head-select">
            <div class="head-select-click" @click="setOption()">
              <v-icon name="io-timer-sharp" />
              Cigars Time
              <v-icon
                name="fa-chevron-down"
                :flip="activeSelect.open ? 'vertical' : 'horizontal'"
              />
            </div>
            <div class="head-select-opt" v-if="activeSelect.open">
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
        </div>
      </div>
      <div class="overview-view">
        <div class="view-container"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
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
    const activeSelect = reactive({
      open: false,
      option: "default",
    });

    const setOption = (index?: number) => {
      if (index) {
        activeSelect.option = option[index].value;
      }
      activeSelect.open = !activeSelect.open;
    };

    return { setOption, option, activeSelect };
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

@mixin select-option {
  border-radius: 10px;
  background-color: var(--select-bg);
  padding: 10px 15px;
}

.overview-component {
  @include dashboard-box();
  height: 100%;
  width: 100%;
  .container {
    padding: 10px 15px;
    .overview-head {
      .head-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .head-title {
          font-weight: 600;
        }
        .head-select {
          position: relative;
          pointer-events: auto;
          &-click {
            @include select-option;
          }
          &-opt {
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
      }
    }
  }
}
</style>
