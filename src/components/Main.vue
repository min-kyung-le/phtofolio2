<template>
  <div class="main-div">
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
          src="@/assets/images/arrow-right.png"
          width="190"
          height="63"
        /><span
          class="next"
          :class="animated"
          @mouseover="hoverNext(1)"
          @mouseleave="hoverNext(0)"
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

import { watchEffect, onMounted, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import gsap from "gsap";
import router from "@/router";

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
    translateX: -70,
    repeat: 20,
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
.main-div {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
}
.title {
  width: 190px;
  background-color: #000;
  color: #fff;
  padding: 9px 90px;
  font-weight: 400;
  font-size: 15px;
}

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
