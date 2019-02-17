<template>
  <v-stepper v-model="e6" vertical v-if="statuses.length > 0">
    <div v-for="(status, index) in statuses" :key="index">
      <v-stepper-step :complete="e6 > index + 1" :step="index+1">
        {{status.name}}
        <small>{{status.pivot.created_at}}</small>
      </v-stepper-step>

      <v-stepper-content :step="index+1">
        <h3>{{status.description}} - {{ status.pivot.created_at }}</h3>
        <v-btn color="primary" @click="e6 = (e6 + 1 > statuses.length ) ? 1 : e6 + 1 ">Selanjutnya</v-btn>
      </v-stepper-content>
    </div>


  </v-stepper>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ShippingStatusesStepper',
    data () {
      return {
        e6: 1
      }
    },
    mounted () {
      this.$store.dispatch('shippingstatuses/fetchStatuses', this.resi.id)
    },
    computed: {
      ...mapState({
        statuses: state => state.shippingstatuses.data,
        resi: state => state.pengirimandetaildialog.data
      })
    },
    beforeDestroy () {
      this.$store.dispatch('shippingstatuses/reset')
    }
  }
</script>
