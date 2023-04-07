import { createRouter, createWebHistory } from 'vue-router'

import home from "@/views/home.vue"
import profile from "@/views/profile.vue"
import cart from "@/views/cart.vue"
import info from "@/views/info.vue"
import search from "@/views/search.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
  ]
})

export default router
