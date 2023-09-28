import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./containers/Home.vue";
import Login from "./containers/Login.vue";

const routes: RouteRecordRaw[] = [
    { path: '/login', name: 'login', component: Login, beforeEnter: (to, from) => {
      console.log('to => ', to);
      console.log('from => ', from);
      return true;
    } },
    { path: '/home', name: 'home', component: Home },
  ];

export  const router = createRouter({
  history: createWebHistory(),
  routes,
});
