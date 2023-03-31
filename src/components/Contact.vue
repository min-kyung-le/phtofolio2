<template>
  <div class="page contact">
    <div class="center-box">
      <div class="page-title title1">연락처</div>
      <div class="page-detail">
        <div class="line sub-content" v-for="one in list">
          <img
            class="icon"
            :src="`/src/assets/images/${one.img}`"
            width="27"
            height="27"
          />
          <span class="name">{{ one.name }}</span
          ><span class="link">{{ one.link }}</span>
        </div>
      </div>
    </div>
    <div class="sub-info-div">
      <span
        class="next"
        :class="animated"
        @mouseover="hoverNext(1)"
        @mouseout="hoverNext(0)"
        @click="nextPage()"
        >NEXT</span
      ><span
        v-if="store.state.isMenuShow"
        class="all-menu"
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
import HomeLayout_contact from "@/layout/HomeLayout_contact.vue";
import Menu from "./Menu.vue";

import { ref, onMounted, reactive } from "vue";
import gsap from "gsap";
import router from "@/router";
import { useStore } from "vuex";
const store = useStore();

const tl = gsap.timeline();

interface obj {
  img: string;
  name: string;
  link: string;
}

const list: Array<obj> = reactive([
  {
    img: "github.png",
    name: "github",
    link: "https://github.com/min-kyung-le",
  },
  {
    img: "naver.png",
    name: "naver blog",
    link: "https://blog.naver.com/clabyolo-_-p",
  },
  {
    img: "gmail.png",
    name: "gmail",
    link: "minkyung1435@gmail.com",
  },
  {
    img: "telephone-call.png",
    name: "phone",
    link: "010-7319-0067",
  },
]);

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

function menuAni() {
  tl.from(
    ".all-menu",
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

function nextPage() {
  router.push("/done");
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
.sub-info-div {
  right: 120px;
  bottom: 140px;
}
.contact {
  justify-content: center;
  padding: 78px 0 0 0;
}

.contact .page-title {
  margin-bottom: 55px;
}

.page-detail .line {
  height: 46px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 17px;
}

.icon {
  margin: 2px 16px 0 0;
}

.name {
  text-transform: uppercase;
  margin: 0 20px 0 0;
  width: 150px;
}

.center-box {
  width: 550px;
  margin: 0 auto 70px auto;
}
</style>
