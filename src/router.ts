import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Main",
    component: () => import("@/components/Main.vue"), // 동적 import
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/components/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
