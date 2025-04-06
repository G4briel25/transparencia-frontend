import {createRouter, createWebHistory} from 'vue-router'
import Home from "@/views/Home.vue";
import Convenios from "@/views/convenios/Convenios.vue";
import ConveniosDetalhes from "@/views/convenio-detalhes/ConvenioDetalhes.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect:"/convenios",
            children: [
                {
                    path: '/convenios',
                    name: 'convenios',
                    component: Convenios,
                    meta: {
                        breadcrumb: [
                            { nome: "Convênios" },
                        ],
                    }
                },
                {
                    path: "convenios/:convenioId",
                    name: "convenio-detalhe",
                    component: ConveniosDetalhes,
                    props: true,
                    meta: {
                        breadcrumb: [
                            { nome: "Convênios", url: "/convenios" },
                            { nome: "Detalhamento do Convênio" },
                        ],
                    }
                }
            ]
        }
    ],
})

export default router
