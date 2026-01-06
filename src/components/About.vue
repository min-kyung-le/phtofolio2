<template>
  <div class="page about">
    <v-container class="strength-section">
      <div class="section-header">
        <span class="eyebrow">Core Strength</span>
        <h2>핵심 강점</h2>
      </div>
      <v-row class="mt-8" dense>
        <v-col cols="12" md="4" sm="6" @click="clickKeywords(keywords[0].link)">
          <StrengthCard
            title="설비 데이터 그리드 화면 구현"
            description="복수 대의 설비의 파라미터 간 구조와 관계를 그리드화하고,
          import 및 export 기능을 구현하여 사용자 경험을 높였습니다."
            icon="mdi-table"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6" @click="clickKeywords(keywords[1].link)">
          <StrengthCard
            title="설비 구조도 UI 설계 경험"
            description="단일 설비 기준으로 파라미터 간 구조와 관계를 시각화하여
          설비에 띄워지는 여러 값들을 한눈에 보이도록 직관적으로 표현했습니다."
            icon="mdi-sitemap"
          />
        </v-col>
        <v-col cols="12" md="4" sm="6" @click="clickKeywords(keywords[2].link)"
          ><StrengthCard
            title="데이터 차트 화면 구현"
            description="설비 한 대를 선택 후 단일 설비 파라미터 데이터를 차트로 구조화하여
          상태 확인 및 추이를 한 화면에서 파악할 수 있도록 구현했습니다."
            icon="mdi-chart-line"
        /></v-col>
      </v-row>

      <!-- 키워드 영역 -->
      <StrengthKeywordList class="mt-16" />
    </v-container>
    <!--<div class="keywords">
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
    </div>-->
    <div class="sub-info-div">
      <span
        class="next"
        :class="animated"
        @mouseover="hoverNext(1)"
        @mouseout="hoverNext(0)"
        @click="nextPage(true)"
        >NEXT</span
      >
      <span
        v-if="store.state.isMenuShow"
        class="all-menu"
        :class="animated_menu"
        @mouseover="hoverAllMenu(1)"
        @mouseout="hoverAllMenu(0)"
        @click="nextPage(false)"
        >PREV</span
      >
    </div>

    <v-dialog v-model="modalOpen.grid" max-width="800">
      <Grid @modelValue="modelClose"
    /></v-dialog>
    <v-dialog v-model="modalOpen.diagram" max-width="800">
      <Diagram :modalOpen="modalOpen.diagram" @modelValue="modelClose"
    /></v-dialog>
    <v-dialog v-model="modalOpen.chart" max-width="800">
      <Chart @modelValue="modelClose"
    /></v-dialog>

    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";
import Grid from "./Grid.vue";
import Diagram from "./Diagram.vue";
import Chart from "./Chart.vue";
import StrengthCard from "./StrengthCard.vue";
import StrengthKeywordList from "./StrengthKeywordList.vue";

import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();
gsap.registerPlugin(TextPlugin);

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

const tl = gsap.timeline();

onMounted(() => {
  titleAni(1);
  summaryAni();
  nextAni();
});

// const modalOpen = ref(false);
type ModalKey = "grid" | "diagram" | "chart";

const modalOpen = reactive({
  grid: false,
  diagram: false,
  chart: false,
});

function modelClose(name: ModalKey, val: boolean) {
  console.log("gridClose 클릭", name, val);
  modalOpen[name] = val;
}

function clickKeywords(key: ModalKey) {
  // router.push("/" + key);
  console.log(key);
  modalOpen[key] = true;
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
  let animate_class = "animate__animated animate__slideInLeft";
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
function nextPage(value: boolean) {
  if (value) {
    router.push("/skill1");
  } else {
    router.push("/");
  }
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
.page {
  position: unset;
}
</style>
