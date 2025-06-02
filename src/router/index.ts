import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import About from '../pages/About.vue'
import Engineering from '../pages/Engineering.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermsOfService from '../pages/TermsOfService.vue'
import Contact from '../pages/Contact.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/products', name: 'products', component: Products },
        { path: '/about', name: 'about', component: About },
        { path: '/engineering', name: 'engineering', component: Engineering },
        { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy },
        { path: '/terms-of-service', name: 'terms-of-service', component: TermsOfService },
        { path: '/contact', name: 'contact', component: Contact }
    ]
})

export default router