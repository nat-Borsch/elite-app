import * as fb from 'firebase'
/* eslint-disable */
class Task {
  constructor(id=null, title, description, start, end, project, stage, executor) {
    this.id = id
    this.title = title
    this.description = description
    this.start = start
    this.end = end
    this.project = project
    this.stage = stage
    this.executor = executor
  }
}
export default {
  state: {
    tasks:[
      { id: 1, title: 'Форма 10', description: 'Определить состав проекта', start: '10.03.2020', end: '15.04.2020', project: 'Урановый рудник', stage: 'in-progress', executor: 1}
    ]
  },
  mutations: {
    createTask (state, payload) {
      state.tasks.push(payload)
    }
  },
  actions: {
    async createTask ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newTask = new Task(
          payload.title,  
          payload.description,
          payload.start,
          payload.end,
          payload.project,
          payload.stage,
          getters.user.id
        )
        const task = await fb.database().ref('tasks').push(newTask)
        commit('setLoading', false)
        commit('createTask', {
          ...newTask,
          id: task.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
      //commit('createTask', payload)
    }
  },
  getters: {
    blocks (state) {
      return state.tasks
    },
    userTasks (state) {
      return state.tasks
    },
    taskById (state) {
      return taskId => {
        // eslint-disable-next-line
        return state.tasks.find(task => task.id == taskId)
      }
    }
  }
}
