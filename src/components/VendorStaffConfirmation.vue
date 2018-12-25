<template>
  <v-container>
    <h1>Konfirmasi Pendaftaran</h1>
    <v-card>
    <v-container>
      <form>
        <v-layout row fill-height>
          <v-flex xs5>
            <v-text-field v-model="password" label="Set Password Baru anda"></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout align-center row fill-height>
          <v-btn @click="submit">Simpan</v-btn>
          <v-btn @click="clear">Batal</v-btn>
        </v-layout>
      </form>
    </v-container>
    </v-card>
  </v-container>
</template>

<script>
/* eslint-disable */
export default {
  name: "VendorStaffConfirmation",
  created() {
    console.log(this.$route.params);
  },
  data() {
    return {
      vendor_id: this.$route.params.vendorId,
      token: this.$route.params.token,
      password: null
    };
  },
  methods: {
    submit () {
      const data = {
        password: this.password,
        vendorId: this.vendor_id,
        token: this.token
      }
      
      this.$store.dispatch('staff/setPassword', data)
    },
    clear () {

    }
  }
};
</script>

<style scoped>
</style>