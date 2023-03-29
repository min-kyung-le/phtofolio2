<template>
  <Main />
  <HomeLayout />
  <About />
  <Skill />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Skill from "./components/Skill.vue";
import HomeLayout from "@/layout/HomeLayout.vue";

export default defineComponent({
  name: "App",

  components: {
    Main,
    HomeLayout,
    About,
    Skill,
  },

  data() {
    return {
      //
    };
  },
});
</script>
