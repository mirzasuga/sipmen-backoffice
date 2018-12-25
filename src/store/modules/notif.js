/* eslint-disable */
const state = {
  show: false,
  msg: '',
  type: 'success'
}

const getters = {
  show (state) { return state.show },
  msg (state) { return state.msg },
  type (state) { return state.type }
}

const actions = {
  
}

const mutations = {
  success(state, msg) {
    state.msg = msg
    state.type = 'success'
    state.show = true
  },
  warning(state, msg) {
    state.msg = msg
    state.type = 'warning'
    state.show = true
  },
  close(state) {
    state.msg = ''
    state.type = 'success'
    state.show = false
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
