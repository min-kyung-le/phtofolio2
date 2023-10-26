<template>
  <div class="page career career2">
    <div class="title-div">
      <div class="page-title title1">경력</div>
    </div>
    <div class="page-detail">
      <div class="career-name">
        Open API 대시보드 시스템 개발
        <span class="title-small">(약 6개월)</span>
      </div>
      <div class="line"></div>
      <div class="date-div">
        <span class="date1">2021.04</span>
        <span class="date2">2021.10</span>
      </div>
      <div class="project-div">
        <div class="left">
          <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
          >프로젝트 개요
          <div class="detail">
            Open API 시스템 개발 및 고도화(현대카드, 신한은행 등 금융권 납품)
          </div>
        </div>
        <div class="right">
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >기여한 점
            <div class="detail">
              <p>오픈 API 시스템 모니터링을 위한 대시보드 개발</p>
              <p>Vue를 통한 프론트엔드 개발(반응형 웹 개발)</p>
              <p>ApexChart 라이브러리를 활용한 데이터 시각화</p>
              <p>고객 요구사항에 따른 화면 유지보수 개발</p>
            </div>
          </div>
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >사용 툴 (언어, 기술)
            <div class="detail">
              <p>Java, Spring Boot, MySQL, JPA</p>
              <p>Javascript(ES6), Vue, Vuetify, Apexchart</p>
            </div>
          </div>
        </div>
        <div class="right end-right">
          <div class="btn-icon-div">
            <div class="btn-effect" :class="isClickAni">
              <div
                class="capture-btn"
                @mouseover="captureTxt(1)"
                @mouseout="captureTxt(0)"
                @click="captureClick()"
              >
                <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
                >캡쳐 화면
              </div>
            </div>
            <v-icon class="cursor-icon chevron"
              >mdi-cursor-default-click</v-icon
            >
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
      ><span
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
    <v-expand-transition>
      <CaptureImgs v-if="isModal === 'true'" @isClose="captureClose" />
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";
import CaptureImgs from "./CaptureImgs.vue";

import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();

const iconSize = "10px";
const iconName = "mdi-circle";

const tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  careerNameAni();
  //lineAni();
  subContentAni();
  nextAni();
  chevronAni();
});

function chevronAni() {
  tl.to(".chevron", {
    translateX: -5,
    translateY: -5,
    duration: 0.4,
    repeat: -1,
    yoyo: true,
  });
}

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

const isClickAni = ref("");

function captureTxt(num: number) {
  const txt_ani_class = "animate__animated animate__rubberBand";
  if (num === 1) {
    isClickAni.value = txt_ani_class;
  } else {
    isClickAni.value = "";
  }
}

const isModal = ref("false");

function captureClick() {
  isModal.value = "true";
}

function captureClose() {
  isModal.value = "false";
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
  router.push("/contact");
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
</script>
<style scoped>
.click-line {
  width: 120px;
  height: 3px;
  background-color: #000;
  display: inline-block;
  margin-top: 2px;
}

.btn-effect {
  display: flex;
  flex-direction: column;
}

.capture-btn {
  cursor: pointer;
}
</style>
