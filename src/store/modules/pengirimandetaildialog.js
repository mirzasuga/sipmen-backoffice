/* eslint-disable */
const state = {

  data: null,
  isOpen: false,
  component: null

}
const getters = {
  data (state) { return state.data }
}

const actions = {
  open ({commit,dispatch,rootGetters}, {data, component}) {
    commit('SET_DATA', data)
    commit('SET_COMPONENT_DIALOG', component)
    commit('SET_OPENED', true)
    dispatch('resi/cetak', data, {root:true})
  },
  close ({commit,dispatch, rootGetters}) {
    commit('RESET')
    commit('SET_OPENED', false)
    commit('SET_COMPONENT_DIALOG', null)
  }
}

const mutations = {
  SET_DATA (state, data) {state.data = data},
  RESET (state) { state.data = null },
  SET_OPENED (state, opened) { state.isOpen = opened },
  SET_COMPONENT_DIALOG (state, comp) { state.component = comp }

}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
