import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import './styles.scss';


createApp(App)
    .use(router)
    .provide('storageService', {
        pony: "poney",
        log: (truc: any) => console.log(truc)
      })
    .mount('body');
