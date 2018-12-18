<template>
  <v-container>
    <h1>Branch Management</h1>
    <BranchList></BranchList>
  </v-container>
</template>

<script>
  import BranchList from '@/components/BranchList'
  export default {
    name: 'BranchManagement',
    components: {BranchList},
    data () {
      return { }
    }
  }
</script>

<style scoped>

</style>
