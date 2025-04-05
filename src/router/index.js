import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Convenios from "@/views/convenios/Convenios.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/convenios',
            name: 'home',
            component: Home,
            children: [
                {
                    path: '/convenios',
                    name: 'convenios',
                    component: Convenios,
                },
            ]
        }
    ],
})

export default router
