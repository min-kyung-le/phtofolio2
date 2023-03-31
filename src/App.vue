<template>
  <RouterLink to="/"><div>Main</div></RouterLink>
  <RouterLink to="/about"><div>About</div></RouterLink>
  <RouterView v-slot="{ Component, route }">
    <transition
      :enter-active-class="route.meta.enterClass"
      :leace-active-class="route.meta.leaveClass"
    >
      <component :is="Component" />
    </transition>
  </RouterView>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import Main from "@/components/Main.vue";

import gsap from "gsap";
</script>
