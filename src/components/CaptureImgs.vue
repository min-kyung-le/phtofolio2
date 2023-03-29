<template>
  <div class="page captureImgs">
    <div class="page-title">실제 개발 화면</div>
    <div class="page-detail">
      <div class="icon" @click="click(0)">
        <v-icon size="50px">mdi-chevron-left</v-icon>
      </div>
      <div class="img-grid">
        <img
          :src="`../../src/assets/images/${imgNum.num}.png`"
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
import { defineComponent, onMounted, reactive } from "vue";

const imgNum = reactive({
  num: 1,
});
function click(number: number) {
  if (number > 0) {
    if (imgNum.num < 3) {
      imgNum.num += 1;
    } else {
      imgNum.num = 1;
    }
  } else {
    if (imgNum.num > 1) {
      imgNum.num -= 1;
    } else {
      imgNum.num = 3;
    }
  }
}
</script>
<style scoped>
.page {
  background-color: rgb(90, 157, 61);
}
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
}
</style>
