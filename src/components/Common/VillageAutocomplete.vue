<template>
  <v-autocomplete :items="villages" :label="`Pilih Kecamatan / Desa`"
    item-text="name" item-value="id"
    persistent-hint
    return-object @change="villageChange"
  >
  </v-autocomplete>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'VillageAutocomplete',

    data () {
      return {
        data: null
      }
    },
    computed: mapState({
      villages: state => state.wilayah.villages,
      village: state => state.wilayah.village
    }),

    methods: {
      villageChange (village) {
        this.$store.dispatch('wilayah/selectVillage', village)
      }
    }
  }
</script>

<style scoped>

</style>
