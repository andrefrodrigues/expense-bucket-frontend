import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './index.css';
import { routes } from './router';
import { createPinia } from 'pinia';

const router = createRouter({
    routes,
    history: createWebHistory()
})
const pinia = createPinia();
const app = createApp(App)
app.use(pinia);
app.use(router);
app.mount('#app')
