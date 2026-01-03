<template>
  <v-card class="parameter-card">
    <!-- 상단 툴바 -->
    <v-toolbar density="compact" color="primary">
      <v-toolbar-title class="text-white">
        {{ param?.name || "Parameter Detail" }}
      </v-toolbar-title>

      <v-spacer />

      <v-btn icon @click="$emit('close')">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </v-toolbar>

    <!-- 본문 영역 -->
    <v-card-text class="detail-content">
      <v-alert v-if="!param" type="info" variant="tonal">
        파라미터를 선택해주세요.
      </v-alert>

      <template v-else>
        <v-list density="compact">
          <v-list-item>
            <v-list-item-title>파라미터명</v-list-item-title>
            <v-list-item-subtitle>{{ param.name }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>설명</v-list-item-title>
            <v-list-item-subtitle>{{ param.description }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>현재 값</v-list-item-title>
            <v-list-item-subtitle>{{ param.value }}</v-list-item-subtitle>
          </v-list-item>

          <v-list-item>
            <v-list-item-title>상태</v-list-item-title>
            <v-list-item-subtitle>
              <v-chip :color="statusColor" size="small" variant="flat">
                {{ param.status }}
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item>
        </v-list>
      </template>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  param: any;
}>();

defineEmits(["close"]);

const statusColor = computed(() => {
  switch (props.param?.status) {
    case "NORMAL":
      return "green";
    case "ERROR":
      return "red";
    default:
      return "grey";
  }
});
</script>

<style scoped>
.detail-content {
  height: 250px;
  overflow-y: auto;
}
.parameter-card {
  position: absolute;
  height: 313px;
  width: 360px;
  left: 35% !important;
}
</style>
