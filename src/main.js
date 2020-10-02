import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import vuetify from '@/plugins/vuetify'
import * as fb from 'firebase'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import './plugins/vue-kanban'
Vue.config.productionTip = false

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  vuetify,
  created () {
    fb.initializeApp({
    apiKey: "AIzaSyC4BOFkZc3ofO7HCxxmXRUQ5aOkDg_s9a8",
    authDomain: "elite-app-958f4.firebaseapp.com",
    databaseURL: "https://elite-app-958f4.firebaseio.com",
    projectId: "elite-app-958f4",
    storageBucket: "elite-app-958f4.appspot.com",
    messagingSenderId: "1049251146739",
    appId: "1:1049251146739:web:4098ab24969a8f3d6ac086",
    measurementId: "G-BWWMN36ZDG"
    })
    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    })
  }
})
