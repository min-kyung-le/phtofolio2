<template>
  <div class="page career">
    <div class="page-title">경력</div>
    <div class="page-detail">
      <div class="career-name">
        IT 자원관리 시스템 개발<span class="title-small">(약 2년 4개월)</span>
      </div>
      <div class="line"></div>
      <div class="date-div">
        <span>2018.11</span>
        <span>2021.03</span>
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
            >사용툴
            <div class="detail">
              <p>Javascript, JQuery, CanvasJS, CSS</p>
              <p>Java, Spring, Oracle</p>
            </div>
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
</script>
<style scoped>
.page {
  background-color: blanchedalmond;
}

.career {
  font-size: 17px;
}

.career .page-detail {
  padding-left: 8px;
}

.career-name {
  margin: 54px 0 2px 0;
}

.date-div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 1000px;
  margin-bottom: 42px;
}

.title-small {
  margin-left: 10px;
  font-size: 12px;
}

.line {
  width: 100%;
  height: 4px;
  background-color: #5e17eb;
}

.project-div {
  display: flex;
  flex-direction: row;
}

.project-div .icon {
  margin-top: -5px;
  margin-right: 13px;
}

.project-div .left {
  margin: 0 60px 0 15px;
}

.project-div .left .detail {
  font-size: 15px;
  width: 285px;
  margin: 9px 0 0 23px;
}

.project-div .right .detail {
  font-size: 15px;
  width: 300px;
  margin: 9px 0 60px 23px;
}

.project-div .detail p {
  margin: 0 0 6px 0;
}
</style>
