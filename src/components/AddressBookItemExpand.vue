<template>
  <v-expansion-panel>
    <v-expansion-panel-content
      :key="addressBook.id"
    >
      <div slot="header">
        <b>{{addressBook.name}}</b> ({{addressBook.phone}})
      </div>
      <v-card>
        <v-card-text>
          {{addressBook.street}}
          <br/>
          <v-btn @click="itemSelected(addressBook)">Pilih</v-btn>
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>
  </v-expansion-panel>
</template>

<script>
  // import { mapActions } from 'vuex'
  export default {
    name: 'AddressBookItem',
    data () {
      return {
        test: null
      }
    },
    props: ['addressBook', 'onSelected'],
    methods: {
      itemSelected: function (element) {
        this.$store.commit('addressbook/selectAddressBook', element)
        this.$emit('selected', element)
      }
    }
  }
</script>

<style scoped>

</style>
