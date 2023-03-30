<template>
  <div class="done page">
    <div class="menu-contents">
      <div class="name-div">
        <div
          class="name"
          v-for="(one, idx) in menuList"
          @click="menuClick(idx)"
        >
          {{ one.name }}
          <div
            class="line"
            :class="one.isClick === false ? 'opacity-0' : 'opacity-1'"
          ></div>
        </div>
      </div>
    </div>
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

interface obj {
  name: string;
  isClick: boolean;
}

const menuList: Array<obj> = reactive([
  {
    name: "개요",
    isClick: false,
  },
  {
    name: "핵심 강점",
    isClick: false,
  },
  {
    name: "사용 기술",
    isClick: false,
  },
  {
    name: "경력",
    isClick: false,
  },
  {
    name: "연락처",
    isClick: true,
  },
]);

function menuClick(number: number) {
  menuList
    .filter((one) => {
      if (one.isClick) return one;
    })
    .map((one) => {
      one.isClick = false;
    });

  menuList[number].isClick = true;
}
</script>

<style scoped>
.page {
  background-color: antiquewhite;
}
.done {
  font-family: "Source Sans Pro";
  padding: 0 0 0 108px;
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

.menu-contents {
  background-color: #000;
  width: 460px;
  height: 100vh;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name-div {
  width: 360px;
}

.menu-contents .name {
  color: #fff;
  margin-bottom: 80px;
  font-size: 28px;
  cursor: pointer;
}

.done .line {
  width: 350px;
  height: 3px;
  background-color: #fff;
}

.opacity-0 {
  opacity: 0;
}

.opacity-1 {
  opacity: 1;
}
</style>
