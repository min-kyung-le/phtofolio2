<template>
  <div class="page about">
    <div class="about-title">
      <div class="title1">Diagram</div>
      <v-btn icon @click="close">
        <v-icon icon="mdi-close" />
      </v-btn>
    </div>
    <div class="detail">{{ comment }}</div>
    <div ref="diagramDiv" style="width: 100%; height: 600px"></div>
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
    <v-expand-transition>
      <Menu v-if="menuShowValue" @closeMenu="menuShow(false)" />
      <DiagramDetail v-if="drawer" :param="selectedParam" />
    </v-expand-transition>
  </div>
</template>

<script lang="ts" setup>
import Menu from "./Menu.vue";
import DiagramDetail from "./DiagramDetail.vue";
import * as go from "gojs";
import { ref, onMounted, watch } from "vue";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import router from "@/router";
import { useStore } from "vuex";

const store = useStore();
gsap.registerPlugin(TextPlugin);

const emit = defineEmits(["selectParameter", "modelValue"]);
const diagramDiv = ref<HTMLDivElement | null>(null);

const getParamStyle = (status: string) => {
  switch (status) {
    case "NORMAL":
      return { color: "#4CAF50", icon: "●" };
    case "ERROR":
      return { color: "#F44336", icon: "▲" };
    default:
      return { color: "#BDBDBD", icon: "?" };
  }
};

function close() {
  emit("modelValue", "diagram", false);
}
const drawer = ref(false);
const selectedParam = ref<any>(null);

const onSelectParameter = (param: any) => {
  if (!param || !param.key) return;

  setTimeout(() => {
    selectedParam.value = param;
    drawer.value = !drawer.value;
  }, 150);
};

onMounted(() => {
  titleAni(1);
  nextAni();

  if (!diagramDiv.value) return;
  const $ = go.GraphObject.make;

  const diagram = $(go.Diagram, diagramDiv.value, {
    "undoManager.isEnabled": true,
    layout: $(go.ForceDirectedLayout),
    ModelChanged: (e) => {
      if (e.isTransactionFinished) {
        localStorage.setItem("equipmentDiagram", diagram.model.toJson());
      }
    },
  });

  /** 설비 노드 */
  diagram.nodeTemplateMap.add(
    "EQUIPMENT",
    $(
      go.Node,
      "Auto",
      { movable: true },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(go.Shape, "RoundedRectangle", {
        fill: "#1976D2",
      }),
      $(
        go.TextBlock,
        { margin: 10, stroke: "#fff", font: "bold 13px sans-serif" },
        new go.Binding("text", "name")
      )
    )
  );

  /** 파라미터 노드 */
  diagram.nodeTemplateMap.add(
    "PARAMETER",
    $(
      go.Node,
      "Auto",
      {
        click: (_, node) => onSelectParameter(node.data),
      },
      new go.Binding("location", "loc", go.Point.parse).makeTwoWay(
        go.Point.stringify
      ),
      $(
        go.Shape,
        "RoundedRectangle",
        new go.Binding("fill", "status", (s) => getParamStyle(s).color)
      ),
      $(
        go.Panel,
        "Vertical",
        $(
          go.TextBlock,
          { margin: 2, font: "bold 11px sans-serif" },
          new go.Binding("text", "name")
        ),
        $(go.TextBlock, new go.Binding("text", "value")),
        $(
          go.TextBlock,
          new go.Binding("text", "status", (s) => getParamStyle(s).icon)
        )
      )
    )
  );

  diagram.linkTemplate = $(
    go.Link,
    $(go.Shape),
    $(go.Shape, { toArrow: "Standard" })
  );

  const saved = localStorage.getItem("equipmentDiagram");

  diagram.model = saved
    ? go.Model.fromJson(saved)
    : new go.GraphLinksModel(
        [
          {
            key: "EQ",
            category: "EQUIPMENT",
            name: "Main Equipment",
            loc: "0 0",
          },
          {
            key: "P1",
            category: "PARAMETER",
            name: "Temperature",
            value: "72℃",
            status: "NORMAL",
            address: "PLC_D100",
            description: "Temperature Sensor",
            loc: "-150 -100",
          },
          {
            key: "P2",
            category: "PARAMETER",
            name: "Pressure",
            value: "1.2bar",
            status: "ERROR",
            address: "PLC_D101",
            description: "Pressure Sensor",
            loc: "150 -100",
          },
        ],
        [
          { from: "EQ", to: "P1" },
          { from: "EQ", to: "P2" },
        ]
      );
});

const comment =
  "단일 설비에 연결된 파라미터들을 GoJS 기반 구조도로 시각화한 화면으로, 파라미터 상태에 따라 색상·아이콘·툴팁을 제공하고 사용자 인터랙션(선택, 드래그, 상태 유지)을 지원하는 구조도";

const tl = gsap.timeline();

function nextAni() {
  let time = "<0.7";
  if (store.state.isMenuShow) {
    menuAni();
    time = "<0.2";
  }
  tl.from(
    ".next",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    time
  );
}
function menuAni() {
  tl.from(
    ".all-menu",
    {
      opacity: 0,
      translateX: -50,
      duration: 0.5,
    },
    "<0.5"
  );
}

function titleAni(num: number) {
  tl.from(
    `.title${num}`,
    {
      translateX: -50,
      duration: 0.4,
      opacity: 0,
    },
    "<0.2"
  );
}

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
.about .menu-contents {
  top: 0;
}
.about-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.about .about-title .title1 {
  font-size: 25px;
  display: flex;
  justify-content: flex-start;
}
.v-overlay__content {
  top: unset;
}
</style>
