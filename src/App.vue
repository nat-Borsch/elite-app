<template>
  <v-app>
    <v-navigation-drawer app
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          active-class="primary--text"
        >
        <v-list-item
        v-for="link of links"
        :key="link.title"
        :to="link.url"
        >
        <v-list-item-action>
          <v-icon>{{link.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-title v-text="link.title"></v-list-item-title>
        </v-list-item>
        <v-list-item
        @click="onLogout"
        v-if="isUserLoggedIn">
          <v-list-item-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-item-action>
        <v-list-item-title><v-text>Выйти</v-text></v-list-item-title>
        </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar app
      dark
      color="primary"
      class="mx-auto overflow-hidden"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">
        ЭлитСтройПроект-КС</router-link></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn color="primary"
        v-for="link of links"
        :key="link.title"
        :to="link.url"
        flat>
          <v-icon left>{{link.icon}}</v-icon> {{link.title}}
        </v-btn>
        <v-btn
        color="primary"
        @click="onLogout"
        v-if="isUserLoggedIn"
        flat>
        <v-icon left>exit_to_app</v-icon> Выйти
        </v-btn>
      </v-toolbar-items>
      </v-app-bar>
      <router-view class="app"></router-view>
      <template v-if="error">
        <v-snackbar
      :multi-line="true"
      :timeout="timeout"
      @input="closeError"
      :value="true"
    >
      {{ error }}
      <v-btn
        dark
        text
        color="error"
        @click.native="closeError"
      >
        Закрыть
      </v-btn>
    </v-snackbar>
      </template>
      <v-footer app></v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  computed: {
    error () {
      return this.$store.getters.error
    },
    isUserLoggedIn () {
      return this.$store.getters.isUserLoggedIn
    },
    links () {
      if (this.isUserLoggedIn) {
        return [
          {title: 'Задания', icon: 'assignment', url: '/tasks'},
          {title: 'Проекты', icon: 'work', url: '/projects'},
          {title: 'Личный кабинет', icon: 'account_circle', url: '/account'}
        ]
      }
      return [
        {title: 'Вход', icon: 'account_circle', url: '/login'},
        {title: 'Регистрация', icon: 'face', url: '/reg'}
      ]
    }
  },
  methods: {
    closeError () {
      this.$store.dispatch('clearError')
    },
    onLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.pointer{
  cursor: pointer;
}
.app {
  background-image: 'https://kor.ill.in.ua/m/610x385/2438389.jpg';
}
</style>
