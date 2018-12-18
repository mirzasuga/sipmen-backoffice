/* eslint-disable */
const api_endpoint = process.env.API_ENDPOINT
const state = {
    provinces: [],
    regencies: [],
    districts: [],
    villages: []
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
    const url = `http://sipmen.mdev/wilayah/regencies/${provinceId}`;
    $http
    .get()
    .then(res => (this.regencies = res.data.data))
    .catch(err => console.log(err));
  }
}

const mutations = {
    setProvinces (state, provinces) {
        state.provinces = provinces
        console.log({state});
    },

    setRegencies (state, regencies) {
        state.regencies = regencies
        console.log({state});
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
