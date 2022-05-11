import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import AssinaturaApr from '@/views/AssinaturaApr.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: LoginView
  },
  {
    path: '/assinatura-apr',
    name: 'assinatura-apr',
    component: AssinaturaApr
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
