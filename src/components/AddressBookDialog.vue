<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="opened"
      width="900"
    >
    <v-btn
      slot="activator"
      color="red lighten-2"
      dark
    >
      Tambah Alamat
    </v-btn>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title
        >
          Buku Alamat
        </v-card-title>

        <v-card-text>
          <v-text-field
            @input="updateName"
            :counter="255"
            label="Nama"
            required
          ></v-text-field>

          <v-text-field
            @input="updatePhone"
            :counter="15"
            label="No.Handphone"
            required
          ></v-text-field>



          <ProvinceAutocomplete></ProvinceAutocomplete>
          <RegencyAutocomplete></RegencyAutocomplete>
          <DistrictAutocomplete></DistrictAutocomplete>
          <VillageAutocomplete></VillageAutocomplete>

          <v-text-field
            @input="updateStreet"
            :counter="255"
            label="Alamat"
            required
          ></v-text-field>

          <v-text-field
            @input="updatePostalcode"
            :counter="8"
            label="Kode Pos"
            required
          ></v-text-field>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="submit"
          >
            SIMPAN
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ProvinceAutocomplete from '@/components/Common/ProvinceAutocomplete'
  import RegencyAutocomplete from '@/components/Common/RegencyAutocomplete'
  import DistrictAutocomplete from '@/components/Common/DistrictAutocomplete'
  import VillageAutocomplete from '@/components/Common/VillageAutocomplete'
  export default {
    name: 'AddressBookDialog',
    components: {
      ProvinceAutocomplete,
      RegencyAutocomplete,
      DistrictAutocomplete,
      VillageAutocomplete
    },
    data () {
      return {
        opened: false
      }
    },
    mounted () {
      console.log('CREATED')
    },
    computed: mapState({
      wilayahProvince: state => state.wilayah.province,
      wilayahRegency: state => state.wilayah.regency,
      wilayahDistrict: state => state.wilayah.district,
      wilayahVillage: state => state.wilayah.village,
      isOpen: state => state.addressbookdialog.isOpen
    }),
    methods: {
      ...mapActions({
        submit: 'addressbookdialog/submit'
      }),
      updateName (value) {
        this.$store.commit('addressbookdialog/SET_NAME', value)
      },
      updatePhone (value) {
        this.$store.commit('addressbookdialog/SET_PHONE', value)
      },
      updateStreet (value) {
        this.$store.commit('addressbookdialog/SET_STREET', value)
      },
      updatePostalcode (value) {
        this.$store.commit('addressbookdialog/SET_POSTALCODE', value)
      }
    },
    watch: {
      wilayahProvince (newProvince) {
        this.$store.commit('addressbookdialog/SET_PROVINCE', newProvince)
      },
      wilayahRegency (newRegency) {
        this.$store.commit('addressbookdialog/SET_REGENCY', newRegency)
      },
      wilayahDistrict (newDistrict) {
        this.$store.commit('addressbookdialog/SET_DISTRICT', newDistrict)
      },
      wilayahVillage (newVillage) {
        this.$store.commit('addressbookdialog/SET_VILLAGE', newVillage)
      },
      opened (val) {
        this.$store.commit('addressbookdialog/RESET')
        this.$store.commit('wilayah/RESET')
        this.$store.commit('addressbookdialog/TOGGLE', val)
      },
      isOpen (val) {
        this.opened = val
      }
    }
  }
</script>

<style scoped>

</style>
