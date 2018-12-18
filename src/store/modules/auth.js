/* eslint-disable */
import router from '../../router/index'
const state = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user') || null
}

const getters = {
  token(state) {
    return (state.token) ? JSON.parse(state.token).access_token : null
  },
  user(state) {
    return (state.user) ? JSON.parse(state.user) : {}
  }
}

const actions = {
  attemptLogin({commit, dispatch}, payload) {

    const url = `${process.env.API_ENDPOINT}/vendor/login`;
    $http.post(url, {
      username: payload.username,
      password: payload.password
    }).then(({ data }) => {
        dispatch('loginSuccess', data).then(() => {
          router.go('/');
        })

    }, ({response}) => {
        // dispatch('LOGIN_FAILURE', response);
        console.log(response)
    })

  },
  logout({state}) {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    state.user = {}
    location.replace('');
  },
  loginSuccess({commit}, data) {
    commit('setToken', data.data)
  }
}

const mutations = {
  setToken(state, payload) {
    const now = new Date();
    payload.token.expired_date = new Date(now.getTime() + payload.token.expires_in * 1000).getTime();
    localStorage.setItem('token', JSON.stringify(payload.token) )
    localStorage.setItem('user', JSON.stringify(payload.user) )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
