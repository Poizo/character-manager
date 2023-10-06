import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './styles.scss';
import { loginServiceInstance } from './services/login.service';


createApp(App)
    .provide('loginService', loginServiceInstance)
    .use(router)
    .mount('body');
