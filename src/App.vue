<template>
  <RouterView v-slot="{ Component, route }">
    <Transition
      :enter-active-class="route.meta.enterClass"
      :leave-active-class="route.meta.leaveClass"
    >
      <div class="component-div">
        <component :is="Component" />
      </div>
    </Transition>
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
  height: 90vh;
  justify-content: center;
}
</style>
