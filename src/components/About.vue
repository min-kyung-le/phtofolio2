<template>
  <div class="page">
    <div class="page-title">개요</div>
    <div class="page-detail">
      <p v-for="one in summary" class="sumtxt">
        {{ one.text }}
      </p>
    </div>
    <div class="page-title page-title-2">핵심 강점</div>
    <div class="page-detail">
      <p v-for="one in strengths" class="strtxt">
        {{ one.text }}
      </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import gsap from "gsap";
const summary = [
  { text: "총 3년 간의 개발 경력" },
  { text: "웹 개발 분야에서 주로 활동" },
  { text: "애자일 방법론을 적극적으로 활용한 빠른 서비스 개발 능력 보유" },
  { text: "다수의 파견 경험으로 안정적이고 원활한 커뮤니케이션 능력 보유" },
];

const strengths = [
  { text: "Javascript(ES6), Vue, Vuetify 등 Frontend 개발에 특화된 기술력" },
  { text: "Apexchart, Chart, Canvas, Gsap, Animation 등 라이브러리 스킬 능숙" },
  {
    text: "Java, Spring Boot, Oracle 등 개발 경험으로 HTTP 프로토콜, REST API에 관한 깊은 이해도 보유",
  },
  {
    text: "Gihub, Gitlab 실전 사용 경험으로 코드 형상 관리 시스템에 대한 깊은 이해",
  },
];
const tl = gsap.timeline();

onMounted(() => {
  summaryAni();
  strengthsAni();
});

function summaryAni() {
  document.querySelectorAll(".sumtxt").forEach((e, idx) => {
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
</script>
<style scoped>
.page {
  position: absolute;
}
</style>
