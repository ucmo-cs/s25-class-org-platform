import { createRouter, createWebHistory } from 'vue-router';
import Calendar from '../components/Calendar.vue';
import Class from "../components/Class.vue";

const routes = [
    { path: '/', name: 'Home', component: Calendar },
    { path: '/Class', name: 'Class', component: Class }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
