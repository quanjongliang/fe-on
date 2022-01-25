<template>
  <div class="register-view">
    <img src="../assets/backgroundRegis.png" alt="" class="bg-opacity" />
    <div class="container">
      <div class="register-left">
        <img src="../assets/registerImg.png" alt="" />
      </div>
      <div class="register-right">
        <div class="register-right-container">
          <div class="register-right-container__title">
            <h1>Be one of outsiders</h1>
          </div>
          <div class="register-right-container__form">
            <div class="register-right-container__form-name">
              <div>
                <p>First name</p>
                <input type="text" placeholder="First name" />
              </div>
              <div>
                <p>First name</p>
                <input type="text" placeholder="Last name" />
              </div>
            </div>
            <div class="register-right-container__form-ye">
              <div>
                <p>Email address</p>
                <input type="text" placeholder="Email" />
              </div>
              <div vvvvv>
                <p>Password</p>
                <input
                  type="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
              </div>
              <div>
                <p>Confirm password</p>
                <input
                  type="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                />
              </div>
            </div>
          </div>
          <div class="register-right-container__button">
            <button>Create account</button>
          </div>
        </div>
      </div>
      <div class="cancel-button">
        <a>Cancel</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { PLACEHOLDER } from "@/core";
import { defineComponent } from "@vue/runtime-core";
export default defineComponent({
  name: "Login",
  setup() {
    return {
      PLACEHOLDER,
    };
  },
});
</script>

<style lang="scss">
@mixin login_create {
  color: var(--white);
  font-weight: 600;
}

@mixin input_form {
  height: 30px;
  padding: 5px 5px;
  border: none;
  border-radius: 10px;
}

@mixin text_input {
  text-align: start;
}

h1 {
  text-transform: uppercase;
}

.register-view {
  position: relative;
}

.register-view {
  // background: url("../assets/backgroundRegis.png");
  /* Full height */
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.671);
  color: var(--text-title);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // opacity: 0.6;
  .bg-opacity {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    filter: blur(100px);
  }
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    position: relative;
    .register-left {
      display: flex;
      justify-content: center;
      width: 50%;
    }
    .register-right {
      width: 40%;
      display: flex;
      height: 100%;

      flex-direction: column;
      &-container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        &__title {
        }
        &__button {
          > button {
            @include input_form;
            width: 420px;
            height: 40px;
            background-color: var(--button);
            color: var(--white);
            font-weight: 600;
            font-size: 15px;
          }
        }
        &__form {
          &-name {
            display: flex;
            justify-content: space-between;
            > div {
              > p {
                @include text_input;
              }
              > input {
                @include input_form;
                width: 200px;
              }
            }
          }
          &-ye {
            > div {
              > p {
                @include text_input;
              }
            }
            > div {
              > p {
                @include text_input;
              }
              > input {
                width: 420px;
                @include input_form;
              }
            }
          }
        }
      }
    }
    .cancel-button {
      position: absolute;
      bottom: 25px;
      right: 25px;
      color: var(--red-500);
    }
  }
}
</style>
