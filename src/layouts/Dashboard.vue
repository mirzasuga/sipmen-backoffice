<template>
  <v-app>
    <NavigationDrawer></NavigationDrawer>

    <v-toolbar app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>

    <v-footer :fixed="fixed" app>
      <span>&copy; 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
import NavigationDrawer from './NavigationDrawer.vue'
import { mapState } from 'vuex'

export default {
  name: 'Dashboard',
  components: { NavigationDrawer },
  data () {
    return {
      fixed: false,
      right: true,
      title: 'Vuetify.js'
    }
  },
  methods: {
    toggleDrawer () {
      this.$store.dispatch('navbar/toggle')
    }
  },
  computed: mapState({
    clipped: state => (state.navbar.clipped)
  })
}
</script>

<style scoped>
</style>
