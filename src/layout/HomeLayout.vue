<template>
  <div v-resize="onResize"></div>
  <span class="line-circle"
    ><img
      src="/images/line-circle.png"
      :width="circleSize.w"
      :height="circleSize.h"
  /></span>
  <span class="circle"
    ><img src="/images/circle.png" :width="circleSize.w" :height="circleSize.h"
  /></span>
  <span class="b-line-circle"
    ><img
      src="/images/line-circle.png"
      :width="circleSize.w"
      :height="circleSize.h"
  /></span>
  <span class="b-circle"
    ><img src="/images/circle.png" :width="circleSize.w" :height="circleSize.h"
  /></span>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import gsap from "gsap";
import { useDisplay } from "vuetify/lib/framework.mjs";

const circleSize = reactive({
  w: 170,
  h: 170,
});
const { name } = useDisplay();
function onResize() {
  switch (name.value) {
    case "sm":
      circleSize.w = 150;
      circleSize.h = 150;
      return;
    case "xs":
      circleSize.w = 150;
      circleSize.h = 150;
      return;
  }
}

onMounted(() => {
  let tl = gsap.timeline();
  const circleAni_up = {
    opacity: 0,
    translateY: -10,
    duration: 0.4,
  };
  const circleAni_down = {
    opacity: 0,
    translateY: 200,
    duration: 0.4,
  };

  tl.from(".circle", circleAni_up)
    .from(".line-circle", circleAni_up, "<0.2")
    .from(".b-circle", circleAni_down, "<1.6")
    .from(".b-line-circle", circleAni_down, "<0.2");
});
</script>

<style scoped>
.circle {
  position: absolute;
  transform: translate(0px, -90px);
  left: 6%;
  top: 0;
}

.line-circle {
  position: absolute;
  left: 11%;
  transform: translate(0px, -90px);
  opacity: 1;
  top: 0;
}
.b-circle {
  position: absolute;
  bottom: 0;
  transform: translate(0px, 100px);
  right: 6%;
}

.b-line-circle {
  position: absolute;
  bottom: 0;
  transform: translate(0px, 100px);
  right: -2%;
}

@media (max-width: 650px) {
  .line-circle {
    left: 21%;
  }
  .b-circle {
    right: 14%;
  }
}
</style>
