<template>
  <div class="done page">
    <div class="menu-box">
      <span class="menu"><v-icon size="35px">mdi-menu</v-icon></span>
      <span class="arrow-left-span">
        <img src="@/assets/images/arrow-left.png" width="170" height="63" />
      </span>
      <span class="sub-info">If you see more...</span>
    </div>
    <div class="info">Thank you for visiting!</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {});
</script>

<style scoped>
.page {
  background-color: antiquewhite;
}
.done {
  font-family: "Source Sans Pro";
  padding: 58px 0 0 108px;
}

.menu-box {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.menu {
  margin: 0 50px 0 0;
}

.arrow-left-span {
  margin-right: 14px;
}
.done .info {
  height: 70vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
}
.info {
  color: #000;
  padding: 15px;
  font-weight: 700;
  font-size: 30px;
  font-family: "Source Sans Pro";
}
.sub-info {
  font-weight: 700;
  font-size: 17px;
  align-self: center;
  margin-bottom: 8px;
}
</style>
