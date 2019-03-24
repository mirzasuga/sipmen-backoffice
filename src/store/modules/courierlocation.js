/* eslint-disable */
const state = {
  coords: {lat: -6.17017, lng: 106.8291959},
}

const getters = {
  coords (state) { return state.coords }
}

const actions = {
  track ({commit, rootGetters, dispatch}) {
    const data = rootGetters['pengirimandetaildialog/data']
    if(data.otw_surat_jalans && data.otw_surat_jalans.length > 0) {
      console.log('LISTENING: COURIER LOCATION')

      const suratJalanId = data.otw_surat_jalans[0].id

      // window.SipmenWS.on('courier-location', 'courierLocationUpdated',(msg) =>
      //   commit('HANDLE_LOCATION_CHANGED', msg)
      // )

      window.Echo.private(`courier-location.${suratJalanId}`)
        .listen('CourierLocationUpdated', (e) => commit('SET_COORDINATE',e.coords))
    }
  },
  leave ({commit, rootGetters, dispatch}) {
    commit('RESET')
    window.Echo.leave('courier-location')
  }
}

const mutations = {
  success(state, msg) {
    state.msg = msg
    state.type = 'success'
    state.show = true
  },
  SET_COORDINATE(state, coords) {
    state.coords = {
      lat: Number(coords.lat),
      lng: Number(coords.lng)
    }
    console.log(state.coords)
  },
  HANDLE_LOCATION_CHANGED(state, {coords}) {
    console.log(coords)

    state.coords = {
      lat: Number(coords.lat),
      lng: Number(coords.lng)
    }
    console.log({state})
    console.log('Location Updated')
  },
  RESET (state) {
    state.coords = {lat: -6.17017, lng: 106.8291959}
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
