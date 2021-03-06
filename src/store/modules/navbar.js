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
    icon: "pin_drop",
    title: "Branch",
    target: "BranchManagement",
    items: [
      {
        icon: "create",
        title: "Tambah Branch",
        target: "create.Branch",
      },
      {
        icon: "list",
        title: "Daftar Branch",
        target: "BranchManagement",
      }
    ]
  },
  {
    icon: 'account_balance_wallet',
    title: "Tarif",
    target: "TarifManagements",
    items: [
      {
        icon: "create",
        title: "Buat Tarif",
        target: "create.Tarif"
      },
      {
        icon: "list",
        title: "Daftar Tarif",
        target: "read.Tarif"
      }
    ]
  },
  {
    icon: 'commute',
    title: "Armada",
    target: "VehicleManagement",
    items: [
      {
        icon: "create",
        title: "Buat Armada",
        target: "create.Vehicle"
      },
      {
        icon: "list",
        title: "Daftar Armada",
        target: "read.Vehicle"
      }
    ]
  },
  {
    icon: 'supervisor_account',
    title: "Staff",
    target: "StaffManagement",
    items: [
      {
        icon: "create",
        title: "Tambah Staff",
        target: "create.Staff"
      },
      {
        icon: "list",
        title: "Daftar Staff",
        target: "read.Staff"
      }
    ]
  },
  {
    icon: 'supervisor_account',
    title: "Pengiriman",
    target: "ShippingManagement",
    items: [
      {
        icon: "create",
        title: "Tambah Pengiriman",
        target: "create.Shipping"
      },
      {
        icon: "list",
        title: "Daftar Pengiriman",
        target: "list.Shipping"
      }
    ]
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
