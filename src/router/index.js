import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const ifAuth = (to, from, next) => {
  if (!localStorage.getItem('userToken')) {
    next('/?message=no-login')
  } else {
    next()
  }
}


const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import( '../views/Home.vue'),
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
    beforeEnter: ifAuth,
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import( '../views/Order.vue'),
    props: (route) => ({
      pet_id: parseInt(route.query.pet_id)
    }),
    meta: { layout: 'main'},
  },
  {
    path: '/fast-order',
    name: 'OrderFast',
    component: () => import( '../views/Order.vue'),
    props: (route) => ({
      fast: true,
    }),
    meta: { layout: 'main' },
  },

  {
    path: '*',
    name: 'InvalidPage',
    component: () => import('../views/InvalidPage.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
