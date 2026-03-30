/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '',
          name: 'HelloWorld',
          component: () => import('@/components/HelloWorld.vue'),
        },
      ],
    },
    {
      path: '/about',
      component: Index,
      children: [
        {
          path: '',
          name: 'About',
          component: () => import('@/components/About.vue'),
        },
      ],
    },
  ],
})

export default router
