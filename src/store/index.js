import Vue from 'vue'
import Vuex from 'vuex'
import wilayah from './modules/wilayah'
import navbar from './modules/navbar'
import layout from './modules/layout'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    wilayah,
    navbar,
    layout
  },
  strict: false,
  plugins: []
})
