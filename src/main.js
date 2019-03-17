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
import Echo from 'laravel-echo'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDtK4drbjrxlU6sNG4BzNG5vAuWLE5hbC8',
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
window.Pusher = require('pusher-js')
// window.io = require('socket.io-client')
if (typeof Pusher !== 'undefined') {
  const token = store.getters['auth/token']
  // eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImE5MjVlN2JlMDhjYTA4NTQ2Njk2NDdhYWNiNjJlNWU4ZGI3YjQwMjdmMDcxZmY1ZjQxMmY5YjlmZDRhMmEwOTNiNzdlYmM2ZWQ4NGUzMDk3In0.eyJhdWQiOiIyIiwianRpIjoiYTkyNWU3YmUwOGNhMDg1NDY2OTY0N2FhY2I2MmU1ZThkYjdiNDAyN2YwNzFmZjVmNDEyZjliOWZkNGEyYTA5M2I3N2ViYzZlZDg0ZTMwOTciLCJpYXQiOjE1NTIwNjE0MDEsIm5iZiI6MTU1MjA2MTQwMSwiZXhwIjoxNTUzMzU3NDAxLCJzdWIiOiIxIiwic2NvcGVzIjpbInZlbmRvcl9vd25lciJdfQ.UD-vhp3P-MKERRekl1WBja_HO_jajseXOJSLMQo4I8I8aiPbans8I_VtOKkvocLlF3pNP5kPYFR78L-P1Ybj-bkWTJnMhsIpLF0THuVapO1tu_dRfDFv9U9Hv8J6wvU4Shd5q1eSU-LdWxaMWf1pSXKOJHxwtH348NxxpygDcOEkA24PkMDvF7iYoTaF9sXNIHhpJec-CHQfvqYpbPyi0nQ36GUWY-_djvXzeVO-MQB3vB3cY3-oiEWIkXKVFH4qVnlcAqT5Q4P-mYy4d827j0IMMJKX-HgfzshuY5x7HakLY1ACRxS7Dua7Dta-qiXNre1qkmUlbpF5ihRV5Dsuw9j8nu1RfC0C9ddkxJl7fLYND5sY0ThRIzAMp78kColYtyFfJ5cI-Ia5nDMVFGTBBSbZUggZpQzv2e1ou4zDtV9A0ALrJy_5ENobKLwoXzx5h8eFCW3LGUv0uYYZm72Kkg--gcaZem9SpXIzW7pfbfR0fOhnL-QC2KoP90fZD7h1Byj2rtmaGznKr694xmbYF-Fs4Danww0hvKHO-uvowW6FOiK_vCZaViA1_TxDq-rfAUMUx8LVXHCpK_HsSg-0ner0ojnXJxVzXMlFzRJXFGL1R_RQVHxpsHOGyDmn5TcS08TNBC19jRdIw6aMyKVAItwW2b4lbhOev0UabKi2hWY
  window.Echo = new Echo({
    auth: {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/json'
      }
    },
    broadcaster: 'pusher',
    key: '15c2532c19176297ca2c',
    // host: 'sipmen-websocket.herokuapp.com' + ':15468'
    host: 'ws-mt1.pusher.com/app/26a7c4cf0e6a9769de4a',
    cluster: 'ap1',
    // authEndpoint: 'https://sipmen-api.herokuapp.com/broadcasting/auth'
    authEndpoint: 'https://sipmen-api.herokuapp.com/broadcast/auth'
  })
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
