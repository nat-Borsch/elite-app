<template>
  <v-card
  :id="id"
  class="board"
  @dragover.prevent
  @drop.prevent="drop">
  <slot />
  </v-card>
</template>
<script>
export default {
  /* eslint-disable */ 
  props: ['id'],
  methods: {
    drop: e => {
      const card_id = e.dataTransfer.getData('card_id')
      const card = document.getElementById(card_id)
      card.style.display = "block"
      e.target.appendChild(card)
    }
  }
}
</script>
