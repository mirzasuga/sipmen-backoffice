<template>
<v-container>
<v-card>
  <v-container>
    <h1>{{title}}</h1>
    <hr>
    <p>
      Nama: <b>{{data.name}}</b> <br>
      No.HandPhone: <b>{{data.phone}}</b> <br>
      Alamat: <b>{{data.street}}</b> <br>
    </p>
  </v-container>
</v-card>
</v-container>
</template>

<script>
  export default {
    name: 'AddressBookCard',
    props: [
      'title',
      'data'
    ],
    data () {
      return {

      }
    }

  }
</script>

<style scoped>
</style>
