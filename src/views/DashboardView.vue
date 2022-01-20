<template>
  <div class="dashboard">
    <div class="left-side-bar">
      <div class="container">
        <div class="container-top">
          <div class="logo">
            <div class="logo-top">
              <div class="logo-top-left">
                <img src="../assets/Vector.png" alt="" />
              </div>
              <div class="logo-top-right">
                <img src="../assets/Vector1.png" alt="" />
              </div>
            </div>
            <div class="logo-bot">
              <img src="../assets/Vector2.png" alt="" />
            </div>
          </div>
          <div class="button-group">
            <router-link to="/dashboard/home">
              <div
                class="button-group-home"
                :class="active.home && 'active'"
                @click="setActive('home')"
              >
                <v-icon name="oi-home" scale="1.5" />
              </div>
            </router-link>

            <router-link to="/dashboard/bag">
              <div
                class="button-group-bag"
                :class="active.bag && 'active'"
                @click="setActive('bag')"
              >
                <v-icon name="bi-bag" scale="1.5" />
              </div>
            </router-link>
            <router-link to="/dashboard/setting">
              <div
                class="button-group-setting"
                :class="active.setting && 'active'"
                @click="setActive('setting')"
              >
                <v-icon name="ri-settings-3-line" scale="1.5" />
              </div>
            </router-link>
          </div>
        </div>
        <div class="logout">
          <v-icon name="co-account-logout" scale="1.5" />
        </div>
      </div>
    </div>

    <div class="view">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { OptionAble } from "@/interfaces";
import { defineComponent } from "@vue/runtime-core";
import { computed, reactive } from "vue";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute();

    const active = reactive<OptionAble>({
      home: true,
      bag: false,
      setting: false,
    });
    const setActive = (input: string) => {
      Object.entries(active).forEach(([key, value]) => {
        active[key] = key === input ? true : false;
      });
    };
    const path = computed(() => route.path);
    console.log(path.value);
    if (path.value.includes("bag")) {
      setActive("bag");
    }
    if (path.value.includes("setting")) {
      setActive("setting");
    }

    return { active, setActive };
  },
});
</script>

<style lang="scss">
@import url("../assets/style.scss");

@mixin space_column {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

svg {
  color: var(--text-title);
}
a:hover {
  cursor: pointer;
}

.dashboard {
  height: 100vh;

  display: flex;
  .left-side-bar {
    padding: 30px 5px 30px 5px;
    width: 90px;
    background-color: var(--side-bar);
    box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.25);
    .container {
      height: 100%;
      @include space_column;
      &-top {
        @include space_column;
        height: 45%;
        .button-group {
          @include space_column;
          height: 50%;
          a {
            display: flex;
            justify-content: center;
          }

          div {
            padding: 20px;
            width: 30px;
            height: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .active {
          padding: 20px;
          background-color: var(--active-button);
          border-radius: 13px;
        }
      }

      .logo {
        &-top {
          display: flex;
          justify-content: center;
        }
        &-bot {
          > img {
            margin-left: -3px;
          }
        }
      }
    }
  }
}
</style>
