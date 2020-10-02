<template>
  <v-content>
   <v-container fluid>
    <v-carousel :show-arrows="false">
      <v-carousel-item
      v-for="card in cards"
      :key="card.title"
      :src="card.src"
      >
      <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <div class="display-3">{{card.title}}</div>
          </v-row></v-carousel-item>
    </v-carousel>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data () {
    return {
      cards: [
        { title: 'Удобная Kanban доска', src: 'https://codemyui.com/wp-content/uploads/2019/10/Trello-like-kanban-drag-and-drop-cards-using-scrolling-containers.gif' }
      ]
    }
  }
}
</script>
