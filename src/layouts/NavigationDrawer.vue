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

        <!-- <v-list-tile value="true" v-for="(item, i) in items" :key="i" @click="goTo(item.target)">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile> -->

        <v-list-group
          v-for="item in items"
          v-model="item.active"
          :key="item.title"
          :prepend-icon="item.icon"
          no-action >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="goTo(subItem.target)">
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-icon v-html="subItem.icon"></v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-tile value="true" @click="logout()">
          <v-list-tile-action>
            <v-icon v-html="'logout'"></v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="'Logout'"></v-list-tile-title>
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
      userScopes: this.$store.getters['auth/scopes']
    };
  },
  computed: mapState({
    drawer: state => (state.navbar.drawer),
    clipped: state => (state.navbar.clipped),
    items: state => state.navbar.items
  }),
  methods: {
    goTo (target) {
      this.$router.replace({ name: target });
    },
    logout () {
      this.$store.dispatch('auth/logout')
    }
  },
  created () {
    console.log(this.userScopes)
  }
}
</script>

<style scoped>
</style>
