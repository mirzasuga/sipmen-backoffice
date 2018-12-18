/* eslint-disable */
const api_endpoint = process.env.API_ENDPOINT
const state = {
    provinces: [],
    province: {},

    regencies: [],
    regency: {},

    districts: [],
    district: {},

    villages: [],
    village: {}
}

const getters = {}

const actions = {
  getAllProvinces ({commit}) {
      const url = `${api_endpoint}/wilayah/province/all`;
      $http.get(url)
      .then(res => {
        commit('setProvinces', res.data.data);
      }, err => {
        console.log(err);
      });
  },

  getAllRegencies({commit}, provinceId) {
    const url = `${process.env.API_ENDPOINT}/wilayah/regencies/${provinceId}`;
    $http.get(url)
    .then(res => {

      commit('setRegencies', res.data.data)

    }, err => console.log(err))
  },

  getAllDistricts({commit}, regencyId) {
    const url = `${process.env.API_ENDPOINT}/wilayah/districts/${regencyId}`;
    $http.get(url)
    .then(res => {

      commit('setDistricts', res.data.data)

    }, err => console.log(err))
  },

  getAllVillages({commit}, regencyId) {
    const url = `${process.env.API_ENDPOINT}/wilayah/villages/${regencyId}`;
    $http.get(url)
    .then(res => {

      commit('setVillages', res.data.data)

    }, err => console.log(err))
  },

  selectProvince({commit, dispatch}, province) {
    commit('activeProvince', province)
    commit('activeRegency', {})
    commit('activeDistrict', {})
    commit('activeVillage', {})

    dispatch('getAllRegencies', province.province_id)

    commit('setDistricts', [])
    commit('setVillages', [])
  },

  selectRegency({commit, dispatch}, regency) {
    commit('activeRegency', regency)
    commit('activeDistrict', {})
    commit('activeVillage', {})

    dispatch('getAllDistricts', regency.regency_id)
    commit('setVillages', [])
  },

  selectDistrict({commit, dispatch}, district) {
    commit('activeDistrict', district)
    commit('activeVillage', {})
    dispatch('getAllVillages', district.district_id)
  },

  selectVillage({commit, dispatch}, village) {
    commit('activeVillage', village)
  },
  clearSelected({commit}) {
    commit('activeProvince', {})
    commit('activeRegency', {})
    commit('activeDistrict', {})
    commit('activeVillage', {})
  }
}

const mutations = {
    setProvinces (state, provinces) {
      state.provinces = provinces
    },

    setRegencies (state, regencies) {
      state.regencies = regencies
    },

    setDistricts (state, districts) {
      state.districts = districts
    },

    setVillages (state, villages) {
      state.villages = villages
    },

    activeProvince (state, province) {
      state.province = province
    },

    activeRegency (state, regency) {
      state.regency = regency
    },

    activeDistrict (state, district) {
      state.district = district
    },

    activeVillage (state, village) {
      state.village = village
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
