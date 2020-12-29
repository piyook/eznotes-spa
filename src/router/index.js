import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Landing'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/userhome',
    name : 'userHome',
    component: () => import(/* webpackChunkName: "UserHome" */ '../pages/UserHome.vue')
  },
  {
    path: '/noticeboard',
    name : 'noticeboard',
    component: () => import(/* webpackChunkName: "NoticeBoard" */ '../pages/NoticeBoard.vue')
  },
  {
    path: '/note',
    name : 'note',
    component: () => import(/* webpackChunkName: "Note" */ '../pages/Note.vue')
  },
  {
    path: '/settings',
    name : 'settings',
    component: () => import(/* webpackChunkName: "Settings" */ '../pages/Settings.vue')
  },
  {
    path: '/login',
    name : 'login',
    component: () => import(/* webpackChunkName: "LogIn" */ '../pages/LogIn.vue')
  },
  {
    path: '/register',
    name : 'register',
    component: () => import(/* webpackChunkName: "Register" */ '../pages/LogIn.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
