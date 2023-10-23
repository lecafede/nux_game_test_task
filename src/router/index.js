import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '@/views/Main.vue';
import UserPage from '@/views/User/User.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserPage,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
