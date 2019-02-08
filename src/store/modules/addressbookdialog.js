/* eslint-disable */
const state = {

  province: null,
  regency: null,
  district: null,
  village: null,
  name: null,
  phone: null,
  street: null,
  postal_code: null,
  isOpen: null

}
const getters = {
  province (state) {
    return state.province
  }
}

const actions = {
  submit ({commit, rootGetters}) {

    const url = `${process.env.API_ENDPOINT}/api/addressbook/create`
    const token = rootGetters['auth/token']

    const DATA = {
      name: state.name,
      phone: state.phone,
      province_id: state.province.province_id,
      province_name: state.province.name,
      regency_id: state.regency.regency_id,
      regency_name: state.regency.name,
      district_id: state.district.district_id,
      district_name: state.district.name,
      village_id: state.village.village_id,
      village_name: state.village.name,
      street: state.street,
      postal_code: state.postal_code,
    }
    console.log({DATA})
    $http.post(url,DATA, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(success => {

      // commit('shiftTarifs', success.data.data)
      commit('notif/success', success.message, {root: true})
      commit('CLOSE')
      console.log({success})


    }, error => {
      console.log({CreateTarif: error})
    })

  }
}

const mutations = {
  SET_PROVINCE (state, province) {
    state.province = province
    console.log('SET_PROVINCE')
  },
  SET_REGENCY (state, regency) {
    state.regency = regency
  },
  SET_DISTRICT (state, district) {
    state.district = district
  },
  SET_VILLAGE (state, village) {
    state.village = village
  },
  SET_NAME (state, name) {
    state.name = name
  },
  SET_PHONE (state, phone) {
    state.phone = phone
  },
  SET_STREET (state, street) {
    state.street = street
  },
  SET_POSTALCODE (state, postal_code) {
    state.postal_code = postal_code
  },
  RESET (state) {
    state.province = null
    state.regency = null
    state.district = null
    state.village = null
    state.phone = null
    state.street = null
    state.postal_code = null
  },
  TOGGLE (state, val) {
    console.log({val})
    state.isOpen = val
  },
  CLOSE (state) {
    state.isOpen = false
  }

}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
