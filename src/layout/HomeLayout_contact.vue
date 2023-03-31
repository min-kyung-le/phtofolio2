<template>
  <span class="line-circle"
    ><img src="@/assets/images/line-circle.png" width="170" height="170"
  /></span>
  <span class="circle"
    ><img src="@/assets/images/circle.png" width="170" height="170"
  /></span>
  <span class="b-line-circle"
    ><img src="@/assets/images/line-circle.png" width="170" height="170"
  /></span>
  <span class="b-circle"
    ><img src="@/assets/images/circle.png" width="170" height="170"
  /></span>
</template>

<script setup lang="ts">
import { defineComponent, onMounted, reactive } from "vue";
import gsap from "gsap";

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
    .from(".b-circle", circleAni_down, "<0.5")
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
</style>
