import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./containers/Home.vue";
import Login from "./containers/Login.vue";
import { loginServiceInstance } from './services/login.service';

const routes: RouteRecordRaw[] = [
    { path: '/login', name: 'login', component: Login},
    { path: '/home', name: 'home', component: Home, beforeEnter: (to, from) => {
      return loginServiceInstance.isConnected;
    }  },
  ];

export  const router = createRouter({
  history: createWebHistory(),
  routes,
});
