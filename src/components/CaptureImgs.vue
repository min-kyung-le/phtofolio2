<template>
  <div class="page captureImgs">
    <div class="page-title title1">실제 개발 화면</div>
    <div class="page-detail">
      <div class="icon" @click="click(0)">
        <v-icon size="50px">mdi-chevron-left</v-icon>
      </div>
      <div class="img-grid">
        <img
          :src="`/src/assets/images/${imgNum.num}.png`"
          width="1450"
          height="760"
        />
      </div>
      <div class="icon" @click="click(1)">
        <v-icon size="50px">mdi-chevron-right</v-icon>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";

const imgNum = reactive({
  num: 1,
});
function click(number: number) {
  const count = 3;
  if (number > 0) {
    if (imgNum.num < count) {
      imgNum.num += 1;
    } else {
      imgNum.num = 1;
    }
  } else {
    if (imgNum.num > 1) {
      imgNum.num -= 1;
    } else {
      imgNum.num = count;
    }
  }
}

const tl = gsap.timeline();
onMounted(() => {
  titleAni(".title1");
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
</script>
<style scoped>
.img-grid {
  padding: 10px 0 0 10px;
  background-color: #000;
  width: 1470px;
  height: 780px;
  border-radius: 8px;
  margin: 0 40px;
}

.icon {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.page-detail {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
</style>
