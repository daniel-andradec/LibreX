import { nextTick } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import store from "../store/index.js";

// Views
import LoginView from "@/views/LoginView.vue"
import BookView from "@/views/BookView.vue";
import ProfileView from "@/views/ProfileView.vue";
import ListView from "@/views/ListView.vue";


const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "Home"
    },
    component: ListView,
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
  {
    path: "/profile",
    name: "profile",
    meta: {
      title: "Profile"
    },
    component: ProfileView,
  },
  {
    path: "/list",
    name: "list",
    meta: {
      title: "List"
    },
    component: ListView,
  }
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

router.beforeEach((to, from, next) => {
  if (!store.state.user.user.id) {
    const user = localStorage.getItem("user");
    if (user) {
      store.dispatch("setUser", JSON.parse(user));
    } else {
      // go to login page if user is not logged in
      if (to.name !== "login") {
        window.alert("Você precisa estar logado para acessar esta página!");
        next({ name: "login" });
        return;
      }
    }
  }

  next();
});

export default router;