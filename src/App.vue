<template>
  <v-app>
    <component v-bind:is="layout"></component>
  </v-app>
</template>

<script>
import Dashboard from './layouts/Dashboard.vue'
// import Auth from './layouts/Auth.vue'

export default {
  components: {
    'dashboard-layout': Dashboard
  },
  data () {
    return {
      layout: 'dashboard-layout'
    }
  },
  created () {
    this.$store.dispatch('wilayah/getAllProvinces')
  },
  name: 'App'
}
</script>
