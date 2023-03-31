<template>
  <RouterView v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <div class="component-div" :key="route.name">
        <component :is="Component" />
      </div>
    </transition>
  </RouterView>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Main from "@/components/Main.vue";

import gsap from "gsap";
</script>

<style scoped>
.component-div {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 100vw;
  justify-content: center;
}
</style>
