import { createApp } from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import "./style.css";
import VueApexCharts from "vue3-apexcharts";
loadFonts();

const app = createApp(App);
app.use(vuetify);
app.use(VueApexCharts);

app.mount("#app");
