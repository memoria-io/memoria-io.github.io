import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Solutions from '../pages/Solutions.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/products', name: 'products', component: Products },
        { path: '/about', name: 'about', component: About },
        { path: '/solutions', name: 'solution', component: Solutions }
    ]
})

export default router