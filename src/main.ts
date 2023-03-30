import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./style.css";
import VueApexCharts from "vue3-apexcharts";
import store from "./store";
loadFonts();

const app = createApp(App);

app.use(vuetify);
app.use(VueApexCharts);
app.use(store);

app.mount("#app");
