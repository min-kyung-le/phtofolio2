import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/Main.vue";
import About from "@/components/About.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      enterClass: "",
      leaveClass: "animate__animated animate__fadeOutLeftBig",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      enterClass: "animate__animated animate__fadeInRightBig",
      leaveClass: "animate__animated animate__fadeOutLeftBig",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
