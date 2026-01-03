<template>
  <v-card class="diagram-detail">
    <v-card-title>
      파라미터 상세 정보
      <v-btn icon @click="$emit('close')"> ✕ </v-btn>
    </v-card-title>

    <v-divider />

    <v-card-text v-if="param">
      <p><strong>이름:</strong> {{ param.name }}</p>
      <p><strong>주소:</strong> {{ param.address }}</p>
      <p><strong>설명:</strong> {{ param.description }}</p>
    </v-card-text>

    <v-card-text v-else>
      <v-alert type="info">파라미터를 선택해주세요.</v-alert>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
defineProps<{ param: any }>();
defineEmits(["close"]);
</script>

<style scoped>
.diagram-detail {
  position: absolute;
  top: 50%;
  z-index: 5;
}
</style>
