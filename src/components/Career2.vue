<template>
  <div class="page career">
    <div class="page-title">경력</div>
    <div class="page-detail">
      <div class="career-name">
        IT 자원관리 대시보드 시스템 개발<span class="title-small"
          >(약 6개월)</span
        >
      </div>
      <div class="line"></div>
      <div class="date-div">
        <span>2021.04</span>
        <span>2021.10</span>
      </div>
      <div class="project-div">
        <div class="left">
          <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
          >프로젝트 개요
          <div class="detail">
            IT 자원관리를 실시간 모니터링하기 위한 사내 업무 시스템
          </div>
        </div>
        <div class="right">
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >기여한 점
            <div class="detail">
              <p>Vue를 통한 UI/UX 기능 구현</p>
              <p>각 브라우저 호환성을 고려한 인터페이스 개발</p>
              <p>ApexChart 라이브러리를 활용한 데이터 시각화</p>
              <p>프론트엔드 개발자를 위한 API 가이드 작성</p>
            </div>
          </div>
          <div>
            <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
            >사용 툴 (언어, 기술)
            <div class="detail">
              <p>Javascript(ES6), Vue, Vuetify, Apexchart</p>
              <p>Java, Spring Boot, MySQL, JPA</p>
            </div>
          </div>
        </div>
        <div class="right end-right">
          <div class="btn-icon-div">
            <div class="btn-effect">
              <div>
                <V-icon :size="iconSize" class="icon">{{ iconName }}</V-icon
                >캡쳐 화면
              </div>
              <div class="click-line"></div>
            </div>
            <v-icon class="cursor-icon">mdi-cursor-default-click</v-icon>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive } from "vue";

const iconSize = "10px";
const iconName = "mdi-circle";
const point_color = "#5e17eb";
</script>
<style scoped>
.page {
  background-color: aqua;
}
.line {
  width: 1172px;
  height: 4px;
  background-color: #5e17eb;
  position: absolute;
  left: 0;
}

.icon {
  margin-top: 10px;
}

.end-right {
  margin-left: 80px;
}

.end-right .cursor-icon {
  margin-top: 15px;
  margin-left: -24px;
}

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

.btn-icon-div {
  display: flex;
  flex-direction: row;
}
</style>
