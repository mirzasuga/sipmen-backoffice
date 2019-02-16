/* eslint-disable */
const state = {
    roles: [],
    selectedRole: {}
}
const getters = {
    roles(state) {
        return state.roles
    },
    selectedRole(state) {
        return state.selectedRole
    }
}

const actions = {
    getAllRole({commit, rootGetters}) {
      const url = `${process.env.API_ENDPOINT}/role/all`
      const token = rootGetters['auth/token']
      $http.patch(url,null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
          }
      })
      .then(success => {

          commit('setRoles', success.data.data)

      }, error => {
          console.log({error})
      })
    }
}

const mutations = {
    setRoles(state, roles) {
      state.roles = roles
    },
    selectRole(state, role) {
        state.selectedRole = role
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
