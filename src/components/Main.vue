<template>
  <span>글자를 입력하시오.</span
  ><input
    :value="state.text"
    @input="(event) => (state.text = event.target.value)"
  />
  <h2>{{ state.text }}</h2>
</template>

<script lang="ts">
import { reactive } from "vue";

export default {
  setup() {
    const state = reactive({ text: "텍스트 입력" });
    return {
      state,
    };
  },
};
</script>

<style scoped lang="scss"></style>
