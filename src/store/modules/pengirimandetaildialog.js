/* eslint-disable */
const state = {

  data: null,
  isOpen: false

}
const getters = {

}

const actions = {
  open ({commit,dispatch,rootGetters}, data) {
    commit('SET_DATA', data)
    commit('SET_OPENED', true)
    dispatch('resi/cetak', data, {root:true})
  },
  close ({commit,dispatch, rootGetters}) {
    commit('RESET')
    commit('SET_OPENED', false)
  }
}

const mutations = {
  SET_DATA (state, data) {state.data = data},
  RESET (state) { state.data = null },
  SET_OPENED (state, opened) { state.isOpen = opened },

}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
