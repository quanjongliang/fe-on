<template>
  <div class="gang-score">
    <div class="container">
      <div class="gang-left">
        <div class="gang-container">
          <div class="title">Top gang</div>
          <div class="top-gang">
            <div v-for="(g, i) in information.gang.top" :key="i">
              <v-icon :name="g.img" scale="2" :fill="getColorByName(g.img)" />
            </div>
          </div>
          <div class="time-spent">
            <div class="time-spent__text">
              <p>Time spent</p>
              <p>together:</p>
            </div>
            <div class="time-spent__value">
              <p class="value">
                {{ information.gang.time_spent }}
              </p>
            </div>
            <p class="unit">Hr</p>
          </div>
          <div class="button-call">
            <div class="button-call-gang">
              <v-icon name="co-telegram-plane" /> Call up the Gang !!
            </div>
          </div>
        </div>
      </div>
      <div class="score-right">
        <div class="score-container">
          <div class="title">Top Scorers</div>
          <div class="table-top">
            <table>
              <tr>
                <th>Name</th>
                <th>Outside times</th>
                <th>AVR Times</th>
              </tr>
              <tr v-for="(p, i) in information.topScore" :key="i">
                <td>{{ getFullFormatName(p.name) }}</td>
                <td>{{ p.times }}</td>
                <td class="avr-td">
                  {{ p.avr }}
                  <v-icon
                    :name="getIconUpOrDown(p.compare).icon"
                    :fill="getIconUpOrDown(p.compare).fill"
                  />
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { TOP_GANG, TOP_SCORES } from "@/core";
import { OptionString } from "@/interfaces";
import { defineComponent, reactive } from "vue";

export default defineComponent({
  setup() {
    const information = reactive({
      gang: TOP_GANG,
      topScore: TOP_SCORES,
    });
    return { information };
  },
  methods: {
    getColorByName(name: string): string {
      const nameMap = {
        lion: "yellow",
        gluttonous: "red",
        bear: "black",
      };
      if (name.includes("lion")) return nameMap.lion;
      if (name.includes("gluttonous")) return nameMap.gluttonous;
      if (name.includes("bear")) return nameMap.bear;
      return "white";
    },
    getFullFormatName(name: string): string {
      const shortName = name
        .split(" ")
        .map((n) => n[0].toUpperCase())
        .join("");
      return `${shortName} ${name}`;
    },
    getIconUpOrDown(key: string): { icon: string; fill: string } {
      if (key === "up")
        return {
          icon: "bi-caret-up-fill",
          fill: "green",
        };
      return { icon: "bi-caret-down-fill", fill: "red" };
    },
  },
});
</script>

<style lang="scss">
@mixin box-style($percent) {
  background-color: var(--weather-bg);
  border: 2px solid rgba(126, 123, 123, 0.5);
  box-sizing: border-box;
  width: $percent;
  border-radius: 10px;
  padding: 10px 15px;
}
.gang-score {
  height: 100%;
  color: var(--white);
  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    .title {
      font-weight: 600;
      text-align: start;
    }
    .gang-left {
      @include box-style(35%);
      .gang-container {
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-between;
        .top-gang {
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          > div {
            padding: 5px;
            border: 1px solid rgba(126, 123, 123, 0.5);
            background-color: var(--weather-bg);
            box-sizing: border-box;
            border-radius: 50px;
          }
        }
        .time-spent {
          position: relative;
          display: flex;
          .unit {
            position: absolute;
            top: 0;
            right: 0;
            margin: 0;
          }
          &__text {
            font-size: 12px;
            text-align: start;
            height: fit-content;
            > p {
              margin: 0;
            }
          }
          &__value {
            height: fit-content;
            height: 100%;
            display: flex;
            align-items: center;
            width: 60%;
            justify-content: center;
            .value {
              display: flex;
              align-items: center;
              font-size: 20px;
              margin: 0;
            }
          }
        }
        .button-call {
          padding: 5px 5px;
          background-color: #ac6aec;
          font-size: 14px;
          border-radius: 10px;
        }
      }
    }
    .score-right {
      font-size: 13px;
      th {
        text-align: start;
      }
      @include box-style(60%);
      .score-container {
        .table-top {
          text-align: start;
          table {
            width: 100%;
          }
          .avr-td {
            display: flex;
            justify-content: space-between;
          }
          .td {
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>
