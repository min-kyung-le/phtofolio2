import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Main.vue";
import About from "@/components/About.vue";
import Skill1 from "./components/Skill1.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/skill1",
    name: "Skill1",
    component: Skill1,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
