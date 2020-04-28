import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyQRs from '../views/MyQRs.vue'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myqrs',
    name: 'MyQRs',
    component: MyQRs,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeResolve((routeTo, routeFrom, next) => {
  if (routeTo.path) NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
