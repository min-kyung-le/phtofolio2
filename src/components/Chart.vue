<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">Chart</div>
      <v-btn icon @click="close">
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="1" md="1"></v-col>
        <v-col cols="10" md="10">
          <v-card>
            <v-card-title>Equipment Parameter Chart</v-card-title>

            <v-card-text>
              <apexchart
                type="line"
                height="420"
                :options="chartOptions"
                :series="chartSeries"
              />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <!-- <div class="sub-info-div">
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
    </div> -->
    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";

import { ref, onMounted, computed } from "vue";
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

const emit = defineEmits(["modelValue"]);
function close() {
  emit("modelValue", "chart", false);
}
/**
 * 파라미터 타입
 */
interface Parameter {
  id: number;
  name: string;
  value: number;
  history: number[];
}

/**
 * 더미 데이터 (설비 1대 기준)
 */
const parameters: Parameter[] = [
  { id: 1, name: "TEMP", value: 80, history: [70, 75, 178, 140] },
  { id: 2, name: "PRESS", value: 120, history: [100, 110, 315, 180] },
  { id: 3, name: "SPEED", value: 3000, history: [280, 290, 295, 200] },
];

/**
 * 상태 계산 (프론트 기준)
 */
function getStatus(value: number) {
  if (value > 2000) return "ERROR";
  if (value > 100) return "WARNING";
  return "NORMAL";
}

/**
 * 선택된 파라미터
 */
const selectedParameter = ref<any>(null);

/**
 * 차트 옵션
 */
const chartOptions = computed(() => ({
  chart: {
    toolbar: { show: false },
  },
  xaxis: {
    categories: ["T-30", "T-20", "T-10", "NOW"],
  },
  stroke: {
    width: 2,
  },
  markers: {
    size: 4,
  },
  tooltip: {
    shared: true,
  },
}));

/**
 * 차트 데이터 (Line)
 */
const chartSeries = computed(() =>
  parameters.map((p) => ({
    name: p.name,
    data: p.history,
  }))
);

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

function nextPage(value: boolean) {
  if (value) {
    router.push("/skill1");
  } else {
    router.push("/about");
  }
}
</script>
<style scoped>
.about .menu-contents {
  top: 0;
}
.page {
  padding: 50px 40px 0 40px;
}
.about-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.about .about-title .title1 {
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
}
</style>
