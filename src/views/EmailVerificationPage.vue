<template>

</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'EmailVerificationPage',
    methods: {
      ...mapActions({
        validate () {
          const token = this.$route.params.token
          const vendorId = this.$route.params.vendorId
          this.$store.dispatch('emailverification/validate', {
            token: token, vendorId: vendorId
          })
        }
      })
    },
    mounted () {
      this.validate()
    },
    data () {
      return {

      }
    }
  }
</script>

<style scoped>

</style>
