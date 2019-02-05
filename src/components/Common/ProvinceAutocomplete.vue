<template>
  <v-autocomplete :items="provinces" :label="`Pilih Provinsi`"
    item-text="name" item-value="id"
    persistent-hint
    return-object @change="provinceChange"
  >
  </v-autocomplete>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ProvinceAutocomplete',

    data () {
      return {
        data: null
      }
    },
    computed: mapState({
      provinces: state => state.wilayah.provinces,
      province: state => state.wilayah.province
    }),

    methods: {
      provinceChange (province) {
        this.$store.dispatch('wilayah/selectProvince', province)
      }
    }
  }
</script>

<style scoped>

</style>
