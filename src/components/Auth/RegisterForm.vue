<template>

    <v-layout row class="text-xs-center">
      <v-card>
      <v-container>
      <v-form
        ref="registerForm"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="name"
          label="Nama"
          :rules="nameRules"
          :error-count="errors.name.length"
          :error="errors.name.length > 0"
          :error-messages="errors.name[0]"
          @input="errors.name = []"
          required
        ></v-text-field>

        <v-text-field
          v-model="username"
          :rules="usernameRules"
          :error-count="errors.username.length"
          :error="errors.username.length > 0"
          :error-messages="errors.username[0]"
          @input="errors.username = []"
          label="Username"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          :error-count="errors.email.length"
          :error="errors.email.length > 0"
          :error-messages="errors.email[0]"
          @input="errors.email = []"
          label="E-mail"
          required
        ></v-text-field>

        <v-text-field
          v-model="mobile_phone"
          :rules="mobilePhoneRules"
          :error-count="errors.mobile_phone.length"
          :error="errors.mobile_phone.length > 0"
          :error-messages="errors.mobile_phone[0]"
          @input="errors.mobile_phone = []"
          label="No.HP"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :type="'password'"
          label="Password"
          :rules="passwordRules"
          :error-count="errors.password.length"
          :error="errors.password.length > 0"
          :error-messages="errors.password[0]"
          @input="errors.password = []"
          hint="minimal 8 karakter"
          counter
          required
        ></v-text-field>

        <v-btn
          :disabled="loading"
          color="success"
          @click.prevent="submit"
        >
          Submit
        </v-btn>

        <v-btn
          color="error"
          @click="reset"
        >
          Batal
        </v-btn>

      </v-form>
      </v-container>
      </v-card>
    </v-layout>
</template>

<script>
import {mapState, mapActions} from 'vuex'
export default {
  name: 'RegisterForm',
  created () {

  },
  mounted () {
    this.setRefs()
  },
  data () {
    return {
    }
  },
  methods: {

    ...mapActions({
      reset () { this.$store.dispatch('registerform/reset', {vm: this}) },
      submit: 'registerform/submit',
      setRefs () { this.$store.commit('registerform/setRefs', this.$refs.registerForm) },
      removeErrors (name) {
        this.$store.dispatch('registerform/reset', name)
      }
    })

  },
  computed: {

    valid: {
      get () { return this.$store.state.registerform.valid },
      set (val) { this.$store.commit('registerform/setValid', val) }
    },
    name: {
      get () { return this.$store.state.registerform.name },
      set (val) { this.$store.commit('registerform/setName', val) }
    },
    username: {
      get () { return this.$store.state.registerform.username },
      set (val) { this.$store.commit('registerform/setUsername', val) }
    },
    email: {
      get () { return this.$store.state.registerform.email },
      set (val) { this.$store.commit('registerform/setEmail', val) }
    },
    password: {
      get () { return this.$store.state.registerform.password },
      set (val) { this.$store.commit('registerform/setPassword', val) }
    },
    mobile_phone: {
      get () { return this.$store.state.registerform.mobile_phone },
      set (val) { this.$store.commit('registerform/setMobilePhone', val) }
    },
    ...mapState({
      mobilePhoneRules: state => state.registerform.mobilePhoneRules,
      usernameRules: state => state.registerform.usernameRules,
      emailRules: state => state.registerform.emailRules,
      passwordRules: state => state.registerform.passwordRules,
      nameRules: state => state.registerform.nameRules,

      errors: state => state.registerform.errors,
      loading: state => state.registerform.loading
    })
  }
}
</script>

<style>
</style>

