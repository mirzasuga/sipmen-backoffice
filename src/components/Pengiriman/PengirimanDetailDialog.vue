<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="opened"
      width="900"
    >
      <v-card v-if="data">
        <!-- <ResiCard></ResiCard> -->
        <component v-bind:is="comp" v-if="comp !== null"></component>
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            flat
            @click="close"
          >
            CLOSE
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
  import {mapState, mapActions} from 'vuex'
  import ResiCard from '@/components/Common/ResiCard'
  import ShippingStatusesStepper from '@/components/Common/ShippingStatusesStepper'
  export default {
    name: 'PengirimanDetailDialog',
    components: {
      'ShippingStatusesStepper': ShippingStatusesStepper,
      'ResiCard': ResiCard
    },
    data () {
      return {
        opened: false
      }
    },
    methods: {
      ...mapActions({
        close: 'pengirimandetaildialog/close'
      })
    },
    computed: mapState({
      isOpen: state => state.pengirimandetaildialog.isOpen,
      data: state => state.pengirimandetaildialog.data,
      comp: state => state.pengirimandetaildialog.component
    }),
    watch: {
      isOpen (state) {
        this.opened = state
      },
      opened (state) {
        this.$store.commit('pengirimandetaildialog/SET_OPENED', state)
        if (!state) {
          this.$store.dispatch('pengirimandetaildialog/close')
        }
      }
    }
  }
</script>

<style scoped>

</style>
