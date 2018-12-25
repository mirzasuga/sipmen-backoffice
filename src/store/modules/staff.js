/* eslint-disable */
import router from '../../router/index'
const state = {
    staffs: []
}
const getters = {
    staffs(state) {
        return state.staffs;
    }
}

const actions = {
    // getAllStaff({commit, rootGetters}) {
    //   const vendorDetailId = rootGetters['auth/vendorDetail'].id
    //   const url = `${process.env.API_ENDPOINT}/vehicle/${vendorDetailId}/all`
    //   const token = rootGetters['auth/token']
    //   $http.patch(url,null, {
    //       headers: {
    //           'Authorization': `Bearer ${token}`,
    //           'Accept': 'application/json'
    //       }
    //   })
    //   .then(success => {
          
    //       commit('setVehicles', success.data.data)

    //   }, error => {
    //       console.log({error})
    //   })
    // },
    createStaff({commit, rootGetters}, data) {
        const vendorDetailId = rootGetters['auth/user'].vendor_detail_id;
        const url = `${process.env.API_ENDPOINT}/staff/${vendorDetailId}/create`;
        const token = rootGetters['auth/token']
        
        $http.post(url,data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(success => {
          
          commit('shiftStaffs', success.data.data)
          commit('notif/success', 'Berhasil menambahkan staff', {root:true})

        }, error => {
          console.log({CreateStaff: error})
        })
    },
    setPassword({commit, rootGetters}, data) {
        
        const url = `${process.env.API_ENDPOINT}/staff/${data.vendorId}/confirmation/${data.token}`
        delete data.vendorId
        delete data.token
        
        $http.post(url, data)
        .then(success => {
            commit('notif/success', 'Konfirmasi Berhasil', {root:true})
            location.replace('')
        }, error => {
            console.log({StaffConfirmation: error})
        })
    }
}

const mutations = {
    setStaffs(state, staffs) {
      state.staffs = staffs
    },
    shiftStaffs(state, payload) {
      if(state.staffs.length > 0) {
          state.staffs.push(payload);
      } else {
          state.staffs.unshift(payload);
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
