import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/HomeView',
    name: '页面1',
    component: () => import(/* webpackChunkName: "首页" */ '../views/HomeView.vue'),
  },
  {
    path: '/PageIndex',
    name: '页面2',
    component: () => import(/* webpackChunkName: "内容" */ '../views/PageIndex.vue'),
  },
  {
    path: '/',
    redirect: '/PageIndex',
  }, //初次加载路由地址
];

const router = new VueRouter({
  routes,
});

export default router;
