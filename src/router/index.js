import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

import Self from '../components/Self-introduction.vue'
import Experience from '../components/Experience.vue'
import Contact from '../components/contact.vue'
import Technology from '../components/Technology-stack.vue'
const routes = [
    { path: '/self', component: Self },
    { path: '/experience', component: Experience },
    { path: '/contact', component: Contact },
    { path: '/technology', component: Technology },
]
  
const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })
  
export default router