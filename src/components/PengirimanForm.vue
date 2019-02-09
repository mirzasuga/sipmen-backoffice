<template>
<v-container>
<v-card>
  <v-container>
    <h1>Pengiriman Form</h1>
    <AddressBookAutocomplete
    :expandType="true"
    v-on:itemSelected="setPengirim"
    v-if="!pengirim.name">
    </AddressBookAutocomplete>

    <AddressBookCard :title="'Pengirim'" :data="pengirim" v-if="pengirim.name"></AddressBookCard>

    <AddressBookAutocomplete
    :expandType="true"
    v-on:itemSelected="setPenerima"
    v-if="!penerima.name && pengirim.name">
    </AddressBookAutocomplete>

    <AddressBookCard :title="'Penerima'" :data="penerima" v-if="penerima.name"></AddressBookCard>

    <v-layout align-center justify-space-around row fill-height>
      <v-flex xs5>
        <v-text-field @input="setTarif" :value="tarif" label="Tarif"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field @input="setBerat" :value="berat" label="Berat Barang" suffix="KG"></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field :value="total" label="Total"></v-text-field>
      </v-flex>
    </v-layout>
    <v-btn
      color="primary"
      flat
      @click="submit"
    >
      SIMPAN
    </v-btn>
  </v-container>
</v-card>
</v-container>
</template>

<script>
  import {mapState, mapActions, mapMutations} from 'vuex'
  import AddressBookAutocomplete from '@/components/AddressBookAutocomplete'
  import AddressBookCard from '@/components/Common/AddressBookCard'
  export default {
    name: 'PengirimanForm',
    components: { AddressBookAutocomplete, AddressBookCard },
    data () {
      return {

      }
    },
    methods: {
      ...mapActions({
        submit: 'pengiriman/SUBMIT'
      }),
      ...mapMutations({
        setPengirim: 'pengiriman/SET_PENGIRIM',
        setPenerima: 'pengiriman/SET_PENERIMA',
        setTarif: 'pengiriman/SET_TARIF',
        setBerat: 'pengiriman/SET_BERAT'
      })
    },
    computed: mapState({
      penerima: state => state.pengiriman.penerima,
      pengirim: state => state.pengiriman.pengirim,
      tarif: state => state.pengiriman.tarif,
      berat: state => state.pengiriman.berat,
      total: state => state.pengiriman.total
    }),
    watch: {
      tarif (val) { this.$store.dispatch('pengiriman/calcTotal') },
      berat (val) { this.$store.dispatch('pengiriman/calcTotal') }
    }

  }
</script>

<style scoped>

</style>
