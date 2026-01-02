<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">Grid</div>
    </div>

    <div class="sub-info-div">
      <span
        class="next"
        :class="animated"
        @mouseover="hoverNext(1)"
        @mouseout="hoverNext(0)"
        @click="nextPage()"
        >NEXT</span
      >
      <span
        v-if="store.state.isMenuShow"
        class="all-menu"
        :class="animated_menu"
        @mouseover="hoverAllMenu(1)"
        @mouseout="hoverAllMenu(0)"
        @click="menuShow(true)"
        >MENU</span
      >
    </div>
    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";

import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();
gsap.registerPlugin(TextPlugin);

onMounted(() => {
  titleAni(1);
  nextAni();
});

const tl = gsap.timeline();

function nextAni() {
  let time = "<0.7";
  if (store.state.isMenuShow) {
    menuAni();
    time = "<0.2";
  }
  tl.from(
    ".next",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    time
  );
}
function menuAni() {
  tl.from(
    ".all-menu",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    "<0.5"
  );
}

function titleAni(num: number) {
  tl.from(
    `.title${num}`,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    "<0.2"
  );
}

const animated_menu = ref("");

function hoverAllMenu(num: number) {
  let animate_class = "animate__animated animate__rubberBand";
  animated_menu.value = num == 1 ? animate_class : "";
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}

const animated = ref("");

function hoverNext(num: number) {
  let animate_class = "animate__animated animate__rubberBand";
  animated.value = num == 1 ? animate_class : "";
}

function nextPage() {
  router.push("/skill1");
}
</script>
<style scoped>
.about .menu-contents {
  top: 0;
}
.about-title {
  display: flex;
  height: 300px;
  align-content: space-around;
  justify-content: center;
  align-items: center;
}
.about-title .title1 {
  font-weight: 100;
  font-size: 125px;
  margin-top: 95px;
}
</style>
