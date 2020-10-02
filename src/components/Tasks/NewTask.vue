<template>
<v-app>
  <v-content>
    <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <h1 class="text--secondary mb-3">Новая задача</h1>
      <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      v-model="title"
      label="Название"
      type="text"
      :rules="titleRules"
      outlined
    ></v-text-field>
    <v-textarea
    v-model="description"
    label="Описание"
    type="text"
    outlined=""></v-textarea>
    <v-select
      v-model="project"
      :items="projects"
      label="Проект"
      :rules="projectRules"
      outlined
    ></v-select>
    <v-select
      v-model="executor"
      :items="executors"
      label="Исполнитель"
      :rules="executorRules"
      outlined
    ></v-select>
    <v-layout>
      <v-menu
        ref="startMenu"
        v-model="startMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="start"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="start"
            class="mt-3"
            label="Начало выполнения"
            :rules="deadlineRules"
            prepend-icon="event"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="start"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="startMenu = false"
          >
            Cancel
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.startMenu.save(start)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
      <v-menu
        ref="endMenu"
        v-model="endMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="end"
        transition="scale-transition"
        min-width="290px"
        offset-y
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="end"
            class="mt-3"
            label="Окончание"
            :rules="deadlineRules"
            prepend-icon="event"
            dense
            readonly
            outlined
            hide-details
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="end"
          no-title
          scrollable
        >
          <v-spacer></v-spacer>
          <v-btn
            text
            color="primary"
            @click="endMenu = false"
          >
            Отмена
          </v-btn>
          <v-btn
            text
            color="primary"
            @click="$refs.endMenu.save(end)"
          >
            OK
          </v-btn>
        </v-date-picker>
      </v-menu>
    </v-layout>
    <br>
    <v-layout justify-space-between>
      <v-flex xs12>
        <v-btn class="mr-4 mt-4 warning">
          Прикрепить
          <v-icon right dark>cloud_upload</v-icon>
        </v-btn>
        <v-btn class="mr-4 mt-4 success"
        :loading="loading"
        :disabled="!valid || loading"
        @click="createTask"
        >Создать</v-btn>
        <v-btn class="mr-4 mt-4 error" @click="clear">Очистить</v-btn>
        <v-btn class="mr-4 mt-4" :to="'/tasks'">Отмена</v-btn>
      </v-flex>
    </v-layout>
  </v-form>
    </v-flex>
  </v-layout>
</v-container>
  </v-content>
</v-app>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      executor: null,
      project: null,
      stage: 1,
      executors: [
        'natdevelop21@gmail.com'
      ],
      projects: [
        'Урановый рудник'
      ],
      stages: ['Задания', 'Выполняются', 'На рассмотрении', 'Выполнено'],
      start: '',
      end: '',
      startMenu: false,
      endMenu: false,
      valid: false,
      titleRules: [
        v => !!v || 'Введите название'
      ],
      projectRules: [
        v => !!v || 'Выберите проект'
      ],
      executorRules: [
        v => !!v || 'Выберите исполнителя'
      ],
      deadlineRules: [
        v => !!v || 'Выберите сроки'
      ]
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createTask () {
      if (this.$refs.form.validate()) {
        // logic
        const task = {
          title: this.title,
          description: this.description,
          start: this.start,
          end: this.end,
          project: this.project,
          stage: this.stage
        }
        this.$store.dispatch('createTask', task)
          .then(() => {
            this.$router.push('/tasks')
          })
          .catch(() => {})
      }
    },
    clear () {
      this.title = ''
      this.description = ''
      this.project = null
      this.executor = null
      this.start = ''
      this.end = ''
      this.startMenu = false
      this.endMenu = false
    }
  }
}
</script>
