/* eslint-disable */
const state = {
  pengirim: {},
  penerima: {},
  tarif: 0,
  berat: 0,
  total: 0,
  list: [],
  listActions: [
    {
      title: 'Lihat Detail',
      action: 'pengirimandetaildialog/open',
      // Component for Dialog Content
      component: 'ResiCard'
    },
    {
      title: 'Lacak Pengiriman',
      action: 'lacak'
    },
    {
      title: 'Lihat Review',
      action: 'viewReviews'
    },
    {
      title: 'Histori Status',
      action: 'pengirimandetaildialog/open',
      // Component for Dialog Content
      component: 'ShippingStatusesStepper'
    }
  ]
}
const getters = {
  pengirim(state) { return state.pengirim },
  penerima(state) { return state.penerima },
  list (state) { return state.list }
}

const actions = {

  calcTotal ({commit, rootGetters}) {
    const total = state.tarif * state.berat;
    commit('SET_TOTAL', total)
  },
  SUBMIT ({commit, rootGetters, dispatch}) {

    const DATA = {
      sender_id: state.pengirim.id,
      receiver_id: state.penerima.id,
      tarif_kg: state.tarif,
      berat_barang: state.berat,
      total_biaya: state.total,
      is_fragile: 0
    }

    const url = `${process.env.API_ENDPOINT}/resi/create`
    const token = rootGetters['auth/token']

    $http.post(url,DATA, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(success => {
      commit('notif/success', success.data.message, {root: true})
      commit('CLEAR')
      dispatch('resi/cetak', success.data.data, {root: true})


    }, error => {
      console.log({CreatePengiriman: error})
    })
  },
  fetchList ({commit, rootGetters, dispatch}) {
    const url = `${process.env.API_ENDPOINT}/resi/all`
    const token = rootGetters['auth/token']

    $http.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(success => {
      // commit('notif/success', success.data.message, {root: true})
      // commit('CLEAR')
      // dispatch('resi/cetak', success.data.data, {root: true})
      commit('SET_LIST',success.data.data.data)


    }, error => {
      console.log({FetchPengiriman: error})
    })
  },
  listActionHandler ({commit, dispatch}, {type, element}) {
    const payload = {
      data: element,
      component: type.component
    }
    dispatch(`${type.action}`, payload, {root:true})
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
  },
  SET_LIST (state, list) { state.list = list }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
