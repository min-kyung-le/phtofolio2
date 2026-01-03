<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">{{ title1 }}</div>
    </div>
    <div class="detail">
      <p v-for="one in summary" class="sumtxt">
        {{ one.text }}
      </p>
    </div>
    <div class="keywords">
      <span
        class="key"
        :class="(keywords[0].link, animated_grid)"
        @mouseover="hoverKeywords(1, keywords[0].link)"
        @mouseout="hoverKeywords(0, keywords[0].link)"
        @click="clickKeywords(keywords[0].link)"
        >{{ keywords[0].text }}</span
      >
      <span
        class="key"
        :class="(keywords[1].link, animated_diagram)"
        @mouseover="hoverKeywords(1, keywords[1].link)"
        @mouseout="hoverKeywords(0, keywords[1].link)"
        @click="clickKeywords(keywords[1].link)"
        >{{ keywords[1].text }}</span
      >
      <span
        class="key"
        :class="(keywords[2].link, animated_chart)"
        @mouseover="hoverKeywords(1, keywords[2].link)"
        @mouseout="hoverKeywords(0, keywords[2].link)"
        @click="clickKeywords(keywords[2].link)"
        >{{ keywords[2].text }}</span
      >
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
  <v-dialog v-model="gridModelValue" max-width="800" persistent>
    <Grid @modelValue="gridClose"
  /></v-dialog>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";
import Grid from "./Grid.vue";

import { ref, onMounted } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();
gsap.registerPlugin(TextPlugin);

const summary = [
  {
    text: "삼성 IT자산 생애관리 시스템 개발(JS), 현대카드 마이데이터 대시보드 시스템 개발(Vue)",
  },
  {
    text: "Javascript(ES6), Vue, Vuetify 등 Frontend 개발에 특화된 기술력, Gihub, Gitlab 실전 사용 경험으로 코드 형상 관리 시스템에 대한 깊은 이해",
  },
  { text: "Apexchart, Chart, Canvas, Gsap, Animation 등 라이브러리 스킬 능숙" },
  {
    text: "Java 8 이상, Spring Framwork, Spring Cloud, MySql 등에 관한 깊은 이해도 보유",
  },
];

const keywords = [
  {
    text: "# 그리드 활용",
    link: "grid",
  },
  {
    text: "# 다이어그램 활용",
    link: "diagram",
  },
  {
    text: "# 차트 활용",
    link: "chart",
  },
];

const title1 = "87%";

const tl = gsap.timeline();

onMounted(() => {
  titleAni(1);
  summaryAni();
  nextAni();
});

const gridModelValue = ref(false);
function gridClose(val: boolean) {
  console.log("gridClose 클릭", val);
  gridModelValue.value = val;
}

function clickKeywords(key: string) {
  // router.push("/" + key);
  console.log(key);
  if (key == "grid") gridModelValue.value = true;
}

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

const animated_grid = ref("");
const animated_diagram = ref("");
const animated_chart = ref("");

function hoverKeywords(num: number, key: String) {
  let animate_class = "animate__animated animate__rubberBand";
  if (key == "grid") {
    animated_grid.value = num == 1 ? animate_class : "";
  }
  if (key == "diagram") {
    animated_diagram.value = num == 1 ? animate_class : "";
  }
  if (key == "chart") {
    animated_chart.value = num == 1 ? animate_class : "";
  }
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
.about .detail {
  display: flex;
  align-content: space-around;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 60px;
}
.about .detail p {
  margin-bottom: 8px;
}
.keywords {
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;
}
.keywords p {
  margin-right: 20px;
}
</style>
