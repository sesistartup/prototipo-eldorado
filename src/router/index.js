import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/Login.vue'
import AssinaturaApr from '@/views/AssinaturaApr.vue'
import HomeView from '@/views/Home.vue'
import AprForm from '@/views/AprForm.vue'

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
    path: '/home',
    name: 'home-view',
    component: HomeView
  },
  {
    path: '/apr',
    name: 'apr',
    component: AprForm
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
