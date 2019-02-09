<template>
<div>
<v-text-field
  v-model="phone"
  :counter="15"
  label="Cari Alamat"
  placeholder="Nomor Handphone"
></v-text-field>
  <span v-if="expandType">
    <AddressBookItemExpand v-for="item in items" :key="item.id" :addressBook=item
    v-on:selected="itemSelected"></AddressBookItemExpand>
  </span>
  <span v-if="items.length < 1">
    <AddressBookDialog></AddressBookDialog>
  </span>
</div>
</template>

<script>
  import _ from 'lodash'
  import { mapState } from 'vuex'
  import AddressBookItemExpand from '@/components/AddressBookItemExpand'
  import AddressBookDialog from '@/components/AddressBookDialog'
  export default {
    name: 'AddressBookAutocomplete',
    components: { AddressBookItemExpand, AddressBookDialog },
    data () {
      return {
        phone: null,
        debounceTime: 700
      }
    },
    props: ['expandType'],
    watch: {
      phone: function (phone) {
        if (phone !== '') { this.delayTypingPhone(phone) }
      }
    },
    created: function () {
      this.delayTypingPhone = _.debounce(this.fetchAddressBook, this.debounceTime)
    },
    methods: {
      itemSelected (e) {
        this.$emit('itemSelected', e)
      },
      fetchAddressBook (phone) {
        this.$store.dispatch('addressbook/getAddressBookByPhone', phone)
      }
    },
    computed: mapState({
      items: state => state.addressbook.addressbooks
    })
  }
</script>

<style scoped>

</style>
