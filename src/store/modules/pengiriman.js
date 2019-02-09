/* eslint-disable */
const state = {
  pengirim: {},
  penerima: {},
  tarif: 0,
  berat: 0,
  total: 0
}
const getters = {
  pengirim(state) { return state.pengirim },
  penerima(state) { return state.penerima }
}

const actions = {

  calcTotal ({commit, rootGetters}) {
    const total = state.tarif * state.berat;
    commit('SET_TOTAL', total)
  },
  SUBMIT ({commit, rootGetters}) {
    const DATA = {
      sender_id: state.pengirim.id,
      receiver_id: state.penerima.id,
      tarif_kg: state.tarif,
      berat_barang: state.berat,
      total_biaya: state.total,
      is_fragile: 0
    }
    console.log({DATA})

    const url = `${process.env.API_ENDPOINT}/resi/create`
    const token = rootGetters['auth/token']

    $http.post(url,DATA, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(success => {
      commit('notif/success', success.message, {root: true})
      commit('CLEAR')
      console.log({success})


    }, error => {
      console.log({CreatePengiriman: error})
    })
  }

}

const mutations = {
  SET_PENGIRIM (state, pengirim) { state.pengirim = pengirim },
  SET_PENERIMA (state, penerima) { state.penerima = penerima },
  SET_TARIF (state, tarif) { state.tarif = tarif },
  SET_BERAT (state, berat) { state.berat = berat },
  SET_TOTAL (state, total) { state.total = total },
  CLEAR (state) {
    state.pengirim = {};
    state.penerima = {};
    state.tarif = 0;
    state.berat = 0;
    state.total = 0;
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
