<template>
  <v-container>
    <v-data-table :headers="headers" :items="vehicles" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.no_polisi }}</td>
        <td>{{ props.item.merk }}</td>
        <td>{{ props.item.type }}</td>
        <td>{{ props.item.tahun_pembuatan }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  
  export default {
    name: 'VehicleList',
    data () {
      return {
        vehicles: this.$store.getters['vehicle/vehicles'],
        headers: [
          {
            text: 'No Polisi',
            align: 'left',
            sortable: false
          },
          {
            text: 'Merk',
            align: 'left',
            sortable: false
          },
          {
            text: 'Type',
            align: 'left',
            sortable: false
          },
          {
            text: 'Tahun Kendaraan',
            align: 'left',
            sortable: false
          }
        ]
      }
    }
  }
</script>

<style scoped>

</style>
