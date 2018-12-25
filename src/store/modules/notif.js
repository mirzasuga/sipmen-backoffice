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
    console.log({Alert: state})
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
