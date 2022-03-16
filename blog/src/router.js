import { createWebHistory, createRouter } from "vue-router";
import generalForum from "./components/generalForum.vue";
import homePage from "./components/home.vue";

const routes = [
  {
    path: "/general",
    component: generalForum,
  },
  {
    path: "/",
    component: homePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
