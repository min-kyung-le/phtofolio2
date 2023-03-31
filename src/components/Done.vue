<template>
  <div class="done page">
    <div v-if="menuShowValue" class="menu-contents">
      <div class="close-div">
        <v-icon
          class="close-btn"
          color="#fff"
          size="47px"
          @click="menuShow(false)"
          >mdi-close</v-icon
        >
      </div>
      <div class="name-div">
        <div
          class="name"
          v-for="(one, idx) in menuList"
          @click="menuListClick(idx)"
        >
          {{ one.name }}
        </div>
      </div>
    </div>
    <div class="menu-box">
      <span class="menu" @click="menuShow(true)"
        ><v-icon size="35px">mdi-menu</v-icon></span
      >
      <span class="arrow-left-span">
        <img
          class="arrow-img"
          src="@/assets/images/arrow-left.png"
          width="190"
          height="63"
        />
      </span>
      <span class="sub-info">If you see more...</span>
    </div>
    <div class="info title1">Thank you for visiting!</div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted, ref } from "vue";
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

let tl = gsap.timeline();

onMounted(() => {
  titleAni(".title1");
  arrowAni();
});

function titleAni(name: string) {
  tl.from(
    name,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    ">0.6"
  );
}

function arrowAni() {
  const arrowRepetAni = {
    translateX: 70,
    repeat: 20,
    yoyo: true,
    duration: 0.4,
    ease: "Power1.easeInOut",
  };

  const arrowShowAni = {
    opacity: 0,
    duration: 0.4,
  };

  tl.from(".arrow-left-span", arrowShowAni, "<0.2").to(
    ".arrow-img",
    arrowRepetAni,
    ">"
  );
}

const menuShowValue = ref(false);

function menuListClick(number: number) {
  menuList
    .filter((one) => {
      if (one.isClick) return one;
    })
    .map((one) => {
      one.isClick = false;
    });

  menuList[number].isClick = true;
}

function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}
</script>

<style scoped>
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
  cursor: pointer;
}

.arrow-left-span {
  margin-right: 14px;
  height: 110px;
  align-items: center;
  display: flex;
  overflow-x: hidden;
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
  width: 100%;
  height: 100vh;
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 90px;
}

.name-div {
  width: 360px;
}

.menu-contents .name {
  color: #fff;
  margin-bottom: 2px;
  font-size: 60px;
  cursor: pointer;
  font-weight: 400;
}

.close-btn {
  font-size: 40px;
  height: 40px;
  width: 40px;
  color: rgb(255, 255, 255);
  caret-color: rgb(255, 255, 255);
  position: absolute;
  right: 150px;
  top: 50px;
  cursor: pointer;
}
</style>
