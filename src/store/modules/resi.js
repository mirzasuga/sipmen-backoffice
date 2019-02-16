/* eslint-disable */
const state = {
  show: false
}
const getters = {
  data(state) { return state.data },
  show (state) {return state.show}
}

const actions = {

  cetak ({commit}, data) {

    commit('SET_DATA', data)
    commit('SET_SHOW', true)

  },
  reset ({commit}) {
    commit('SET_DATA',{}),
    commit('SET_SHOW', false)
  }

}

const mutations = {
  SET_DATA (state, resi) { state.data = resi },
  SET_SHOW (state, show) { state.show = show }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
