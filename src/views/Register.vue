<template>
  <v-container>
    <RegisterForm></RegisterForm>
  </v-container>
</template>

<script>
  import RegisterForm from '@/components/Auth/RegisterForm'
  export default {
    name: 'Register',
    components: { RegisterForm },
    data () {
      return { }
    }
  }
</script>

<style scoped>
</style>
