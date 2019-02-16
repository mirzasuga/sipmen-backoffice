<template>
<v-autocomplete
    v-model="model"
    :items="roles"
    :readonly="!isEditing"
    :label="`Pilih Role`"
    item-text="display"
    item-value="id"
    persistent-hint
    prepend-icon="mdi-city"
    return-object
    @change="roleSelected"
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
    name: 'RoleAutocomplete',
    data () {
      return {
        isEditing: true,
        model: null
      }
    },
    computed: mapState({
      roles: state => state.role.roles
    }),
    methods: {
      roleSelected (role) {
        this.$store.commit('role/selectRole', role)
      }
    }
  }
</script>

<style scoped>

</style>
