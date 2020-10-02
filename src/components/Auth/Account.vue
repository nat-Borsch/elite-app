<template>
   <v-app>
     <v-content>
       <v-container fluid>
       <v-card
    class="mx-auto"
    max-width="1000"
    tile
  >
    <v-img
      height="100%"
      src="https://kor.ill.in.ua/m/610x385/2438389.jpg"
    >
      <v-row
        align="end"
        class="fill-height"
      >
        <v-col
          align-self="start"
          class="pa-0"
          cols="4"
        >
        <v-flex xs12>
          <v-avatar
            class="profile ml-6 mb-5 mt-5"
            color="grey"
            size="300"
            tile
          >
            <v-img src="https://sun1.dataix-kz-akkol.userapi.com/_4wJcwOHynM4Q_OVZ1GHtjPXgQXJcxOKZ1ZKCA/hLPhmSJPpTo.jpg"></v-img>
          </v-avatar>
          <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on }">
        <v-btn color="primary" dark v-on="on">Изменить</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Информация</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Имя" v-model="name" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Фамилия"
                  v-model="surname"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field label="Email" v-model="email" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  :items="['18-29', '30-54', '54+']"
                  label="Возраст"
                  v-model="age"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-autocomplete
                  :items="['Инженер-сметчик', 'Куратор']"
                  label="Должность"
                  v-model="position"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" text @click="dialog = false">Закрыть</v-btn>
          <v-btn color="success" text @click="dialog = false">Сохранить</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
          </v-row>
        </v-flex>
        </v-col>
        <v-col
          align-self="start"
          class="pa-0"
          cols="7">
         <v-list-item>
           <v-card width="auto" class="mt-5">
            <v-list-item-title class="title mt-3 ml-3" dark >{{name}} {{surname}}</v-list-item-title>
            <v-list-item-content class="ml-3">
              <p class="">{{position}}</p>
              <p>{{age}}</p>
              <p>{{email}}</p>
            </v-list-item-content>
            <v-row class="ml-3 mr-3 mb-3">
            <v-btn :to="'/tasks'" class="primary mr-3">К задачам</v-btn>
            <v-btn :to="'/projects'" class="primary">Текущие проекты</v-btn>
            </v-row>
           </v-card>
            </v-list-item></v-col>
      </v-row>
    </v-img>
  </v-card>
       </v-container>
     </v-content>
   </v-app>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      name: 'Наталья',
      surname: 'Черткова',
      position: 'Куратор',
      email: 'mega.chertkova@mail.ru',
      age: ''
    }
  }
}
</script>
