<template>
  <div class="page">
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
              width="1400"
              height="56"
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

import { onMounted, reactive, ref } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();

interface skillobj {
  subTitle: String;
  name: String;
  value: Number;
}

const point_color = "#5e17eb";

const skills: Array<skillobj> = [
  {
    subTitle: "DB",
    name: "Oracle",
    value: 65,
  },
  {
    subTitle: "",
    name: "MySQL",
    value: 60,
  },
  {
    subTitle: "Git",
    name: "Github",
    value: 72,
  },
  {
    subTitle: "Backend Language",
    name: "Java",
    value: 70,
  },
  {
    subTitle: "Backend Framwork",
    name: "Spring",
    value: 75,
  },
  {
    subTitle: "",
    name: "Spring Boot",
    value: 71,
  },
];

onMounted(() => {
  titleAni(".title1");
  subContentAni();
  nextAni();
});
const tl = gsap.timeline();

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

function nextPage() {
  router.push("/career1");
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

const skillsList = reactive(skills);

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

function series(obj: any) {
  return [
    {
      name: obj.name,
      data: [obj.value],
    },
  ];
}
</script>
<style scoped></style>
