<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import Dashboard from './layouts/Dashboard.vue'
import Auth from './layouts/Auth.vue'
import {mapState} from 'vuex'
export default {
  components: {
    'dashboard-layout': Dashboard,
    'auth-layout': Auth
  },
  data () {
    return {

    }
  },
  computed: mapState({
    layout: state => state.layout.layout
  }),
  created () {
    this.$store.dispatch('wilayah/getAllProvinces')
    this.$store.dispatch('branch/getAllBranch')
    this.$store.dispatch('tarif/getAllTarifs')
  },
  name: 'App'
}
</script>
