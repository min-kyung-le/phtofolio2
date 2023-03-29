<template>
  <div class="page">
    <div class="page-title">사용 스킬</div>
    <div class="page-detail">
      <div class="sub-title">
        <div class="sub-title-2">
          <v-icon class="icon" size="x-small">mdi-rhombus</v-icon
          ><span class="text">Language</span>
        </div>
        <div class="sub-content">
          <div class="text">JavaScript(ES6)</div>
          <div>
            <apexchart
              width="500"
              height="56"
              type="bar"
              :options="options"
              :series="series"
            ></apexchart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";

onMounted(() => {});

export default defineComponent({
  name: "",
  setup(props, { emit, attrs, expose, slots }) {
    return {
      options: {
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
            borderRadius: 1,
            horizontal: true,
          },
        },
        tooltip: {
          x: {
            show: false,
          },
          y: {
            formatter: (val) => {
              return `${val}%`;
            },
          },
        },
        color: ["#e1e1e1"],
      },
      series: [
        {
          name: "JavaScript(ES6)",
          data: [86],
        },
      ],
    };
  },
});
</script>
<style scoped>
.page {
  background-color: bisque;
}

.sub-title-2 {
  font-size: 17px;
}

.sub-title-2 .icon {
  margin-top: -2px;
}

.sub-title-2 .text {
  margin-left: 9px;
}

.sub-title .sub-content {
  margin: 14px 0 0 42px;
  font-size: 15px;
}

.sub-content div {
  display: inline-block;
}
</style>
