<template>
  <v-row class="mt-12 ml-1 keyword-title">
    <div class="section-header">
      <span class="eyebrow">Key Skills Summary</span>
      <h2>주요 역량 요약</h2>
    </div></v-row
  >
  <v-row class="mt-8" dense>
    <v-col v-for="(item, idx) in keywords" :key="item" cols="12" md="4">
      <div
        class="keyword-item"
        :key="idx"
        @click="keywordItem(idx)"
        @mouseenter="showTooltip(true)"
        @mouseleave="showTooltip(false)"
        @mousemove="moveTooltip"
      >
        <v-icon size="16">mdi-check</v-icon>
        <span :class="'text' + idx">{{ item }}</span>
      </div>
      <div
        v-if="visible"
        class="follow-tooltip"
        :style="{ left: `${x}px`, top: `${y}px` }"
      >
        click!
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
declare const gsap: any;
declare const SplitText: any;

const keywords = [
  "Vue 3 Composition API 기반 화면 개발",
  "TypeScript 적용한 Vue 컴포넌트 설계",
  "컴포넌트 단위 UI 아키텍처 구성",
  "Reactive 상태 관리 및 데이터 바인딩",
  "Spring Framework 기반 시스템 이해",
  "Java 기반 비즈니스 로직 연계 경험",
  "MyBatis를 활용한 데이터 조회 구조 이해",
  "Oracle DB 스키마 및 쿼리 구조 파악",
  "GoJS 기반 설비 구조도 구현",
  "차트 기반 상태·추이 시각화",
];

let split: any[] = [];
let animation: any;

onMounted(() => {
  setup();
});

const visible = ref(false);
const x = ref(0);
const y = ref(0);

function showTooltip(isShow: boolean) {
  visible.value = isShow;
}

function moveTooltip(e: MouseEvent) {
  x.value = e.clientX + 12;
  y.value = e.clientY + 12;
}

function keywordItem(idx: number) {
  animation && animation.revert();
  animation = gsap.from(split[idx].chars, {
    x: 150,
    opacity: 0,
    duration: 0.7,
    ease: "power4",
    stagger: 0.04,
  });
}

function setup() {
  keywords.forEach((e, idx) => {
    split[idx] && split[idx].revert();
    split[idx] = SplitText.create(".text" + idx, { type: "chars,words,lines" });
  });
}
</script>

<style scoped>
.keyword-item {
  display: flex;
  align-items: center;
  color: #292929;
  font-size: 14px;
  gap: 8px;
  cursor: pointer;
}
.follow-tooltip {
  position: fixed;
  z-index: 9999;
  padding: 6px 10px;
  background: rgba(30, 30, 30, 0.9);
  color: white;
  font-size: 12px;
  border-radius: 6px;
  pointer-events: none;
  white-space: nowrap;
}
</style>
