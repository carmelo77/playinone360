import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/CamposDeGolf/Busqueda')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Ingreso')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import('@/views/Login/Registro')
  },
  {
    path: '/listado-campos-de-golf',
    name: 'ListaCamposPorBusqueda',
    component: () => import('@/views/CamposDeGolf/ListadoBusqueda.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
