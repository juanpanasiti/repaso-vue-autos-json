import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/nuestros-autos',
    name: 'NuestrosAutos',
    component: () => import('../views/NuestrosAutos.vue')
  },
  {
    path: '/detalle-auto/:id',
    name: 'DetalleAuto',
    component: () => import('../views/DetalleAuto.vue')
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: () => import('../views/Contacto.vue')
  },
  {
    path: '/busqueda/:filter',
    name: 'Busqueda',
    component: () => import('../views/Busqueda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
