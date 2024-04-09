import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

// Views
import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home"
    },
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "Login"
    },
    component: LoginView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.afterEach((to) => {
  nextTick(() => {
    document.title = to.meta.title || "LibreX";
  });
});

export default router;