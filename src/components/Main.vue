<template>
  <div class="container">
    <div class="innerbox" v-for="(one, idx) in setContent">
      <div class="f-div">
        <div class="content">
          {{ one.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

interface content {
  content: String;
  isSpread: Boolean;
}

const contentList: Array<content> = [
  {
    content: "content",
    isSpread: false,
  },
  {
    content: "workpiece",
    isSpread: true,
  },
  {
    content: "Career",
    isSpread: true,
  },
  {
    content: "Contact",
    isSpread: true,
  },
];
const setContent = reactive(contentList);
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  padding-top: 37px;
}

.innerbox {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

.innerbox > div {
  width: 268px;
  height: 600px;
  margin: 0 28px 31px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 29px;
  text-transform: uppercase;
}

.f-div {
  border: 4px solid #d73cbe;
  color: #fff;
}

.s-div {
  border: 4px solid #fff;
  background-color: #fff;
}

.icon-div {
  display: flex;
  flex-direction: row;
  justify-content: end;
  padding: 25px 22px 0 0;
}

.content {
  height: 65%;
}
</style>
