import { createWebHistory, createRouter } from "vue-router";
import Main from "./components/Main.vue";
import About from "./components/About.vue";
import Skill1 from "./components/Skill1.vue";
import Skill2 from "./components/Skill2.vue";
import Career1 from "./components/Career1.vue";
import Career2 from "./components/Career2.vue";
import CaptureImgs from "./components/CaptureImgs.vue";
import Contact from "./components/Contact.vue";
import Done from "./components/Done.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: Main,
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
  {
    path: "/skill2",
    name: "Skill2",
    component: Skill2,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/career1",
    name: "Career1",
    component: Career1,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/career2",
    name: "Career2",
    component: Career2,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/captureimgs",
    name: "Captureimgs",
    component: CaptureImgs,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      enterClass: "animate__animated animate__fadeIn",
      leaveClass: "animate__animated animate__fadeOut",
    },
  },
  {
    path: "/done",
    name: "Done",
    component: Done,
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
