<template>
<v-container>
  <v-alert
    :value="show"
    :type="type"
    transition="scale-transition"
  >
    {{msg}}
  </v-alert>
</v-container>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'SipmenAlert',
    data () {
      return {}
    },
    computed: {
      ...mapState({
        show: state => state.notif.show,
        type: state => state.notif.type,
        msg: state => state.notif.msg
      })
    }

  }
</script>

<style scoped>
</style>
