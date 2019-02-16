<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="opened"
      width="900"
    >
      <v-card v-if="data">
        <ResiCard></ResiCard>
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
  export default {
    name: 'PengirimanDetailDialog',
    components: {
      ResiCard
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
      data: state => state.pengirimandetaildialog.data
    }),
    watch: {
      isOpen (state) {
        console.log({state})
        this.opened = state
      },
      opened (state) {
        this.$store.commit('pengirimandetaildialog/SET_OPENED', state)
      }
    }
  }
</script>

<style scoped>

</style>
