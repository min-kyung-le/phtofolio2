<template>
  <div class="main-div">
    <div class="title">
      <div class="hidden-div">
        <span class="front-end">front-end</span>
      </div>
      <div class="hidden-div">
        <span class="developer">developer</span>
      </div>
    </div>
    <div class="info">
      <div class="hidden-div-title">
        <span class="min">min</span>
      </div>
      <div class="hidden-div-title">
        <span class="kyung">kyung's</span>
      </div>
      <div class="hidden-div-title">
        <span class="portfolio">portfolio</span>
      </div>
    </div>
    <div class="sub-info-div">
      <span class="arrow-down-span">
        <img
          class="arrow-img"
          src="@/assets/images/arrow-down.png"
          width="63"
          height="190"
        />
      </span>
      <span class="sub-info see-more">If you see more...</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";
import gsap from "gsap";
import { Observer } from "gsap/Observer";

gsap.registerPlugin(Observer);

onMounted(() => {
  pageInAni();

  Observer.create({
    type: "wheel, touch",
    wheelSpeed: -1,
    onUp: () => next(),
    onDown: () => previous(),
    tolerance: 10,
    preventDefault: true,
  });
});

function previous() {
  console.log("올린다");
}
function next() {
  console.log("내린다");
}

function pageInAni() {
  let tl = gsap.timeline();
  const Ani_up = {
    translateY: 80,
    duration: 0.4,
  };
  tl.from(".front-end", Ani_up, "0.4").from(".developer", Ani_up, "<0.2");

  const title_Ani_up = {
    translateY: 100,
    duration: 0.4,
  };
  tl.from(".min", title_Ani_up, "<0.2")
    .from(".kyung", title_Ani_up, "<0.2")
    .from(".portfolio", title_Ani_up, "<0.2");

  const seeMoreAni = {
    opacity: 0,
    translateX: -100,
    duration: 0.4,
  };
  tl.from(".see-more", seeMoreAni, "<1.4");

  const arrowShowAni = {
    opacity: 0,
    duration: 0.4,
  };

  const arrowRepetAni = {
    translateY: -70,
    repeat: 20,
    yoyo: true,
    duration: 0.4,
    ease: "Power1.easeInOut",
  };
  tl.from(".arrow-down-span", arrowShowAni, "<0.2").to(
    ".arrow-img",
    arrowRepetAni,
    ">"
  );
}

function pageOutAni() {
  console.log("pageOutAni함수실행");
}
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
  font-weight: 400;
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
  overflow: hidden;
}

.sub-info {
  font-weight: 700;
  font-size: 15px;
  text-transform: uppercase;
  align-self: center;
  margin-top: 80px;
}

.front-end {
  margin-right: 7px;
  transform: translate(0px, 0px);
  display: inline-block;
}

.developer {
  transform: translate(0px, 0px);
  display: inline-block;
}

.hidden-div {
  display: inline-block;
  overflow: hidden;
  height: 17px;
}
.hidden-div-title {
  display: inline-block;
  overflow: hidden;
  height: 25px;
}

.min {
  transform: translate(0px, 0px);
  display: inline-block;
  margin-right: 4px;
}
.kyung {
  transform: translate(0px, 0px);
  display: inline-block;
  margin-right: 4px;
}
.portfolio {
  transform: translate(0px, 0px);
  display: inline-block;
}
</style>
