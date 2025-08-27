import { createRouter, createWebHistory } from "vue-router";
import AdminBoard from "./AdminBoard.vue";
import DisplayBoard from "./DisplayBoard.vue";

const routes = [
  { path: "/admin", component: AdminBoard },
  { path: "/display", component: DisplayBoard },
  { path: "/", redirect: "/display" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
