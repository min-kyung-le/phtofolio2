<template>
  <v-card
    class="strength-card fade-up"
    elevation="0"
    @mouseover="hoverKeywords(1)"
    @mouseout="hoverKeywords(0)"
    @mouseenter="showTooltip(true)"
    @mouseleave="showTooltip(false)"
    @mousemove="moveTooltip"
  >
    <div class="card-line"></div>

    <v-icon color="#aaa" size="20" class="mb-4">
      {{ icon }}
    </v-icon>
    <h3 class="mb-2">
      {{ title }}
    </h3>

    <div class="title-line" :class="animated"></div>
    <p>{{ description }}</p>
    <div
      v-if="visible"
      class="follow-tooltip"
      :style="{ left: `${x}px`, top: `${y}px` }"
    >
      click!
    </div>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

const visible = ref(false);
const x = ref(0);
const y = ref(0);

defineProps<{
  title: string;
  description: string;
  icon: string;
}>();

const animated = ref("");

function hoverKeywords(num: number) {
  const animate_class = "animate__animated animate__fadeInLeft";
  animated.value = num == 1 ? animate_class : "";
}

function showTooltip(isShow: boolean) {
  visible.value = isShow;
}

function moveTooltip(e: MouseEvent) {
  x.value = e.clientX + 12;
  y.value = e.clientY + 12;
}
</script>

<style scoped>
.strength-card {
  padding: 32px;
  border-radius: 14px;
  background-color: #0c0c0c;
  cursor: pointer;
}

.title-line {
  width: 150px;
  height: 2px;
  background: #eee;
  margin-bottom: 16px;
  display: inline-block;
}

.title-click {
  color: #eee;
  display: none;
  position: absolute;
  right: 30px;
  top: 25px;
  font-weight: 200;
}
.is_show {
  display: inline-block !important;
}
.card-line {
  width: 32px;
  height: 2px;
  background: #eee;
  margin-bottom: 16px;
}

h3 {
  font-size: 18px;
  color: #eee;
  margin-bottom: 8px;
}

p {
  font-size: 14px;
  color: #eee;
  line-height: 1.6;
}

.follow-tooltip {
  position: fixed;
  z-index: 9999;
  padding: 6px 10px;
  background: rgba(240, 240, 240, 0.9);
  color: rgb(34, 34, 34);
  font-size: 12px;
  border-radius: 6px;
  pointer-events: none;
  white-space: nowrap;
}
</style>
