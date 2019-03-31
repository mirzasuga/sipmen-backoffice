/* eslint-disable */

import router from '../../router/index'

const state = {
  elmRefs: null,
  valid: false,
  name: '',
  username: '',
  email: '',
  password: '',
  mobile_phone: '',
  errors: {
    name: [],
    username: [],
    email: [],
    password: [],
    mobile_phone: []
  },
  loading: false,

  mobilePhoneRules: [
    v => !!v || 'No.HP tidak boleh kosong',
    v => v.length >= 8 || 'Nomor HP minimal 8 karakter'
  ],
  nameRules: [
    v => !!v || 'Nama tidak boleh kosong',
    // v => v.length <= 10 || 'Name must be less than 10 characters'
  ],
  usernameRules: [
    v => !!v || 'username tidak boleh kosong',
    // v => v.length <= 10 || 'Name must be less than 10 characters'
  ],
  emailRules: [
    v => !!v || 'E-mail tidak boleh kosong',
    v => /.+@.+/.test(v) || 'E-mail must be valid'
  ],
  passwordRules: [
    v => !!v || 'Password tidak boleh kosong',
    v => v.length >= 6 || 'Password minimal 6 karakter'
  ]
}
const getters = {
  mobilePhoneRules: state => state.mobilePhoneRules,
  usernameRules: state => state.usernameRules,
  emailRules: state => state.emailRules
}

const actions = {

  submit({commit, rootGetters, dispatch}) {
    state.loading = true
    const url = `${process.env.API_ENDPOINT}/vendor/register`
    const {username, email, password, mobile_phone, name} = state
    const body = {
      name: name,
      username: username,
      email: email,
      password: password,
      mobile_phone: mobile_phone
    }
    $http.post(url, body).then(
      success => {
        commit('notif/success', success.message, {root: true})
        commit('RESET')
        dispatch('success')
        state.loading = false
      },
      error => {

        commit('ERRORS', error)
        state.loading = false
        // commit('RESET')
      }
    )
  },
  reset({commit, rootGetters}, {vm}) {
    vm.$refs.registerForm.reset()
  },
  removeErrors({commit, rootGetters}, name) {
    commit('RESET_ERRORS', name)
  },
  success({commit}) {
    commit('notif/success', 'Berhasil daftar, Silakan cek email anda untuk verifikasi', {root:true})
    router.push('Login')
  }
}

const mutations = {
  setRefs: (state, refs) => state.elmRefs = refs,
  setValid: (state, valid) => state.valid = valid,
  setName: (state, name) => state.name = name,
  setUsername: (state, username) => state.username = username,
  setEmail: (state, email) => state.email = email,
  setPassword: (state, password) => state.password = password,
  setMobilePhone: (state, mobile_phone) => state.mobile_phone = mobile_phone,

  RESET (state) {
    state.valid = false
    state.name = ''
    state.username = ''
    state.email = ''
    state.password = ''
    state.mobile_phone = ''
    state.errors = {
      name: [],
      username: [],
      email: [],
      password: [],
      mobile_phone: []
    }
  },
  RESET_ERRORS (state, name) {
    state.errors[name] = []
  },
  ERRORS (state, {response}) {

    const {status, data} = response;
    console.log({data})
    switch (status) {
      case 422:
      Object.keys(data.errors).forEach(key =>  state.errors[key] = data.errors[key] )
        break

      default:

        break
    }
    // console.log(error.status)
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
