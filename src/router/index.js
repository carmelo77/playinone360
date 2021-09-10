import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: '/filtrado-play-in-one'
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
    path: '/buscar-hoteles',
    name: 'BuscarHoteles',
    component: () => import('@/views/Hoteles/Busqueda')
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

  {
    path: '/buscar-campos-de-golf',
    name: 'BuscarCampos',
    component: () => import('@/views/CamposdeGolf/Busqueda')
  },
  {
    path: '/campos-de-golf/resultado',
    name: 'CamposResultados',
    component: () => import('@/views/CamposdeGolf/ListadoBusqueda')
  },
  {
    path: '/campos-de-golf/detalle/:id',
    name: 'DetalleGolf',
    component: () => import('@/views/CamposdeGolf/DetalleBusqueda')
  },

  {
    path: '/filtrado-play-in-one',
    name: 'FiltradoResultados',
    component: () => import('@/views/FilterResults/Main')
  },
  {
    path: '/resultado/:search/:id',
    name: 'ResultadoDetalle',
    component: () => import('@/views/FilterResults/DetalleResultado')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
