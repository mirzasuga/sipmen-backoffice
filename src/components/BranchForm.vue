<template>
<v-container>
<v-card>
  <v-container>
    <form>
      <v-text-field
        v-model="branchName"
        :counter="255"
        label="Nama Branch"
        required
      ></v-text-field>

      <v-select
        :items="provinces"
        label="Provinsi"
        single-line
        item-text="name"
        :value="province"
        return-object
        @change="changeProvince"
      ></v-select>

      <v-select
        :items="regencies"
        label="Kab / Kota"
        single-line
        item-text="name"
        :value="regency"
        return-object
        @change="changeRegency"
      ></v-select>

      <v-select
        :items="districts"
        label="Kelurahan"
        single-line
        item-text="name"
        :value="district"
        return-object
        @change="changeDistrict"
      ></v-select>

      <v-select
        :items="villages"
        label="Kecamatan / Desa"
        single-line
        item-text="name"
        :value="village"
        return-object
        @change="changeVillage"
      ></v-select>
      <v-layout row wrap>
        <v-flex xs12>

          <GmapMap
            :center="center"
            :zoom="15"
            map-type-id="roadmap"

            style="height: 300px">
            <GmapMarker


              :position="center"
              :clickable="true"
              :draggable="true"
              @drag="updateLocation"
            />
          </GmapMap>

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
  import {mapState} from 'vuex'
  export default {
    name: 'BranchForm',
    data () {
      return {
        branchName: null,
        center: {lat: -6.17017, lng: 106.8291959},
        branch_lat: -0,
        branch_lng: 0
      }
    },
    computed: mapState({
      provinces: state => state.wilayah.provinces,
      regencies: state => state.wilayah.regencies,
      districts: state => state.wilayah.districts,
      villages: state => state.wilayah.villages,
      province: state => state.wilayah.province,
      regency: state => state.wilayah.regency,
      district: state => state.wilayah.district,
      village: state => state.wilayah.village
    }),
    methods: {
      changeProvince (province) {
        this.$store.dispatch('wilayah/selectProvince', province)
        this.centeringMaps(province.name)
      },
      changeRegency (regency) {
        this.$store.dispatch('wilayah/selectRegency', regency)
        this.centeringMaps(regency.name)
      },
      changeDistrict (District) {
        this.$store.dispatch('wilayah/selectDistrict', District)
        this.centeringMaps(District.name)
      },
      changeVillage (Village) {
        this.$store.dispatch('wilayah/selectVillage', Village)
        this.centeringMaps(Village.name)
      },
      centeringMaps (address) {
        const url = `${process.env.API_ENDPOINT}/api/maps?address=${address}`
        window.$http.get(url).then(({data}) => {
          console.log(data)
          const results = data.results
          if (results.length > 0) {
            const position = results[0].geometry.location
            console.log(position.lat)
            this.center = { lat: position.lat, lng: position.lng }
            this.branch_lat = position.lat
            this.branch_lng = position.lng
          }
        })
        .catch(function (err) {
          console.log(err)
        })
      },
      updateLocation (location) {
        this.branch_lat = location.latLng.lat()
        this.branch_lng = location.latLng.lng()
      },
      clear () {
        this.branchName = null
        this.$store.dispatch('wilayah/clearSelected')
      },
      submit () {
        const user = this.$store.getters['auth/user']
        const data = {
          branch_name: this.branchName,
          province_id: this.province.province_id,
          province_name: this.province.name,
          regency_id: this.regency.regency_id,
          regency_name: this.regency.name,
          district_id: this.district.district_id,
          district_name: this.district.name,
          village_id: this.village.village_id,
          village_name: this.village.name,
          lat: this.branch_lat,
          lng: this.branch_lng,
          vendor_detail_id: user.vendor_detail_id
        }
        this.$store.dispatch('branch/createBranch', data)
        this.branchName = null
      }

    }
  }
</script>

<style scoped>

</style>
