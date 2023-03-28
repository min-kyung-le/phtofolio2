<template>
  <div class="container">
    <div class="innerbox" v-for="(one, idx) in setContent">
      <div
        class="f-div"
        :class="{ close: one.isSpread2, spread: one.isSpread1 }"
      >
        <div class="icon-div">
          <v-btn
            :icon="one.icon1"
            @click="divSpread(idx, 1)"
            size="x-small"
          ></v-btn>
        </div>
        <div class="content">
          {{ one.content1 }}
        </div>
      </div>
      <div
        class="s-div"
        :class="{ close: one.isSpread1, spread: one.isSpread2 }"
      >
        <div class="icon-div">
          <v-btn
            :icon="one.icon2"
            @click="divSpread(idx, 2)"
            size="x-small"
          ></v-btn>
        </div>
        <div class="content">
          {{ one.content2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

interface content {
  content1: String;
  isSpread1: Boolean;
  icon1: String;
  content2: String;
  isSpread2: Boolean;
  icon2: String;
}

const contentList: Array<content> = [
  {
    content1: "프론트엔드 개발자 이민경입니다",
    isSpread1: false,
    icon1: "mdi-plus",
    content2: "Harpers Inc.",
    isSpread2: true,
    icon2: "mdi-minus",
  },
  {
    content1: "작업물",
    isSpread1: true,
    icon1: "mdi-minus",
    content2: "Harpers Inc.",
    isSpread2: false,
    icon2: "mdi-plus",
  },
  {
    content1: "경력",
    isSpread1: true,
    icon1: "mdi-minus",
    content2: "Harpers Inc.",
    isSpread2: false,
    icon2: "mdi-plus",
  },
  {
    content1: "연락처",
    isSpread1: true,
    icon1: "mdi-minus",
    content2: "Harpers Inc.",
    isSpread2: false,
    icon2: "mdi-plus",
  },
];
const setContent = reactive(contentList);

function divSpread(el: number, num: number) {
  if (num > 1) {
    setContent[el]["isSpread2"] = !setContent[el]["isSpread2"];
    setContent[el]["isSpread1"] = !setContent[el]["isSpread2"];
    var temp = setContent[el]["icon2"];
    setContent[el]["icon2"] = setContent[el]["icon1"];
    setContent[el]["icon1"] = temp;
  } else {
    setContent[el]["isSpread1"] = !setContent[el]["isSpread1"];
    setContent[el]["isSpread2"] = !setContent[el]["isSpread1"];
    var temp = setContent[el]["icon1"];
    setContent[el]["icon1"] = setContent[el]["icon2"];
    setContent[el]["icon2"] = temp;
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
  width: 268px;
  height: 299px;
  margin: 0 28px 31px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 29px;
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

.content {
  height: 65%;
}

.spread {
  height: 400px !important;
}

.close {
  height: 198px !important;
}
</style>
