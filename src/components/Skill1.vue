<template>
  <div class="page" v-resize="onResize">
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
              :width="chartWidth"
              height="56"
              type="bar"
              :options="options"
              :key="testKey"
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
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive, computed } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useDisplay } from "vuetify";

interface skillobj {
  subTitle: String;
  name: String;
  value: Number;
}

const point_color = "#5e17eb";

const skills: Array<skillobj> = [
  {
    subTitle: "Language",
    name: "JavaScript(ES6)",
    value: 86,
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
    value: 81,
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
const chartWidth = ref(1400);
const testKey = ref(0);

function onResize() {
  switch (name.value) {
    case "lg":
      console.log("lg다");
    case "xl":
      console.log("xl다");
  }
}

const tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  subContentAni();
  nextAni();
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
  tl.from(
    ".next",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    ">"
  );
}

function hoverNext(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated.value = animate_class;
  if (num === 0) animated.value = "";
}

function nextPage() {
  router.push("/skill2");
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
