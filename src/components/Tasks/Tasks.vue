<template>
  <v-app>
    <v-content>
      <v-container>
        <v-row>
          <v-card v-for="stage in stages" :key="stage.id">
            <v-toolbar :color="stage.color" dark>
              <v-toolbar-title class="">{{ stage.title }}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon
              :to="'/newTask/'">
                <v-icon
                v-if="stage.id==1"
                @click="addTask">
                note_add</v-icon>
              </v-btn>
            </v-toolbar>
            <v-list-item v-for="task in tasks" :key="task.id">
              <v-list-item-avatar><v-img :src="'https://sun1.dataix-kz-akkol.userapi.com/_4wJcwOHynM4Q_OVZ1GHtjPXgQXJcxOKZ1ZKCA/hLPhmSJPpTo.jpg'"></v-img></v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="title">{{ task.title }}</v-list-item-title>
                <v-list-item-subtitle>{{task.start}}-{{task.end}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-card>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      stages: [
        { id: 1, title: 'Задания', color: 'rgb(59, 144, 255)' },
        { id: 2, title: 'Выполняются', color: 'blue' },
        { id: 3, title: 'На рассмотрении', color: 'primary' },
        { id: 4, title: 'Выполнено', color: 'indigo' }
      ]
    }
  },
  computed: {
    tasks () {
      //return this.$store.getters.tasks
    }
  },
  methods: {
    openTask () {
    },
    addTask () {
    },
    updateTask (id, status) {
      this.Task.find(b => b.id === Number(id)).status = status
    }
  }
}
</script>
