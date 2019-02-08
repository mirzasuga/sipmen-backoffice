<template>
  <v-autocomplete :items="districts" :label="`Pilih Kelurahan`"
    item-text="name" item-value="id"
    persistent-hint
    return-object @change="districtChange"
  >
  </v-autocomplete>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'DistrictAutocomplete',

    data () {
      return {}
    },
    computed: mapState({
      districts: state => state.wilayah.districts,
      district: state => state.wilayah.district
    }),

    methods: {
      districtChange (district) {
        this.$store.dispatch('wilayah/selectDistrict', district)
      }
    }
  }
</script>

<style scoped>

</style>
