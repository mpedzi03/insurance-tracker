import { createWebHistory, createRouter } from 'vue-router'
import _Overview from '@/components/tabs/_Overview'
import Health from '@/components/tabs/Health'
import Dental from '@/components/tabs/Dental'
import Vision from '@/components/tabs/Vision'
import Auto from '@/components/tabs/Auto'

const routes = [
  {
    path: '/',
    name: 'overview',
    component: _Overview
  },
  {
    path: '/health',
    name: 'health',
    component: Health
  },
  {
    path: '/dental',
    name: 'dental',
    component: Dental
  },
  {
    path: '/vision',
    name: 'vision',
    component: Vision
  },
  {
    path: '/auto',
    name: 'auto',
    component: Auto
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router