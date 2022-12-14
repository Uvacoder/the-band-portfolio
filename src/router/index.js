import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MusicView from "../views/MusicView.vue";
import GalleryView from "../views/GalleryView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/music",
    name: "music",
    component: MusicView,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: GalleryView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ "../views/AboutView.vue");
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
