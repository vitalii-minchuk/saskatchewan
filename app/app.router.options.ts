import type { RouterConfig } from "nuxt/schema";

const routes = [
  {
    name: "Home",
    path: "/",
    component: () => import("~/pages/index.vue"),
  },
  {
    name: "About",
    path: "/about",
    component: () => import("~/pages/about/index.vue"),
  },
];
export default <RouterConfig>{
  routes: (_routes) => [...routes],
};
