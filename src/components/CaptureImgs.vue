<template>
  <v-card class="page captureImgs" v-resize="onResize">
    <div
      class="close"
      @click="closeCaptureImgs()"
      @mouseover="closeAni(1)"
      @mouseout="closeAni(0)"
    >
      <v-icon class="close-icon" size="60px">mdi-close</v-icon>
    </div>
    <div class="page-title title1">실제 개발 화면</div>
    <div class="page-detail">
      <div class="icon" @click="click(0)">
        <v-icon size="50px">mdi-chevron-left</v-icon>
      </div>
      <div class="img-grid">
        <img
          :src="`/images/img${imgNum.num}.png`"
          :width="imgwh.width"
          :height="imgwh.height"
        />
      </div>
      <div class="icon" @click="click(1)">
        <v-icon size="50px">mdi-chevron-right</v-icon>
      </div>
    </div>
  </v-card>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue";
import gsap from "gsap";
import { useDisplay } from "vuetify";

const imgwh = reactive({
  width: 1380,
  height: 760,
});
const { name } = useDisplay();
function onResize() {
  switch (name.value) {
    case "xl":
      imgwh.width = 1380;
      imgwh.height = 760;
      return;
    case "lg":
      imgwh.width = 940;
      imgwh.height = 550;
      return;
    case "md":
      imgwh.width = 740;
      imgwh.height = 420;
      return;
    case "sm":
      imgwh.width = 520;
      imgwh.height = 320;
      return;
  }
}

const imgNum = reactive({
  num: 1,
});
function click(number: number) {
  const count = 9;
  if (number > 0) {
    if (imgNum.num < count) {
      imgNum.num += 1;
    } else {
      imgNum.num = 1;
    }
  } else {
    if (imgNum.num > 1) {
      imgNum.num -= 1;
    } else {
      imgNum.num = count;
    }
  }
}

const tl = gsap.timeline();
onMounted(() => {
  titleAni(".title1");
});

let time = "<0.2";
function titleAni(name: string) {
  tl.from(
    name,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    time
  );
}

let ani;
function closeAni(num: number) {
  if (num === 1) {
    ani = gsap.to(".close-icon", {
      rotation: 360,
      transformOrigin: "50% 50%",
      repeat: -1,
      duration: 1,
      ease: "Power2.easeInOut",
      stagger: 0.5,
      yoyo: true,
    });
  } else {
    ani.kill();
    gsap.set(".close-icon", {
      rotation: 0,
    });
  }
}

const emit = defineEmits(["isClose"]);

function closeCaptureImgs() {
  emit("isClose");
}
</script>
<style scoped>
.icon {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  align-self: center;
}

.page-detail {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}

.close {
  top: 4%;
  right: 3%;
}
</style>
