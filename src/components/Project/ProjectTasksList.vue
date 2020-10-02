<template>
<v-content>
  <v-container fluid>
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
    <v-card width="500px">
      <v-card-title>Урановый рудник</v-card-title>
      <v-card-subtitle>31.02.2020-23.12.2020</v-card-subtitle>
      <v-card-text></v-card-text>
      <v-card-actions>
        <v-btn>Изменить</v-btn>
      </v-card-actions>
    </v-card>
    </v-flex>
    </v-layout>
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
    <div v-for="stage in stages" :slot="stage" :key="stage">
      <v-card v-for="card in cards"
      :key="card.stage" v-if="card.stage==stage"
      max-height="200px"
      width="350px">
        <v-toolbar :color="card.color" dark>
          <v-toolbar-title class="">{{ card.title }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon
      :to="'/newTask/'">
        <v-icon
        v-if="stage=='on-hold'"
        @click="addTask">
        note_add</v-icon>
      </v-btn>
        </v-toolbar>
      </v-card>
    </div>
  <v-list-item v-for="block in blocks" :slot="block.id" :key="block.id"
  :to="'/task/1'">
    <v-list-item-avatar><v-img :src="block.user"></v-img></v-list-item-avatar>
    <v-list-item-content>
          <v-list-item-title class="title">
      {{ block.title }}
    </v-list-item-title>
    <v-list-item-subtitle>{{block.start}}-{{block.end}}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</kanban-board>
  </v-container>
</v-content>
</template>

<script>
import vueKanban from 'vue-kanban'
export default {
  components: {
    vueKanban
  },
  data () {
    return {
      cards: [
        {title: 'Задания', color: 'rgb(59, 144, 255)', stage: 'on-hold'},
        {title: 'Выполняются', color: 'blue', stage: 'in-progress'},
        {title: 'На рассмотрении', color: 'primary', stage: 'needs-review'},
        {title: 'Выполнено', color: 'indigo', stage: 'approved'}
      ],
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved']
    }
  },
  computed: {
    blocks () {
      return this.$store.getters.blocks
    }
  },
  methods: {
    openTask () {
    },
    addTask () {
    },
    updateBlock (id, status) {
      this.blocks.find(b => b.id === Number(id)).status = status
    }
  }
}
</script>

<style>
kanban-board {
  width: fit-content;
  color: rgb(59, 144, 255);
  box-shadow: 5px;
}
.drag-container {
  max-width: 2000px;
}
.drag-column {
  display: inline-block;
  box-sizing: content-box;
  background-color: rgba(0, 0, 0, 0.03);
  width: fit-content;
  height: fit-content;
  border-radius: 2%;
  scroll-behavior: auto;
}
.drag-column-header{
  padding: 0px;
}
.drag-item {
  max-height: 50px;
  border-color: black;
  border-width: 50px;
  border-radius: 5%;
  background-color: white;
  width: fit-content;
  height: fit-content;
  scroll-behavior: auto;
}
</style>
