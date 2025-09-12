import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/portfolio/:id',
            name: 'portfolio',
            component: () => import('../views/PortfolioView.vue')
        },
        {
            path: '/portfolios',
            name: 'portfolios',
            component: () => import('../views/PortfoliosView.vue')
        },
        {
            path: '/resume',
            name: 'resume',
            component: () => import('../views/ResumeView.vue')
        }
    ]
})

export default router