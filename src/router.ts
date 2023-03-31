import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Main.vue";
import About from "@/components/About.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/about",
    component: About,
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
