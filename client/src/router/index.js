import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";

// Views
import HomeView from '@/views/HomeView.vue'
import LoginView from "@/views/LoginView.vue"
import BookView from "@/views/BookView.vue";


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
  {
    path: "/book",
    name: "book",
    meta: {
      title: "Book"
    },
    component: BookView,
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