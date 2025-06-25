import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Products from '../pages/Products.vue'
import Blog from '../pages/Blog.vue'
import About from '../pages/About.vue'
import Engineering from '../pages/Engineering.vue'
import PrivacyPolicy from '../pages/PrivacyPolicy.vue'
import TermsOfService from '../pages/TermsOfService.vue'
import Contact from '../pages/Contact.vue'

// Declare gtag for TypeScript
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        { path: '/', name: 'home', component: Home },
        { path: '/products', name: 'products', component: Products },
        { path: '/blog', name: 'blog', component: Blog },
        { path: '/about', name: 'about', component: About },
        { path: '/engineering', name: 'engineering', component: Engineering },
        { path: '/privacy-policy', name: 'privacy-policy', component: PrivacyPolicy },
        { path: '/terms-of-service', name: 'terms-of-service', component: TermsOfService },
        { path: '/contact', name: 'contact', component: Contact }
    ]
})

// Google Analytics tracking for Vue Router
router.afterEach((to, from) => {
    // Check if gtag is available
    if (typeof window !== 'undefined' && window.gtag) {
        // Track page view
        window.gtag('event', 'page_view', {
            page_location: window.location.href,
            page_path: to.fullPath,
            page_title: document.title,
            event_category: 'navigation',
            event_label: 'vue_router_navigation'
        });

        // Track route change
        window.gtag('event', 'route_change', {
            event_category: 'navigation',
            event_label: to.name || to.path,
            value: 1,
            custom_parameter_1: from.path,
            custom_parameter_2: to.path,
            custom_parameter_3: to.fullPath
        });

        // Track hash changes specifically
        if (to.hash) {
            window.gtag('event', 'hash_navigation', {
                event_category: 'navigation',
                event_label: to.hash,
                value: 1,
                custom_parameter_1: to.path,
                custom_parameter_2: to.hash,
                custom_parameter_3: from.fullPath
            });
        }
    }
});

export default router