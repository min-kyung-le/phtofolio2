<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">Grid</div>
      <v-btn icon @click="close">
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card flat>
            <v-card-title class="text-h6">
              Equipment Parameter Status
            </v-card-title>
            <v-card-subtitle>
              설비에 연결된 파라미터 상태 및 값을 관리합니다.
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-card>
            <v-data-table
              :headers="headers"
              :items="parameters"
              item-key="id"
              density="compact"
              hover
              height="48vh"
              fixed-header
              @click:row="onSelectParameter"
            >
              <template #item.status="{ item }">
                <v-chip
                  size="small"
                  :color="statusColor(item.status)"
                  variant="flat"
                >
                  {{ item.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <div class="sub-info-div">
        <span
          class="next"
          :class="animated"
          @mouseover="hoverNext(1)"
          @mouseout="hoverNext(0)"
          @click="nextPage(true)"
          >NEXT</span
        >
        <span
          v-if="store.state.isMenuShow"
          class="all-menu"
          :class="animated_menu"
          @mouseover="hoverAllMenu(1)"
          @mouseout="hoverAllMenu(0)"
          @click="nextPage(false)"
          >PREV</span
        >
      </div>
      <v-expand-transition location="right" width="360" temporary>
        <ParameterDetailToolbar
          v-if="drawer"
          :param="selectedParam"
          @close="drawer = false"
        />
      </v-expand-transition>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import ParameterDetailToolbar from "./ParameterDetailToolbar.vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import router from "@/router";
import { useStore } from "vuex";

const store = useStore();
gsap.registerPlugin(TextPlugin);

const drawer = ref(false);
const selectedParam = ref<any>(null);

const emit = defineEmits(["modelValue"]);

function close() {
  emit("modelValue", false);
}
const headers = [
  { title: "Name", key: "name" },
  { title: "Value", key: "value" },
  { title: "Status", key: "status" },
  { title: "Address", key: "address" },
];

const parameters = ref([
  {
    id: "P-01",
    name: "Temperature",
    value: "72℃",
    status: "NORMAL",
    address: "PLC_D100",
    description: "Temperature Sensor",
  },
  {
    id: "P-02",
    name: "Pressure",
    value: "1.2bar",
    status: "ERROR",
    address: "PLC_D101",
    description: "Pressure Sensor",
  },
  {
    id: "P-03",
    name: "Flow",
    value: "15L/min",
    status: "NORMAL",
    address: "PLC_D102",
    description: "Flow Sensor",
  },
]);

const statusColor = (status: string) => {
  switch (status) {
    case "NORMAL":
      return "green";
    case "ERROR":
      return "red";
    default:
      return "grey";
  }
};

const onSelectParameter = (_: any, row: any) => {
  if (!row?.item) return;
  // console.log("그리드", row.item, row.item.columns);
  setTimeout(() => {
    selectedParam.value = row.item.columns;
    drawer.value = !drawer.value;
  }, 150);
};

const animated_menu = ref("");

function hoverAllMenu(num: number) {
  let animate_class = "animate__animated animate__rubberBand";
  animated_menu.value = num == 1 ? animate_class : "";
}

const menuShowValue = ref(false);
function menuShow(isClick: boolean) {
  menuShowValue.value = isClick;
}

const animated = ref("");

function hoverNext(num: number) {
  let animate_class = "animate__animated animate__rubberBand";
  animated.value = num == 1 ? animate_class : "";
}

function nextPage(value: boolean) {
  if (value) {
    router.push("/skill1");
  } else {
    router.push("/about");
  }
}
</script>
<style scoped>
.about-title {
  width: 100%;
  padding: 50px 40px 0 40px;
  display: flex;
  justify-content: space-between;
}
.about .about-title .title1 {
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
}
</style>
