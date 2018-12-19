/* eslint-disable */
const state = {
  branches: [],
  branch: {}
}

const getters = {
  branch(state) {
    return state.branch
  }
}

const actions = {
  getAllBranch({commit, rootGetters}) {
    const token = rootGetters['auth/token'];
    const vendorDetailId = rootGetters['auth/user'].vendor_detail_id;
    const url = `${process.env.API_ENDPOINT}/branch/all/${vendorDetailId}`;

    $http.patch(url, null,{
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
    }}).then(res => {
      // console.log({Response:res});
      commit('setBranches',res.data.data);
    })
  },
  createBranch({commit, dispatch, rootGetters}, data) {
    const token = rootGetters['auth/token']
    const url = `${process.env.API_ENDPOINT}/branch/create`
    $http.post(url,data, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json'
      }

    }).then((success) => {
      console.log(success)
      commit('shiftBranches', success.data.data)
      dispatch('wilayah/clearSelected', null, { root:true })
      // this.$store.commit('SHIFT_BRANCHES',data)
      // this.$store.commit("SET_ALERT", {
      //     msg: "Berhasil menambahkan branch.",
      //     type: "success",
      //     show: true
      //   });
      // this.clear();
    }, ({response}) => {

      // this.$store.dispatch('HANDLE_REQUEST_ERRORS',response);

    })
  }
}

const mutations = {
  setBranches(state, branches) {
    state.branches = branches
  },
  shiftBranches(state, payload) {
    if(state.branches.length > 0) {
      state.branches.push(payload);
    } else {
      state.branches.unshift(payload);
    }
  },
  selectedBranch(state, branch) {
    state.branch = branch
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
