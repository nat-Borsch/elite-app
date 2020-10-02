<template>
<v-content> 
  <v-container fluid>
    <kanban-board :stages="stages" :blocks="blocks" @update-block="updateBlock">
    <div v-for="stage in stages" :slot="stage" :key="stage">
      <v-card v-for="card in cards"
      :key="stage" v-if="card.stage==stage"
      max-height="200px"
      width="290px">
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
      stages: ['on-hold', 'in-progress', 'needs-review', 'approved'],
      blocks:[
      { id: 1, title: 'КЖ-часть', description: 'Конструкции железобетонные', start: '20.05.2020', end: '05.07.2020', project: 'Промышленное сооружение', status: 'on-hold'},
      { id: 2, title: 'ПОС', description: '', start: '30.05.2020', end: '25.07.2020', project: 'Многоэтажное здание', status: 'on-hold'},
      { id: 3, title: 'АР-часть', description: 'Конструкции железобетонные', start: '20.05.2020', end: '05.07.2020', project: 'Промышленное сооружение', status: 'in-progress'},
      { id: 4, title: 'Сметный расчет', description: '', start: '30.05.2020', end: '25.07.2020', project: 'Многоэтажное здание', status: 'on-hold'}
      ]
    }
  },
  computed: {
    blocks () {
      //return this.$store.getters.blocks
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
  width: auto;
  height: fit-content;
  scroll-behavior: auto;
}
</style>
