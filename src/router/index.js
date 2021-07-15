import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/step2',
    name: 'step2',
    component: () => import('../views/step2.vue'),
  },
  {
    path: '/step3',
    name: 'step3',
    component: () => import('../views/step3.vue'),
  },
  {
    path: '/step4',
    name: 'step4',
    component: () => import('../views/step4.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
