<template>
  <v-container>
    <v-card>
      <v-container>
        <h1>Tambah Staff</h1>
        <form>
          <v-layout align-center justify-space-around row fill-height>
            <v-flex xs6>
              <RoleAutocomplete></RoleAutocomplete>
            </v-flex>
            <v-flex xs6>
              <v-text-field v-model="email" label="Email"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout align-center justify-space-around row fill-height>
            <v-flex xs5>
              <v-text-field v-model="name" label="Nama Staff"></v-text-field>
            </v-flex>

            <v-flex xs5>
              <v-text-field v-model="username" label="Username"></v-text-field>
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
/* eslint-disable */
import RoleAutocomplete from "@/components/RoleAutocomplete";
export default {
  name: "StaffForm",
  components: { RoleAutocomplete },
  data() {
    return {
      name: null,
      username: null,
      email: null
    };
  },
  methods: {
    submit() {
      const data = {
        name: this.name,
        username: this.username,
        email: this.email,
        role_vendor_id: this.$store.getters['role/selectedRole'].id
      };
      this.$store.dispatch('staff/createStaff', data)
    },
    clear() {}
  }
};
</script>

<style scoped>
</style>