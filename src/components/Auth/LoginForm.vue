<template>
  <v-container>
    <v-layout row class="text-xs-center">
      <v-flex xs3>
        <v-card height="500px" class="bg-img"></v-card>
      </v-flex>
      <v-flex xs4 class="grey lighten-4">
        <v-container style="position: relative;top: 13%;" class="text-xs-center">
          <v-card flat>
            <v-card-title primary-title>
              <h4>Login</h4>
            </v-card-title>
            <v-form>
              <v-text-field
                prepend-icon="person"
                name="E-mail"
                label="E-mail"
                @input="resetAlert"
                v-model="username"
              ></v-text-field>
              <v-text-field
                prepend-icon="lock"
                name="Password"
                label="Password"
                type="password"
                @input="resetAlert"
                v-model="password"
              ></v-text-field>
              <SipmenAlert></SipmenAlert>
              <v-card-actions>
                <v-btn primary large block @click="handleLogin">Login</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SipmenAlert from '../Common/SipmenAlert'
import {mapState, mapActions} from 'vuex'
export default {
  components: { SipmenAlert },
  name: 'LoginForm',
  created () {

  },
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleLogin () {
      this.$store.dispatch('auth/attemptLogin', {
        username: this.username,
        password: this.password
      })
    },
    ...mapActions({
      resetAlert: 'notif/reset'
    })
  },
  computed: {
    ...mapState({
    })
  }
}
</script>

<style>
.bg-img {
  background-image: url('https://coolbackgrounds.io/images/unsplash/ashim-d-silva-medium-ed909940.jpg') !important
}
</style>

