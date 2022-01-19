import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

createApp(App)
  .component("v-icon", OhVueIcon)
  .use(store)
  .use(router)
  .mount("#app");
