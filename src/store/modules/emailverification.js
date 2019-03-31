/* eslint-disable */

import router from '../../router/index'

const state = {
  userID: null,
  token: null
}

const getters = {
}

const actions = {
  validate ({commit, dispatch}, data) {
    if (!data.vendorId ||!data.token) {

      commit('notif/error', 'Gagal validasi email!', {root:true})
      router.push({name: 'Login'})
    }

    dispatch('attemptValidate', data)
  },
  attemptValidate ({commit, dispatch}, {token, vendorId}) {

    const url = `${process.env.API_ENDPOINT}/vendor/verify-email`
    const body = { vendorId: vendorId, token: token }
    $http.post(url, body).then(
      success => {
        commit('notif/success', success.data.message, {root: true})
        router.push({name: 'Login'})
      },
      ({response}) => {

        commit('notif/error', response.data.message, {root:true})
        router.push({name: 'Login'})
      }
    )
  }
}

const mutations = {
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
