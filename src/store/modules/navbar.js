/* eslint-disable */
const api_endpoint = process.env.API_ENDPOINT
const state = {
  drawer: true,
  clipped: false,
}

const getters = {}

const actions = {
  toggle({commit}) {
    commit('setDrawer')
  }
}

const mutations = {
  setDrawer(state) {
    state.drawer = (state.drawer) ? false : true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
