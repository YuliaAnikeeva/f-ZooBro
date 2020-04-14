import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/recovery-password',
    name: 'RecoveryPassword',
    component: () => import( '../views/RecoveryPassword.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '../views/Profile.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import( '../views/Admin.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import( '../views/Order.vue'),
    meta: { layout: 'main' },
  },
  {
    path: '*',
    name: '404',
    component: () => import('../views/404.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
