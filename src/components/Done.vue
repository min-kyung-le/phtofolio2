<template>
  <div class="done page">
    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    </v-expand-transition>
    <div class="menu-box">
      <span class="menu" @click="menuShow(true)"
        ><v-icon size="35px">mdi-menu</v-icon></span
      >
      <span class="arrow-left-span">
        <img
          class="arrow-img"
          src="/images/arrow-left.png"
          width="190"
          height="63"
        />
      </span>
      <span class="sub-info see-more">If you see more...</span>
    </div>
    <div class="info">
      <p class="title1"></p>
      <p class="title2"></p>
    </div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue";

import { onMounted, ref } from "vue";
import router from "@/router";
import { useStore } from "vuex";

import gsap from "gsap";
import TextPlugin from "gsap/TextPlugin";
gsap.registerPlugin(TextPlugin);

let tl = gsap.timeline();

const store = useStore();
onMounted(() => {
  titleAni(".title1", "That's it!");
  titleAni(".title2", "Thank you for visiting!");
  arrowAni();
  store.state.isMenuShow = true;
});

function titleAni(name: string, text: string) {
  tl.to(
    name,
    {
      text: text,
      duration: 1,
      ease: "none",
    },
    ">"
  );
}

function arrowAni() {
  const arrowRepetAni = {
    translateX: 70,
    repeat: -1,
    yoyo: true,
    duration: 0.4,
    ease: "Power1.easeInOut",
  };

  const arrowShowAni = {
    opacity: 0,
    duration: 0.4,
  };

  tl.from(
    ".menu-box",
    {
      translateX: 100,
      opacity: 0,
      duration: 0.4,
    },
    ">"
  );
  tl.from(".arrow-left-span", arrowShowAni, "<0.2");
  const seeMoreAni = {
    opacity: 0,
    duration: 0.4,
  };
  tl.from(".see-more", seeMoreAni, "<0.2");
  tl.to(".arrow-img", arrowRepetAni, ">");
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}
</script>

<style scoped>
.done p {
  text-transform: uppercase;
}
.done {
  font-family: "Source Sans Pro";
  padding: 0 0 0 75px;
}

.menu {
  margin: 0 50px 0 0;
  cursor: pointer;
}

.arrow-left-span {
  margin-right: 14px;
  height: 110px;
  align-items: center;
  display: flex;
  overflow-x: hidden;
}
.see-more {
  top: 76%;
  left: 12%;
  text-transform: uppercase;
}
</style>
