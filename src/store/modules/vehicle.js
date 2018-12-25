/* eslint-disable */
const state = {
    vehicles: []
}
const getters = {
    vehicles(state) {
        return state.vehicles;
    }
}

const actions = {
    getAllVehicle({commit, rootGetters}) {
      const vendorDetailId = rootGetters['auth/vendorDetail'].id
      const url = `${process.env.API_ENDPOINT}/vehicle/${vendorDetailId}/all`
      const token = rootGetters['auth/token']
      $http.patch(url,null, {
          headers: {
              'Authorization': `Bearer ${token}`,
              'Accept': 'application/json'
          }
      })
      .then(success => {
          
          commit('setVehicles', success.data.data)

      }, error => {
          console.log({error})
      })
    },
    createVehicle({commit, rootGetters}, data) {
        const url = `${process.env.API_ENDPOINT}/vehicle/create`
        const token = rootGetters['auth/token']
        data.vendor_detail_id = rootGetters['auth/user'].vendor_detail_id
        $http.post(url,data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(success => {
          
          commit('shiftVehicles', success.data.data)
          commit('notif/success', 'Berhasil menambahkan armada', {root:true})

        }, error => {
          console.log({CreateVehicle: error})
        })
    }
}

const mutations = {
    setVehicles(state, vehicles) {
      state.vehicles = vehicles
    },
    shiftVehicles(state, payload) {
      if(state.vehicles.length > 0) {
          state.vehicles.push(payload);
      } else {
          state.vehicles.unshift(payload);
      }
    }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
