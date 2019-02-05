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
    :onSelected="onSelectedItem"></AddressBookItemExpand>
  </span>
</div>
</template>

<script>
  import _ from 'lodash'
  import { mapState } from 'vuex'
  import AddressBookItemExpand from '@/components/AddressBookItemExpand'
  export default {
    name: 'AddressBookAutocomplete',
    components: { AddressBookItemExpand },
    data () {
      return {
        phone: null,
        debounceTime: 700
      }
    },
    props: ['expandType', 'onSelectedItem'],
    watch: {
      phone: function (phone) {
        if (phone !== '') { this.delayTypingPhone(phone) }
      }
    },
    created: function () {
      this.delayTypingPhone = _.debounce(this.fetchAddressBook, this.debounceTime)
    },
    methods: {
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
