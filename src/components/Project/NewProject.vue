<template>
<v-app>
  <v-content>
    <v-container>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <h1 class="text--secondary mb-3">Новый проект</h1>
      <v-form v-model="valid" ref="form" lazy-validation>
    <v-text-field
      v-model="project_title"
      label="Название"
      type="text"
      :rules="titleRules"
      outlined
    ></v-text-field>
    <v-textarea
    v-model="project_description"
    label="Описание"
    type="text"
    outlined=""></v-textarea>
    <v-textarea
    v-model="project_customer"
    label="Заказчик"
    type="text"
    outlined=""></v-textarea>
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
        <v-btn class="mr-4 mt-4 success" :to="'/projects'" @click="createTask" >Создать</v-btn>
        <v-btn class="mr-4 mt-4 error" @click="clear">Очистить</v-btn>
        <v-btn class="mr-4 mt-4" :to="'/projects'">Отмена</v-btn>
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
    return {}
  }
}
</script>
