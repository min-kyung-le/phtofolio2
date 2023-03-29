// Styles
import "@mdi/font/css/materialdesignicons.css";
//import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

export default createVuetify({
  defaults: {
    VBtn: {
      color: "primary",
      variant: "flat",
      rounded: true,
    },
  },
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.purple.darken3,
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
