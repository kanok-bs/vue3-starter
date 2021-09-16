import { AuthGuard } from "@/utils/auth";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "",
    beforeEnter: AuthGuard,
    component: Home,
    redirect:"Home",
    children: [
      {
        path: "/home",
        name: "Home",
        component: () => import("../views/Dashboard.vue"),
      },
      {
        path: "/userlist",
        name: "userlist",
        component: () => import("../views/users/UserView.vue"),
      },
      {
        path: "/useradd",
        name: "useradd",
        component: () => import("../views/users/AddUserView.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
