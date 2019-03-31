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
  reset ({commit}) {
    commit('close')
  },
  error({commit}, error) {
    let msg = 'Terjadi kesalahan'
    switch (error.status) {
      case 401: msg = error.data.error
        break;
      case 403: msg = error.data.message
        break;
      default:
        break;
    }
    commit('notif/error', msg, {root:true})
  }
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
  error(state, msg) {
    state.msg = msg
    state.type = 'error'
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
