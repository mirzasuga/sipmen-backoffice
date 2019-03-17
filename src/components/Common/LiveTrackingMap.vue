<template>
<v-container>
<v-card>
  <v-container>
    <h1>Live Tracking Maps</h1>
    <v-layout row wrap>
        <v-flex xs12>

        <GmapMap
          :center="coords"
          :zoom="15"
          map-type-id="roadmap"

          style="height: 300px">
          <GmapMarker
            :position="coords"
            :icon="gbr"
            :clickable="true"
            :draggable="false"
          />
        </GmapMap>

      </v-flex>
    </v-layout>
  </v-container>
</v-card>
</v-container>
</template>

<script>
  import {mapActions, mapState} from 'vuex'
  const placeholder = require('@/assets/012-placeholder.svg')
  export default {
    name: 'LiveTrackingMap',
    data () {
      return {
        // center: {lat: -6.17017, lng: 106.8291959}
        gbr: placeholder
      }
    },
    mounted () {
      this.listenCourierLocation()
    },
    beforeDestroy () {
      this.leaveCourierLocation()
    },

    methods: {
      ...mapActions({
        listenCourierLocation: 'courierlocation/track',
        leaveCourierLocation: 'courierlocation/leave'
      })
    },
    computed: {
      ...mapState({
        coords: state => state.courierlocation.coords
      })
    }

  }
</script>

<style scoped>
</style>
