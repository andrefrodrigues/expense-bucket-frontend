import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './index.css';
import { routes } from './router';

const router = createRouter({
    routes,
    history: createWebHistory()
})

const app = createApp(App);
app.use(router);
app.mount('#app')
