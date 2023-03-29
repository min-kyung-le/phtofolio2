<template>
  <Main />
  <HomeLayout />
  <About />
  <Skill />
  <Skill2 />
  <Career />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import Skill2 from "./components/Skill2.vue";
import Career from "./components/Career.vue";
import HomeLayout from "@/layout/HomeLayout.vue";

export default defineComponent({
  name: "App",

  components: {
    Main,
    HomeLayout,
    About,
    Skill,
    Skill2,
    Career,
  },

  data() {
    return {
      //
    };
  },
});
</script>
