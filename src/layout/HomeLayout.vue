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

<script setup lang="ts"></script>

<style scoped>
.circle {
  position: absolute;
  top: -13%;
  left: 6%;
}

.line-circle {
  position: absolute;
  top: -13%;
  left: 13%;
}
.b-circle {
  position: absolute;
  bottom: -13%;
  right: 6%;
}

.b-line-circle {
  position: absolute;
  bottom: -13%;
  right: -2%;
}
</style>
