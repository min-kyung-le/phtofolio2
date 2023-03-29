<template>
  <div class="title">front-end developer</div>
  <div class="info">MIN KYUNG'S PORTFOLIO</div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {});
</script>

<style scoped>
.title {
  text-transform: uppercase;
  background-color: #000;
  color: #fff;
  padding: 9px 90px;
  font-weight: 500;
  font-size: 15px;
}

.info {
  color: #000;
  padding: 15px;
  font-weight: 700;
  font-size: 23px;
  font-family: "Source Sans Pro";
}
</style>
