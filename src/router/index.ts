import Vue from 'vue';
import VueRouter from 'vue-router';
import Users from '../views/Users.vue';
import ToDo from '../views/ToDo.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'users',
    component: Users,
  },
  {
    path: '/todo/:userId',
    name: 'todo',
    component: ToDo,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
