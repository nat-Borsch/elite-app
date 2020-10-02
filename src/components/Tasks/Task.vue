<template>
<v-app>
  <v-content>
  <v-container>
    <v-layout>
  <v-flex xs12 sm6 offset-sm3>
    <v-card>
      <v-card-title>
        <p class="title">{{task.title}}</p>
      </v-card-title>
      <v-card-subtitle>
        <small>{{task.start}}-{{task.end}}</small>
        <p class="title">{{task.description}} "{{task.project}}"</p>
      </v-card-subtitle>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn class="warning">Изменить</v-btn>
        <v-btn class="success" :to="'/tasks'">Сохранить</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</v-layout>
  </v-container>
</v-content>
</v-app>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    task () {
      const id = this.id
      return this.$store.getters.taskById(id)
    }
  }
}
</script>
