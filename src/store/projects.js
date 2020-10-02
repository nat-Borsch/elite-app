 import * as fb from 'firebase'

class Project {
  constructor (id = null, title, deadlines, closed = false) {
    this.id = id
    this.title = title
    this.deadlines = deadlines
    this.closed = closed
  }
}
export default {
  state: {
    projects: [
      //{ id: 1, icon: 'folder', title: 'Урановый Рудник', deadline: '05.04.2020 - 09.06.2021', closed: false }
      //{ id: 2, icon: 'folder', title: 'Многоэтажное здание', deadline: 'Jan 10, 2020 - Jan 20, 2020', closed: false },
      { id: 3, icon: 'folder', title: 'Промышленное сооружение', deadline: '12.05.2020 - 19.10.2020', closed: false },
      { id: 4, icon: 'folder', title: 'Многоэтажное здание', deadline: '06.12.2020 - 04.10.2021', closed: false }

    ]
  },
  mutations: {
    createProject (state, payload) {
      state.blocks.push(payload)
    }
  },
  actions: {
    async createProject ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)
      try {
        const newProject = new Project(
          payload.title,
          payload.deadlines
        )
        const project = await fb.database().ref('projects').push(newProject)
        commit('setLoading', false)
        commit('createProject', {
          ...newProject,
          id: project.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    projects (state) {
      return state.projects
    },
    projectById (state) {
      return projectId => {
        // eslint-disable-next-line
        return state.projects.find(project => projects.id == projectId)
      }
    }
  }
}
