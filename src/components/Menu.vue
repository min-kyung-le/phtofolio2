<template>
  <v-card class="menu-contents" width="100%" height="100%" v-resize="onResize">
    <div
      class="close"
      @click="closeMenu()"
      @mouseover="closeAni(1)"
      @mouseout="closeAni(0)"
    >
      <v-icon class="close-icon" :size="iconSize" color="#fff"
        >mdi-close</v-icon
      >
    </div>
    <div class="name-div">
      <div
        class="name"
        :class="textAnimated[idx]"
        v-for="(one, idx) in menuList"
        @click="menuListClick(idx)"
        @mouseover="menuHover(1, idx)"
        @mouseout="menuHover(0, idx)"
      >
        {{ one.name }}
        <div class="line" :class="animated[idx]"></div>
      </div></div
  ></v-card>
</template>

<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue";
import gsap from "gsap";
import router from "@/router";
import { nextTick } from "process";
import { useDisplay } from "vuetify/lib/framework.mjs";

const iconSize = ref("50px");

const { name } = useDisplay();
function onResize() {
  switch (name.value) {
    case "sm":
      iconSize.value = "30px";
      return;
    case "xs":
      iconSize.value = "30px";
      return;
  }
}

onMounted(() => {
  nextTick(() => {
    mouseColorChange(true);
  });
});

onUnmounted(() => {
  mouseColorChange(false);
});

function mouseColorChange(val: boolean) {
  if (val) {
    document.querySelector(
      "#drawing_line"
    ).children[0].children[1].style.stroke = "#fff";
    document.querySelector("#drawing_line").children[0].children[0].style.fill =
      "#fff";
  } else {
    document.querySelector(
      "#drawing_line"
    ).children[0].children[1].style.stroke = "#000";
    document.querySelector("#drawing_line").children[0].children[0].style.fill =
      "#000";
  }
}

interface obj {
  name: string;
  isClick: boolean;
}
const menuList: Array<obj> = reactive([
  {
    name: "메인",
    isClick: false,
  },
  {
    name: "핵심 강점",
    isClick: false,
  },
  {
    name: "사용 스킬",
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
function closeAni(num: number) {
  if (num === 1) {
    tl.to(".close-icon", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 1,
      ease: "Power2.easeInOut",
      stagger: 0.5,
      yoyo: true,
    });
  } else {
    tl.clear();
    tl.set(".close-icon", {
      rotation: 0,
    });
  }
}

const animated = reactive(["", "", "", "", ""]);
const textAnimated = reactive(["", "", "", "", ""]);

function menuHover(num: number, idx: number) {
  const animate_class = "animate__animated animate__fadeInLeft opacity1";
  const txt_ani_class = "select-text";
  if (num === 1) {
    animated[idx] = animate_class;
    textAnimated[idx] = txt_ani_class;
  } else {
    animated[idx] = "";
    textAnimated[idx] = "";
  }
}

function menuListClick(number: number) {
  if (number === 0) {
    router.push("/");
  } else if (number === 1) {
    router.push("/about");
  } else if (number === 2) {
    router.push("/skill1");
  } else if (number === 3) {
    router.push("/career1");
  } else if (number === 4) {
    router.push("/contact");
  }
  closeMenu();
}

const emit = defineEmits(["closeMenu"]);

function closeMenu() {
  emit("closeMenu");
}
</script>

<style scoped>
.menu-contents {
  background-color: #000;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15%;
  z-index: 1;
}

.name-div {
  width: 360px;
}

.select-text {
  color: #fff !important;
}

.opactiy1 {
  opacity: 1 !important;
}
.line {
  height: 3px;
  background-color: #fff;
  opacity: 0;
  margin-top: -10px;
}
</style>
