<template>
  <div class="main-div">
    <div class="title">front-end developer</div>
    <div class="info">min kyung's portfolio</div>
    <div class="sub-info-div">
      <span class="arrow-down-span">
        <img src="@/assets/images/arrow-down.png" width="63" height="170" />
      </span>
      <span class="sub-info">If you see more...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gsap from "gsap";

onMounted(() => {});
</script>

<style scoped>
.main-div {
  display: flex;
  flex-direction: column;
  text-align: center;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
  margin-top: 21%;
}
.title {
  width: 190px;
  background-color: #000;
  color: #fff;
  padding: 9px 90px;
  font-weight: 700;
  font-size: 15px;
}

.info {
  color: #000;
  padding: 15px;
  font-weight: 700;
  font-size: 23px;
  text-transform: uppercase;
  font-family: "Source Sans Pro";
}
.sub-info-div {
  display: flex;
  flex-direction: row;
  height: 44vh;
  align-items: self-end;
}

.arrow-down-span {
  padding-left: 40%;
}

.sub-info {
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  align-self: center;
}
</style>
