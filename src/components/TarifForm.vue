<template>
<v-container>
  <v-card>
    <v-container>
      <form>

        <BranchAutocomplete></BranchAutocomplete>

        <v-autocomplete :items="provinces" :label="`Pilih Provinsi`"
          item-text="name" item-value="id"
          persistent-hint prepend-icon="mdi-city"
          return-object @change="provinceChange"
        >
        </v-autocomplete>

        <v-autocomplete :items="regencies" :label="`Pilih Kota / Kabupaten`"
          item-text="name" item-value="id"
          persistent-hint prepend-icon="mdi-city"
          return-object @change="regencyChange"
        >
        </v-autocomplete>

        <v-autocomplete :items="districts" :label="`Pilih Provinsi`"
          item-text="name" item-value="id"
          persistent-hint prepend-icon="mdi-city"
          return-object @change="districtChange"
        >
        </v-autocomplete>

        <v-autocomplete :items="villages" :label="`Pilih Kecamatan / Desa`"
          item-text="name" item-value="id"
          persistent-hint prepend-icon="mdi-city"
          return-object @change="villageChange"
        >
        </v-autocomplete>
        <v-layout align-center justify-space-around row fill-height>

          <v-flex xs5 offset-2>
            <v-text-field :mask="`#########`" v-model="price" label="Harga"></v-text-field>
          </v-flex>
          <v-flex xs5>
            <v-text-field :mask="`#########`" v-model="min_kg" label="Berat Minimum" suffix="KG"></v-text-field>
          </v-flex>
          
        </v-layout>

        <v-layout align-center justify-space-around row fill-height>
          <v-flex xs5>
            <v-text-field v-model="service_name" label="Jenis Service"></v-text-field>
          </v-flex>
          <v-flex xs5>
            <v-text-field v-model="est_days" label="Estimasi Sampai" suffix="Hari"></v-text-field>
          </v-flex>
        </v-layout>

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>

      </form>
    </v-container>
  </v-card>
</v-container>
</template>

<script>
  import BranchAutocomplete from '@/components/BranchAutocomplete'
  import {mapState} from 'vuex'
  export default {
    name: 'TarifForm',
    components: {BranchAutocomplete},
    data () {
      return {
        vendorDetail: this.$store.getters['auth/vendorDetail'],
        price: null,
        min_kg: null,
        service_name: null,
        est_days: null
      }
    },
    computed: mapState({
      branch: state => state.branch.branch,
      provinces: state => state.wilayah.provinces,
      province: state => state.wilayah.province,
      regencies: state => state.wilayah.regencies,
      regency: state => state.wilayah.regency,
      districts: state => state.wilayah.districts,
      district: state => state.wilayah.district,
      villages: state => state.wilayah.villages,
      village: state => state.wilayah.village
    }),

    methods: {
      provinceChange (province) {
        this.$store.dispatch('wilayah/selectProvince', province)
      },
      regencyChange (regency) {
        this.$store.dispatch('wilayah/selectRegency', regency)
      },
      districtChange (district) {
        this.$store.dispatch('wilayah/selectDistrict', district)
      },
      villageChange (village) {
        this.$store.dispatch('wilayah/selectVillage', village)
      },
      submit () {
        const data = {
          branch_id: this.branch._id,
          vendor_name: this.vendorDetail.vendor_name,
          vendor_detail_id: this.vendorDetail.id,
          branch_name: this.branch.branch_name,
          branch_location: [this.branch.lat, this.branch.lng],
          branch_province_id: this.branch.province_id,
          branch_province_name: this.branch.province_name,
          branch_village_id: this.branch.village_id,
          branch_village_name: this.branch.village_name,
          branch_regency_id: this.branch.regency_id,
          branch_regency_name: this.branch.regency_name,
          branch_district_id: this.branch.district_id,
          branch_district_name: this.branch.district_name,
          destination_province_id: this.province.province_id,
          destination_province_name: this.province.name,
          destination_village_id: this.village.village_id,
          destination_village_name: this.village.name,
          destination_regency_id: this.regency.regency_id,
          destination_regency_name: this.regency.name,
          destination_district_id: this.district.district_id,
          destination_district_name: this.district.name,
          service_name: this.service_name,
          price: this.price,
          min_kg: this.min_kg,
          estimation_days: this.est_days
        }
        this.$store.dispatch('tarif/createTarif', data)
      },
      clear () {

      }
    }
  }
</script>

<style scoped>

</style>
