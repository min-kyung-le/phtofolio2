<template>
  <div class="page">
    <div class="page-title">사용 스킬</div>
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
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive } from "vue";

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
<style scoped>
.page {
  background-color: bisque;
}
</style>
