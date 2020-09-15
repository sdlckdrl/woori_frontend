<template>
  <base-section
    id="login"
    space="56"
  >
    <v-container
      class="fill-height"
      fluid
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col
          cols="12"
          sm="8"
          md="4"
        >
          <v-card class="elevation-12">
            <v-toolbar
              color="primary"
              dark
              flat
            >
              <v-toolbar-title>Login 관리자</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field
                  label="Login"
                  v-model="user_id"
                  prepend-icon="mdi-account"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  v-model="user_pw"
                  prepend-icon="mdi-lock"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn
              color="primary"
              @click="login({ user_id : user_id, user_pw: user_pw })"
              >
                Login
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </base-section>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  import axios from 'axios'

  export default {
    name: 'SectionLogin',
    data () {
      return {
        user_id: '',
        user_pw: '',
      }
    },
    computed: {
      ...mapActions(['isLogin', 'isLoginError']),
    },
    methods: {
      ...mapActions(['login']),
    },
  }
</script>
