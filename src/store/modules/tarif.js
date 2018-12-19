/* eslint-disable */
  const state = {
      tarifs: []
  }
  const getters = {}
  
  const actions = {
      getAllTarifs({commit, rootGetters}) {
        const vendorDetailId = rootGetters['auth/vendorDetail'].id
        const url = `${process.env.API_ENDPOINT}/tarif/all/vendor/${vendorDetailId}`
        const token = rootGetters['auth/token']
        $http.patch(url,null, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json'
            }
        })
        .then(success => {
            
            commit('setTarifs', success.data.data)

        }, error => {
            console.log({error})
        })
      },
      createTarif({commit, rootGetters}, data) {
          const url = `${process.env.API_ENDPOINT}/tarif/create`
          const token = rootGetters['auth/token']
          $http.post(url,data, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          .then(success => {
            
            commit('shiftTarifs', success.data.data)

          }, error => {
            console.log({CreateTarif: error})
          })
      }
  }
  
  const mutations = {
      setTarifs(state, tarifs) {
        state.tarifs = tarifs
      },
      shiftTarifs(state, payload) {
        if(state.tarifs.length > 0) {
            state.tarifs.push(payload);
        } else {
            state.tarifs.unshift(payload);
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
