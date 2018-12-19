<template>
  <v-autocomplete
    v-model="model"
    :items="branches"
    :readonly="!isEditing"
    :label="`Pilih Branch`"
    item-text="branch_name"
    item-value="id"
    persistent-hint
    prepend-icon="mdi-city"
    return-object
    @change="branchSelected"
  >
    <v-slide-x-reverse-transition slot="append-outer" mode="out-in">
      <v-icon
        :color="isEditing ? 'success' : 'info'"
        :key="`icon-${isEditing}`"
        @click="isEditing = !isEditing"
        v-text="isEditing ? 'mdi-check-outline' : 'mdi-circle-edit-outline'"
      ></v-icon>
    </v-slide-x-reverse-transition>
  </v-autocomplete>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: 'BranchAutocomplete',
    data () {
      return {
        isEditing: true,
        model: null
      }
    },
    computed: mapState({
      branches: state => state.branch.branches
    }),
    methods: {
      branchSelected (branch) {
        this.$store.commit('branch/selectedBranch', branch)
      }
    }
  }
</script>

<style scoped>

</style>
