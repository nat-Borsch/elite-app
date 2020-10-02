<template>
<v-content>
  <v-container fluid>
    <v-card>
      <v-card-title></v-card-title>
    </v-card>
    <p>{{ msg }}</p>
  </v-container>
</v-content>
</template>

<script>
import axios from 'axios';
export default {
  data () {
    return {}
  },
  methods: {
    getMessage() {
      const path = 'http://127.0.0.1:5000/ping';
      axios.get(path)
      .then((res)=>{
        this.msg=res.data;
      })
      .catch((error)=>{
        console.error(error);
      });
    }
  },
  created() {
    this.getMessage();
  }
}
</script>
