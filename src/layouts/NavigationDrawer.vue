<template>
  <v-navigation-drawer
    persistent
    :mini-variant="miniVariant"
    :clipped="clipped"
    v-if="drawer"
    enable-resize-watcher
    fixed
    app
  >
    <v-list>
      <v-list-tile value="true" v-for="(item, i) in items" :key="i">
        <v-list-tile-action>
          <v-icon v-html="item.icon"></v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title v-text="item.title"></v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
/* eslint-disable */
import { mapState } from 'vuex'
export default {
  name: 'NavigationDrawer',
  data() {
    return {
      miniVariant: false,
      items: [
        {
          icon: "bubble_chart",
          title: "Inspire"
        }
      ]
    };
  },
  computed: mapState({
    drawer: state => (state.navbar.drawer),
    clipped: state => (state.navbar.clipped),
  })
}
</script>

<style scoped>
</style>
