<template>
  <div class="head-home">
    <div class="container">
      <div class="button-back button">
        <v-icon name="md-arrowbackiosnew-twotone" fill="#C4C4C4" />
      </div>
      <div class="title-home">Home</div>
      <div class="right-head">
        <div class="right-head__search">
          <input type="text" placeholder="Search" />
          <div class="search-icon">
            <v-icon name="hi-search" fill="#C4C4C4" scale="1.5" />
          </div>
        </div>
        <div class="right-head__notification button">
          <v-icon
            name="md-notificationsnone-outlined"
            fill="#C4C4C4"
            scale="1.5
         "
          />
        </div>
        <div class="right-head__avatar button">
          <v-icon name="fa-cat" scale="1.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style lang="scss">
.head-home {
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button {
      width: 47px;
      height: 47px;
      border-radius: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: var(--bg-button);
    }

    .right-head {
      display: flex;
      align-items: center;
      > div {
        margin-right: 20px;
      }
      &__search {
        position: relative;
        > input {
          padding: 14px;
          border-radius: 13px;
          background-color: var(--bg-button);
          border: none;
        }
        .search-icon {
          position: absolute;
          top: 50%;
          right: 0;
          transform: translate(-50%, -50%);
        }
      }
    }
  }
}
</style>
