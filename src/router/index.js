import Vue from 'vue'
import Router from 'vue-router'
import AuthGuard from './auth-guard'
import Home from '@/components/Home'
import Help from '@/components/About/Help'
import Account from '@/components/Auth/Account'
import Login from '@/components/Auth/Login'
import Reg from '@/components/Auth/Reg'
import Tasks from '@/components/Tasks/UserTaskList'
import Projects from '@/components/Project/ProjectList'
import ProjectTasks from '@/components/Project/ProjectTasksList'
import NewProject from '@/components/Project/NewProject'
import NewTask from '@/components/Tasks/NewTask'
import Task from '@/components/Tasks/Task'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/help',
      name: 'help',
      component: Help
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      beforeEnter: AuthGuard
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/reg',
      name: 'reg',
      component: Reg
    },
    {
      path: '/tasks',
      name: 'tasks',
      component: Tasks
    },
    {
      path: '/projects',
      name: 'projects',
      component: Projects,
      beforeEnter: AuthGuard
    },
    {
      path: '/projectTasks/:id',
      name: 'projectTasks',
      component: ProjectTasks,
      beforeEnter: AuthGuard
    },
    {
      path: '/newProject',
      name: 'newProject',
      component: NewProject,
      beforeEnter: AuthGuard
    },
    {
      path: '/newTask',
      name: 'newTask',
      component: NewTask,
      beforeEnter: AuthGuard
    },
    {
      path: '/task/:id',
      props: true,
      name: 'task',
      component: Task
    }
  ],
  mode: 'history'
})
