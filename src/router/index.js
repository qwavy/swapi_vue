import { createRouter, createWebHistory } from 'vue-router';
import MainPage from './MainPage.vue'
import PersonList from "./pages/PersonList"

const routes = [
    {
        path: '/',
        component: MainPage
    },
    {
        path:'/person',
        component: PersonList
    }
]
const router = createRouter({ history: createWebHistory(), routes });

export default router;