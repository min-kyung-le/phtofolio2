<template>
  <Main />
  <HomeLayout />
  <About />
</template>

<script lang="ts" setup>
import Main from "@/components/Main.vue";
import HomeLayout from "@/layout/HomeLayout.vue";
import About from "@/components/About.vue";

import gsap from "gsap";
import { Observer } from "gsap/Observer";

function previous() {
  console.log("올린다");
}
gsap.registerPlugin(Observer);

function next() {
  console.log("내린다");
}
Observer.create({
  type: "wheel, touch",
  wheelSpeed: -1,
  onUp: () => next(),
  onDown: () => previous(),
  tolerance: 10,
  preventDefault: true,
});
</script>
