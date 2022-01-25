import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons";
import VueGoogleMaps from "@fawmi/vue-google-maps";
import "./assets/styles/styles.scss";
const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

createApp(App)
  .use(VueGoogleMaps, {
    load: {
      key: "",
    },
  })
  .component("v-icon", OhVueIcon)
  .use(store)
  .use(router)
  .mount("#app");
