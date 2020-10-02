<template>
<v-content>
  <v-container fluid>
     <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card
    max-width="600"
    class="mx-auto"
  >
  <v-toolbar>
    <v-toolbar-title>Текущие проекты</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn icon
      :to="'/newProject'"><v-icon>add</v-icon>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
    <v-list two-line subheader>
      <v-subheader inset class="title">В процессе</v-subheader>
      <v-list-item
        v-for="project in projects"
        :key="project.id"
        v-if="!project.closed"
      >
      <v-row>
        <v-list-item-avatar>
          <v-icon
            v-text="project.icon"
          ></v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title v-text="project.title"></v-list-item-title>
          <v-list-item-subtitle v-text="project.deadline"></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-row>
            <v-col
            cols="6">
            <v-btn
          :to="'/projectTasks'"
          class="primary">Открыть</v-btn></v-col>
          <v-col cols="6"><v-btn
          class="error"
          @click.stop="dialog = true">Закрыть</v-btn>
          <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Закрытие проекта</v-card-title>
        <v-card-text>Вы действительно хотите закрыть проект?</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            text
            @click="dialog = false"
          >
            Отмена
          </v-btn>

          <v-btn
            color="primary"
            text
            @click="(project.closed=true)&&(dialog=false)"
          >
            Да
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog></v-col>
          </v-row>
        </v-list-item-action>
      </v-row>
      </v-list-item>
      <v-divider inset></v-divider>

      <v-subheader inset class="title">Закрыты</v-subheader>

      <v-list-item
        v-for="project in projects"
        :key="project.id"
        v-if="project.closed"
      >
        <v-list-item-avatar>
          <v-icon
            v-text="project.icon"
          ></v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-text="project.title"></v-list-item-title>
          <v-list-item-subtitle v-text="project.deadline"></v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn
          :to="'/projectTasks/2'+ project.id"
          class="primary">Открыть</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
        </v-flex>
      </v-layout>
  </v-container>
</v-content>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      msg: '',
      dialog: false,
    }
  },
  computed: {
    projects() {
      return this.$store.getters.projects
    }
  }
}
</script>
