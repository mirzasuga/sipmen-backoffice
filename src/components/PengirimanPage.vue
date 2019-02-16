<template>
<div>
  <PengirimanForm v-if="!showResi && actionType !== 'list'"></PengirimanForm>
  <PengirimanList v-if="actionType === 'list'"></PengirimanList>
  <ResiCard></ResiCard>
</div>
</template>

<script>
  import PengirimanForm from '@/components/Pengiriman/PengirimanForm'
  import ResiCard from '@/components/Common/ResiCard'
  import PengirimanList from '@/components/Pengiriman/PengirimanList'
  import {mapState} from 'vuex'

  export default {
    name: 'PengirimanPage',
    components: { PengirimanForm, ResiCard, PengirimanList },
    data () {
      return {
        actionType: this.$route.params.actionType
      }
    },
    methods: {

    },
    computed: mapState({
      showResi: state => state.resi.show
    }),
    watch: {}

  }
</script>

<style scoped>

</style>
