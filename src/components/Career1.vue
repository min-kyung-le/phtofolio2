<template>
  <div class="page career">
    <div class="title-div">
      <div class="page-title title1">경력</div>
    </div>
    <div class="page-detail">
      <div class="career-name">
        IT 자원관리 시스템 개발<span class="title-small">(약 2년 4개월)</span>
      </div>
      <div class="line"></div>
      <div class="date-div">
        <span class="date1">2018.11</span>
        <span class="date2">2021.03</span>
      </div>
      <div class="project-div">
        <div class="left">
          <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
          >프로젝트 개요
          <div class="detail">
            삼성 기흥 캠퍼스 사내의 IT자원(서버, 게이트웨이, VPI 등) 관리를 위한
            관리자 시스템 개발 및 운영
          </div>
        </div>
        <div class="right">
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >기여한 점
            <div class="detail">
              <p>UI/UX 기능 구현</p>
              <p>서버로 데이터 송출 시 데이터 검증</p>
              <p>인터페이스에서의 데이터 비동기 처리</p>
              <p>개발자 및 사용자 대상 트러블 슈팅 가이드 작성</p>
            </div>
          </div>
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >사용 툴 (언어, 기술)
            <div class="detail">
              <p>Javascript, JQuery, CanvasJS</p>
              <p>Java 8, Spring Framwork, Oracle</p>
            </div>
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
import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";

const iconSize = "10px";
const iconName = "mdi-circle";

const tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  careerNameAni();
  // lineAni();
  subContentAni();
  nextAni();
});

let time = "<0.2";
function titleAni(name: string) {
  tl.from(
    name,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  );
}

function careerNameAni() {
  tl.from(
    ".career-name",
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  );
}

function lineAni() {
  tl.from(
    ".line",
    {
      width: 0,
      duration: 1,
      ease: "Power2.easeInOut",
    },
    time
  );
}

function subContentAni() {
  tl.from(
    ".date1",
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  ).from(
    ".date2",
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  );

  tl.from(
    ".left",
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  ).from(
    ".right",
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  );
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
  router.push("/career2");
}
</script>
<style scoped></style>
