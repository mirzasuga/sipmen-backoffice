/* eslint-disable */
import router from '../../router/index'
const state = {
  token: localStorage.getItem('token') || null,
  user: localStorage.getItem('user') || null,
  vendorDetail: localStorage.getItem('vendorDetail') || null,
}

const getters = {
  token(state) {
    return (state.token) ? JSON.parse(state.token).access_token : null
  },
  user(state) {
    return (state.user) ? JSON.parse(state.user) : {}
  },
  vendorDetail(state) {
    return (state.vendorDetail) ? JSON.parse(state.vendorDetail) : {}
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
    localStorage.removeItem('vendorDetail');
    state.user = {}
    location.replace('');
  },
  loginSuccess({commit}, data) {
    commit('setToken', data.data)
    commit('setVendorDetail', data.data)
  }
}

const mutations = {
  setToken(state, payload) {
    const now = new Date();
    payload.token.expired_date = new Date(now.getTime() + payload.token.expires_in * 1000).getTime();
    localStorage.setItem('token', JSON.stringify(payload.token) )
    localStorage.setItem('user', JSON.stringify(payload.user) )
  },
  setVendorDetail(state, payload) {
    localStorage.setItem('vendorDetail', JSON.stringify(payload.vendorDetail) )
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
