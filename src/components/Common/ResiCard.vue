<template>
<v-container grid-list-md v-if="showResi">
  <v-card>
    <v-layout row wrap>
      <v-flex xs12>
        <div style="background-color:red;">
          <p style="color:white; padding:10px">Powered By: SIPMEN.COM</p>
        </div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs4>

        <table style="padding:30px">
          <tr>
            <td valign="top"><b>Kepada </b></td>
            <td >:
               {{ data.penerima.name }},<br/>
              &nbsp;&nbsp; {{ data.penerima.province_name }},<br/>
              &nbsp;&nbsp; {{ data.penerima.regency_name }},<br/>
              &nbsp;&nbsp; {{ data.penerima.district_name }},<br/>
              &nbsp;&nbsp; {{ data.penerima.village_name }}<br/>
            </td>
          </tr>
          <tr>
            <td><b>Telp</b></td>
            <td>:  {{ data.penerima.phone }}</td>
          </tr>

        </table>
      </v-flex>
      <v-flex xs4>

        <table style="padding:30px">
          <tr>
            <td valign="top"><b>Dari </b></td>
            <td >:
               {{ data.pengirim.name }},<br/>
              &nbsp;&nbsp; {{ data.pengirim.province_name }},<br/>
              &nbsp;&nbsp; {{ data.pengirim.regency_name }},<br/>
              &nbsp;&nbsp; {{ data.pengirim.district_name }},<br/>
              &nbsp;&nbsp; {{ data.pengirim.village_name }}<br/>
            </td>
          </tr>
          <tr>
            <td><b>Telp</b></td>
            <td>:  {{ data.pengirim.phone }}</td>
          </tr>
        </table>

      </v-flex>
      <v-flex xs4>

        <table style="padding:30px">
          <tr>
            <td><b>Pembayaran</b></td>
            <td>: TUNAI</td>
          </tr>
          <tr>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td><b>Asuransi</b></td>
            <td>: Ya / Tidak</td>
          </tr>
          <tr>
            <td><b>Pecah Belah</b></td>
            <td>: Ya / Tidak</td>
          </tr>
          <tr>
            <td><b>Berat</b></td>
            <td>: {{ data.berat_barang }} KG</td>
          </tr>
          <tr>
            <td><b>Tarif</b></td>
            <td>: Rp, {{ data.tarif_kg }} / KG</td>
          </tr>
          <tr>
            <td><b>Biaya Admin</b></td>
            <td>: Rp, 4.500</td>
          </tr>
          <tr><td colspan="2"><hr></td></tr>
          <tr>
            <td><b>Total Biaya</b></td>
            <td>: Rp, {{ data.total_biaya }}</td>
          </tr>
        </table>

      </v-flex>

    </v-layout>
    <v-layout row wrap text-md-center>
      <v-flex xs3 style="padding:30px">
        <img :src="`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+data.id+`&chld=H|0`" alt="RESI123">
        <br/>
        <b>{{data.id}}</b>
      </v-flex>

      <v-flex xs3 style="padding:30px">
        <b>TTD Pengirim</b><br>
        <pre>(         )</pre>
      </v-flex>
      <v-flex xs3 style="padding:30px">
        <b>Staff</b><br>
        <pre>(         )</pre>
      </v-flex>

    </v-layout>

  </v-card>
</v-container>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ResiCard',
    data () {
      return { }
    },
    computed: {
      ...mapState({
        data: state => state.resi.data,
        showResi: state => state.resi.show
      })
    },
    beforeDestroy () {
      this.$store.dispatch('resi/reset')
    }

  }
</script>

<style scoped>
</style>
