<template>
  <v-container>
    <v-card>
      <v-container>
        <h1>Tambah Armada</h1>
        <form>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs5>
                    <v-text-field v-model="no_polisi" label="Nomor Polisi"></v-text-field>
                </v-flex>

                <v-flex xs5>
                    <v-text-field v-model="merk" label="Merk"></v-text-field>
                </v-flex>
            </v-layout>
            <v-layout align-center justify-space-around row fill-height>
                <v-flex xs5>
                    <v-text-field v-model="type" label="Tipe"></v-text-field>
                </v-flex>

                <v-flex xs5>
                    <v-text-field v-model="tahun_pembuatan" label="Tahun Kendaraan"></v-text-field>
                </v-flex>
            </v-layout>
            <v-btn @click="submit">Simpan</v-btn>
            <v-btn @click="clear">Batal</v-btn>
        </form>
      </v-container>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: 'VehicleForm',
  data () {
    return {
      no_polisi: null,
      merk: null,
      type: null,
      tahun_pembuatan: null
    }
  },
  methods: {
    submit () {
      const data = {
        no_polisi: this.no_polisi,
        merk: this.merk,
        type: this.type,
        tahun_pembuatan: this.tahun_pembuatan
      }
      this.$store.dispatch('vehicle/createVehicle', data)
    },
    clear () {}
  }
}
</script>

<style scoped>
</style>