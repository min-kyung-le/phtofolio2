<template>
  <div class="main-div" v-resize="onResize">
    <div class="title">
      <div class="hidden-div">
        <span class="front-end">front-end</span>
      </div>
      <div class="hidden-div">
        <span class="developer">developer</span>
      </div>
    </div>
    <div class="info">
      <div class="hidden-div-title">
        <span class="min">min</span>
      </div>
      <div class="hidden-div-title">
        <span class="kyung">kyung's</span>
      </div>
      <div class="hidden-div-title">
        <span class="portfolio">portfolio</span>
      </div>
    </div>
    <div class="sub-info-div">
      <span class="arrow-down-span">
        <img
          class="arrow-img"
          src="/images/arrow-right.png"
          :width="arrowSize.w"
          :height="arrowSize.h"
        /><span
          class="next"
          :class="animated"
          @mouseover="hoverNext(1)"
          @mouseout="hoverNext(0)"
          @click="nextPage()"
          >NEXT</span
        >
      </span>
      <span class="sub-info see-more">If you see more...</span>
    </div>
  </div>
  <HomeLayout />
</template>

<script setup lang="ts">
import HomeLayout from "@/layout/HomeLayout.vue";

import { watchEffect, onMounted, reactive, ref } from "vue";
import { useStore } from "vuex";
import gsap from "gsap";
import router from "@/router";
import { useDisplay } from "vuetify";

let arrowTransx = -70;
const arrowSize = reactive({
  w: 190,
  h: 63,
});
const { name } = useDisplay();
function onResize() {
  switch (name.value) {
    case "sm":
      console.log("1", name.value);
      arrowTransx = -30;
      arrowSize.w = 80;
      arrowSize.h = 30;
      return;
    case "xs":
      console.log("2", name.value);
      arrowTransx = -30;
      arrowSize.w = 80;
      arrowSize.h = 30;
      return;
  }
}

const store = useStore();

onMounted(() => {
  pageInAni();
});

function pageInAni() {
  let tl = gsap.timeline();

  const Ani_up = {
    translateY: 80,
    duration: 0.4,
  };
  const title_Ani_up = {
    translateY: 100,
    duration: 0.4,
  };

  const seeMoreAni = {
    opacity: 0,
    translateX: -100,
    duration: 0.4,
  };

  const arrowShowAni = {
    opacity: 0,
    duration: 0.4,
  };

  const arrowRepetAni = {
    translateX: arrowTransx,
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    ease: "Power1.easeInOut",
  };

  tl.from(".title", { opacity: 0, translateY: 70 }, "<0.5");
  tl.from(".front-end", Ani_up, "0.6").from(".developer", Ani_up, "<0.2");

  tl.from(".min", title_Ani_up, "<0.2")
    .from(".kyung", title_Ani_up, "<0.2")
    .from(".portfolio", title_Ani_up, "<0.2");

  tl.from(".see-more", seeMoreAni, "<1.4");

  tl.from(".arrow-down-span", arrowShowAni, "<0.2").to(
    ".arrow-img",
    arrowRepetAni,
    ">"
  );
}

const animated = ref("");

function hoverNext(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated.value = animate_class;
  if (num === 0) animated.value = "";
}

function nextPage() {
  router.push("/about");
}
</script>

<style scoped>
.info {
  color: #000;
  padding: 15px;
  font-weight: 700;
  font-size: 23px;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
}

.front-end {
  margin-right: 7px;
  transform: translate(0px, 0px);
  display: inline-block;
}

.developer {
  transform: translate(0px, 0px);
  display: inline-block;
}

.hidden-div {
  display: inline-block;
  overflow: hidden;
  height: 17px;
}
.hidden-div-title {
  display: inline-block;
  overflow: hidden;
  height: 25px;
}

.min {
  transform: translate(0px, 0px);
  display: inline-block;
  margin-right: 4px;
}
.kyung {
  transform: translate(0px, 0px);
  display: inline-block;
  margin-right: 4px;
}
.portfolio {
  transform: translate(0px, 0px);
  display: inline-block;
}
</style>
