<template>
  <div class="login-view">
    <div class="container">
      <div class="login">
        <div class="login-title">
          <h1>SIGN IN TO OUTSIDERS</h1>
        </div>
        <div class="login-form">
          <p>Account</p>
          <div class="login-form__input">
            <div class="login-form__input-icon">
              <v-icon name="fa-user-alt" />
            </div>
            <input type="text" placeholder="Placeholder" />
          </div>
          <p>Password</p>
          <div class="login-form__input">
            <div class="login-form__input-icon">
              <v-icon name="fa-lock" />
            </div>
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
            />
          </div>
        </div>
        <div class="login-forgot">
          <a href="">Forgot password</a>
        </div>

        <div class="login-button">
          <button>Login</button>
        </div>

        <div class="login-social">
          <v-icon name="io-earth-sharp" />
          <p>Login with social account</p>
        </div>
      </div>
    </div>
    <div class="create-account">
      <div class="create-account__text">
        <p>Don't have account yet?</p>
      </div>
      <div class="create-account__button">
        <button>Create Account</button>
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
@import url("../assets/style.scss");

@mixin login_create {
  color: var(--white);
  font-weight: 600;
}

.login-view {
  background: url("../assets/backgroundRegis.png");
  /* Full height */
  height: 100vh;
  color: var(--text-title);

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;

  .container {
    // position: absolute;
    // top: 40%;
    // left: 50%;
    // transform: translate(-50%, 0);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    .login {
      margin-top: 20%;
      &-form {
        width: 300px;
        > p {
          text-align: start;
        }
        &__input {
          position: relative;
          &-icon {
            position: absolute;
            left: 10px;
            top: 50%;
            transform: translate(0, -50%);
            color: var(--black);
          }
          > input {
            width: 400px;
            height: 30px;
            border-radius: 15px;
            padding: 5px 20px 5px 40px;
          }
        }
      }
      &-forgot {
        padding: 20px;
        > a {
          text-decoration: none;
        }
      }
    }
  }
  .create-account {
    position: absolute;
    right: 27px;
    bottom: 25px;
    display: flex;
    align-items: center;
    > div {
      padding-left: 10px;
    }
    &__text {
      p {
        @include login_create;
      }
    }
    &__button {
      > button {
        @include login_create;
        background-color: var(--black);
        border: none;
        padding: 5px 20px 5px 20px;
        border-radius: 5px;
      }
    }
  }
}
</style>
