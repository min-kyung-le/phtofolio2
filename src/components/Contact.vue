<template>
  <div class="page contact" v-resize="onResize">
    <div class="center-box">
      <div class="page-title title1">연락처</div>
      <div class="page-detail">
        <div class="line sub-content" v-for="one in list">
          <img
            class="icon"
            :src="`/images/${one.img}`"
            width="27"
            height="27"
          />
          <span class="name">{{ one.name }}</span
          ><span class="link" @click="handleText($event, one.type)">{{
            one.link
          }}</span>
        </div>
      </div>
    </div>
    <div class="sub-info-div">
      <span
        class="next"
        :class="animated"
        @mouseover="hoverNext(1)"
        @mouseout="hoverNext(0)"
        @click="nextPage(true)"
        >NEXT</span
      >
      <span
        v-if="store.state.isMenuShow"
        class="prev"
        :class="animated_prev"
        @mouseover="hoverPrev(1)"
        @mouseout="hoverPrev(0)"
        @click="nextPage(false)"
        >PREV</span
      >
      <span
        v-if="store.state.isMenuShow"
        class="menu"
        :class="animated_menu"
        @mouseover="hoverAllMenu(1)"
        @mouseout="hoverAllMenu(0)"
        @click="menuShow(true)"
        >MENU</span
      >
    </div>
    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
    </v-expand-transition>
  </div>
  <HomeLayout_contact />
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";

import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useStore } from "vuex";
import { useDisplay } from "vuetify/lib/framework.mjs";
const store = useStore();

const tl = gsap.timeline();

interface obj {
  img: string;
  name: string;
  type: string;
  link: string;
}

const list: Array<obj> = reactive([
  {
    img: "github.png",
    name: "github",
    type: "link",
    link: "https://github.com/min-kyung-le",
  },
  {
    img: "naver.png",
    name: "naver blog",
    type: "link",
    link: "https://blog.naver.com/clabyolo-_-p",
  },
  {
    img: "gmail.png",
    name: "gmail",
    type: "copy",
    link: "minkyung1435@gmail.com",
  },
  {
    img: "telephone-call.png",
    name: "phone",
    type: "copy",
    link: "010-7319-0067",
  },
]);

const { name } = useDisplay();
function onResize() {
  switch (name.value) {
    case "sm":
      list[1].name = "blog";
      return;
    case "xs":
      list[1].name = "blog";
      return;
  }
}

async function handleText(event: MouseEvent, type: string) {
  const text = (event.target as HTMLElement).innerText;
  try {
    if (type == "link") linkText(text);
    if (type == "copy") {
      await copyText(text);
    }
    console.log("success");
  } catch (e) {
    console.log("fail");
  }
}

function linkText(text: string) {
  window.open(text, "_blank", "noopener,noreferrer");
}

function copyText(text: string): Promise<void> {
  navigator.clipboard.writeText(text);
  return Promise.resolve();
}

const animated = ref("");

onMounted(() => {
  titleAni(".title1");
  subContentAni();
  nextAni();
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

function subContentAni() {
  let time = "<0.2";
  document.querySelectorAll(".sub-content").forEach((e, idx) => {
    if (idx > 0) time = "<0.1";
    tl.from(
      e,
      {
        opacity: 0,
        translateX: -60,
        duration: 0.5,
      },
      time
    );
  });
}

function nextAni() {
  let time = "<0.7";
  if (store.state.isMenuShow) {
    menuAni();
    prevAni();
    time = "<0.2";
  }
  tl.from(
    ".next",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    time
  );
}
function prevAni() {
  tl.from(
    ".prev",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    "<0.2"
  );
}
function menuAni() {
  tl.from(
    ".menu",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    "<0.5"
  );
}

function hoverNext(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated.value = animate_class;
  if (num === 0) animated.value = "";
}

function nextPage(value: boolean) {
  if (value) {
    router.push("/done");
  } else {
    router.push("/career2");
  }
}

const animated_prev = ref("");

function hoverPrev(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated_prev.value = animate_class;
  if (num === 0) animated_prev.value = "";
}

const animated_menu = ref("");
function hoverAllMenu(num: number) {
  const animate_class = "animate__animated animate__rubberBand";
  if (num === 1) animated_menu.value = animate_class;
  if (num === 0) animated_menu.value = "";
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}
</script>
<style scoped>
.contact .page-title {
  margin-bottom: 55px;
}

.icon {
  margin: 2px 16px 0 0;
}

.center-box {
  width: 550px;
  margin: 0 auto 70px auto;
}
.prev {
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  right: 130px;
}
.menu {
  font-size: 30px;
  font-weight: 700;
  position: absolute;
  right: 258px;
}
.link {
  cursor: pointer;
  user-select: none;
}

.link:hover {
  text-decoration: underline;
  opacity: 0.8;
}
</style>
