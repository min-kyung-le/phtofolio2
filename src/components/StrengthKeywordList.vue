<template>
  <v-row class="mt-12 ml-1 keyword-title">
    <div class="section-header">
      <span class="eyebrow">Key Skills Summary</span>
      <h2>주요 역량 요약</h2>
    </div></v-row
  >
  <v-row class="mt-8" dense>
    <v-col v-for="item in keywords" :key="item" cols="12" md="4">
      <div class="keyword-item">
        <v-icon size="16">mdi-check</v-icon>
        <span>{{ item }}</span>
      </div>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
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
</script>

<style scoped>
.keyword-item {
  display: flex;
  align-items: center;
  color: #292929;
  font-size: 14px;
  gap: 8px;
}
</style>
