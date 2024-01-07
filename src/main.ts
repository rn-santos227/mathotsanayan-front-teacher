import "@mdi/font/css/materialdesignicons.css";

import { createApp } from "vue";
import App from "./App.vue";

import { pinia } from "./store";
import router from "./router";
import vuetify from "./plugins/vuetify";

createApp(App).use(pinia).use(router).use(vuetify).mount("#app");
