import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "首页",
    component: () =>
      import(/* webpackChunkName: "首页" */ "../views/HomeView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
