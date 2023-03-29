<template>
  <Main />
  <HomeLayout />
  <About />
  <Skill1 />
  <Skill2 />
  <Career1 />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Skill1 from "./components/Skill1.vue";
import Skill2 from "./components/Skill2.vue";
import Career from "./components/Career1.vue";
import HomeLayout from "@/layout/HomeLayout.vue";

export default defineComponent({
  name: "App",

  components: {
    Main,
    HomeLayout,
    About,
    Skill1,
    Skill2,
    Career1,
  },

  data() {
    return {
      //
    };
  },
});
</script>
