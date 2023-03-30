<template>
  <div class="page contact">
    <div class="center-box">
      <div class="page-title">연락처</div>
      <div class="page-detail">
        <div class="line" v-for="one in list">
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
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, onMounted, reactive } from "vue";

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
</script>
<style scoped>
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
