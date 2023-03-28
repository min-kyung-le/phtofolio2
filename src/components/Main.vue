<template>
  <div class="container">
    <div class="innerbox">
      <div class="f-div">
        <div class="icon-div">
          <span @click="divSpread"
            ><img id="img1" src="@/assets/plus.png" width="30" height="30"
          /></span>
        </div>
        <div class="content" :class="{ spread: isHeight.first }">
          HARPERS INC.
        </div>
      </div>
      <div class="s-div">
        <div class="icon-div">
          <img id="img2" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">TEAM UPDATES</div>
      </div>
    </div>
    <div class="innerbox">
      <div class="f-div">
        <div class="icon-div">
          <img id="img3" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">EMPLOYEE<br />HANDBOOH</div>
      </div>
      <div class="s-div">
        <div class="icon-div">
          <img id="img4" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">ANNUAL<br />REPORT</div>
      </div>
    </div>
    <div class="innerbox">
      <div class="f-div">
        <div class="icon-div">
          <img id="img5" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">PROJECT<br />REPORTS</div>
      </div>
      <div class="s-div">
        <div class="icon-div">
          <img id="img6" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">NEW<br />SERVICES</div>
      </div>
    </div>
    <div class="innerbox">
      <div class="f-div">
        <div class="icon-div">
          <img id="img7" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">HIRING HUB</div>
      </div>
      <div class="s-div">
        <div class="icon-div">
          <img id="img8" src="@/assets/plus.png" width="30" height="30" />
        </div>
        <div class="content">COMPANY<br />CULTURE</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from "vue";

const divHeight = {
  first: false,
  second: false,
  third: false,
  fourth: false,
};
const isHeight = reactive(divHeight);

function divSpread(e) {
  const div = e.target.id;
  console.log(div);
  isHeight.first = !isHeight.first;
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 37px;
}

.innerbox {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.innerbox > div {
  width: 268px;
  height: 299px;
  margin: 0 28px 31px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 29px;
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

.icon-div span {
  cursor: pointer;
}

.content {
  height: 65%;
}

.spread {
  font-size: 40px !important;
}
</style>
