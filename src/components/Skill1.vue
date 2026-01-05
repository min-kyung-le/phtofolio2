<template>
  <div class="page skill" v-resize="onResize">
    <div class="sample">
      <div class="sample-text">
        <span>|</span> <span>초급</span><span>|</span><span>중급</span
        ><span>|</span><span>고급</span><span>|</span>
      </div>
      <div class="sample-text sample-text-2">
        <span>0</span><span>-</span><span>40</span><span>-</span><span>80</span
        ><span>-</span><span>100</span>
      </div>
      <div class="sample-text" style="font-size: 10px">
        <span>|</span> <span style="opacity: 0">초급</span><span>|</span
        ><span style="opacity: 0">중급</span><span>|</span
        ><span style="opacity: 0">고급</span><span>|</span>
      </div>
      <div class="sample-graph"><div></div></div>
    </div>
    <div class="title-div">
      <div class="page-title title1">사용 스킬</div>
    </div>
    <div class="page-detail">
      <div class="sub-content" v-for="(one, idx) in skillsList">
        <div class="sub-title-2" v-if="one.subTitle !== ''">
          <v-icon class="icon" size="x-small" :color="point_color"
            >mdi-rhombus</v-icon
          ><span class="text">{{ one.subTitle }}</span>
        </div>
        <div class="graph">
          <div class="text name">{{ one.name }}</div>
          <div class="text number">{{ one.value }}%</div>
          <div class="chart-div">
            <apexchart
              :key="chartKey"
              :width="chartSize.w"
              :height="chartSize.h"
              type="bar"
              :options="options"
              :series="series(one)"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, nextTick } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useDisplay } from "vuetify";
import { useStore } from "vuex";
const store = useStore();

interface skillobj {
  subTitle: String;
  name: String;
  value: Number;
}

const animated_menu = ref("");

function hoverAllMenu(num: number) {
  let animate_class = "animate__animated animate__rubberBand";
  animated_menu.value = num == 1 ? animate_class : "";
}

const point_color = "#5e17eb";

const skills: Array<skillobj> = [
  {
    subTitle: "Language",
    name: "JavaScript(ES6)",
    value: 92,
  },
  {
    subTitle: "",
    name: "TypeScript",
    value: 72,
  },
  {
    subTitle: "Framwork",
    name: "Vue.js",
    value: 88,
  },
  {
    subTitle: "",
    name: "React.js",
    value: 62,
  },
  {
    subTitle: "Library",
    name: "Vuetify",
    value: 87,
  },
  {
    subTitle: "",
    name: "Gsap",
    value: 65,
  },
  {
    subTitle: "",
    name: "Bootstrap",
    value: 70,
  },
  {
    subTitle: "",
    name: "jQuery",
    value: 89,
  },
  {
    subTitle: "Style sheet",
    name: "CSS",
    value: 84,
  },
];
const skillsList = reactive(skills);

function series(obj: any) {
  return [
    {
      name: obj.name,
      data: [obj.value],
    },
  ];
}

const { name } = useDisplay();
const chartSize = reactive({
  w: 1400,
  h: 56,
});
const chartKey = ref(0);

async function onResize() {
  await nextTick();
  switch (name.value) {
    case "xl":
      chartSize.w = 1400;
      chartKey.value++;
      return;
    case "lg":
      chartSize.w = 1000;
      chartKey.value++;
      return;
    case "md":
      chartSize.w = 800;
      chartKey.value++;
      return;
    case "sm":
      chartSize.w = 500;
      chartSize.h = 53;
      chartKey.value++;
      return;
    case "xs":
      chartSize.w = 190;
      chartSize.h = 53;
      chartKey.value++;
      return;
  }
}

const tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  subContentAni();
  nextAni();
  onResize();
});

function titleAni(name: string) {
  tl.from(
    name,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    "<0.2"
  );
}

function subContentAni() {
  let time = "<0.2";
  document.querySelectorAll(".sub-content").forEach((e, idx) => {
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

const animated = ref("");

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

function hoverNext(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated.value = animate_class;
  if (num === 0) animated.value = "";
}

function nextPage(value: boolean) {
  if (value) {
    router.push("/skill2");
  } else {
    router.push("/about");
  }
}

const options = {
  chart: {
    id: "vuechart-example",
    type: "bar",
    toolbar: { show: false },
  },
  xaxis: {
    show: false,
    categories: ["JavaScript(ES6)"],
    labels: { show: false },
  },
  yaxis: {
    show: false,
  },
  dataLabels: { enabled: false },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: "90%",
    },
  },
  tooltip: {
    enabled: true,
    followCursor: true,
    x: {
      show: false,
    },
    y: {
      formatter: (val) => {
        return `${val}%`;
      },
    },
  },
  fill: {
    colors: [point_color],
  },
  grid: {
    row: {
      colors: ["#000"],
    },
    column: {
      colors: ["#000"],
    },
  },
};
</script>

<style scoped></style>
