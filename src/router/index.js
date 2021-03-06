import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginPage from '../views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		redirect: '/login'
	},
  {
    path: '/login',
    name: 'home',
    component: LoginPage
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoView.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
