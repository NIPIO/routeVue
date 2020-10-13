import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/servicios',
    name: 'servicios',
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
   {
    path: '/lista',
    name: 'lista',
    component: () => import(/* webpackChunkName: "about" */ '../views/Lista.vue')
  },
  {
    path: '/fotos/:id',
    name: 'fotos',
    component: () => import(/* webpackChunkName: "about" */ '../views/Fotos.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
