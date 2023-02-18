import { createApp, nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'
import './index.css';
import { routes } from './router';
import { createPinia } from 'pinia';

const router = createRouter({
    routes,
    history: createWebHistory()
})
router.afterEach((to, from) => {
    // Use next tick to handle router history correctly
    // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
    nextTick(() => {
        document.title = to.meta.title || 'Expense Bucket';
    });
});
const pinia = createPinia();
const app = createApp(App)
app.use(pinia);
app.use(router);
app.mount('#app');
