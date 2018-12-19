<template>
  <v-container>
    <v-data-table :headers="headers" :items="tarifs" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.branch_district_name }}</td>
        <td>{{ props.item.branch_village_name }}</td>
        <td>{{ props.item.destination_regency_name }}</td>
        <td>{{ props.item.service_name }}</td>
        <td>{{ props.item.price }}</td>
        <td>{{ props.item.min_kg }} KG</td>
        <td>{{ props.item.estimation_days }}</td>
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
  
  export default {
    name: 'TarifList',
    data () {
      return {
        tarifs: this.$store.getters['tarif/tarifs'],
        headers: [
          {
            text: 'Branch',
            align: 'left',
            sortable: false
          },
          {
            text: 'Asal',
            align: 'left',
            sortable: false
          },
          {
            text: 'Tujuan',
            align: 'left',
            sortable: false
          },
          {
            text: 'Jenis Service',
            align: 'left',
            sortable: false
          },
          {
            text: 'Harga',
            align: 'left',
            sortable: false
          },
          {
            text: 'Berat Minimum',
            align: 'left',
            sortable: false
          },
          {
            text: 'Estimasi Sampai',
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
