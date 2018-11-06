import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/AllUsersPage'
import User from '@/components/UsersPage'
import Assignment from '@/components/Assignment'
import Assignments from '@/components/Assignments'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      path: '/assignment',
      name: 'assignment',
      component: Assignments
    },
    {
      path: '/assignment/:id',
      name: 'assignmentDetail',
      component: Assignment
    }
  ]
})
