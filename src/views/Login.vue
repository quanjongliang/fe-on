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
            <input
              type="text"
              placeholder="Placeholder"
              v-model="auth.username"
            />
          </div>
          <p>Password</p>
          <div class="login-form__input">
            <div class="login-form__input-icon">
              <v-icon name="fa-lock" />
            </div>
            <input
              type="password"
              placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
              v-model="auth.password"
              @keyup="loginSubmit"
            />
          </div>
        </div>
        <div class="login-forgot">
          <a href="">Forgot password</a>
        </div>

        <div class="login-with">
          <div class="login-with-button">
            <button @click="submitLogin">Log In</button>
          </div>

          <div class="login-with-social">
            <div class="login-social__icon">
              <v-icon name="io-earth-sharp" />
            </div>
            <div class="login-social__text">
              <p>Login with social account</p>
            </div>
          </div>
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
import { reactive } from "vue";
import axios from "axios";
export default defineComponent({
  name: "Login",
  setup() {
    const auth = reactive({
      username: "",
      password: "",
    });
    const submitLogin = async () => {
      console.log(auth.username);
      console.log(auth.password);
      const res = await axios.post("http://localhost:4444/auth/login", {
        username: auth.username,
        password: auth.password,
      });
      console.log(res);
    };

    const loginSubmit = (e: KeyboardEvent) => {
      console.log(e.key);
      if (e.key === "Enter") {
        submitLogin();
      }
    };

    return {
      auth,
      loginSubmit,
      submitLogin,
    };
  },
});
</script>

<style lang="scss">
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
      height: 15%;
      &-form {
        width: 300px;
        > p {
          text-align: start;
          font-weight: 500;
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
            padding: 5px 20px 5px 40px;
            height: 30px;
            border-radius: 15px;
          }
        }
      }
      &-forgot {
        padding: 20px;
        > a {
          font-weight: 600;
          color: var(--gray);
          text-decoration: none;
        }
      }
      &-with {
        margin-top: 20%;
        &-button {
          > button {
            border-radius: 15px;
            background-color: var(--gray);
            border: none;
            @include login_create;
            height: 40px;
            width: 460px;
          }
        }
        &-social {
          display: flex;
          align-items: center;
          justify-content: center;
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
