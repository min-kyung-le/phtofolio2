<template>
  <div class="page about">
    <div class="title-div">
      <div class="page-title title1">{{ title1 }}</div>
    </div>
    <div class="page-detail">
      <p v-for="one in summary" class="sumtxt">
        {{ one.text }}
      </p>
    </div>
    <div class="title-div title-div-2">
      <div class="page-title page-title-2 title2">{{ title2 }}</div>
    </div>
    <div class="page-detail">
      <p v-for="one in strengths" class="strtxt">
        {{ one.text }}
      </p>
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

const summary = [
  { text: "총 3년 간의 개발 경력" },
  { text: "웹 개발 분야에서 주로 활동" },
  { text: "애자일 방법론을 적극적으로 활용한 빠른 서비스 개발 능력 보유" },
  { text: "다수의 파견 경험으로 안정적이고 원활한 커뮤니케이션 능력 보유" },
];

const strengths = [
  {
    text: "Java, Spring Boot, Oracle 등 개발 경험으로 HTTP 프로토콜, REST API에 관한 깊은 이해도 보유",
  },
  {
    text: "Gihub, Gitlab 실전 사용 경험으로 코드 형상 관리 시스템에 대한 깊은 이해",
  },
  { text: "Javascript(ES6), Vue, Vuetify 등 Frontend 개발에도 능숙한 숙련도" },
  { text: "Apexchart, Chart, Canvas, Gsap, Animation 등 라이브러리 스킬 능숙" },
];

const title1 = "개요";
const title2 = "핵심 강점";

const tl = gsap.timeline();

onMounted(() => {
  titleAni(1);
  summaryAni();
  titleAni(2);
  strengthsAni();
  nextAni();
});

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

function summaryAni() {
  let time = "<0.2";
  document.querySelectorAll(".sumtxt").forEach((e, idx) => {
    if (idx > 0) time = "<0.1";
    tl.from(
      e,
      {
        opacity: 0,
        translateX: -60,
        duration: 0.5,
      },
      time
    );
  });
}

function strengthsAni() {
  document.querySelectorAll(".strtxt").forEach((e, idx) => {
    tl.from(
      e,
      {
        opacity: 0,
        translateX: -60,
        duration: 0.5,
      },
      "<0.1"
    );
  });
}

const animated_menu = ref("");

function hoverAllMenu(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated_menu.value = animate_class;
  if (num === 0) animated_menu.value = "";
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}

const animated = ref("");

function hoverNext(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated.value = animate_class;
  if (num === 0) animated.value = "";
}

function nextPage() {
  router.push("/skill1");
}
</script>
<style scoped>
.about .menu-contents {
  top: 0;
}
</style>
