<template>
<div>
  <PengirimanForm v-if="!showResi"></PengirimanForm>
  <ResiCard></ResiCard>
</div>
</template>

<script>
  import PengirimanForm from '@/components/PengirimanForm'
  import ResiCard from '@/components/Common/ResiCard'
  import {mapState} from 'vuex'

  export default {
    name: 'PengirimanPage',
    components: { PengirimanForm, ResiCard },
    data () {
      return {}
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
