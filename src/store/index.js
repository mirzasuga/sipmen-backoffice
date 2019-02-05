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
import staff from './modules/staff'
import role from './modules/role'
import addressbookdialog from './modules/addressbookdialog'

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
    notif,
    staff,
    role,
    addressbookdialog
  },
  strict: false,
  plugins: []
})
