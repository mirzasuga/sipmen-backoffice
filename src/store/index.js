import Vue from 'vue'
import Vuex from 'vuex'
import wilayah from './modules/wilayah'
import navbar from './modules/navbar'
import layout from './modules/layout'
import auth from './modules/auth'
import branch from './modules/branch'
import tarif from './modules/tarif'
import vehicle from './modules/vehicle'
import notif from './modules/notif'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    wilayah,
    navbar,
    layout,
    branch,
    tarif,
    vehicle,
    notif
  },
  strict: false,
  plugins: []
})
