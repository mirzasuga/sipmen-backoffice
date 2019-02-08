/* eslint-disable */
const state = {
  addressbooks: [],
  selectedAddressBook: {}
}
const getters = {
  addressbooks(state) {
      return state.addressbooks
  },
  selectedAddressBook(state) {
      return state.selectedAddressBook
  }
}

const actions = {
  getAddressBookByPhone({commit, rootGetters}, phone) {
    state.addressbooks = []
    const url = `${process.env.API_ENDPOINT}/api/addressbook/search?phone=${phone}`
    const token = rootGetters['auth/token']
    $http.get(url, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Accept': 'application/json'
        }
    })
    .then(success => {
      // console.log({success})
      // commit('setRoles', success.data.data)
      commit('setAddressBooks', success.data.data)

    }, error => {
        console.log({error})
    })
  }
}

const mutations = {
  setAddressBooks(state, addressbooks) {
    state.addressbooks = addressbooks
  },
  selectAddressBook(state, addressbook) {
      state.selectedAddressBook = addressbook
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
