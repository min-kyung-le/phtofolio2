<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">그리드 활용 예시</div>
      <v-btn icon @click="close">
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>
    <div class="detail">
      복수 설비에 연결된 파라미터 값을 그리드 형태로 시각화한 화면의 예시로,
      파라미터 상태 및 주요 데이터를 한눈에 확인할 수 있도록 구성된 조회
      화면입니다.
    </div>
    <v-container fluid>
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-data-table
              :headers="headers"
              :items="parameters"
              :items-per-page="10"
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
                  :color="statusColor(item.props.title.status)"
                  variant="flat"
                >
                  {{ item.props.title.status }}
                </v-chip>
              </template>
            </v-data-table>
          </v-card>
        </v-col>
      </v-row>
      <v-row
        ><v-col
          ><input
            ref="fileInputRef"
            type="file"
            accept=".xlsx, .xls"
            hidden
            @change="importFromExcel"
          />
          <v-btn color="secondary" @click="openFileDialog"
            >Excel Import</v-btn
          ></v-col
        ><v-col cols="4"
          ><v-btn color="primary" @click="exportToExcel">
            Excel Export
          </v-btn></v-col
        ></v-row
      >
      <v-snackbar v-model="snackbar" :color="snackbarColor" timeout="1000">
        {{ snackbarMessage }}
      </v-snackbar>

      <v-dialog v-model="confirmDialogOpen" max-width="420">
        <v-card>
          <v-card-title>데이터 Import 확인</v-card-title>

          <v-card-text>
            현재 그리드 데이터가 엑셀 데이터로 변경됩니다. 계속
            진행하시겠습니까?
          </v-card-text>

          <v-card-actions>
            <v-spacer />
            <v-btn variant="text" @click="confirmDialogOpen = false">
              취소
            </v-btn>
            <v-btn color="primary" @click="confirmImport"> 확인 </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <!-- <div class="sub-info-div">
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
      </div> -->
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
import * as XLSX from "xlsx";

const store = useStore();
gsap.registerPlugin(TextPlugin);

const drawer = ref(false);
const selectedParam = ref<any>(null);

const snackbar = ref(false);
const snackbarMessage = ref("");
const snackbarColor = ref<"success" | "error" | "warning">("success");

function showToast(message: string, color: "success" | "error" | "warning") {
  snackbarMessage.value = message;
  snackbarColor.value = color;
  snackbar.value = true;
}

const pendingImportData = ref<ParameterRow[] | null>(null);

const confirmDialogOpen = ref(false);

function confirmImport() {
  if (!pendingImportData.value) return;

  parameters.value = pendingImportData.value;

  pendingImportData.value = null;
  confirmDialogOpen.value = false;

  showToast("엑셀 데이터가 성공적으로 적용되었습니다.", "success");
}

/*
const gridData =  ref<ParameterRow[]>([
  { id: 1, parameterName: "TEMP", value: 120, status: "NORMAL" },
  { id: 2, parameterName: "PRESSURE", value: 30, status: "WARNING" },
]);
*/
interface ParameterRow {
  id: string;
  name: string;
  value: string;
  status: "NORMAL" | "WARNING" | "ERROR";
  address: string;
  description: string;
}
const parameters = ref<ParameterRow[]>([
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

function exportToExcel() {
  const worksheet = XLSX.utils.json_to_sheet(parameters.value);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Data");
  XLSX.writeFile(workbook, "equipment-parameters.xlsx");
}

const statusColor = (status: string) => {
  switch (status) {
    case "NORMAL":
      return "green";
    case "ERROR":
      return "red";
    case "WARNING":
      return "yellow";
    default:
      return "grey";
  }
};
const fileInputRef = ref<HTMLInputElement | null>(null);
function openFileDialog() {
  fileInputRef.value?.click();
}
function importFromExcel(event: Event) {
  const input = event.target as HTMLInputElement;
  if (!input.files || input.files.length === 0) return;

  const file = input.files[0];
  const reader = new FileReader();

  reader.onload = (e) => {
    const binaryData = e.target?.result;
    if (!binaryData) return;

    const workbook = XLSX.read(binaryData, { type: "binary" });

    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[sheetName];

    const jsonData = XLSX.utils.sheet_to_json<ParameterRow>(worksheet, {
      header: ["id", "name", "value", "status", "address", "description"],
      range: 1,
      defval: "",
      blankrows: true,
    });

    if (jsonData.length > 100) {
      showToast(
        "엑셀 데이터는 최대 100건까지만 업로드할 수 있습니다.",
        "warning"
      );
      input.value = "";
      return;
    }

    pendingImportData.value = jsonData;
    confirmDialogOpen.value = true;

    input.value = "";
  };

  reader.readAsBinaryString(file);
}

const emit = defineEmits(["modelValue"]);

function close() {
  emit("modelValue", "grid", false);
}
const headers = [
  { title: "Id", key: "id" },
  { title: "Name", key: "name" },
  { title: "Value", key: "value" },
  { title: "Status", key: "status" },
  { title: "Address", key: "address" },
];

const onSelectParameter = (_: any, row: any) => {
  if (!row?.item) return;

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
.page {
  padding: 30px 40px 0 40px;
  height: 80vh;
}
.about-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 0 30px;
}
.detail {
  padding: 0 30px;
}
.about .about-title .title1 {
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
}
</style>
