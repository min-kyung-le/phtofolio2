<template>
  <v-card
    class="strength-card fade-up"
    elevation="0"
    @mouseover="hoverKeywords(1)"
    @mouseout="hoverKeywords(0)"
  >
    <div class="card-line"></div>

    <v-icon color="#aaa" size="20" class="mb-4">
      {{ icon }}
    </v-icon>
    <h3 class="mb-2">
      {{ title }}
      <span class="title-click" :class="animated_click"
        >click!
        <v-icon color="#aaa" size="15" class="click-icon"
          >mdi-cursor-pointer</v-icon
        ></span
      >
    </h3>

    <div class="title-line" :class="animated"></div>
    <p>{{ description }}</p>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps<{
  title: string;
  description: string;
  icon: string;
}>();

const animated = ref("");
const animated_click = ref("");

function hoverKeywords(num: number) {
  const animate_class = "animate__animated animate__fadeInLeft";
  animated.value = num == 1 ? animate_class : "";

  const animate_click_class = "is_show animate__animated animate__pulse";
  animated_click.value = num == 1 ? animate_click_class : "";
}
</script>

<style scoped>
.strength-card {
  padding: 32px;
  border-radius: 14px;
  background-color: #0c0c0c;
  cursor: pointer;
}
.click-icon {
  margin-top: -2px;
  margin-left: 3px;
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
</style>
