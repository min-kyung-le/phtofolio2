<template>
  <div class="container">
    <div class="innerbox" v-for="(one, idx) in contentList">
      <div class="f-div">
        <div class="content" @click="goDetail(idx)">
          {{ one.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gsap from "gsap";

interface content {
  content: String;
}

onMounted(() => {
  gsap.to(".f-div", {
    x: 100,
  });
});

const contentList: Array<content> = [
  {
    content: "소개",
  },
  {
    content: "작업물",
  },
  {
    content: "경력",
  },
  {
    content: "연락처",
  },
];

function goDetail(idx: number) {
  if (idx == 0) {
    console.log("소개");
  } else if (idx == 1) {
    console.log("작업물");
  } else if (idx == 2) {
    console.log("경력");
  } else if (idx == 3) {
    console.log("연락처");
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 37px;
}

.innerbox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.innerbox > div {
  padding-top: 20px;
  width: 268px;
  height: 580px;
  margin: 0 28px 31px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 29px;
  text-transform: uppercase;
  cursor: pointer;
}

.f-div {
  border: 4px solid #d73cbe;
  color: #fff;
}

.s-div {
  border: 4px solid #fff;
  background-color: #fff;
}

.icon-div {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 25px 22px 0 0;
}
</style>
