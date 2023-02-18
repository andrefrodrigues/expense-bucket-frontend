export const routes = [
    { path: '/', component: import('./pages/Home/Home.vue'), meta: {title: 'Expense Bucket - Home page'} },
    { path: '/signup', component: import('./pages/Signup/Signup.vue'), meta: {title: 'Expense Bucket - Signup'} },
    {path: '/login', component: import('./pages/Login/Login.vue'), meta: {title: 'Expense Bucket - Login'}}
];