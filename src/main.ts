import { createApp } from "vue";
import App from "./App.vue";
// import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./style.css";
import "animate.css";
import VueApexCharts from "vue3-apexcharts";
import router from "./router";
import store from "./store";
import { VDataTable } from "vuetify/labs/VDataTable";
loadFonts();

import "vuetify/styles";
import "@mdi/font/css/materialdesignicons.css";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

const vuetify = createVuetify({
  components: {
    ...components,
    VDataTable,
  },
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

const app = createApp(App);

app.use(vuetify);
app.use(VueApexCharts);
app.use(store);
app.use(router);

app.mount("#app");
