<template>

      <v-data-table :headers="headers" :items="branches" class="elevation-1">
        <template slot="items" slot-scope="props">
          <td>{{ props.item.branch_name }}</td>
          <td>
            {{ props.item.province_name }}
            <br>
            {{ props.item.regency_name }}
            <br>
            {{ props.item.district_name }}
            <br>
            {{ props.item.village_name }}
            <br>
          </td>
        </template>
      </v-data-table>

</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'BranchList',
  data () {
    return {
      headers: [
        {
          text: 'Nama Branch',
          align: 'left',
          sortable: false,
          value: 'branch_name'
        },
        {
          text: 'Alamat',
          align: 'left',
          sortable: false
        }
      ]
    }
  },
  computed: mapState({
    branches: state => state.branch.branches
  }),
  created () {

  }
}
</script>

<style scoped>
</style>
