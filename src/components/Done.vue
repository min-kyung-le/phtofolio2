<template>
  <div class="done page">
    <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    <div class="menu-box">
      <span class="menu" @click="menuShow(true)"
        ><v-icon size="35px">mdi-menu</v-icon></span
      >
      <span class="arrow-left-span">
        <img
          class="arrow-img"
          src="@/assets/images/arrow-left.png"
          width="190"
          height="63"
        />
      </span>
      <span class="sub-info">If you see more...</span>
    </div>
    <div class="info title1">Thank you for visiting!</div>
  </div>
</template>

<script setup lang="ts">
import Menu from "./Menu.vue";

import { onMounted, ref } from "vue";
import gsap from "gsap";
import router from "@/router";

let tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  arrowAni();
});

function titleAni(name: string) {
  tl.from(
    name,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    ">0.6"
  );
}

function arrowAni() {
  const arrowRepetAni = {
    translateX: 70,
    repeat: 20,
    yoyo: true,
    duration: 0.4,
    ease: "Power1.easeInOut",
  };

  const arrowShowAni = {
    opacity: 0,
    duration: 0.4,
  };

  tl.from(".arrow-left-span", arrowShowAni, "<0.2").to(
    ".arrow-img",
    arrowRepetAni,
    ">"
  );
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}
</script>

<style scoped>
.done {
  font-family: "Source Sans Pro";
  padding: 0 0 0 108px;
}

.menu-box {
  display: flex;
  flex-direction: row;
  align-items: center;
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
.done .info {
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
}
.info {
  color: #000;
  padding: 15px;
  font-weight: 700;
  font-size: 30px;
  font-family: "Source Sans Pro";
}
.sub-info {
  font-weight: 700;
  font-size: 17px;
  align-self: center;
  margin-bottom: 8px;
}
</style>
