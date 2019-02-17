/* eslint-disable */
const state = {
  show: false,
  data: false
}
const getters = {
  data(state) { return state.data },
  show (state) {return state.show}
}

const actions = {

  fetchStatuses ({commit, rootGetters}, resiId) {
    const url = `${process.env.API_ENDPOINT}/shipping-status/histories/${resiId}`
    const token = rootGetters['auth/token']

    $http.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(success => {
      commit('SET_DATA', success.data.data)

    }, error => {
      console.log({FetchShippingStatuses: error})
    })
  },
  reset ({commit}) {
    commit('SET_DATA',{})
  }

}

const mutations = {
  SET_DATA (state, data) { state.data = data },
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
