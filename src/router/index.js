import VueRouter from "vue-router";
import login from "../views/login/login";
import register from "../views/register/register";
import menu from "../views/menu/menu";
import kitchen from "../views/kitchen/kitchen";
import listOfOrders from "../views/listOfOrders/listOfOrders";
import { auth } from "../../firebase.config";

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
    name: "list of orders",
    component: listOfOrders,
    meta: { requiresAuth: true }
  }
];

export const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = auth.currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("/login");
  } else {
    next();
  }
});

export default router;
