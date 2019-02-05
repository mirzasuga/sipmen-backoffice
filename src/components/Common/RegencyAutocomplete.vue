<template>
  <v-autocomplete :items="regencies" :label="`Pilih Kota / Kabupaten`"
    item-text="name" item-value="id"
    persistent-hint
    return-object @change="regencyChange"
  >
  </v-autocomplete>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'RegencyAutocomplete',

    data () {
      return {
        data: null
      }
    },
    computed: mapState({
      regencies: state => state.wilayah.regencies,
      regency: state => state.wilayah.regency
    }),

    methods: {
      regencyChange (regency) {
        this.$store.dispatch('wilayah/selectRegency', regency)
      }
    }
  }
</script>

<style scoped>

</style>
