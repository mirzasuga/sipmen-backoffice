import Vue from 'vue'
import Vuex from 'vuex'
import wilayah from './modules/wilayah'
import navbar from './modules/navbar'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wilayah,
    navbar
  },
  strict: false,
  plugins: []
})
