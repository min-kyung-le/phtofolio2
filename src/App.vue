<template>
  <Main :isPageOn="upPage.main" />
  <HomeLayout />
  <About v-if="upPage.about" />
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Main from "@/components/Main.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import About from "@/components/About.vue";

import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useStore } from "vuex";

const store = useStore();
let animating = store.state.animating;

const upPage: any = reactive({
  about: false,
  main: false,
});

function previous() {
  upPage.about = false;
  upPage.main = true;
  console.log("올린다", upPage.about);
}
gsap.registerPlugin(Observer);

function next() {
  //upPage.about = true;
  upPage.main = false;
  console.log("내린다", upPage.about);
}
Observer.create({
  type: "wheel, touch",
  wheelSpeed: -2,
  onUp: () => !animating && next(),
  onDown: () => !animating && previous(),
  tolerance: 10,
  preventDefault: true,
});
</script>
