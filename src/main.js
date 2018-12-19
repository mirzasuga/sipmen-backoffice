// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* eslint-disable no-new */
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import { abilitiesPlugin } from '@casl/vue'
import store from './store'
import ability from '../config/ability'
import Axios from 'axios'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyBLOIZHUPVNbIg3MxUywvERi3wUKwosF-A',
    libraries: 'places,drawing,visualization'
  }
})

Vue.use(Vuetify)
window.$http = Axios.create({
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

Vue.config.productionTip = false
Vue.use(abilitiesPlugin, ability)
window.ability = ability

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
