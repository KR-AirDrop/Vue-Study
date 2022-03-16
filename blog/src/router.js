import { createWebHistory, createRouter } from "vue-router";
import generalForum from "./components/generalForum.vue";
import homePage from "./components/home.vue";
import detailPage from "./components/detail.vue";

const routes = [
  {
    path: "/",
    component: homePage,
  },
  {
    path: "/general",
    component: generalForum,
  },
  {
    path: "/detail/:id(\\d+)",
    component: detailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
