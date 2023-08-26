import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: ()=> import('../views/Countdown.vue')
    },
    {
      path: '/happy-birthday',
      name: 'happy-birthday',
      component: ()=> import('../views/HappyBirthday.vue')
    },
    {
      path: '/dedicated-book-for-you',
      name: 'dedicated-book-for-you',
      component: ()=> import('../views/book.vue')
    },
    {
      path: '/memories-with-you',
      name: 'memories-with-you',
      component: ()=> import('../views/Memories.vue')
    },
  ]
})


export default router
