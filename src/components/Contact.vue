<template>
  <div class="page captureImgs">
    <div class="page-title">연락처</div>
    <div class="page-detail"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive } from "vue";
import HomeLayout from "@/layout/HomeLayout.vue";
</script>
<style scoped>
.page {
  background-color: rgb(44, 88, 25);
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
