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
import addressbook from './modules/addressbook'
import pengiriman from './modules/pengiriman'
import resi from './modules/resi'
import pengirimandetaildialog from './modules/pengirimandetaildialog'
import shippingstatuses from './modules/shippingstatuses'
import courierlocation from './modules/courierlocation'
import registerform from './modules/registerform'
import emailverification from './modules/emailverification'

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
    addressbookdialog,
    addressbook,
    pengiriman,
    resi,
    pengirimandetaildialog,
    shippingstatuses,
    courierlocation,
    registerform,
    emailverification
  },
  strict: false,
  plugins: []
})
