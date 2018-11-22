import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/index'
import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'
import SignUp from '@/components/login/Signup'
import Login from '@/components/login/Login'
import Todo from '@/components/Todo/index'
import Diet from '@/components/Diet/index'
import Diary from '@/components/Diary/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: Users
    },
    {
      path: '/user/:id',
      name: 'detail',
      component: User
    },
    {
      path: '/login/signUp',
      name: 'signUp',
      component: SignUp
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/todo',
      name: 'todo',
      component: Todo
    },
    {
      path: '/diet',
      name: 'diet',
      component: Diet
    },
    {
      path: '/diary',
      name: 'diary',
      component: Diary
    }
  ]
})
