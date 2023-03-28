<template>
  <div class="container">
    <div class="innerbox" v-for="(one, idx) in setContent">
      <div class="f-div">
        <div class="icon-div">
          <span @click="divSpread(idx, 1)"
            ><img id="img1" src="@/assets/plus.png" width="30" height="30"
          /></span>
        </div>
        <div class="content" :class="{ spread: one.isSpread1 }">
          {{ one.content1 }}
        </div>
      </div>
      <div class="s-div">
        <div class="icon-div">
          <span @click="divSpread(idx, 2)"
            ><img id="img1" src="@/assets/plus.png" width="30" height="30"
          /></span>
        </div>
        <div class="content" :class="{ spread: one.isSpread2 }">
          {{ one.content1 }}
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
  content2: String;
  isSpread2: Boolean;
}

const contentList: Array<content> = [
  {
    content1: "Harpers Inc.",
    isSpread1: false,
    content2: "Harpers Inc.",
    isSpread2: false,
  },
  {
    content1: "Harpers Inc.",
    isSpread1: false,
    content2: "Harpers Inc.",
    isSpread2: false,
  },
  {
    content1: "Harpers Inc.",
    isSpread1: false,
    content2: "Harpers Inc.",
    isSpread2: false,
  },
  {
    content1: "Harpers Inc.",
    isSpread1: false,
    content2: "Harpers Inc.",
    isSpread2: false,
  },
];
const setContent = reactive(contentList);

function divSpread(el: number, num: number) {
  setContent[el][`isSpread${num}`] = !setContent[el][`isSpread${num}`];
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 37px;
}

.innerbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.icon-div span {
  cursor: pointer;
}

.content {
  height: 65%;
}

.spread {
  font-size: 40px !important;
}
</style>
