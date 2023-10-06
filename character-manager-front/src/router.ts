import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./containers/Home.vue";
import Login from "./containers/Login.vue";
import { loginServiceInstance } from './services/login.service';

const routes: RouteRecordRaw[] = [
    { path: '/login', name: 'login', component: Login,  beforeEnter: (to, from) => {
      return !loginServiceInstance.isConnected;
    }  },
    { path: '/home', name: 'home', component: Home, beforeEnter: (to, from) => {
      return loginServiceInstance.isConnected;
    }  },
  ];

export  const router = createRouter({
  history: createWebHistory(),
  routes,
});
