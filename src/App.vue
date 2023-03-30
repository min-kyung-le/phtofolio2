<template>
  <Main />
  <HomeLayout />
  <About />
  <Skill1 />
  <Skill2 />
  <Career1 />
  <Career2 />
  <CaptureImgs />
  <Contact />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Skill1 from "./components/Skill1.vue";
import Skill2 from "./components/Skill2.vue";
import Career1 from "./components/Career1.vue";
import Career2 from "./components/Career2.vue";
import CaptureImgs from "./components/CaptureImgs.vue";
import Contact from "./components/Contact.vue";
import HomeLayout from "@/layout/HomeLayout.vue";

export default defineComponent({
  name: "App",

  components: {
    Main,
    About,
    Skill1,
    Skill2,
    Career1,
    Career2,
    CaptureImgs,
    Contact,
    HomeLayout,
  },

  data() {
    return {
      //
    };
  },
});
</script>
