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
    var echo = window.Echo
    console.log({echo})
    echo.private(`my-channel`)
        .listen('my-event', (data) => alert(JSON.stringify(data)))
    // var channel = pusher.subscribe('my-channel')
    // channel.bind('my-event', function (data) {
    //   alert(JSON.stringify(data))
    // })
    if (this.layout === 'dashboard-layout') {
      this.$store.dispatch('wilayah/getAllProvinces')
      this.$store.dispatch('branch/getAllBranch')
      this.$store.dispatch('tarif/getAllTarifs')
      this.$store.dispatch('vehicle/getAllVehicle')
      this.$store.dispatch('role/getAllRole')
    }
  },
  name: 'App'
}
</script>
