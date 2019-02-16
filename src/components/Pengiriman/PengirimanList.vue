<template>
<div>

  <v-container>
    <v-data-table :headers="headers" :items="list" class="elevation-1">
      <template slot="items" slot-scope="props">
        <td>{{ props.item.penerima.name }} ( {{props.item.penerima.phone}} )</td>
        <td>{{ props.item.pengirim.name }} ( {{props.item.pengirim.phone}} )</td>
        <td>{{ props.item.berat_barang }} KG</td>
        <td>Rp, {{ props.item.tarif_kg }}</td>
        <td>Rp, {{ props.item.total_biaya }}</td>
        <td>
          {{ props.item.last_status }}
        </td>
        <td>
          <v-menu offset-y>
            <v-btn fab dark small color="teal"
            slot="activator">
              <v-icon dark>list</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile
                v-for="(item, index) in listActions"
                :key="index"
                @click="listActionHandler({type: item.action, element: props.item})"
              >
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>

        </td>
      </template>
    </v-data-table>
  </v-container>
  <PengirimanDetailDialog></PengirimanDetailDialog>
</div>
</template>

<script>
  import {mapState, mapGetters, mapActions} from 'vuex'
  import PengirimanDetailDialog from '@/components/Pengiriman/PengirimanDetailDialog'

  export default {
    name: 'PengirimanList',
    components: {
      PengirimanDetailDialog
    },
    data () {
      return {
        headers: [
          {
            text: 'Penerima',
            align: 'left',
            sortable: true
          },
          {
            text: 'Pengirim',
            align: 'left',
            sortable: false
          },
          {
            text: 'Berat Barang',
            align: 'left',
            sortable: false
          },
          {
            text: 'Tarif',
            align: 'left',
            sortable: false
          },
          {
            text: 'Total',
            align: 'left',
            sortable: false
          },
          {
            text: 'Status Terakhir',
            align: 'left',
            sortable: false
          },
          {
            text: 'Action',
            align: 'left',
            sortable: false
          }
        ]
      }
    },
    mounted () {
      if (this.list.length < 1) {
        this.$store.dispatch('pengiriman/fetchList')
      }
    },
    computed: {
      ...mapState({
        list: state => state.resi.list,
        listActions: state => state.pengiriman.listActions
      }),
      ...mapGetters({
        list: 'pengiriman/list'
      })
    },
    methods: {
      ...mapActions({
        listActionHandler: 'pengiriman/listActionHandler'
      })
    }
  }
</script>

<style scoped>

</style>
