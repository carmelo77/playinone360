import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Hoteles/Busqueda')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/Ingreso')
  },
  {
    path: '/registrame',
    name: 'Registro',
    component: () => import('@/views/Login/Registro')
  },
  {
    path: '/hoteles/resultado',
    name: 'HotelesResultados',
    component: () => import('@/views/Hoteles/ListadoBusqueda')
  },
  {
    path: '/hoteles/detalle/:id',
    name: 'DetalleHotel',
    component: () => import('@/views/Hoteles/DetalleBusqueda')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
