import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Search.vue')
  },
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/Music.vue')
  },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/Movie.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
