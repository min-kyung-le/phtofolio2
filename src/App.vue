<template>
  <router-view />
</template>

<script lang="ts" setup>
import gsap from "gsap";
import { Observer } from "gsap/Observer";
import { useRouter } from "vue-router";

function previous() {
  console.log("올린다");
  router.push("/");
}
gsap.registerPlugin(Observer);
const router = useRouter();

function next() {
  console.log("내린다");
  router.push("/about");
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
