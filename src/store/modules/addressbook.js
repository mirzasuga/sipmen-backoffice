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
    const url = `${process.env.API_ENDPOINT}/addressbook/search?phone=${phone}`
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
      mutations.CLEAR_ITEMS(state)
  },
  CLEAR_ITEMS(state) {
    state.addressbooks = []
  }
}

export default {
namespaced: true,
state,
getters,
actions,
mutations
}
