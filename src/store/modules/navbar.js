/* eslint-disable */
const api_endpoint = process.env.API_ENDPOINT

// const MENU = [
//   {
//     icon: "home",
//     title: "Home",
//     target: "home"
//   }
// ]
const MENU = [
  {
    icon: "bubble_chart",
    title: "Branch",
    target: "BranchManagement",
    items: [
      {
        icon: "bubble_chart",
        title: "Tambah Branch",
        target: "create.Branch",
      },
      {
        icon: "bubble_chart",
        title: "Daftar Branch",
        target: "BranchManagement",
      }
    ]
  },
  {
    icon: "bubble_chart",
    title: "Tarif",
    target: "TarifManagements",
    items: [{
      icon: "bubble_chart",
      title: "Buat Tarif",
      target: "create.Tarif",
    }]
  }
]

const state = {
  drawer: true,
  clipped: false,
  items: MENU
}

const getters = {}

const actions = {
  toggle({commit}) {
    commit('setDrawer')
  }
}

const mutations = {
  setDrawer(state) {
    state.drawer = (state.drawer) ? false : true;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
