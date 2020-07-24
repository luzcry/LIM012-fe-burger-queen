import VueRouter from "vue-router";
import login from "../views/login/login";
import register from "../views/register/register";
import menu from "../views/menu/menu";
import kitchen from "../views/kitchen/kitchen";
import listOfOrders from "../views/listOfOrders/listOfOrders";
import { getCurrentUser } from "../data/auth";

const routes = [
  {
    path: "/",
    name: "login",
    component: login
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/register",
    name: "register",
    component: register
  },
  {
    path: "/menu",
    name: "menu",
    component: menu
  },
  {
    path: "/kitchen",
    name: "Kitchen",
    component: kitchen
  },
  {
    path: "/listOfOrders",
    name: "listOfOrders",
    component: listOfOrders,
    meta: { requiresAuth: true }
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !(await getCurrentUser())) {
    next("/login");
  } else {
    next();
  }
});

export default router;
